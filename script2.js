// ---- guestbook for concept 2 ----
function addGuestbookEntry(e) {
  e.preventDefault();
  var name = document.getElementById("gb-name2").value.trim();
  var msg = document.getElementById("gb-msg2").value.trim();
  if (!name || !msg) return;

  var div = document.createElement("div");
  div.className = "message";
  var nameSpan = document.createElement("span");
  nameSpan.className = "msg-name";
  nameSpan.textContent = name + ":";
  var textSpan = document.createElement("span");
  textSpan.className = "msg-text";
  textSpan.textContent = " " + msg;
  div.appendChild(nameSpan);
  div.appendChild(textSpan);

  var container = document.getElementById("gb-messages2");
  container.insertBefore(div, container.firstChild);

  document.getElementById("gb-name2").value = "";
  document.getElementById("gb-msg2").value = "";
}
