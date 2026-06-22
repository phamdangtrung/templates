// ---- fake retro visitor counter ----
(function () {
  var key = "mycorner_visits";
  var n = parseInt(localStorage.getItem(key) || "1337420", 10) + 1;
  localStorage.setItem(key, n);
  var el = document.getElementById("counter");
  if (el) el.textContent = String(n).padStart(7, "0");
})();

// ---- guestbook ----
function addEntry(e) {
  e.preventDefault();
  var name = document.getElementById("gb-name").value.trim() || "anonymous";
  var msg = document.getElementById("gb-msg").value.trim();
  if (!msg) return;

  var li = document.createElement("li");
  var b = document.createElement("b");
  b.textContent = name + ": ";
  li.appendChild(b);
  li.appendChild(document.createTextNode(msg)); // safe text, no HTML injection

  document.getElementById("gb-list").prepend(li);
  document.getElementById("gb-name").value = "";
  document.getElementById("gb-msg").value = "";
}
