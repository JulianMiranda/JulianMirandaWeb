document.addEventListener('DOMContentLoaded', (event) => {
	setTimeout(() => {
		document.querySelector('#load-iframe-map').innerHTML = `<iframe
    class="contact__iframe"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4536.097330800159!2d-78.50189596059214!3d-0.14772436143168075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sec!4v1690686255170!5m2!1ses-419!2sec"
></iframe>`;
	}, 500);
});
