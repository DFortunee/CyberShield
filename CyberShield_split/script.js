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

// ====== STATE ======
const state = {
  screen: "intro",
  xp: 0,
  toxicChoices: 0,
  goodChoices: 0,
  earnedBadges: new Set(["empathy"]),
  completedScenarios: new Set(),
  visitedModes: new Set(),
  communityHealth: 60,
  settings: { music: true, sfx: true, animations: true },
  dailyStreak: 3,
  activeScenarioIndex: null,
  visibleMessages: [],
  showChoices: false,
  selectedChoice: null,
  showAegis: false,
  showTyping: false,
  aegisText: "",
  shake: false,
  xpPopup: null,
  storyTimers: [],
  quickTimer: null,
  qIndex: 0,
  time: 15,
  combo: 0,
  answered: null,
  score: 0,
  done: false,
  analyzerResult: null,
  analyzing: false,
  analyzerText: "",
  theme: "Neon Cyber",
};

const app = document.getElementById("app");
const chatState = { mountedScenario: null };

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

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

function getLabelClass(label) {
  if (label === "supportive") return "label-supportive";
  if (label === "toxic") return "label-toxic";
  if (label === "neutral") return "label-neutral";
  if (label === "assertive") return "label-assertive";
  if (label === "escalating") return "label-escalating";
  return "label-neutral";
}

function addXP(amount) {
  if (amount <= 0) return;
  state.xp += amount;
  state.xpPopup = `+${amount} XP`;
  render();
  setTimeout(() => { state.xpPopup = null; render(); }, 1500);
}

function triggerShake() {
  state.shake = true;
  render();
  setTimeout(() => { state.shake = false; render(); }, 500);
}

function recordMode(mode) {
  state.visitedModes.add(mode);
}

function updateBadges() {
  if (state.goodChoices >= 3) state.earnedBadges.add("empathy");
  if (state.completedScenarios.size >= STORY_SCENARIOS.length) state.earnedBadges.add("guardian");
  if (state.goodChoices >= 5) state.earnedBadges.add("peace");
  if (state.toxicChoices === 0 && state.completedScenarios.size > 0) state.earnedBadges.add("antitoxic");
  if (state.xp >= 500) state.earnedBadges.add("angel");
  if (state.visitedModes.has("story") && state.visitedModes.has("quick") && state.visitedModes.has("analyzer") && state.visitedModes.has("progress")) {
    state.earnedBadges.add("truth");
  }
}

function getQuote() {
  const idx = Math.floor(Date.now() / 86400000) % QUOTES.length;
  return QUOTES[idx];
}

function clearStoryTimers() {
  state.storyTimers.forEach(t => clearTimeout(t));
  state.storyTimers = [];
}

function clearQuickTimer() {
  if (state.quickTimer) {
    clearInterval(state.quickTimer);
    state.quickTimer = null;
  }
}

function setScreen(screen) {
  if (screen !== "story") clearStoryTimers();
  if (screen !== "quick") clearQuickTimer();
  state.screen = screen;
  if (screen === "story") recordMode("story");
  if (screen === "quick") {
    recordMode("quick");
    startQuickMode();
    return;
  }
  if (screen === "analyzer") recordMode("analyzer");
  if (screen === "progress") recordMode("progress");
  if (screen === "intro") recordMode("intro");
  render();
}

function startScenario(index) {
  clearStoryTimers();
  const s = STORY_SCENARIOS[index];
  state.activeScenarioIndex = index;
  state.visibleMessages = [];
  state.showChoices = false;
  state.selectedChoice = null;
  state.showAegis = false;
  state.aegisText = "";
  state.storyTimers = [];
  render();

  s.messages.forEach(msg => {
    const t = setTimeout(() => {
      state.showTyping = true;
      render();
      const tTyping = setTimeout(() => {
        state.shake = msg.type === "toxic";
        if (state.shake) setTimeout(() => { state.shake = false; render(); }, 250);
        state.showTyping = false;
        state.showAegis = false;
        state.visibleMessages.push(msg);
        state.showChoices = false;
        render();
        scrollChatToBottom();
      }, 450);
      state.storyTimers.push(tTyping);
    }, msg.delay);
    state.storyTimers.push(t);
  });

  const lastDelay = s.messages[s.messages.length - 1].delay + 900;
  const tChoices = setTimeout(() => {
    state.showChoices = true;
    render();
    scrollChatToBottom();
  }, lastDelay);
  state.storyTimers.push(tChoices);
}

function scrollChatToBottom() {
  setTimeout(() => {
    const el = document.getElementById("chatArea");
    if (el) el.scrollTop = el.scrollHeight;
  }, 0);
}

