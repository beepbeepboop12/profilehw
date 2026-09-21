const btn = document.querySelector("#theme-btn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const API_BASE = "https://profilehw.onrender.com";

async function callApi(path, statusEl, resultEl) {
  statusEl.textContent = "호출 중...";
  statusEl.classList.remove("error", "success");
  resultEl.textContent = "";

  try {
    const res = await fetch(`${API_BASE}${path}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    statusEl.textContent = "✅ 성공";
    statusEl.classList.add("success");
    resultEl.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    statusEl.textContent = "❌ 실패 (서버가 잠시 잠들어 있을 수 있어요. 잠시 후 다시 시도해주세요)";
    statusEl.classList.add("error");
    resultEl.textContent = err.message;
  }
}

function loadApiData() {
  callApi("/", document.querySelector("#root-status"), document.querySelector("#root-result"));
  callApi("/health", document.querySelector("#health-status"), document.querySelector("#health-result"));
}

document.querySelector("#refresh-btn").addEventListener("click", loadApiData);

loadApiData();