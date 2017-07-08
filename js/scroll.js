const body = document.querySelector('body')
const nav = document.querySelector('nav')

function toggleNavigationBarOpacity () {
	if (body.scrollTop > 100) {
		nav.style.backgroundColor = '#ffffff'
	} else if (body.scrollTop < 100) {
		nav.style.backgroundColor = ''
	}
}

window.addEventListener('scroll', toggleNavigationBarOpacity)