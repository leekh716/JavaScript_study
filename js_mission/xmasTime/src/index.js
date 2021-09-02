const clockTitle = document.querySelector(".js-clock");

// function getDiff() {
// 	const now = new Date();
// 	const xmas = new Date(2021, 11, 25);
// 	const day = Math.floor((xmas.getTime() - now.getTime()) / (1000 * 3600 * 24));
// 	const hour = String(24 - now.getHours()).padStart(2, "0");
// 	const minute = String(60 - now.getMinutes()).padStart(2, "0");
// 	const second = String(60 - now.getSeconds()).padStart(2, "0");

// 	clockTitle.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
// }
function getDiff() {
	const now = new Date();
	const xmas = new Date(2021, 11, 25);
	const seconds = Math.floor((xmas - now) / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const day = String(days).padStart(2, "0");
	const hour = String(hours % 24).padStart(2, "0");
	const minute = String(minutes % 60).padStart(2, "0");
	const second = String(seconds % 60).padStart(2, "0");

	clockTitle.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
}

getDiff();
setInterval(getDiff, 1000);
