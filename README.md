import { useState, useEffect, useRef } from "react";

const FONT = "@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Exo+2:wght@300;400;500;600;700&display=swap');";

const css = `
${FONT}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #050510; }
.cs-root {
  font-family: 'Exo 2', sans-serif;
  background: #050510;
  min-height: 100vh;
  color: #e0e8ff;
  position: relative;
  overflow: hidden;
}
.cyber-grid {
  position: fixed; inset: 0; z-index: 0;
  background-image:
    linear-gradient(rgba(0,200,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,200,255,0.04) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: gridPulse 8s ease-in-out infinite;
}
@keyframes gridPulse { 0%,100%{opacity:0.5} 50%{opacity:1} }
.particles { position: fixed; inset:0; z-index:0; pointer-events:none; }
.particle {
  position: absolute; border-radius: 50%;
  animation: float linear infinite;
}
@keyframes float {
  0%{transform:translateY(100vh) translateX(0); opacity:0}
  10%{opacity:1} 90%{opacity:1}
  100%{transform:translateY(-20px) translateX(var(--dx)); opacity:0}
}
.content { position: relative; z-index: 1; }
.glass {
  background: rgba(10,15,40,0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0,200,255,0.2);
  border-radius: 16px;
}
.glass-bright {
  background: rgba(15,20,60,0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0,200,255,0.4);
  border-radius: 16px;
  box-shadow: 0 0 30px rgba(0,200,255,0.1), inset 0 1px 0 rgba(255,255,255,0.05);
}
.glow-blue { box-shadow: 0 0 20px rgba(0,200,255,0.3), 0 0 40px rgba(0,200,255,0.1); }
.glow-purple { box-shadow: 0 0 20px rgba(150,50,255,0.3), 0 0 40px rgba(150,50,255,0.1); }
.glow-red { box-shadow: 0 0 20px rgba(255,50,50,0.4), 0 0 60px rgba(255,50,50,0.2); }
.text-cyan { color: #00c8ff; }
.text-purple { color: #9632ff; }
.text-neon { color: #00ffcc; }
.text-muted { color: rgba(200,210,255,0.5); }

/* INTRO */
.intro-screen {
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  min-height:100vh; padding:2rem; text-align:center;
}
.logo-container { margin-bottom:2rem; position:relative; }
.logo-ring {
  width:120px; height:120px; border-radius:50%;
  border: 2px solid rgba(0,200,255,0.5);
  display:flex; align-items:center; justify-content:center;
  margin:0 auto 1rem;
  animation: ringPulse 2s ease-in-out infinite;
  box-shadow: 0 0 30px rgba(0,200,255,0.3), inset 0 0 30px rgba(0,200,255,0.1);
}
@keyframes ringPulse { 0%,100%{box-shadow:0 0 30px rgba(0,200,255,0.3)} 50%{box-shadow:0 0 60px rgba(0,200,255,0.6), 0 0 100px rgba(0,200,255,0.2)} }
.logo-shield { font-size:3rem; filter: drop-shadow(0 0 10px #00c8ff); }
.game-title {
  font-family:'Rajdhani',sans-serif; font-size:3.5rem; font-weight:700;
  background: linear-gradient(135deg, #00c8ff 0%, #9632ff 50%, #00ffcc 100%);
  -webkit-background-clip:text; -webkit-text-fill-color:transparent;
  letter-spacing:4px; line-height:1;
  filter: drop-shadow(0 0 20px rgba(0,200,255,0.5));
}
.game-slogan { color:rgba(200,210,255,0.7); font-size:0.95rem; letter-spacing:3px; text-transform:uppercase; margin-top:0.5rem; }
.start-btn {
  margin-top:2.5rem; padding:1rem 3rem;
  background: linear-gradient(135deg, rgba(0,200,255,0.2), rgba(150,50,255,0.2));
  border: 1px solid rgba(0,200,255,0.5);
  border-radius:50px; color:#00c8ff;
  font-family:'Exo 2',sans-serif; font-size:1.1rem; font-weight:600;
  cursor:pointer; letter-spacing:2px; text-transform:uppercase;
  transition:all 0.3s; position:relative; overflow:hidden;
}
.start-btn:hover {
  background: linear-gradient(135deg, rgba(0,200,255,0.4), rgba(150,50,255,0.3));
  box-shadow: 0 0 30px rgba(0,200,255,0.4);
  transform: translateY(-2px);
}

/* MAIN MENU */
.main-menu { padding:1.5rem; max-width:700px; margin:0 auto; }
.menu-header { text-align:center; padding:1.5rem 0 1rem; }
.menu-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:1rem; margin-top:1rem; }
.menu-card {
  padding:1.25rem; cursor:pointer; transition:all 0.3s; text-align:left;
  position:relative; overflow:hidden;
}
.menu-card:hover { transform:translateY(-3px); border-color:rgba(0,200,255,0.6); }
.menu-card:hover .menu-icon { filter:drop-shadow(0 0 8px currentColor); }
.menu-icon { font-size:1.8rem; margin-bottom:0.5rem; display:block; }
.menu-label { font-family:'Rajdhani',sans-serif; font-size:1.1rem; font-weight:600; color:#e0e8ff; }
.menu-desc { font-size:0.78rem; color:rgba(200,210,255,0.5); margin-top:0.2rem; }
.xp-bar-wrap { margin-top:1rem; }
.xp-bar { height:6px; background:rgba(255,255,255,0.1); border-radius:3px; overflow:hidden; }
.xp-fill { height:100%; background:linear-gradient(90deg,#00c8ff,#9632ff); border-radius:3px; transition:width 1s; }
.rank-badge {
  display:inline-flex; align-items:center; gap:0.4rem;
  padding:0.3rem 0.8rem; border-radius:20px;
  background:rgba(0,200,255,0.15); border:1px solid rgba(0,200,255,0.3);
  font-size:0.8rem; color:#00c8ff; font-weight:600;
}

/* STORY MODE */
.story-screen { padding:1rem; max-width:700px; margin:0 auto; }
.platform-header {
  padding:0.75rem 1rem; border-radius:12px 12px 0 0;
  display:flex; align-items:center; gap:0.75rem;
}
.platform-discord { background:linear-gradient(135deg,rgba(88,101,242,0.3),rgba(88,101,242,0.1)); border-bottom:1px solid rgba(88,101,242,0.3); }
.platform-whatsapp { background:linear-gradient(135deg,rgba(37,211,102,0.3),rgba(37,211,102,0.1)); border-bottom:1px solid rgba(37,211,102,0.3); }
.platform-instagram { background:linear-gradient(135deg,rgba(225,48,108,0.3),rgba(193,53,132,0.1)); border-bottom:1px solid rgba(225,48,108,0.3); }
.platform-tiktok { background:linear-gradient(135deg,rgba(0,0,0,0.5),rgba(254,44,85,0.1)); border-bottom:1px solid rgba(254,44,85,0.3); }
.chat-area {
  min-height:280px; max-height:340px; overflow-y:auto; padding:1rem;
  background:rgba(5,8,25,0.8); scroll-behavior:smooth;
}
.chat-area::-webkit-scrollbar { width:4px; }
.chat-area::-webkit-scrollbar-thumb { background:rgba(0,200,255,0.3); border-radius:2px; }
.chat-bubble {
  max-width:75%; margin-bottom:0.75rem; animation:bubbleIn 0.4s ease;
  position:relative;
}
@keyframes bubbleIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
.bubble-incoming { margin-right:auto; }
.bubble-outgoing { margin-left:auto; }
.bubble-header { display:flex; align-items:center; gap:0.4rem; margin-bottom:0.25rem; font-size:0.75rem; }
.avatar-circle {
  width:28px; height:28px; border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  font-size:0.7rem; font-weight:700; flex-shrink:0;
}
.bubble-text {
  padding:0.6rem 0.9rem; border-radius:12px; font-size:0.9rem; line-height:1.4;
  word-break:break-word;
}
.bubble-toxic .bubble-text {
  background:rgba(255,50,50,0.15); border:1px solid rgba(255,50,50,0.3);
  color:#ffb3b3;
}
.bubble-normal .bubble-text {
  background:rgba(10,20,60,0.9); border:1px solid rgba(0,200,255,0.15);
}
.bubble-support .bubble-text {
  background:rgba(0,200,100,0.15); border:1px solid rgba(0,200,100,0.3);
  color:#b3ffcc;
}
.bubble-time { font-size:0.65rem; color:rgba(200,210,255,0.3); margin-top:0.2rem; text-align:right; }
.typing-indicator { display:flex; gap:4px; padding:0.5rem 0.9rem; border-radius:12px; background:rgba(10,20,60,0.9); border:1px solid rgba(0,200,255,0.15); width:fit-content; }
.typing-dot { width:6px; height:6px; border-radius:50%; background:#00c8ff; animation:typing 1.2s ease-in-out infinite; }
.typing-dot:nth-child(2) { animation-delay:0.2s; }
.typing-dot:nth-child(3) { animation-delay:0.4s; }
@keyframes typing { 0%,100%{opacity:0.3;transform:scale(0.8)} 50%{opacity:1;transform:scale(1.1)} }

/* CHOICES */
.choices-area { padding:0.75rem; border-top:1px solid rgba(0,200,255,0.1); }
.choice-btn {
  width:100%; padding:0.7rem 1rem; margin-bottom:0.5rem; text-align:left;
  background:rgba(10,20,60,0.7); border:1px solid rgba(0,200,255,0.2);
  border-radius:10px; color:#e0e8ff; font-size:0.85rem; cursor:pointer;
  transition:all 0.3s; font-family:'Exo 2',sans-serif;
}
.choice-btn:hover { background:rgba(0,200,255,0.1); border-color:rgba(0,200,255,0.5); transform:translateX(4px); }
.choice-btn.selected-good { background:rgba(0,200,100,0.2); border-color:rgba(0,200,100,0.5); color:#b3ffcc; }
.choice-btn.selected-bad { background:rgba(255,50,50,0.2); border-color:rgba(255,50,50,0.5); color:#ffb3b3; }

/* AEGIS FEEDBACK */
.aegis-panel {
  margin-top:1rem; padding:1rem 1.25rem;
  background:rgba(5,10,35,0.9);
  border:1px solid rgba(150,50,255,0.4);
  border-radius:14px;
  box-shadow:0 0 30px rgba(150,50,255,0.15);
  animation:hologramIn 0.5s ease;
}
@keyframes hologramIn {
  from{opacity:0;transform:scale(0.95);filter:blur(4px)}
  to{opacity:1;transform:none;filter:none}
}
.aegis-header { display:flex; align-items:center; gap:0.75rem; margin-bottom:0.75rem; }
.aegis-avatar {
  width:40px; height:40px; border-radius:50%;
  background:linear-gradient(135deg,#9632ff,#00c8ff);
  display:flex; align-items:center; justify-content:center;
  font-size:1.1rem;
  box-shadow:0 0 15px rgba(150,50,255,0.5);
  animation:aegisPulse 2s ease infinite;
}
@keyframes aegisPulse { 0%,100%{box-shadow:0 0 15px rgba(150,50,255,0.5)} 50%{box-shadow:0 0 25px rgba(150,50,255,0.8),0 0 40px rgba(0,200,255,0.3)} }
.aegis-name { font-family:'Rajdhani',sans-serif; font-size:0.9rem; color:#9632ff; font-weight:600; letter-spacing:1px; }
.aegis-text { font-size:0.88rem; line-height:1.6; color:rgba(200,210,255,0.85); }
.response-label {
  display:inline-flex; align-items:center; gap:0.3rem;
  padding:0.2rem 0.6rem; border-radius:20px; font-size:0.7rem; font-weight:600; margin-bottom:0.5rem;
}
.label-supportive { background:rgba(0,200,100,0.2); color:#00e878; border:1px solid rgba(0,200,100,0.3); }
.label-toxic { background:rgba(255,50,50,0.2); color:#ff6060; border:1px solid rgba(255,50,50,0.3); }
.label-neutral { background:rgba(200,200,200,0.1); color:#aab; border:1px solid rgba(200,200,200,0.2); }
.label-assertive { background:rgba(0,150,255,0.2); color:#60b4ff; border:1px solid rgba(0,150,255,0.3); }
.label-escalating { background:rgba(255,150,0,0.2); color:#ffaa30; border:1px solid rgba(255,150,0,0.3); }

/* SCREEN SHAKE */
@keyframes shake {
  0%,100%{transform:none}
  20%{transform:translate(-3px,1px)}
  40%{transform:translate(3px,-1px)}
  60%{transform:translate(-2px,2px)}
  80%{transform:translate(2px,-2px)}
}
.shake { animation:shake 0.4s ease; }

/* XP POPUP */
.xp-popup {
  position:fixed; top:80px; right:20px; z-index:100;
  padding:0.5rem 1rem; border-radius:20px;
  background:rgba(0,200,100,0.2); border:1px solid rgba(0,200,100,0.4);
  color:#00e878; font-weight:700; font-size:0.9rem;
  animation:popIn 0.3s ease, fadeOut 0.5s ease 1.5s forwards;
}
@keyframes popIn { from{opacity:0;transform:scale(0.8) translateY(-10px)} to{opacity:1;transform:none} }
@keyframes fadeOut { to{opacity:0;transform:translateY(-20px)} }

/* QUICK MODE */
.quick-screen { padding:1rem; max-width:700px; margin:0 auto; }
.timer-ring-wrap { position:relative; width:90px; height:90px; margin:0 auto 1rem; }
.timer-svg { transform:rotate(-90deg); }
.timer-text { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font-family:'Rajdhani',sans-serif; font-size:1.4rem; font-weight:700; }
.combo-badge {
  display:inline-flex; align-items:center; gap:0.3rem;
  padding:0.3rem 0.8rem; border-radius:20px;
  background:rgba(255,200,0,0.15); border:1px solid rgba(255,200,0,0.4);
  color:#ffd700; font-weight:700; font-size:0.85rem;
}

/* PROGRESS */
.progress-screen { padding:1rem; max-width:700px; margin:0 auto; }
.badge-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:0.75rem; margin-top:1rem; }
.badge-card {
  padding:1rem; text-align:center; border-radius:14px;
  background:rgba(10,15,40,0.7); border:1px solid rgba(0,200,255,0.15);
  transition:all 0.3s;
}
.badge-card.earned { border-color:rgba(0,200,255,0.4); box-shadow:0 0 15px rgba(0,200,255,0.1); }
.badge-card.locked { opacity:0.4; filter:grayscale(1); }
.badge-emoji { font-size:2rem; margin-bottom:0.4rem; display:block; }
.badge-name { font-size:0.75rem; font-weight:600; color:#e0e8ff; }
.badge-desc { font-size:0.65rem; color:rgba(200,210,255,0.5); margin-top:0.2rem; }

/* SCREENSHOT ANALYZER */
.analyzer-screen { padding:1rem; max-width:700px; margin:0 auto; }
.upload-zone {
  border:2px dashed rgba(0,200,255,0.3); border-radius:16px; padding:2rem;
  text-align:center; cursor:pointer; transition:all 0.3s;
  background:rgba(0,200,255,0.03);
}
.upload-zone:hover { border-color:rgba(0,200,255,0.6); background:rgba(0,200,255,0.07); }
.scan-animation {
  height:4px; background:linear-gradient(90deg,transparent,#00c8ff,transparent);
  border-radius:2px; margin-top:1rem;
  animation:scanLine 1.5s ease-in-out infinite;
}
@keyframes scanLine { 0%,100%{width:0;margin-left:0} 50%{width:100%;margin-left:0} }
.danger-meter { height:8px; border-radius:4px; overflow:hidden; background:rgba(255,255,255,0.1); margin:0.5rem 0; }
.danger-fill { height:100%; border-radius:4px; transition:width 1s; }
.danger-low { background:linear-gradient(90deg,#00e878,#00c8ff); }
.danger-med { background:linear-gradient(90deg,#ffd700,#ff9900); }
.danger-high { background:linear-gradient(90deg,#ff6060,#ff0000); }

/* SETTINGS */
.settings-screen { padding:1rem; max-width:700px; margin:0 auto; }
.settings-row {
  display:flex; align-items:center; justify-content:space-between;
  padding:0.9rem 1rem; border-bottom:1px solid rgba(0,200,255,0.08);
}
.toggle-wrap {
  width:44px; height:24px; border-radius:12px; cursor:pointer; position:relative;
  background:rgba(0,200,255,0.15); border:1px solid rgba(0,200,255,0.3);
  transition:all 0.3s;
}
.toggle-wrap.on { background:rgba(0,200,255,0.3); border-color:rgba(0,200,255,0.6); }
.toggle-knob {
  position:absolute; top:3px; left:3px;
  width:16px; height:16px; border-radius:50%; background:#00c8ff;
  transition:transform 0.3s;
}
.toggle-wrap.on .toggle-knob { transform:translateX(20px); }
.volume-slider { width:120px; accent-color:#00c8ff; }

/* NAV BAR */
.nav-bar {
  position:fixed; bottom:0; left:0; right:0; z-index:50;
  padding:0.6rem 1rem;
  background:rgba(5,8,25,0.95); backdrop-filter:blur(20px);
  border-top:1px solid rgba(0,200,255,0.15);
  display:flex; justify-content:space-around;
}
.nav-btn {
  display:flex; flex-direction:column; align-items:center; gap:0.2rem;
  background:none; border:none; cursor:pointer; padding:0.3rem 0.5rem;
  border-radius:8px; transition:all 0.2s; color:rgba(200,210,255,0.4);
  font-family:'Exo 2',sans-serif;
}
.nav-btn.active { color:#00c8ff; }
.nav-btn:hover { color:#e0e8ff; }
.nav-icon { font-size:1.2rem; }
.nav-label { font-size:0.6rem; letter-spacing:0.5px; text-transform:uppercase; }

/* BACK BTN */
.back-btn {
  display:inline-flex; align-items:center; gap:0.4rem;
  padding:0.4rem 0.8rem; background:rgba(0,200,255,0.1);
  border:1px solid rgba(0,200,255,0.2); border-radius:8px;
  color:#00c8ff; cursor:pointer; font-size:0.8rem;
  font-family:'Exo 2',sans-serif; margin-bottom:0.75rem;
  transition:all 0.2s;
}
.back-btn:hover { background:rgba(0,200,255,0.2); }

/* COMMUNITY METER */
.community-meter { padding:0.75rem; border-radius:12px; margin-top:1rem; background:rgba(0,200,100,0.07); border:1px solid rgba(0,200,100,0.2); }
.meter-bar { height:10px; border-radius:5px; background:rgba(255,255,255,0.1); overflow:hidden; margin-top:0.4rem; }
.meter-fill { height:100%; border-radius:5px; transition:width 1.5s; background:linear-gradient(90deg,#9632ff,#00c8ff,#00ffcc); }

/* MOTIVATIONAL QUOTE */
.quote-card { padding:1.25rem; border-radius:14px; margin:1rem 0; text-align:center; background:rgba(150,50,255,0.07); border:1px solid rgba(150,50,255,0.2); }
.quote-text { font-size:0.9rem; font-style:italic; color:rgba(200,210,255,0.8); line-height:1.6; }
.quote-author { font-size:0.75rem; color:#9632ff; margin-top:0.5rem; font-weight:600; }

/* ENDING SCREEN */
.ending-screen { padding:1.5rem; max-width:700px; margin:0 auto; text-align:center; }
.ending-trophy { font-size:4rem; margin-bottom:1rem; filter:drop-shadow(0 0 20px gold); animation:float2 3s ease-in-out infinite; }
@keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
.stat-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:0.75rem; margin:1.25rem 0; }
.stat-card { padding:1rem; border-radius:12px; background:rgba(10,20,60,0.6); border:1px solid rgba(0,200,255,0.15); }
.stat-val { font-family:'Rajdhani',sans-serif; font-size:1.8rem; font-weight:700; color:#00c8ff; }
.stat-label { font-size:0.7rem; color:rgba(200,210,255,0.5); margin-top:0.2rem; }
`;

