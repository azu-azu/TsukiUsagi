document.addEventListener('DOMContentLoaded', () => {
	const isPaged = document.body.classList.contains('paged');
	const target = document.querySelector('#js-content-start');
	if (isPaged && target) {
		// target.scrollIntoView({ behavior: 'smooth' }); // ぬるっと
		target.scrollIntoView({ behavior: 'auto' }); // 即ジャンプ
	}
});
