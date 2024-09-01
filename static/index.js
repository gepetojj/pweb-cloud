anime({
	targets: "#title",
	translateY: [
		{ value: -70, duration: 500, delay: 0 },
		{ value: 0, duration: 1000, delay: 0 },
	],
});

anime({
	targets: "#subtitle",
	scale: [
		{ value: 1, duration: 1000, delay: 200 },
		{ value: 1.2, duration: 1000, delay: 0 },
		{ value: 1, duration: 500, delay: 0 },
	],
});

anime({
	targets: "#title-button",
	skewX: [
		{ value: -10, duration: 1000, delay: 2500 },
		{ value: 0, duration: 500, delay: 0 },
	],
	perspective: [
		{ value: 1000, duration: 1000, delay: 200 },
		{ value: 0, duration: 500, delay: 0 },
	],
});

anime({
	targets: "#logo path",
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: "easeInOutSine",
	duration: 1500,
	delay: function (el, i) {
		return i * 250;
	},
	direction: "alternate",
	loop: true,
});