// === DATA ===
const STORY_SCENARIOS = [
  {
    id: "s1",
    platform: "discord",
    platformIcon: "🎮",
    platformName: "Discord — #gaming-general",
    title: "Sesi Gaming Online",
    characters: { Andi: { color: "#5865f2", avatar: "🧑‍💻" }, Rina: { color: "#e74c3c", avatar: "👩‍🎮" }, You: { color: "#00c8ff", avatar: "🛡️" } },
    messages: [
      { from: "Andi", text: "GG semua! Match tadi seru banget 🎮", type: "normal", delay: 500 },
      { from: "Rina", text: "Haha lu yang rusak team kemarin. Noob abis! Mending uninstall aja deh 🤮", type: "toxic", delay: 1500 },
      { from: "Andi", text: "...", type: "normal", delay: 2500 },
      { from: "Rina", text: "Semua juga tau lu paling gak berguna. Mending keluar dari server ini.", type: "toxic", delay: 3200 },
    ],
    situation: "Andi baru bergabung team baru dan membuat beberapa kesalahan dalam game. Rina mulai melontarkan komentar kejam di depan semua orang.",
    choices: [
      { text: "\"Rina, komentar seperti itu nggak perlu. Semua orang masih belajar dan Andi butuh semangat, bukan cacian.\"", type: "good", label: "assertive", xp: 30 },
      { text: "\"Haha bener juga sih, Andi emang noob 😂\"", type: "bad", label: "escalating", xp: 0 },
      { text: "Diam saja dan tidak ikut-ikutan.", type: "neutral", label: "neutral", xp: 10 },
      { text: "\"@Rina, tolong jaga cara bicaramu. Ini ruang publik dan semua orang berhak bermain tanpa dihina.\"", type: "good", label: "supportive", xp: 35 },
    ],
    aegisFeedback: {
      good: "Luar biasa! Kamu menggunakan kekuatan sosialmu untuk melindungi Andi. Dalam situasi cyberbullying, bystander yang berani speak up adalah kunci memutus siklus toxic. Resonansimu di komunitas ini meningkat! 💙",
      bad: "Dengan ikut menertawakan, kamu telah memperkuat perilaku toxic Rina dan melukai Andi lebih dalam. Korban bullying yang dibully ramai-ramai berisiko mengalami trauma sosial jangka panjang.",
      neutral: "Diam lebih aman dari ikut membully, tapi Andi masih sendirian. Bystander pasif secara tidak langsung menormalisasi perilaku toxic.",
    },
  },
  {
    id: "s2",
    platform: "whatsapp",
    platformIcon: "💬",
    platformName: "WhatsApp — Group Kelas XII",
    title: "Gosip di Grup Kelas",
    characters: { Mira: { color: "#25d366", avatar: "👩‍🏫" }, Fitri: { color: "#e74c3c", avatar: "😤" }, Bayu: { color: "#f39c12", avatar: "🧑" }, You: { color: "#00c8ff", avatar: "🛡️" } },
    messages: [
      { from: "Fitri", text: "Guys tau gak? Kemarin Mira nangis di kantin karena diputusin. LOL 😂", type: "toxic", delay: 500 },
      { from: "Bayu", text: "Haha seriusan? Kasian amat 💀", type: "toxic", delay: 1200 },
      { from: "Fitri", text: "Makanya jangan pacaran sama anak yang lebih populer kalo ujungnya gini wkwk", type: "toxic", delay: 2000 },
      { from: "Mira", text: "...", type: "normal", delay: 3000 },
    ],
    situation: "Fitri menyebarkan gosip pribadi tentang Mira di grup kelas yang berisi 30 orang. Mira terlihat online tapi tidak merespon.",
    choices: [
      { text: "\"Stop. Ini urusan pribadi Mira dan bukan bahan lelucon. Gimana kalau kalian yang ada di posisi Mira?\"", type: "good", label: "assertive", xp: 35 },
      { text: "Ikut like pesan Fitri.", type: "bad", label: "escalating", xp: 0 },
      { text: "Chat Mira secara private: \"Mira, aku lihat postingan di grup. Kamu baik-baik aja?\"", type: "good", label: "supportive", xp: 40 },
      { text: "Mute notif dan tidak peduli.", type: "neutral", label: "neutral", xp: 5 },
    ],
    aegisFeedback: {
      good: "Tindakanmu menunjukkan empati dan keberanian yang luar biasa! Menghubungi korban secara private adalah langkah terbaik — korban bullying sering merasa malu dan tidak berani bicara di publik. Kamu membuka pintu keamanan untuknya. 🤝",
      bad: "Sebuah 'like' kecil terlihat tidak signifikan, tapi bagi korban itu adalah konfirmasi bahwa lebih banyak orang menertawakannya. Setiap interaksi negatif menambah beban emosional korban.",
      neutral: "Mute grup menyelamatkanmu dari drama, tapi Mira masih sendirian menghadapi puluhan orang. Ada kalanya diam sama buruknya dengan berpartisipasi.",
    },
  },
  {
    id: "s3",
    platform: "instagram",
    platformIcon: "📸",
    platformName: "Instagram — Kolom Komentar",
    title: "Serangan di Kolom Komentar",
    characters: { Dina: { color: "#c13584", avatar: "🌸" }, Hacker123: { color: "#e74c3c", avatar: "👤" }, LikeBot: { color: "#888", avatar: "🤖" }, You: { color: "#00c8ff", avatar: "🛡️" } },
    messages: [
      { from: "Dina", text: "Post foto baru nih! 🌸 Semoga kalian suka 💕", type: "normal", delay: 500 },
      { from: "Hacker123", text: "Jelek banget, foto aja gak bisa. Hapus akun lu ❌", type: "toxic", delay: 1200 },
      { from: "LikeBot", text: "SETUJU BANGET!! Lu gak layak difollow 🗑️", type: "toxic", delay: 1800 },
      { from: "Hacker123", text: "Tag temen-temen biar tau betapa absurdnya lu 😂😂😂", type: "toxic", delay: 2500 },
    ],
    situation: "Dina memposting foto di Instagram dan langsung mendapat serangan komentar negatif yang terkoordinasi dari beberapa akun.",
    choices: [
      { text: "Komen: \"Dina, foto ini bagus! Abaikan komentar negatif, mereka cuma cari perhatian 🌟\"", type: "good", label: "supportive", xp: 30 },
      { text: "Laporkan komentar toxic dan akun tersebut ke Instagram.", type: "good", label: "assertive", xp: 40 },
      { text: "Ikut comment yang mengejek supaya nggak dikira aneh.", type: "bad", label: "toxic", xp: 0 },
      { text: "Screenshot dan tunjukkan ke guru BK.", type: "good", label: "supportive", xp: 25 },
    ],
    aegisFeedback: {
      good: "Melaporkan konten berbahaya adalah salah satu tindakan paling powerful yang bisa kamu lakukan! Platform sosial media bergantung pada laporan pengguna untuk menghapus konten toxic. Kamu membantu membuat internet lebih aman untuk semua orang.",
      bad: "Dalam lingkungan sosial, tekanan untuk conformity sangat kuat. Tapi berpartisipasi dalam bullying kolektif memiliki dampak psikologis serius pada korban — dan pada dirimu sendiri.",
      neutral: "Mengambil bukti screenshot adalah langkah tepat! Ini penting jika kasus perlu dilaporkan ke orang dewasa atau pihak berwenang.",
    },
  },
];

