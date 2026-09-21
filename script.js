const btn = document.querySelector("#theme-btn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const API_BASE = "https://profilehw.onrender.com";

async function loadIntroTitle() {
  const titleEl = document.querySelector("#intro-title");

  try {
    const res = await fetch(`${API_BASE}/`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    titleEl.textContent = data.message;
  } catch (err) {
    console.error("백엔드 메시지를 불러오지 못했습니다:", err);
  }
}

loadIntroTitle();
