document.addEventListener('DOMContentLoaded', () => {
	let iconbars = document.querySelector('.layout__menu-toggle .fa-bars');
	let iconxmark = document.querySelector('.layout__menu-toggle .fa-xmark');
	let button = document.querySelector('.layout__menu-toggle');
	let aside = document.querySelector('.layout__aside');
	button.addEventListener('click', (event) => {
		let visible = document.querySelector('.layout__aside--visible');
		if (!visible) {
			aside.classList.add('layout__aside--visible');
			iconbars.style.opacity = 0;
			iconxmark.style.opacity = 1;
		} else {
			aside.classList.remove('layout__aside--visible');
			iconbars.style.opacity = 1;
			iconxmark.style.opacity = 0;
		}
	});
	window.addEventListener('resize', (event) => {
		let size = parseInt(document.body.clientWidth);
		if (size <= 1060) {
			aside.classList.remove('layout__aside--visible');
			iconbars.style.opacity = 1;
			iconxmark.style.opacity = 0;
		}
	});
});
