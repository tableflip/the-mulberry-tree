require('svg4everybody')()
// window.$ = window.jQuery = require('jquery')

var navToggler = document.querySelector('.navbar-toggler')
var navTogglerTarget = document.querySelector(navToggler.getAttribute('data-target'))

navToggler.addEventListener('click', function (e) {
  e.preventDefault()

  if (navToggler.classList.contains('collapsed')) {
    navToggler.innerHTML = '&#9776;'
    navTogglerTarget.setAttribute('aria-expanded', 'false')
  } else {
    navToggler.innerHTML = '&times;'
    navTogglerTarget.setAttribute('aria-expanded', 'true')
  }

  navToggler.classList.toggle('collapsed')
  navTogglerTarget.classList.toggle('in')
})