function handleChoice(choiceIndex) {
  const s = STORY_SCENARIOS[state.activeScenarioIndex];
  const choice = s.choices[choiceIndex];
  state.selectedChoice = choice;
  const isGood = choice.type === "good";
  const isToxic = choice.type === "bad";

  if (isGood) {
    state.goodChoices += 1;
    state.communityHealth = clamp(state.communityHealth + 8, 0, 100);
    addXP(choice.xp);
  } else if (isToxic) {
    state.toxicChoices += 1;
    state.communityHealth = clamp(state.communityHealth - 12, 0, 100);
    triggerShake();
  } else {
    addXP(choice.xp);
  }
  state.completedScenarios.add(s.id);
  state.aegisText = isGood ? s.aegisFeedback.good : isToxic ? s.aegisFeedback.bad : s.aegisFeedback.neutral;
  state.showAegis = true;
  updateBadges();
  render();
}

function nextStoryScenario() {
  state.activeScenarioIndex = null;
  state.visibleMessages = [];
  state.showChoices = false;
  state.selectedChoice = null;
  state.showAegis = false;
  state.aegisText = "";
  clearStoryTimers();
  render();
}

function startQuickTimer() {
  clearQuickTimer();
  state.quickTimer = setInterval(() => {
    if (state.screen !== "quick" || state.done || state.answered !== null) return;
    state.time -= 1;
    if (state.time <= 0) {
      state.time = 0;
      state.answered = -1;
      state.combo = 0;
      render();
      clearQuickTimer();
      setTimeout(() => nextQuestion(), 1200);
      return;
    }
    render();
  }, 1000);
}

function startQuickMode() {
  clearQuickTimer();
  state.qIndex = 0;
  state.time = 15;
  state.combo = 0;
  state.answered = null;
  state.score = 0;
  state.done = false;
  render();
  startQuickTimer();
}

function nextQuestion() {
  if (state.qIndex + 1 >= QUICK_QUESTIONS.length) {
    state.done = true;
    clearQuickTimer();
    render();
    return;
  }
  state.qIndex += 1;
  state.time = 15;
  state.answered = null;
  render();
  if (!state.quickTimer && state.screen === "quick" && !state.done) {
    state.quickTimer = setInterval(() => {
      if (state.screen !== "quick" || state.done || state.answered !== null) return;
      state.time -= 1;
      if (state.time <= 0) {
        state.time = 0;
        state.answered = -1;
        state.combo = 0;
        render();
        clearQuickTimer();
        setTimeout(() => nextQuestion(), 1200);
        return;
      }
      render();
    }, 1000);
  }
}

function handleAnswer(idx) {
  if (state.answered !== null) return;
  state.answered = idx;
  const q = QUICK_QUESTIONS[state.qIndex];
  if (idx === q.correct) {
    const pts = q.xp + (state.combo >= 2 ? 10 : 0) + Math.round(state.time * 0.5);
    state.score += pts;
    state.combo += 1;
    addXP(pts);
    state.communityHealth = clamp(state.communityHealth + 5, 0, 100);
    updateBadges();
  } else {
    state.combo = 0;
  }
  render();
  setTimeout(() => nextQuestion(), 1200);
}

function analyzeText() {
  const input = document.getElementById("analyzerInput");
  const text = (input?.value || "").trim();
  state.analyzerText = text;
  if (!text) return;
  state.analyzing = true;
  state.analyzerResult = null;
  render();

  setTimeout(() => {
    const lower = text.toLowerCase();
    const dangerWords = ["ancam", "bunuh", "dox", "alamat", "telepon", "jelek", "bodoh", "muntah", "hapus", "malu", "hina", "goblok", "sok", "benci", "rujuk", "lapor", "capek", "noob"];
    const severeWords = ["alamat", "nomor", "rumah", "sekolah", "ancaman", "pulang sendirian", "viral", "sebar"];
    let score = 30;
    dangerWords.forEach(w => { if (lower.includes(w)) score += 8; });
    severeWords.forEach(w => { if (lower.includes(w)) score += 15; });
    score = clamp(score, 10, 98);

    let result;
    if (score >= 85) {
      result = {
        level: score,
        type: ["Harassment", "Threat", "High Risk"],
        emotion: "Teks ini menunjukkan risiko emosional dan keamanan yang sangat tinggi.",
        action: "Simpan bukti, laporkan ke platform, dan beri tahu orang dewasa terpercaya atau pihak sekolah.",
        risk: "KRITIS",
      };
    } else if (score >= 60) {
      result = {
        level: score,
        type: ["Bullying", "Mockery"],
        emotion: "Ada unsur penghinaan, tekanan sosial, atau pelecehan verbal.",
        action: "Laporkan komentar, blokir akun bila perlu, dan dukung korban secara langsung.",
        risk: "SEDANG",
      };
    } else {
      result = {
        level: score,
        type: ["Low Risk"],
        emotion: "Teks ini belum menunjukkan ancaman berat, tetapi tetap perlu dipantau jika berulang.",
        action: "Tanggapi dengan tenang, dokumentasikan bila berubah menjadi pelecehan, dan tetap jaga batas aman.",
        risk: "RENDAH",
      };
    }
    state.analyzing = false;
    state.analyzerResult = result;
    addXP(20);
    updateBadges();
    render();
  }, 1600);
}