const QUICK_QUESTIONS = [
  { q: "Temanmu mendapat komentar 'gendut banget ih' di foto Instagram. Yang harus kamu lakukan?", choices: ["Report komentarnya + support teman", "Ikut like komentar itu", "Bilang ke temanmu untuk hapus foto", "Diam saja"], correct: 0, xp: 20 },
  { q: "Seseorang menyebarkan rumor palsu tentang kamu di grup WhatsApp. Langkah pertama?", choices: ["Screenshot sebagai bukti", "Marah dan balas dengan kasar", "Hapus akun WhatsApp", "Minta maaf walau tidak salah"], correct: 0, xp: 20 },
  { q: "Kamu melihat teman di-bully di game online. Respons paling efektif?", choices: ["Pindah server lain", "Defend temanmu dan laporkan pemain toxic", "Ikut mentertawakan", "Log out dari game"], correct: 1, xp: 25 },
  { q: "Apa yang TIDAK boleh kamu bagikan di media sosial?", choices: ["Foto pemandangan", "Data pribadi orang lain tanpa izin", "Opinipendapatmu sendiri", "Meme lucu"], correct: 1, xp: 15 },
  { q: "Tanda bahwa seseorang mengalami cyberbullying adalah...", choices: ["Lebih aktif di sosmed", "Tiba-tiba menjauhi gadget dan terlihat tertekan", "Banyak teman online baru", "Nilai sekolah meningkat"], correct: 1, xp: 20 },
];

