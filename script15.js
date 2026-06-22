// ---- visitor counter ----
(function () {
  var key = 'y2ksketch13_visits';
  var n = parseInt(localStorage.getItem(key) || '0', 10) + 1;
  localStorage.setItem(key, n);
  var el = document.getElementById('counter13');
  if (el) el.textContent = String(n).padStart(7, '0');
})();

// ---- archive toggle ----
function toggleArchive() {
  var body = document.getElementById('archive-body');
  var btn = document.querySelector('.archive-toggle');
  
  if (body.classList.contains('collapsed')) {
    body.classList.remove('collapsed');
    btn.textContent = '[−]';
  } else {
    body.classList.add('collapsed');
    btn.textContent = '[+]';
  }
}

// ---- guestbook ----
function addEntry(e) {
  e.preventDefault();
  var name = document.getElementById('gb-name').value.trim();
  var msg = document.getElementById('gb-msg').value.trim();
  if (!name || !msg) {
    alert('Please sign your name and leave a note!');
    return;
  }
  var list = document.getElementById('gb-list');
  var li = document.createElement('li');
  li.innerHTML = '<b>' + escapeHtml(name) + ':</b> ' + escapeHtml(msg);
  li.style.background = 'linear-gradient(180deg, #fff, #f5f0e6)';
  li.style.padding = '8px 12px';
  li.style.marginBottom = '8px';
  li.style.borderRadius = '4px';
  li.style.border = '2px dashed rgba(61,90,128,.3)';
  li.style.transform = 'rotate(0.5deg)';
  list.insertBefore(li, list.firstChild);
  document.getElementById('gb-name').value = '';
  document.getElementById('gb-msg').value = '';
}

function escapeHtml(text) {
  var div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