function toggleSetting(key) {
  state.settings[key] = !state.settings[key];
  render();
}

function setTheme(theme) {
  state.theme = theme;
  render();
}

function restartGame() {
  state.screen = "menu";
  state.xp = 0;
  state.toxicChoices = 0;
  state.goodChoices = 0;
  state.earnedBadges = new Set(["empathy"]);
  state.completedScenarios = new Set();
  state.communityHealth = 60;
  state.activeScenarioIndex = null;
  state.visibleMessages = [];
  state.showChoices = false;
  state.selectedChoice = null;
  state.showAegis = false;
  state.aegisText = "";
  state.qIndex = 0;
  state.time = 15;
  state.combo = 0;
  state.answered = null;
  state.score = 0;
  state.done = false;
  state.analyzerResult = null;
  state.analyzing = false;
  state.visitedModes = new Set(["menu"]);
  clearStoryTimers();
  clearQuickTimer();
  updateBadges();
  render();
}

function nextFromProgress() {
  setScreen("ending");
}

function renderParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * -15,
    dx: `${(Math.random() - 0.5) * 100}px`,
    color: Math.random() > 0.5 ? "rgba(0,200,255,0.6)" : "rgba(150,50,255,0.6)",
  }));
  return `<div class="particles">${particles.map(p => `<div class="particle" style="left:${p.left};bottom:0;width:${p.size}px;height:${p.size}px;background:${p.color};animation-duration:${p.duration}s;animation-delay:${p.delay}s;--dx:${p.dx};"></div>`).join("")}</div>`;
}

function renderIntro() {
  return `
    <div class="intro-screen">
      <div class="logo-container">
        <div class="logo-ring"><span class="logo-shield">🛡️</span></div>
        <div class="game-title">CYBERSHIELD</div>
        <div class="game-slogan">Protect Minds. Stop Cyberbullying.</div>
      </div>
      <div class="glass" style="padding:1.25rem 1.5rem;max-width:380px;">
        <p style="font-size:0.85rem;color:rgba(200,210,255,0.7);line-height:1.7;text-align:center;">
          Masuki dunia simulasi sosial media masa depan. Hadapi cyberbullying nyata, buat keputusan bijak, dan jadilah pelindung digital.
        </p>
        <div style="display:flex;gap:0.5rem;justify-content:center;margin-top:1rem;flex-wrap:wrap;">
          <span style="padding:0.2rem 0.6rem;border-radius:20px;background:rgba(0,200,255,0.1);border:1px solid rgba(0,200,255,0.2);font-size:0.7rem;color:#00c8ff;">Visual Novel</span>
          <span style="padding:0.2rem 0.6rem;border-radius:20px;background:rgba(0,200,255,0.1);border:1px solid rgba(0,200,255,0.2);font-size:0.7rem;color:#00c8ff;">AI Coaching</span>
          <span style="padding:0.2rem 0.6rem;border-radius:20px;background:rgba(0,200,255,0.1);border:1px solid rgba(0,200,255,0.2);font-size:0.7rem;color:#00c8ff;">Cyberpunk Edu</span>
        </div>
      </div>
      <button class="start-btn" onclick="setScreen('menu')">MULAI MISI</button>
      <div style="margin-top:1rem;font-size:0.7rem;color:rgba(200,210,255,0.3);letter-spacing:1px;">POWERED BY AEGIS AI · v2.0</div>
    </div>`;
}

