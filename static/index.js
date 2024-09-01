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

const buttons = document.querySelectorAll(".meeting");
const closeButton = document.querySelectorAll(".meeting-close");
const modal = document.getElementById("modal");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		modal.showModal();
	});
});
closeButton.forEach((button) => {
	button.addEventListener("click", () => {
		modal.close();
	});
});

function onModalSubmit(event) {
	event.preventDefault();

	const name = event.target[0].value;
	const email = event.target[1].value;
	const phone = event.target[2].value;
	const status = document.getElementById("form-status");

	if (!name || !email || !phone) {
		status.textContent = "Preencha todos os campos.";
		status.style.color = "red";
		return;
	}

	if (!email.includes("@")) {
		status.textContent = "Email inválido.";
		status.style.color = "red";
		return;
	}

	if (phone.length !== 15) {
		status.textContent = "Telefone inválido.";
		status.style.color = "red";
		return;
	}

	if (new RegExp("^[0-9]*$").test(phone.replace(/\D/g, "")) === false) {
		status.textContent = "Telefone inválido.";
		status.style.color = "red";
		return;
	}

	status.textContent = "Entraremos em contato em breve.";
}