const BADGES = [
  { id: "empathy", emoji: "💙", name: "Empathy Hero", desc: "Tunjukkan empati 3x", threshold: 3 },
  { id: "guardian", emoji: "🛡️", name: "Digital Guardian", desc: "Selesaikan Story Mode", threshold: 3 },
  { id: "peace", emoji: "🤝", name: "Peace Maker", desc: "Pilih de-escalation 5x", threshold: 5 },
  { id: "antitoxic", emoji: "🚫", name: "Anti Toxic Master", desc: "0 pilihan toxic dalam 1 sesi", threshold: 0 },
  { id: "angel", emoji: "👼", name: "Cyber Angel", desc: "Capai 500 XP", threshold: 500 },
  { id: "truth", emoji: "⚖️", name: "Truth Defender", desc: "Selesaikan semua mode", threshold: 1 },
];

const QUOTES = [
  { text: "Kata-kata adalah senjata — gunakan untuk membangun, bukan menghancurkan.", author: "Aegis AI" },
  { text: "Setiap kali kamu memilih empati, kamu mengubah dunia digital menjadi lebih baik.", author: "CyberShield" },
  { text: "Menjadi bystander berani lebih sulit dari berdiam diri, tapi dampaknya jauh lebih besar.", author: "Digital Ethics Lab" },
  { text: "Korban cyberbullying bukan yang lemah — yang lemah adalah pelakunya.", author: "Aegis AI" },
];

const RANKS = ["Rookie Defender", "Cyber Guardian", "Peace Keeper", "Digital Hero", "Elite Shield", "Legend Protector"];

function getRank(xp) {
  if (xp < 100) return RANKS[0];
  if (xp < 250) return RANKS[1];
  if (xp < 450) return RANKS[2];
  if (xp < 700) return RANKS[3];
  if (xp < 1000) return RANKS[4];
  return RANKS[5];
}

function getRankProgress(xp) {
  const thresholds = [0, 100, 250, 450, 700, 1000];
  let i = 0;
  while (i < thresholds.length - 1 && xp >= thresholds[i + 1]) i++;
  const start = thresholds[i], end = thresholds[Math.min(i + 1, thresholds.length - 1)];
  if (start === end) return 100;
  return Math.round(((xp - start) / (end - start)) * 100);
}

// === PARTICLES ===
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * -15,
    dx: `${(Math.random() - 0.5) * 100}px`,
    color: Math.random() > 0.5 ? "rgba(0,200,255,0.6)" : "rgba(150,50,255,0.6)",
  }));
  return (
    <div className="particles">
      {particles.map(p => (
        <div key={p.id} className="particle" style={{
          left: p.left, bottom: 0,
          width: p.size, height: p.size,
          background: p.color,
          animationDuration: `${p.duration}s`,
          animationDelay: `${p.delay}s`,
          "--dx": p.dx,
        }} />
      ))}
    </div>
  );
}

