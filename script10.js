// ---- visitor counter ----
(function () {
  var key = 'skeuaero_visits';
  var n = parseInt(localStorage.getItem(key) || '0', 10) + 1;
  localStorage.setItem(key, n);
  var el = document.getElementById('counter10');
  if (el) el.textContent = String(n).padStart(5, '0');
})();
