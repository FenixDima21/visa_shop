const toTop = document.querySelector('.arrow__up')

window.addEventListener('scroll', () => {
	if (window.pageYOffset > 300) {
		toTop.classList.add('active');
	} else {
		toTop.classList.remove('active');
	}
})