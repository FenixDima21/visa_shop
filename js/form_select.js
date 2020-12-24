// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {

	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

	//Клик по кнопе. Открыть/ Закрыть. Select
	dropDownBtn.addEventListener('click', function () {
		dropDownList.classList.toggle('dropdown__list--visible');
		this.classList.toggle('dropdown__button--active');
	});

	//Выбор элемента списка. Запомнить выбранное значение. Закрыть dropdown
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
			dropDownBtn.classList.remove('dropdown__button--active');
			//Изменение css свойств кнопки при выборе
			dropDownBtn.classList.add('dropdown__button--closed');
		})
	});

	//Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownList.classList.remove('dropdown__list--visible');
			dropDownBtn.classList.remove('dropdown__button--active');
		}
	});

	//Нажатие на TAb или Escape для закрытия dropdown
	document.addEventListener('keydown', function (e) {
		if (e.key === "Escape" || e.key === "Tab") {
			dropDownList.classList.remove('dropdown__list--visible');
			dropDownBtn.classList.remove('dropdown__button--active');
		}
	});
});
