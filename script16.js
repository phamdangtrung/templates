// ---- visitor counter ----
(function () {
  var key = 'y2kaero_visits';
  var n = parseInt(localStorage.getItem(key) || '0', 10) + 1;
  localStorage.setItem(key, n);
  var el = document.getElementById('counter12');
  if (el) el.textContent = String(n).padStart(7, '0');
})();

// ---- guestbook ----
function addEntry(e) {
  e.preventDefault();
  var name = document.getElementById('gb-name').value.trim();
  var msg = document.getElementById('gb-msg').value.trim();
  if (!name || !msg) {
    alert('Please enter both name and message!');
    return;
  }
  var list = document.getElementById('gb-list');
  var li = document.createElement('li');
  li.innerHTML = '<b>' + escapeHtml(name) + ':</b> ' + escapeHtml(msg);
  li.style.background = 'linear-gradient(180deg, #e8f4ff, #d8e8f8)';
  li.style.padding = '5px 8px';
  li.style.marginBottom = '5px';
  li.style.borderRadius = '4px';
  li.style.border = '1px solid #99ccff';
  list.insertBefore(li, list.firstChild);
  document.getElementById('gb-name').value = '';
  document.getElementById('gb-msg').value = '';
}

function escapeHtml(text) {
  var div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ---- bubble cursor effect ----
document.addEventListener('DOMContentLoaded', function() {
  cursoreffects.bubbleCursor();
});
