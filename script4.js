// ---- visitor counter ----
(function () {
  var key = 'cyber_zone_visits';
  var n = parseInt(localStorage.getItem(key) || '1337', 10) + 1;
  localStorage.setItem(key, n);
  var el = document.getElementById('counter4');
  if (el) el.textContent = String(n).padStart(6, '0');
})();

// ---- guestbook ----
function signGuestbook(e) {
  e.preventDefault();
  var name = document.getElementById('gb-name4').value.trim();
  var msg = document.getElementById('gb-msg4').value.trim();
  if (!name || !msg) return;

  var div = document.createElement('div');
  div.className = 'gb-entry';
  var nameSpan = document.createElement('span');
  nameSpan.className = 'gb-name';
  nameSpan.textContent = name + ':';
  var msgSpan = document.createElement('span');
  msgSpan.className = 'gb-msg';
  msgSpan.textContent = ' ' + msg;
  div.appendChild(nameSpan);
  div.appendChild(msgSpan);

  var container = document.getElementById('gb-entries4');
  container.insertBefore(div, container.firstChild);

  document.getElementById('gb-name4').value = '';
  document.getElementById('gb-msg4').value = '';
}