// === MAIN APP ===
export default function CyberShield() {
  const [screen, setScreen] = useState("intro");
  const [xp, setXp] = useState(0);
  const [toxicChoices, setToxicChoices] = useState(0);
  const [goodChoices, setGoodChoices] = useState(0);
  const [earnedBadges, setEarnedBadges] = useState(["empathy"]);
  const [completedScenarios, setCompletedScenarios] = useState([]);
  const [xpPopup, setXpPopup] = useState(null);
  const [shake, setShake] = useState(false);
  const [communityHealth, setCommunityHealth] = useState(60);
  const [settings, setSettings] = useState({ music: true, sfx: true, animations: true });
  const [dailyStreak, setDailyStreak] = useState(3);

  function gainXP(amount) {
    if (amount <= 0) return;
    setXp(prev => prev + amount);
    setXpPopup(`+${amount} XP`);
    setTimeout(() => setXpPopup(null), 2000);
  }

  function triggerShake() {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  }

  const rank = getRank(xp);
  const rankPct = getRankProgress(xp);

  return (
    <>
      <style>{css}</style>
      <div className={`cs-root${shake ? " shake" : ""}`}>
        <div className="cyber-grid" />
        <Particles />
        {xpPopup && <div className="xp-popup">{xpPopup}</div>}
        <div className="content">
          {screen === "intro" && <IntroScreen onStart={() => setScreen("menu")} />}
          {screen === "menu" && (
            <MainMenu
              xp={xp} rank={rank} rankPct={rankPct} dailyStreak={dailyStreak}
              onNav={setScreen}
            />
          )}
          {screen === "story" && (
            <StoryMode
              scenarios={STORY_SCENARIOS}
              completed={completedScenarios}
              onComplete={(id, isGood, isToxic) => {
                setCompletedScenarios(prev => [...new Set([...prev, id])]);
                gainXP(isGood ? 35 : 5);
                if (isGood) { setGoodChoices(g => g + 1); setCommunityHealth(h => Math.min(100, h + 8)); }
                else { setToxicChoices(t => t + 1); triggerShake(); setCommunityHealth(h => Math.max(0, h - 12)); }
              }}
              onBack={() => setScreen("menu")}
              onShake={triggerShake}
            />
          )}
          {screen === "quick" && (
            <QuickMode
              questions={QUICK_QUESTIONS}
              onScore={(pts) => { gainXP(pts); setCommunityHealth(h => Math.min(100, h + 5)); }}
              onBack={() => setScreen("menu")}
            />
          )}
          {screen === "analyzer" && <ScreenshotAnalyzer onBack={() => setScreen("menu")} onXP={gainXP} />}
          {screen === "progress" && (
            <ProgressScreen
              xp={xp} rank={rank} rankPct={rankPct}
              badges={BADGES} earned={earnedBadges}
              goodChoices={goodChoices} toxicChoices={toxicChoices}
              communityHealth={communityHealth}
              onBack={() => setScreen("menu")}
              onEnd={() => setScreen("ending")}
            />
          )}
          {screen === "settings" && (
            <SettingsScreen
              settings={settings} onToggle={(k) => setSettings(s => ({ ...s, [k]: !s[k] }))}
              onBack={() => setScreen("menu")}
            />
          )}
          {screen === "ending" && (
            <EndingScreen
              xp={xp} rank={rank} goodChoices={goodChoices}
              toxicChoices={toxicChoices} communityHealth={communityHealth}
              completed={completedScenarios.length}
              onRestart={() => { setScreen("menu"); setXp(0); setGoodChoices(0); setToxicChoices(0); setCompletedScenarios([]); }}
            />
          )}
        </div>
        {screen !== "intro" && screen !== "ending" && (
          <NavBar current={screen} onNav={setScreen} />
        )}
      </div>
    </>
  );
}

// === INTRO SCREEN ===
function IntroScreen({ onStart }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 300); }, []);
  return (
    <div className="intro-screen">
      <div className="logo-container" style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s" }}>
        <div className="logo-ring">
          <span className="logo-shield">🛡️</span>
        </div>
        <div className="game-title">CYBERSHIELD</div>
        <div className="game-slogan">Protect Minds. Stop Cyberbullying.</div>
      </div>
      <div className="glass" style={{ padding: "1.25rem 1.5rem", maxWidth: 380, opacity: loaded ? 1 : 0, transition: "opacity 1.2s 0.3s" }}>
        <p style={{ fontSize: "0.85rem", color: "rgba(200,210,255,0.7)", lineHeight: 1.7, textAlign: "center" }}>
          Masuki dunia simulasi sosial media masa depan. Hadapi cyberbullying nyata, buat keputusan bijak, dan jadilah pelindung digital.
        </p>
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginTop: "1rem", flexWrap: "wrap" }}>
          {["Visual Novel", "AI Coaching", "Cyberpunk Edu"].map(t => (
            <span key={t} style={{ padding: "0.2rem 0.6rem", borderRadius: 20, background: "rgba(0,200,255,0.1)", border: "1px solid rgba(0,200,255,0.2)", fontSize: "0.7rem", color: "#00c8ff" }}>{t}</span>
          ))}
        </div>
      </div>
      <button className="start-btn" onClick={onStart} style={{ opacity: loaded ? 1 : 0, transition: "opacity 1.5s 0.6s" }}>
        MULAI MISI
      </button>
      <div style={{ marginTop: "1rem", fontSize: "0.7rem", color: "rgba(200,210,255,0.3)", letterSpacing: "1px" }}>
        POWERED BY AEGIS AI · v2.0
      </div>
    </div>
  );
}

