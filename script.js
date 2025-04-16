

// Popupformulier openen/sluiten
// Pop-up openen
document.getElementById('open-idee').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('idee-popup').style.display = 'block';
});

// Pop-up sluiten via kruisje
document.querySelector('.idee-close').addEventListener('click', function() {
  document.getElementById('idee-popup').style.display = 'none';
});

// Sluiten als je buiten het formulier klikt
window.addEventListener('click', function(e) {
  if (e.target.id === 'idee-popup') {
    document.getElementById('idee-popup').style.display = 'none';
  }
});
