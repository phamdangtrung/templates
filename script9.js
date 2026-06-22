// ---- visitor counter ----
(function () {
  var key = 'aeromac_visits';
  var n = parseInt(localStorage.getItem(key) || '0', 10) + 1;
  localStorage.setItem(key, n);
  var el = document.getElementById('counter9');
  if (el) el.textContent = String(n).padStart(5, '0');
})();

// ---- contact form ----
function submitContact(e) {
  e.preventDefault();
  var name = document.getElementById('contact-name').value;
  var email = document.getElementById('contact-email').value;
  var msg = document.getElementById('contact-msg').value;
  if (name && email && msg) {
    alert('Thanks, ' + name + '! Your message has been sent.');
    document.getElementById('contact-name').value = '';
    document.getElementById('contact-email').value = '';
    document.getElementById('contact-msg').value = '';
  }
}
