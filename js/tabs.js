+ function () {

	document.querySelector('.tabs__title-item').classList.add('active')
	document.querySelector('.tabs__content-item').classList.add('active')

	function selectPanel(e) {
		var target = e.target.dataset.target

		document.querySelectorAll('.tabs__title-item, .tabs__content-item').forEach(el => el.classList.remove('active'))
		e.target.classList.add('active')
		// console.log(document.querySelector('.' + target))
		document.querySelector('.' + target).classList.add('active')
	}

	document.querySelectorAll('.tabs__title-item').forEach(el => {
		el.addEventListener('click', selectPanel)
	})

}();