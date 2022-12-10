var elBody = document.querySelector('.body');
var elBtn = document.querySelector('.clicks');
var elBtns = document.querySelector('.click');

elBtns.addEventListener('click', function () {
  elBody.classList.toggle('dark');
});

elBtn.addEventListener('click', function () {
  elBody.classList.toggle('dark');
});