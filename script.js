document.getElementById("option-no").addEventListener('click', (e) => {
  alert('You need to be a Hillcrest student to access this site.');
  window.close();
});

document.getElementById("option-yes").addEventListener('click', (e) => {
  document.getElementById("question").style.display = 'none';
  document.getElementById("instructions").style.display = 'flex';

  document.getElementById('title').innerHTML = 'How to join HillCraft'
});
