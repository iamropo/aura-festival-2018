const body = document.querySelector('body')
const nav = document.querySelector('nav')

function toggleNavigationBarOpacity () {
	if (body.scrollTop > 10) {
		nav.style.backgroundColor = '#ffffff'
		nav.style.borderBottom = '1px solid #D3D3D3'
	} else if (body.scrollTop < 10) {
		nav.style.backgroundColor = ''
		nav.style.borderBottom = ''
	}
}

window.addEventListener('scroll', toggleNavigationBarOpacity)