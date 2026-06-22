// ---- fake retro visitor counter ----
(function () {
  var key = "mycorner_compact_visits";
  var n = parseInt(localStorage.getItem(key) || "1337420", 10) + 1;
  localStorage.setItem(key, n);
  var el = document.getElementById("counter7");
  if (el) el.textContent = String(n).padStart(7, "0");
})();

// ---- guestbook ----
function addEntry(e) {
  e.preventDefault();
  var name = document.getElementById("gb-name").value.trim();
  var msg = document.getElementById("gb-msg").value.trim();
  if (!name || !msg) return;

  var li = document.createElement("li");
  li.innerHTML = "<b>" + name + ":</b> " + msg;

  var list = document.getElementById("gb-list");
  list.insertBefore(li, list.firstChild);

  document.getElementById("gb-name").value = "";
  document.getElementById("gb-msg").value = "";
}
