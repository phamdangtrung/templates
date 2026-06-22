// ---- clock ----
function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  var minutes = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('clock').textContent = hours + ':' + minutes + ' ' + ampm;
}
setInterval(updateClock, 1000);
updateClock();

// ---- visitor counter ----
(function () {
  var key = 'xp_visits';
  var n = parseInt(localStorage.getItem(key) || '0', 10) + 1;
  localStorage.setItem(key, n);
  var el = document.getElementById('visitor-count');
  if (el) el.textContent = n.toLocaleString();
})();

// ---- contact form ----
function submitContact(e) {
  e.preventDefault();
  var name = document.getElementById('contact-name').value;
  var email = document.getElementById('contact-email').value;
  var msg = document.getElementById('contact-msg').value;
  if (name && email && msg) {
    alert('Thank you, ' + name + '! Your message has been sent.');
    document.getElementById('contact-name').value = '';
    document.getElementById('contact-email').value = '';
    document.getElementById('contact-msg').value = '';
  }
}
