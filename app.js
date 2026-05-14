function openModal() {
  document.getElementById("overlay").style.display = "block";
}

function closeModal() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("course1").value = "";
  document.getElementById("course2").value = "";
  document.getElementById("time1").value = "";
  document.getElementById("time2").value = "";
  showError("");
}

function showError(msg) {
  const el = document.getElementById("formError");
  el.textContent = msg;
  el.style.display = msg ? "block" : "none";
}

function submitClash() {
  const c1 = document.getElementById("course1").value;
  const c2 = document.getElementById("course2").value;
  const t1 = document.getElementById("time1").value;
  const t2 = document.getElementById("time2").value;

  if (!c1 || !c2) return showError("Please select both courses.");
  if (!t1 || !t2) return showError("Please select both times.");
  if (c1 === c2)  return showError("Please choose two different courses.");

  addPost(c1, c2, t1, t2);
  closeModal();
}

function addPost(c1, c2, t1, t2) {
  document.getElementById("emptyMsg").style.display = "none";

  const post = document.createElement("div");
  post.className = "post";
  post.style.cssText = "border:1px solid #ccc; border-radius:6px; padding:0.75rem 1rem; margin-bottom:0.75rem; display:flex; justify-content:space-between; align-items:center;";

  post.innerHTML = `
    <div>
      <strong>${c1} clashes with ${c2}</strong><br/>
      <small>${t1} — ${t2}</small>
    </div>
    <button onclick="this.closest('.post').remove(); checkEmpty();">🗑 Delete</button>
  `;

  document.getElementById("postContainer").prepend(post);
}

function checkEmpty() {
  const posts = document.querySelectorAll(".post");
  document.getElementById("emptyMsg").style.display = posts.length === 0 ? "block" : "none";
}

document.getElementById("searchInput").addEventListener("input", function () {
  const term = this.value.toLowerCase();
  document.querySelectorAll(".post").forEach(post => {
    post.style.display = post.textContent.toLowerCase().includes(term) ? "flex" : "none";
  });
});

document.getElementById("overlay").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});

window.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
