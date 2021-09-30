const navBtn = document.querySelector('.menu-icon');
const navigation = document.querySelector('#nav-menu');

navBtn.addEventListener('click', function(e) {
  navigation.classList.toggle('hide')
})