function renderMenu() {
  const rank = getRank(state.xp);
  const pct = getRankProgress(state.xp);
  const quote = getQuote();
  const menuItems = [
    { id: "story", icon: "📖", label: "Story Mode", desc: "Cerita interaktif saling terhubung" },
    { id: "quick", icon: "⚡", label: "Quick Response", desc: "Timer menegangkan, combo streak!" },
    { id: "analyzer", icon: "📸", label: "Screenshot Analyzer", desc: "Scan & analisis cyberbullying" },
    { id: "progress", icon: "🏆", label: "Progress & Badges", desc: "XP, Rank, Achievement" },
    { id: "settings", icon: "⚙️", label: "Settings", desc: "Kustomisasi pengalaman game" },
  ];
  const dailyProgress = Math.min(100, (state.completedScenarios.size / 2) * 100);
  return `
  <div class="main-menu" style="padding-bottom:80px;">
    <div class="menu-header">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem;">
        <div>
          <div style="font-family:'Rajdhani',sans-serif;font-size:1.6rem;font-weight:700;color:#00c8ff;letter-spacing:2px;">🛡️ CYBERSHIELD</div>
          <div style="font-size:0.7rem;color:rgba(200,210,255,0.4);letter-spacing:2px;">PROTECT MINDS · STOP CYBERBULLYING</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:0.7rem;color:rgba(200,210,255,0.5);">Streak</div>
          <div style="font-size:1.1rem;font-weight:700;color:#ffd700;">🔥 ${state.dailyStreak} hari</div>
        </div>
      </div>
      <div class="glass" style="padding:0.75rem 1rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;">
          <span class="rank-badge">⭐ ${rank}</span>
          <span style="font-size:0.8rem;color:#00c8ff;font-weight:600;">${state.xp} XP</span>
        </div>
        <div class="xp-bar-wrap">
          <div class="xp-bar"><div class="xp-fill" style="width:${pct}%"></div></div>
        </div>
      </div>
    </div>
    <div class="quote-card">
      <div class="quote-text">"${quote.text}"</div>
      <div class="quote-author">— ${quote.author}</div>
    </div>
    <div class="menu-grid">
      ${menuItems.map(item => `
        <div class="glass-bright menu-card" onclick="setScreen('${item.id}')">
          <span class="menu-icon">${item.icon}</span>
          <div class="menu-label">${item.label}</div>
          <div class="menu-desc">${item.desc}</div>
        </div>`).join("")}
      <div class="glass menu-card" style="background:rgba(255,200,0,0.07);border-color:rgba(255,200,0,0.2);">
        <span class="menu-icon">🎯</span>
        <div class="menu-label" style="color:#ffd700;">Daily Mission</div>
        <div class="menu-desc">Selesaikan 2 skenario hari ini</div>
        <div style="margin-top:0.5rem;height:4px;background:rgba(255,255,255,0.1);border-radius:2px;">
          <div style="height:100%;width:${dailyProgress}%;background:linear-gradient(90deg,#ffd700,#ff9900);border-radius:2px;"></div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderStory() {
  if (state.activeScenarioIndex === null) {
    return `
      <div class="story-screen" style="padding-bottom:80px;">
        <button class="back-btn" onclick="setScreen('menu')">← Kembali</button>
        <div style="font-family:'Rajdhani',sans-serif;font-size:1.4rem;font-weight:700;color:#00c8ff;margin-bottom:0.5rem;">📖 Story Mode</div>
        <p style="font-size:0.8rem;color:rgba(200,210,255,0.5);margin-bottom:1rem;">Pilih skenario cyberbullying untuk dihadapi</p>
        ${STORY_SCENARIOS.map((s, i) => `
          <div class="glass-bright" style="padding:1rem;margin-bottom:0.75rem;cursor:pointer;" onclick="startScenario(${i})">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;">
              <div>
                <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.3rem;">
                  <span>${s.platformIcon}</span>
                  <span style="font-size:0.7rem;color:rgba(200,210,255,0.4);">${escapeHTML(s.platformName)}</span>
                </div>
                <div style="font-weight:600;color:#e0e8ff;">${escapeHTML(s.title)}</div>
                <div style="font-size:0.8rem;color:rgba(200,210,255,0.5);margin-top:0.25rem;">${escapeHTML(s.situation.slice(0,80))}...</div>
              </div>
              <div style="font-size:1.5rem;opacity:${state.completedScenarios.has(s.id) ? 1 : 0.3};">${state.completedScenarios.has(s.id) ? "✅" : "🔒"}</div>
            </div>
          </div>
        `).join("")}
      </div>`;
  }
  const s = STORY_SCENARIOS[state.activeScenarioIndex];
  const platformClass = { discord: "platform-discord", whatsapp: "platform-whatsapp", instagram: "platform-instagram", tiktok: "platform-tiktok" }[s.platform] || "platform-discord";
  return `
    <div class="story-screen" style="padding-bottom:80px;">
      <button class="back-btn" onclick="nextStoryScenario()">← Skenario</button>
      <div style="border-radius:14px;overflow:hidden;border:1px solid rgba(0,200,255,0.2);position:relative;">
        ${state.shake ? `<div style="position:absolute;inset:0;background:rgba(255,0,0,0.05);z-index:10;pointer-events:none;"></div>` : ""}
        <div class="platform-header ${platformClass}">
          <span style="font-size:1.1rem;">${s.platformIcon}</span>
          <span style="font-weight:600;font-size:0.85rem;">${escapeHTML(s.platformName)}</span>
          <span style="margin-left:auto;font-size:0.7rem;color:rgba(200,210,255,0.4);">🟢 ${Object.keys(s.characters).length} online</span>
        </div>
        <div class="chat-area" id="chatArea">
          ${state.visibleMessages.map((msg, i) => {
            const char = s.characters[msg.from] || { color: "#888", avatar: "👤" };
            const isMe = msg.from === "You";
            const time = new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
            return `
              <div class="chat-bubble bubble-${isMe ? "outgoing" : "incoming"}">
                ${!isMe ? `<div class="bubble-header">
                  <div class="avatar-circle" style="background:${char.color}33;color:${char.color};">${char.avatar}</div>
                  <span style="color:${char.color};font-weight:600;">${escapeHTML(msg.from)}</span>
                  <span class="text-muted">${time}</span>
                </div>` : ""}
                <div class="bubble-${msg.type === "toxic" ? "toxic" : msg.type === "support" ? "support" : "normal"}">
                  <div class="bubble-text">${escapeHTML(msg.text)}</div>
                </div>
              </div>`;
          }).join("")}
          ${state.showAegis === false && state.visibleMessages.length > 0 && state.showChoices === false ? "" : ""}
          ${state.showTyping ? `<div class="chat-bubble bubble-incoming"><div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div>` : ""}
        </div>
        ${state.showChoices && !state.selectedChoice ? `
          <div class="choices-area">
            <p style="font-size:0.75rem;color:rgba(200,210,255,0.5);margin-bottom:0.5rem;">💬 Bagaimana responsmu?</p>
            ${s.choices.map((c, i) => `<button class="choice-btn" onclick="handleChoice(${i})">${escapeHTML(c.text)}</button>`).join("")}
          </div>` : ""}
        ${state.selectedChoice ? `
          <div class="choices-area">
            <div style="padding:0.6rem 0.9rem;border-radius:10px;background:${state.selectedChoice.type === "good" ? "rgba(0,200,100,0.15)" : state.selectedChoice.type === "bad" ? "rgba(255,50,50,0.15)" : "rgba(100,100,200,0.15)"};border:1px solid ${state.selectedChoice.type === "good" ? "rgba(0,200,100,0.3)" : state.selectedChoice.type === "bad" ? "rgba(255,50,50,0.3)" : "rgba(100,100,200,0.3)"};font-size:0.85rem;margin-bottom:0.5rem;">
              <span class="response-label ${getLabelClass(state.selectedChoice.label)}">${state.selectedChoice.label.toUpperCase()}</span>
              <div style="margin-top:0.3rem;">${escapeHTML(state.selectedChoice.text)}</div>
            </div>
          </div>` : ""}
      </div>
      ${state.showAegis ? `
        <div class="aegis-panel">
          <div class="aegis-header">
            <div class="aegis-avatar">🤖</div>
            <div>
              <div class="aegis-name">AEGIS AI MENTOR</div>
              <div style="font-size:0.7rem;color:rgba(200,210,255,0.4);">Analisis Respons</div>
            </div>
          </div>
          <div class="aegis-text">${escapeHTML(state.aegisText)}</div>
          <button class="choice-btn" style="margin-top:0.75rem;" onclick="nextStoryScenario()">Lanjut ke Skenario Berikutnya →</button>
        </div>` : ""}
    </div>`;
}

function renderQuick() {
  const q = QUICK_QUESTIONS[state.qIndex];
  const circumference = 2 * Math.PI * 36;
  const dash = (state.time / 15) * circumference;
  const timerColor = state.time > 8 ? "#00c8ff" : state.time > 4 ? "#ffd700" : "#ff4444";
  if (state.done) {
    return `
      <div class="quick-screen" style="padding-bottom:80px;">
        <button class="back-btn" onclick="setScreen('menu')">← Menu</button>
        <div class="glass-bright" style="padding:2rem;text-align:center;">
          <div style="font-size:3rem;margin-bottom:1rem;">⚡</div>
          <div style="font-family:'Rajdhani',sans-serif;font-size:1.8rem;font-weight:700;color:#00c8ff;">SELESAI!</div>
          <div style="font-size:2.5rem;font-weight:700;margin:0.75rem 0;color:#ffd700;">${state.score} pts</div>
          <div style="font-size:0.85rem;color:rgba(200,210,255,0.6);">Combo terbaik: ${state.combo}x</div>
          <button class="choice-btn" style="margin-top:1rem;" onclick="startQuickMode()">Ulangi</button>
        </div>
      </div>`;
  }
  return `
    <div class="quick-screen" style="padding-bottom:80px;">
      <button class="back-btn" onclick="setScreen('menu')">← Menu</button>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
        <div style="font-size:0.85rem;color:rgba(200,210,255,0.6);">Soal ${state.qIndex + 1}/${QUICK_QUESTIONS.length}</div>
        ${state.combo >= 2 ? `<div class="combo-badge">🔥 COMBO x${state.combo}</div>` : ""}
      </div>
      <div class="timer-ring-wrap">
        <svg class="timer-svg" width="90" height="90" viewBox="0 0 90 90">
          <circle cx="45" cy="45" r="36" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="5"></circle>
          <circle cx="45" cy="45" r="36" fill="none" stroke="${timerColor}" stroke-width="5" stroke-dasharray="${dash} ${circumference}" stroke-linecap="round" style="transition:stroke-dasharray 1s linear, stroke 0.3s;"></circle>
        </svg>
        <div class="timer-text" style="color:${timerColor};">${state.time}s</div>
      </div>
      <div class="glass-bright" style="padding:1.25rem;margin-bottom:1rem;">
        <p style="font-size:0.95rem;line-height:1.6;color:#e0e8ff;">${escapeHTML(q.q)}</p>
      </div>
      ${q.choices.map((c, i) => `
        <button class="choice-btn ${state.answered === i ? (i === q.correct ? "selected-good" : "selected-bad") : ""} ${state.answered !== null && i === q.correct ? "selected-good" : ""}"
          onclick="handleAnswer(${i})" ${state.answered !== null ? "disabled" : ""}>
          ${escapeHTML(c)}
        </button>`).join("")}
    </div>`;
}

function renderAnalyzer() {
  const result = state.analyzerResult;
  const dangerClass = result ? (result.level >= 90 ? "danger-high" : result.level >= 60 ? "danger-med" : "danger-low") : "danger-low";
  return `
    <div class="analyzer-screen" style="padding-bottom:80px;">
      <button class="back-btn" onclick="setScreen('menu')">← Menu</button>
      <div style="font-family:'Rajdhani',sans-serif;font-size:1.4rem;font-weight:700;color:#00c8ff;margin-bottom:0.25rem;">📸 Screenshot Analyzer</div>
      <p style="font-size:0.8rem;color:rgba(200,210,255,0.4);margin-bottom:1rem;">AI Scanner deteksi cyberbullying</p>

      <div class="glass" style="padding:1rem;margin-bottom:1rem;">
        <p style="font-size:0.8rem;color:rgba(200,210,255,0.5);margin-bottom:0.5rem;">Paste teks yang ingin dianalisis:</p>
        <textarea id="analyzerInput" style="width:100%;background:rgba(5,10,30,0.8);border:1px solid rgba(0,200,255,0.2);border-radius:8px;padding:0.75rem;color:#e0e8ff;font-family:inherit;font-size:0.85rem;resize:vertical;min-height:80px;outline:none;" placeholder="Contoh: 'Dasar jelek, mending hapus diri lo dari internet...'">${escapeHTML(state.analyzerText)}</textarea>
        <button class="choice-btn" style="margin-top:0.5rem;text-align:center;font-weight:700;color:#00c8ff;" onclick="analyzeText()" ${state.analyzing ? "disabled" : ""}>
          ${state.analyzing ? "🔍 Scanning..." : "🔍 Analisis Sekarang"}
        </button>
        ${state.analyzing ? `<div class="scan-animation"></div>` : ""}
      </div>

      ${result ? `
        <div class="glass-bright" style="padding:1.25rem;">
          <div class="aegis-header">
            <div class="aegis-avatar">🔍</div>
            <div>
              <div class="aegis-name">AEGIS SCANNER</div>
              <div style="font-size:0.7rem;color:rgba(200,210,255,0.4);">Analisis Selesai</div>
            </div>
          </div>
          <div style="margin-bottom:0.75rem;">
            <div style="display:flex;justify-content:space-between;font-size:0.8rem;margin-bottom:0.3rem;">
              <span style="color:rgba(200,210,255,0.6);">Danger Level</span>
              <span style="color:${result.level >= 90 ? "#ff4444" : result.level >= 60 ? "#ffd700" : "#00e878"};font-weight:700;">${result.level}%</span>
            </div>
            <div class="danger-meter"><div class="danger-fill ${dangerClass}" style="width:${result.level}%"></div></div>
            <div style="text-align:right;font-size:0.7rem;color:rgba(200,210,255,0.4);margin-top:0.2rem;">Risiko: ${result.risk}</div>
          </div>
          <div style="margin-bottom:0.75rem;">
            <div style="font-size:0.75rem;color:rgba(200,210,255,0.5);margin-bottom:0.3rem;">Jenis Pelanggaran:</div>
            <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
              ${result.type.map(t => `<span style="padding:0.2rem 0.6rem;border-radius:20px;background:rgba(255,50,50,0.15);border:1px solid rgba(255,50,50,0.3);font-size:0.7rem;color:#ff8080;">${escapeHTML(t)}</span>`).join("")}
            </div>
          </div>
          <div style="padding:0.75rem;border-radius:10px;background:rgba(255,100,0,0.1);border:1px solid rgba(255,100,0,0.2);margin-bottom:0.5rem;">
            <div style="font-size:0.7rem;color:rgba(200,210,255,0.5);margin-bottom:0.2rem;">Dampak Emosional Terdeteksi:</div>
            <div style="font-size:0.85rem;color:#ffcc80;">${escapeHTML(result.emotion)}</div>
          </div>
          <div style="padding:0.75rem;border-radius:10px;background:rgba(0,200,100,0.1);border:1px solid rgba(0,200,100,0.2);">
            <div style="font-size:0.7rem;color:rgba(200,210,255,0.5);margin-bottom:0.2rem;">⚡ Tindakan yang Disarankan:</div>
            <div style="font-size:0.85rem;color:#80ffcc;">${escapeHTML(result.action)}</div>
          </div>
        </div>` : ""}
    </div>`;
}

function renderProgress() {
  updateBadges();
  const rank = getRank(state.xp);
  const pct = getRankProgress(state.xp);
  return `
    <div class="progress-screen" style="padding-bottom:80px;">
      <button class="back-btn" onclick="setScreen('menu')">← Menu</button>
      <div style="font-family:'Rajdhani',sans-serif;font-size:1.4rem;font-weight:700;color:#00c8ff;margin-bottom:0.75rem;">🏆 Progress & Achievements</div>
      <div class="glass-bright" style="padding:1rem;margin-bottom:1rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
          <span class="rank-badge">⭐ ${rank}</span>
          <span style="font-size:0.8rem;color:#00c8ff;font-weight:700;">${state.xp} XP</span>
        </div>
        <div class="xp-bar"><div class="xp-fill" style="width:${pct}%"></div></div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.5rem;margin-top:0.75rem;">
          <div style="text-align:center;"><div style="font-family:'Rajdhani',sans-serif;font-size:1.4rem;font-weight:700;color:#00e878;">${state.goodChoices}</div><div style="font-size:0.65rem;color:rgba(200,210,255,0.5);">Pilihan Baik</div></div>
          <div style="text-align:center;"><div style="font-family:'Rajdhani',sans-serif;font-size:1.4rem;font-weight:700;color:#ff6060;">${state.toxicChoices}</div><div style="font-size:0.65rem;color:rgba(200,210,255,0.5);">Pilihan Toxic</div></div>
          <div style="text-align:center;"><div style="font-family:'Rajdhani',sans-serif;font-size:1.4rem;font-weight:700;color:#ffd700;">${state.xp}</div><div style="font-size:0.65rem;color:rgba(200,210,255,0.5);">Digital Karma</div></div>
        </div>
      </div>
      <div class="community-meter">
        <div style="display:flex;justify-content:space-between;font-size:0.8rem;">
          <span style="color:rgba(200,210,255,0.7);">🌐 Community Health</span>
          <span style="color:#00ffcc;font-weight:700;">${state.communityHealth}%</span>
        </div>
        <div class="meter-bar"><div class="meter-fill" style="width:${state.communityHealth}%"></div></div>
      </div>
      <div style="font-family:'Rajdhani',sans-serif;font-size:1rem;font-weight:600;color:#e0e8ff;margin:1rem 0 0.5rem;">🏅 Badge Collection</div>
      <div class="badge-grid">
        ${BADGES.map(b => `
          <div class="badge-card ${state.earnedBadges.has(b.id) ? "earned" : "locked"}">
            <span class="badge-emoji">${b.emoji}</span>
            <div class="badge-name">${b.name}</div>
            <div class="badge-desc">${b.desc}</div>
          </div>`).join("")}
      </div>
      <button class="choice-btn" style="margin-top:1.25rem;text-align:center;color:#ffd700;border-color:rgba(255,200,0,0.3);" onclick="setScreen('ending')">
        🏁 Lihat Ending & Statistik →
      </button>
    </div>`;
}

function renderSettings() {
  const themes = ["Neon Cyber", "Anime Future", "Hacker Terminal", "Minimal Clean"];
  return `
    <div class="settings-screen" style="padding-bottom:80px;">
      <button class="back-btn" onclick="setScreen('menu')">← Menu</button>
      <div style="font-family:'Rajdhani',sans-serif;font-size:1.4rem;font-weight:700;color:#00c8ff;margin-bottom:0.75rem;">⚙️ Settings</div>
      <div class="glass" style="border-radius:14px;overflow:hidden;">
        ${[
          ["music", "🎵", "Musik"],
          ["sfx", "🔊", "Sound FX"],
          ["animations", "✨", "Animasi"]
        ].map(([key, icon, label]) => `
          <div class="settings-row">
            <span style="font-size:0.9rem;">${icon} ${label}</span>
            <div class="toggle-wrap ${state.settings[key] ? "on" : ""}" onclick="toggleSetting('${key}')">
              <div class="toggle-knob"></div>
            </div>
          </div>`).join("")}
        <div class="settings-row">
          <span style="font-size:0.9rem;">🌐 Bahasa</span>
          <span style="font-size:0.85rem;color:#00c8ff;">Indonesia</span>
        </div>
      </div>
      <div style="font-family:'Rajdhani',sans-serif;font-size:1rem;color:#e0e8ff;margin:1rem 0 0.5rem;">🎨 Tema</div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:0.5rem;">
        ${themes.map(t => `
          <button class="choice-btn" style="${state.theme === t ? "border-color:rgba(0,200,255,0.6);color:#00c8ff;" : ""}" onclick="setTheme('${t}')">
            ${t === "Neon Cyber" ? "💜" : t === "Anime Future" ? "🌸" : t === "Hacker Terminal" ? "💚" : "🤍"} ${t}
          </button>`).join("")}
      </div>
    </div>`;
}

function renderEnding() {
  const total = state.goodChoices + state.toxicChoices;
  const empathyPct = total > 0 ? Math.round((state.goodChoices / total) * 100) : 0;
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
  return `
    <div class="ending-screen" style="padding-bottom:80px;">
      <div class="ending-trophy">🏆</div>
      <div style="font-family:'Rajdhani',sans-serif;font-size:2rem;font-weight:700;color:${ending.color};">${ending.title}</div>
      <div style="font-size:0.9rem;color:rgba(200,210,255,0.7);margin:0.75rem 0 1.25rem;line-height:1.6;">${ending.desc}</div>
      <div class="stat-grid">
        <div class="stat-card"><div class="stat-val">${state.xp}</div><div class="stat-label">Total XP</div></div>
        <div class="stat-card"><div class="stat-val">${empathyPct}%</div><div class="stat-label">Tingkat Empati</div></div>
        <div class="stat-card"><div class="stat-val">${state.communityHealth}%</div><div class="stat-label">Kesehatan Komunitas</div></div>
        <div class="stat-card"><div class="stat-val">${state.completedScenarios.size}</div><div class="stat-label">Skenario Selesai</div></div>
      </div>
      <div class="glass" style="padding:1rem;margin-bottom:1rem;">
        <div style="font-size:0.75rem;color:rgba(200,210,255,0.4);margin-bottom:0.25rem;">Tipe Kepribadian Digital</div>
        <div style="font-family:'Rajdhani',sans-serif;font-size:1.3rem;font-weight:700;color:#9632ff;">${getPersonality()}</div>
        <div style="font-size:0.75rem;color:rgba(200,210,255,0.4);margin-top:0.25rem;">Rank: ${getRank(state.xp)}</div>
      </div>
      <div class="quote-card" style="margin-bottom:1.25rem;">
        <div class="quote-text">Setiap keputusan kecilmu di dunia digital mencerminkan siapa kamu sebenarnya. Terima kasih sudah menjadi bagian dari generasi yang peduli. 💙</div>
        <div class="quote-author">— Aegis AI, CyberShield</div>
      </div>
      <button class="start-btn" onclick="restartGame()" style="padding:0.8rem 2rem;font-size:0.9rem;">MAIN LAGI</button>
    </div>`;
}

function renderNavBar() {
  const items = [
    { id: "menu", icon: "🏠", label: "Menu" },
    { id: "story", icon: "📖", label: "Story" },
    { id: "quick", icon: "⚡", label: "Quick" },
    { id: "analyzer", icon: "📸", label: "Scan" },
    { id: "progress", icon: "🏆", label: "Progress" },
  ];
  return `<div class="nav-bar">
    ${items.map(item => `<button class="nav-btn ${state.screen === item.id ? "active" : ""}" onclick="setScreen('${item.id}')"><span class="nav-icon">${item.icon}</span><span class="nav-label">${item.label}</span></button>`).join("")}
  </div>`;
}

function render() {
  updateBadges();
  const bodyClass = `${state.shake ? " shake" : ""}`;
  let screenHTML = "";
  if (state.screen === "intro") screenHTML = renderIntro();
  else if (state.screen === "menu") screenHTML = renderMenu();
  else if (state.screen === "story") screenHTML = renderStory();
  else if (state.screen === "quick") screenHTML = renderQuick();
  else if (state.screen === "analyzer") screenHTML = renderAnalyzer();
  else if (state.screen === "progress") screenHTML = renderProgress();
  else if (state.screen === "settings") screenHTML = renderSettings();
  else if (state.screen === "ending") screenHTML = renderEnding();

  app.className = `cs-root${state.shake ? " shake" : ""}`;
  app.innerHTML = `
    <div class="cyber-grid"></div>
    ${renderParticles()}
    ${state.xpPopup ? `<div class="xp-popup">${escapeHTML(state.xpPopup)}</div>` : ""}
    <div class="content">
      ${screenHTML}
    </div>
    ${state.screen !== "intro" && state.screen !== "ending" ? renderNavBar() : ""}
  `;
  attachEventsAfterRender();
}

function attachEventsAfterRender() {
  // Reinsert analyzer input text after render
  if (state.screen === "analyzer") {
    const input = document.getElementById("analyzerInput");
    if (input && state.analyzerText && input.value !== state.analyzerText) input.value = state.analyzerText;
  }
  if (state.screen === "story" && state.activeScenarioIndex !== null) {
    scrollChatToBottom();
  }
}

// global exposure for inline onclick
window.setScreen = setScreen;
window.startScenario = startScenario;
window.handleChoice = handleChoice;
window.nextStoryScenario = nextStoryScenario;
window.handleAnswer = handleAnswer;
window.analyzeText = analyzeText;
window.toggleSetting = toggleSetting;
window.setTheme = setTheme;
window.restartGame = restartGame;

// boot
render();