// === MAIN MENU ===
function MainMenu({ xp, rank, rankPct, dailyStreak, onNav }) {
  const menuItems = [
    { id: "story", icon: "📖", label: "Story Mode", desc: "Cerita interaktif saling terhubung" },
    { id: "quick", icon: "⚡", label: "Quick Response", desc: "Timer menegangkan, combo streak!" },
    { id: "analyzer", icon: "📸", label: "Screenshot Analyzer", desc: "Scan & analisis cyberbullying" },
    { id: "progress", icon: "🏆", label: "Progress & Badges", desc: "XP, Rank, Achievement" },
    { id: "settings", icon: "⚙️", label: "Settings", desc: "Kustomisasi pengalaman game" },
  ];

  const quote = QUOTES[Math.floor(Date.now() / 86400000) % QUOTES.length];

  return (
    <div className="main-menu" style={{ paddingBottom: 80 }}>
      <div className="menu-header">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
          <div>
            <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "1.6rem", fontWeight: 700, color: "#00c8ff", letterSpacing: 2 }}>🛡️ CYBERSHIELD</div>
            <div style={{ fontSize: "0.7rem", color: "rgba(200,210,255,0.4)", letterSpacing: "2px" }}>PROTECT MINDS · STOP CYBERBULLYING</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.7rem", color: "rgba(200,210,255,0.5)" }}>Streak</div>
            <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffd700" }}>🔥 {dailyStreak} hari</div>
          </div>
        </div>
        <div className="glass" style={{ padding: "0.75rem 1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
            <span className="rank-badge">⭐ {rank}</span>
            <span style={{ fontSize: "0.8rem", color: "#00c8ff", fontWeight: 600 }}>{xp} XP</span>
          </div>
          <div className="xp-bar-wrap">
            <div className="xp-bar"><div className="xp-fill" style={{ width: `${rankPct}%` }} /></div>
          </div>
        </div>
      </div>

      <div className="quote-card">
        <div className="quote-text">"{quote.text}"</div>
        <div className="quote-author">— {quote.author}</div>
      </div>

      <div className="menu-grid">
        {menuItems.map(item => (
          <div key={item.id} className="glass-bright menu-card" onClick={() => onNav(item.id)}>
            <span className="menu-icon">{item.icon}</span>
            <div className="menu-label">{item.label}</div>
            <div className="menu-desc">{item.desc}</div>
          </div>
        ))}
        <div className="glass menu-card" style={{ background: "rgba(255,200,0,0.07)", borderColor: "rgba(255,200,0,0.2)" }}>
          <span className="menu-icon">🎯</span>
          <div className="menu-label" style={{ color: "#ffd700" }}>Daily Mission</div>
          <div className="menu-desc">Selesaikan 2 skenario hari ini</div>
          <div style={{ marginTop: "0.5rem", height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 2 }}>
            <div style={{ height: "100%", width: "40%", background: "linear-gradient(90deg,#ffd700,#ff9900)", borderRadius: 2 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// === STORY MODE ===
function StoryMode({ scenarios, completed, onComplete, onBack, onShake }) {
  const [activeScenario, setActiveScenario] = useState(null);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [showChoices, setShowChoices] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showAegis, setShowAegis] = useState(false);
  const [aegisText, setAegisText] = useState("");
  const [shakeRed, setShakeRed] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const chatRef = useRef();

  function startScenario(s) {
    setActiveScenario(s);
    setVisibleMessages([]);
    setShowChoices(false);
    setSelectedChoice(null);
    setShowAegis(false);
    playMessages(s.messages);
  }

  function playMessages(msgs) {
    msgs.forEach((msg, i) => {
      setTimeout(() => {
        if (msg.type === "toxic") {
          setShakeRed(true);
          setTimeout(() => setShakeRed(false), 800);
          onShake();
        }
        setShowTyping(true);
        setTimeout(() => {
          setShowTyping(false);
          setVisibleMessages(prev => [...prev, msg]);
          if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }, 600);
      }, msg.delay);
    });
    const last = msgs[msgs.length - 1];
    setTimeout(() => { setShowChoices(true); }, last.delay + 1000);
  }

  function handleChoice(choice, scenario) {
    setSelectedChoice(choice);
    const isGood = choice.type === "good";
    const isToxic = choice.type === "bad";
    const feedback = isGood ? scenario.aegisFeedback.good : isToxic ? scenario.aegisFeedback.bad : scenario.aegisFeedback.neutral;
    setAegisText(feedback);
    setShowAegis(true);
    onComplete(scenario.id, isGood, isToxic);
  }

  function getLabelClass(label) {
    const m = { supportive: "label-supportive", toxic: "label-toxic", neutral: "label-neutral", assertive: "label-assertive", escalating: "label-escalating" };
    return m[label] || "label-neutral";
  }

  if (!activeScenario) {
    return (
      <div className="story-screen" style={{ paddingBottom: 80 }}>
        <button className="back-btn" onClick={onBack}>← Kembali</button>
        <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#00c8ff", marginBottom: "0.5rem" }}>📖 Story Mode</div>
        <p style={{ fontSize: "0.8rem", color: "rgba(200,210,255,0.5)", marginBottom: "1rem" }}>Pilih skenario cyberbullying untuk dihadapi</p>
        {scenarios.map((s, i) => (
          <div key={s.id} className="glass-bright" style={{ padding: "1rem", marginBottom: "0.75rem", cursor: "pointer" }} onClick={() => startScenario(s)}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                  <span>{s.platformIcon}</span>
                  <span style={{ fontSize: "0.7rem", color: "rgba(200,210,255,0.4)" }}>{s.platformName}</span>
                </div>
                <div style={{ fontWeight: 600, color: "#e0e8ff" }}>{s.title}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(200,210,255,0.5)", marginTop: "0.25rem" }}>{s.situation.slice(0, 80)}...</div>
              </div>
              <div style={{ fontSize: "1.5rem", opacity: completed.includes(s.id) ? 1 : 0.3 }}>
                {completed.includes(s.id) ? "✅" : "🔒"}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const s = activeScenario;
  const platformClass = { discord: "platform-discord", whatsapp: "platform-whatsapp", instagram: "platform-instagram", tiktok: "platform-tiktok" }[s.platform];

  return (
    <div className="story-screen" style={{ paddingBottom: 80 }}>
      <button className="back-btn" onClick={() => setActiveScenario(null)}>← Skenario</button>
      <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid rgba(0,200,255,0.2)", position: "relative" }}>
        {shakeRed && <div style={{ position: "absolute", inset: 0, background: "rgba(255,0,0,0.05)", zIndex: 10, pointerEvents: "none", transition: "opacity 0.8s" }} />}
        <div className={`platform-header ${platformClass}`}>
          <span style={{ fontSize: "1.1rem" }}>{s.platformIcon}</span>
          <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>{s.platformName}</span>
          <span style={{ marginLeft: "auto", fontSize: "0.7rem", color: "rgba(200,210,255,0.4)" }}>
            🟢 {Object.keys(s.characters).length} online
          </span>
        </div>
        <div className="chat-area" ref={chatRef}>
          {visibleMessages.map((msg, i) => {
            const char = s.characters[msg.from] || { color: "#888", avatar: "👤" };
            const isMe = msg.from === "You";
            return (
              <div key={i} className={`chat-bubble bubble-${isMe ? "outgoing" : "incoming"}`}>
                {!isMe && (
                  <div className="bubble-header">
                    <div className="avatar-circle" style={{ background: char.color + "33", color: char.color }}>
                      {char.avatar}
                    </div>
                    <span style={{ color: char.color, fontWeight: 600 }}>{msg.from}</span>
                    <span className="text-muted">{new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}</span>
                  </div>
                )}
                <div className={`bubble-${msg.type}`}>
                  <div className="bubble-text">{msg.text}</div>
                </div>
              </div>
            );
          })}
          {showTyping && (
            <div className="chat-bubble bubble-incoming">
              <div className="typing-indicator">
                <div className="typing-dot" /><div className="typing-dot" /><div className="typing-dot" />
              </div>
            </div>
          )}
        </div>
        {showChoices && !selectedChoice && (
          <div className="choices-area">
            <p style={{ fontSize: "0.75rem", color: "rgba(200,210,255,0.5)", marginBottom: "0.5rem" }}>💬 Bagaimana responsmu?</p>
            {s.choices.map((c, i) => (
              <button key={i} className="choice-btn" onClick={() => handleChoice(c, s)}>
                {c.text}
              </button>
            ))}
          </div>
        )}
        {selectedChoice && (
          <div className="choices-area">
            <div style={{ padding: "0.6rem 0.9rem", borderRadius: 10, background: selectedChoice.type === "good" ? "rgba(0,200,100,0.15)" : selectedChoice.type === "bad" ? "rgba(255,50,50,0.15)" : "rgba(100,100,200,0.15)", border: `1px solid ${selectedChoice.type === "good" ? "rgba(0,200,100,0.3)" : selectedChoice.type === "bad" ? "rgba(255,50,50,0.3)" : "rgba(100,100,200,0.3)"}`, fontSize: "0.85rem", marginBottom: "0.5rem" }}>
              <span className={`response-label ${getLabelClass(selectedChoice.label)}`}>{selectedChoice.label.toUpperCase()}</span>
              <div style={{ marginTop: "0.3rem" }}>{selectedChoice.text}</div>
            </div>
          </div>
        )}
      </div>
      {showAegis && (
        <div className="aegis-panel">
          <div className="aegis-header">
            <div className="aegis-avatar">🤖</div>
            <div>
              <div className="aegis-name">AEGIS AI MENTOR</div>
              <div style={{ fontSize: "0.7rem", color: "rgba(200,210,255,0.4)" }}>Analisis Respons</div>
            </div>
          </div>
          <div className="aegis-text">{aegisText}</div>
          <button className="choice-btn" style={{ marginTop: "0.75rem" }} onClick={() => setActiveScenario(null)}>
            Lanjut ke Skenario Berikutnya →
          </button>
        </div>
      )}
    </div>
  );
}

// === QUICK MODE ===
function QuickMode({ questions, onScore, onBack }) {
  const [qIndex, setQIndex] = useState(0);
  const [time, setTime] = useState(15);
  const [combo, setCombo] = useState(0);
  const [answered, setAnswered] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const timerRef = useRef();

  useEffect(() => {
    if (done || answered !== null) return;
    timerRef.current = setInterval(() => {
      setTime(t => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          setAnswered(-1);
          setCombo(0);
          setTimeout(() => next(), 1500);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [qIndex, answered, done]);

  function next() {
    if (qIndex + 1 >= questions.length) { setDone(true); return; }
    setQIndex(i => i + 1);
    setTime(15);
    setAnswered(null);
  }

  function handleAnswer(idx) {
    clearInterval(timerRef.current);
    setAnswered(idx);
    const q = questions[qIndex];
    if (idx === q.correct) {
      const pts = q.xp + (combo >= 2 ? 10 : 0) + Math.round(time * 0.5);
      setScore(s => s + pts);
      setCombo(c => c + 1);
      onScore(pts);
    } else { setCombo(0); }
    setTimeout(() => next(), 1500);
  }

  const q = questions[qIndex];
  const circumference = 2 * Math.PI * 36;
  const dash = (time / 15) * circumference;
  const timerColor = time > 8 ? "#00c8ff" : time > 4 ? "#ffd700" : "#ff4444";

  if (done) return (
    <div className="quick-screen" style={{ paddingBottom: 80 }}>
      <button className="back-btn" onClick={onBack}>← Menu</button>
      <div className="glass-bright" style={{ padding: "2rem", textAlign: "center" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>⚡</div>
        <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "1.8rem", fontWeight: 700, color: "#00c8ff" }}>SELESAI!</div>
        <div style={{ fontSize: "2.5rem", fontWeight: 700, margin: "0.75rem 0", color: "#ffd700" }}>{score} pts</div>
        <div style={{ fontSize: "0.85rem", color: "rgba(200,210,255,0.6)" }}>Combo terbaik: {combo}x</div>
        <button className="choice-btn" style={{ marginTop: "1rem" }} onClick={() => { setQIndex(0); setTime(15); setCombo(0); setAnswered(null); setScore(0); setDone(false); }}>
          Ulangi
        </button>
      </div>
    </div>
  );

  return (
    <div className="quick-screen" style={{ paddingBottom: 80 }}>
      <button className="back-btn" onClick={onBack}>← Menu</button>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <div style={{ fontSize: "0.85rem", color: "rgba(200,210,255,0.6)" }}>Soal {qIndex + 1}/{questions.length}</div>
        {combo >= 2 && <div className="combo-badge">🔥 COMBO x{combo}</div>}
      </div>
      <div className="timer-ring-wrap">
        <svg className="timer-svg" width="90" height="90" viewBox="0 0 90 90">
          <circle cx="45" cy="45" r="36" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
          <circle cx="45" cy="45" r="36" fill="none" stroke={timerColor} strokeWidth="5"
            strokeDasharray={`${dash} ${circumference}`} strokeLinecap="round"
            style={{ transition: "stroke-dasharray 1s linear, stroke 0.3s" }}
          />
        </svg>
        <div className="timer-text" style={{ color: timerColor }}>{time}s</div>
      </div>
      <div className="glass-bright" style={{ padding: "1.25rem", marginBottom: "1rem" }}>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "#e0e8ff" }}>{q.q}</p>
      </div>
      {q.choices.map((c, i) => (
        <button key={i} className={`choice-btn ${answered === i ? (i === q.correct ? "selected-good" : "selected-bad") : ""} ${answered !== null && i === q.correct ? "selected-good" : ""}`}
          onClick={() => answered === null && handleAnswer(i)}
          disabled={answered !== null}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

// === SCREENSHOT ANALYZER ===
function ScreenshotAnalyzer({ onBack, onXP }) {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [inputText, setInputText] = useState("");

  const SCENARIOS_ANALYZER = [
    { text: "Dasar jelek! Foto lo bikin orang mau muntah. Mending hapus diri lo dari internet.", level: 92, type: ["Hate Speech", "Personal Attack", "Harassment"], emotion: "Penghinaan penampilan fisik", action: "Laporkan ke platform + simpan bukti + hubungi orang terpercaya", risk: "Sangat Tinggi" },
    { text: "Makanya jangan sok cantik kalo emang gak cantik-cantik amat wkwk", level: 65, type: ["Body Shaming", "Mockery"], emotion: "Body shaming dan inferioritas", action: "Laporkan komentar + block akun + jangan balas", risk: "Sedang" },
    { text: "Gw tau alamat rumah lo dan sekolah lo. Hati-hati pulang sendirian.", level: 98, type: ["Doxing", "Threat", "Intimidation"], emotion: "Ancaman fisik dan doxxing", action: "SEGERA laporkan ke polisi + orang tua + pihak sekolah!", risk: "KRITIS" },
  ];

  function analyze() {
    if (!inputText.trim()) return;
    setAnalyzing(true);
    setResult(null);
    setTimeout(() => {
      const score = Math.random();
      let r;
      if (score > 0.66) r = SCENARIOS_ANALYZER[2];
      else if (score > 0.33) r = SCENARIOS_ANALYZER[1];
      else r = SCENARIOS_ANALYZER[0];
      setResult(r);
      setAnalyzing(false);
      onXP(20);
    }, 2500);
  }

  const getDangerColor = (level) => {
    if (level >= 90) return "danger-high";
    if (level >= 60) return "danger-med";
    return "danger-low";
  };

  return (
    <div className="analyzer-screen" style={{ paddingBottom: 80 }}>
      <button className="back-btn" onClick={onBack}>← Menu</button>
      <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#00c8ff", marginBottom: "0.25rem" }}>📸 Screenshot Analyzer</div>
      <p style={{ fontSize: "0.8rem", color: "rgba(200,210,255,0.4)", marginBottom: "1rem" }}>AI Scanner deteksi cyberbullying</p>

      <div className="glass" style={{ padding: "1rem", marginBottom: "1rem" }}>
        <p style={{ fontSize: "0.8rem", color: "rgba(200,210,255,0.5)", marginBottom: "0.5rem" }}>Paste teks yang ingin dianalisis:</p>
        <textarea
          style={{ width: "100%", background: "rgba(5,10,30,0.8)", border: "1px solid rgba(0,200,255,0.2)", borderRadius: 8, padding: "0.75rem", color: "#e0e8ff", fontFamily: "inherit", fontSize: "0.85rem", resize: "vertical", minHeight: 80, outline: "none" }}
          placeholder="Contoh: 'Dasar jelek, mending hapus diri lo dari internet...'"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
        <button className="choice-btn" style={{ marginTop: "0.5rem", textAlign: "center", fontWeight: 700, color: "#00c8ff" }} onClick={analyze} disabled={analyzing}>
          {analyzing ? "🔍 Scanning..." : "🔍 Analisis Sekarang"}
        </button>
        {analyzing && <div className="scan-animation" />}
      </div>

      {result && (
        <div className="glass-bright" style={{ padding: "1.25rem" }}>
          <div className="aegis-header">
            <div className="aegis-avatar">🔍</div>
            <div>
              <div className="aegis-name">AEGIS SCANNER</div>
              <div style={{ fontSize: "0.7rem", color: "rgba(200,210,255,0.4)" }}>Analisis Selesai</div>
            </div>
          </div>
          <div style={{ marginBottom: "0.75rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", marginBottom: "0.3rem" }}>
              <span style={{ color: "rgba(200,210,255,0.6)" }}>Danger Level</span>
              <span style={{ color: result.level >= 90 ? "#ff4444" : result.level >= 60 ? "#ffd700" : "#00e878", fontWeight: 700 }}>{result.level}%</span>
            </div>
            <div className="danger-meter"><div className={`danger-fill ${getDangerColor(result.level)}`} style={{ width: `${result.level}%` }} /></div>
            <div style={{ textAlign: "right", fontSize: "0.7rem", color: "rgba(200,210,255,0.4)", marginTop: "0.2rem" }}>Risiko: {result.risk}</div>
          </div>
          <div style={{ marginBottom: "0.75rem" }}>
            <div style={{ fontSize: "0.75rem", color: "rgba(200,210,255,0.5)", marginBottom: "0.3rem" }}>Jenis Pelanggaran:</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {result.type.map(t => (
                <span key={t} style={{ padding: "0.2rem 0.6rem", borderRadius: 20, background: "rgba(255,50,50,0.15)", border: "1px solid rgba(255,50,50,0.3)", fontSize: "0.7rem", color: "#ff8080" }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ padding: "0.75rem", borderRadius: 10, background: "rgba(255,100,0,0.1)", border: "1px solid rgba(255,100,0,0.2)", marginBottom: "0.5rem" }}>
            <div style={{ fontSize: "0.7rem", color: "rgba(200,210,255,0.5)", marginBottom: "0.2rem" }}>Dampak Emosional Terdeteksi:</div>
            <div style={{ fontSize: "0.85rem", color: "#ffcc80" }}>{result.emotion}</div>
          </div>
          <div style={{ padding: "0.75rem", borderRadius: 10, background: "rgba(0,200,100,0.1)", border: "1px solid rgba(0,200,100,0.2)" }}>
            <div style={{ fontSize: "0.7rem", color: "rgba(200,210,255,0.5)", marginBottom: "0.2rem" }}>⚡ Tindakan yang Disarankan:</div>
            <div style={{ fontSize: "0.85rem", color: "#80ffcc" }}>{result.action}</div>
          </div>
        </div>
      )}
    </div>
  );
}

// === PROGRESS ===
function ProgressScreen({ xp, rank, rankPct, badges, earned, goodChoices, toxicChoices, communityHealth, onBack, onEnd }) {
  return (
    <div className="progress-screen" style={{ paddingBottom: 80 }}>
      <button className="back-btn" onClick={onBack}>← Menu</button>
      <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#00c8ff", marginBottom: "0.75rem" }}>🏆 Progress & Achievements</div>

      <div className="glass-bright" style={{ padding: "1rem", marginBottom: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
          <span className="rank-badge">⭐ {rank}</span>
          <span style={{ fontSize: "0.8rem", color: "#00c8ff", fontWeight: 700 }}>{xp} XP</span>
        </div>
        <div className="xp-bar"><div className="xp-fill" style={{ width: `${rankPct}%` }} /></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.5rem", marginTop: "0.75rem" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#00e878" }}>{goodChoices}</div>
            <div style={{ fontSize: "0.65rem", color: "rgba(200,210,255,0.5)" }}>Pilihan Baik</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#ff6060" }}>{toxicChoices}</div>
            <div style={{ fontSize: "0.65rem", color: "rgba(200,210,255,0.5)" }}>Pilihan Toxic</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#ffd700" }}>{xp}</div>
            <div style={{ fontSize: "0.65rem", color: "rgba(200,210,255,0.5)" }}>Digital Karma</div>
          </div>
        </div>
      </div>

      <div className="community-meter">
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
          <span style={{ color: "rgba(200,210,255,0.7)" }}>🌐 Community Health</span>
          <span style={{ color: "#00ffcc", fontWeight: 700 }}>{communityHealth}%</span>
        </div>
        <div className="meter-bar"><div className="meter-fill" style={{ width: `${communityHealth}%` }} /></div>
      </div>

      <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "1rem", fontWeight: 600, color: "#e0e8ff", margin: "1rem 0 0.5rem" }}>🏅 Badge Collection</div>
      <div className="badge-grid">
        {badges.map(b => (
          <div key={b.id} className={`badge-card ${earned.includes(b.id) ? "earned" : "locked"}`}>
            <span className="badge-emoji">{b.emoji}</span>
            <div className="badge-name">{b.name}</div>
            <div className="badge-desc">{b.desc}</div>
          </div>
        ))}
      </div>

      <button className="choice-btn" style={{ marginTop: "1.25rem", textAlign: "center", color: "#ffd700", borderColor: "rgba(255,200,0,0.3)" }} onClick={onEnd}>
        🏁 Lihat Ending & Statistik →
      </button>
    </div>
  );
}

// === SETTINGS ===
function SettingsScreen({ settings, onToggle, onBack }) {
  const themes = ["Neon Cyber", "Anime Future", "Hacker Terminal", "Minimal Clean"];
  const [theme, setTheme] = useState("Neon Cyber");
  return (
    <div className="settings-screen" style={{ paddingBottom: 80 }}>
      <button className="back-btn" onClick={onBack}>← Menu</button>
      <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#00c8ff", marginBottom: "0.75rem" }}>⚙️ Settings</div>
      <div className="glass" style={{ borderRadius: 14, overflow: "hidden" }}>
        {[["music", "🎵", "Musik"], ["sfx", "🔊", "Sound FX"], ["animations", "✨", "Animasi"]].map(([key, icon, label]) => (
          <div key={key} className="settings-row">
            <span style={{ fontSize: "0.9rem" }}>{icon} {label}</span>
            <div className={`toggle-wrap ${settings[key] ? "on" : ""}`} onClick={() => onToggle(key)}>
              <div className="toggle-knob" />
            </div>
          </div>
        ))}
        <div className="settings-row">
          <span style={{ fontSize: "0.9rem" }}>🌐 Bahasa</span>
          <span style={{ fontSize: "0.85rem", color: "#00c8ff" }}>Indonesia</span>
        </div>
      </div>
      <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "1rem", color: "#e0e8ff", margin: "1rem 0 0.5rem" }}>🎨 Tema</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "0.5rem" }}>
        {themes.map(t => (
          <button key={t} className="choice-btn" style={t === theme ? { borderColor: "rgba(0,200,255,0.6)", color: "#00c8ff" } : {}} onClick={() => setTheme(t)}>
            {t === "Neon Cyber" ? "💜" : t === "Anime Future" ? "🌸" : t === "Hacker Terminal" ? "💚" : "🤍"} {t}
          </button>
        ))}
      </div>
    </div>
  );
}

// === ENDING SCREEN ===
function EndingScreen({ xp, rank, goodChoices, toxicChoices, communityHealth, completed, onRestart }) {
  const total = goodChoices + toxicChoices;
  const empathyPct = total > 0 ? Math.round((goodChoices / total) * 100) : 0;
  const getPersonality = () => {
    if (empathyPct >= 80) return "Digital Hero";
    if (empathyPct >= 60) return "Cyber Guardian";
    if (empathyPct >= 40) return "Peace Seeker";
    return "Silent Bystander";
  };
  const getEnding = () => {
    if (empathyPct >= 80) return { title: "🌟 Heroic Defender Ending", desc: "Komunitasmu berkembang menjadi tempat yang aman dan inklusif. Tindakanmu menginspirasi orang lain untuk speak up!", color: "#00ffcc" };
    if (empathyPct >= 60) return { title: "💙 Positive Community Ending", desc: "Kamu berhasil membuat perbedaan nyata. Masih ada ruang untuk tumbuh, tapi komunitas terasa lebih baik.", color: "#00c8ff" };
    if (empathyPct >= 40) return { title: "⚖️ Neutral Path Ending", desc: "Kamu tidak memperburuk situasi, tapi juga belum maksimal. Coba lebih berani di masa depan!", color: "#ffd700" };
    return { title: "🌑 Silent Bystander Ending", desc: "Diam bukan selalu aman. Korban cyberbullying membutuhkan dukungan nyata.", color: "#ff8080" };
  };
  const ending = getEnding();
  return (
    <div className="ending-screen" style={{ paddingBottom: 80 }}>
      <div className="ending-trophy">🏆</div>
      <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "2rem", fontWeight: 700, color: ending.color }}>{ending.title}</div>
      <div style={{ fontSize: "0.9rem", color: "rgba(200,210,255,0.7)", margin: "0.75rem 0 1.25rem", lineHeight: 1.6 }}>{ending.desc}</div>
      <div className="stat-grid">
        <div className="stat-card"><div className="stat-val">{xp}</div><div className="stat-label">Total XP</div></div>
        <div className="stat-card"><div className="stat-val">{empathyPct}%</div><div className="stat-label">Tingkat Empati</div></div>
        <div className="stat-card"><div className="stat-val">{communityHealth}%</div><div className="stat-label">Kesehatan Komunitas</div></div>
        <div className="stat-card"><div className="stat-val">{completed}</div><div className="stat-label">Skenario Selesai</div></div>
      </div>
      <div className="glass" style={{ padding: "1rem", marginBottom: "1rem" }}>
        <div style={{ fontSize: "0.75rem", color: "rgba(200,210,255,0.4)", marginBottom: "0.25rem" }}>Tipe Kepribadian Digital</div>
        <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "#9632ff" }}>{getPersonality()}</div>
        <div style={{ fontSize: "0.75rem", color: "rgba(200,210,255,0.4)", marginTop: "0.25rem" }}>Rank: {rank}</div>
      </div>
      <div className="quote-card" style={{ marginBottom: "1.25rem" }}>
        <div className="quote-text">Setiap keputusan kecilmu di dunia digital mencerminkan siapa kamu sebenarnya. Terima kasih sudah menjadi bagian dari generasi yang peduli. 💙</div>
        <div className="quote-author">— Aegis AI, CyberShield</div>
      </div>
      <button className="start-btn" onClick={onRestart} style={{ padding: "0.8rem 2rem", fontSize: "0.9rem" }}>
        MAIN LAGI
      </button>
    </div>
  );
}

// === NAV BAR ===
function NavBar({ current, onNav }) {
  const items = [
    { id: "menu", icon: "🏠", label: "Menu" },
    { id: "story", icon: "📖", label: "Story" },
    { id: "quick", icon: "⚡", label: "Quick" },
    { id: "analyzer", icon: "📸", label: "Scan" },
    { id: "progress", icon: "🏆", label: "Progress" },
  ];
  return (
    <div className="nav-bar">
      {items.map(item => (
        <button key={item.id} className={`nav-btn ${current === item.id ? "active" : ""}`} onClick={() => onNav(item.id)}>
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
