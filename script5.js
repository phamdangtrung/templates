// ---- visitor counter ----
(function () {
  var key = 'aerospace_visits';
  var n = parseInt(localStorage.getItem(key) || '0', 10) + 1;
  localStorage.setItem(key, n);
  var el = document.getElementById('counter5');
  if (el) el.textContent = String(n).padStart(5, '0');
})();
