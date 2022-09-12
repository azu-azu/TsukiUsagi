particlesJS('js-sea-stars', {
	particles: {
		number: {
			value: 200,
			density: { enable: true, value_area: 700 },
		},
		// color: { value: '#fff98e' },
		// color: { value: '#95edff' },
		color: { value: '#fff' },
		shape: {
			// type: 'circle',
			type: 'star',
			stroke: { width: 0.5, color: '#fff98e' },
			polygon: { nb_sides: 5 },
			image: { src: 'img/github.svg', width: 100, height: 100 },
		},
		opacity: {
			value: 0.5,
			random: true,
			anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
		},
		size: {
			value: 4,
			random: true,
			anim: { enable: true, speed: 10, size_min: 1, sync: false },
		},
		line_linked: {
			enable: false,
			distance: 200,
			color: '#ffffff',
			opacity: 1,
			width: 2,
		},
		move: {
			enable: true,
			speed: 1,
			direction: 'right',
			random: true,
			straight: false,
			out_mode: 'bounce',
			bounce: true,
			attract: { enable: false, rotateX: 600, rotateY: 1200 },
		},
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: { enable: false, mode: 'repulse' },
			onclick: { enable: true, mode: 'push' },
			resize: true,
		},
		modes: {
			grab: { distance: 400, line_linked: { opacity: 1 } },
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3,
			},
			repulse: { distance: 200, duration: 0.4 },
			push: { particles_nb: 4 },
			remove: { particles_nb: 2 },
		},
	},
	retina_detect: true,
});
