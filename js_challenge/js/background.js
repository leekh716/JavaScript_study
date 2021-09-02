const images = [
	"0.JPG",
	"1.JPG",
	"2.JPG",
	"3.JPG",
	"4.JPG",
	"5.JPG",
	"6.JPG",
	"7.JPG",
	"8.JPG",
	"9.JPG",
	"10.JPG",
	"11.JPG",
	"12.JPG"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
const backgroundImg = document.body;
backgroundImg.style.backgroundImage = `url('img/${chosenImage}')`;
backgroundImg.style.backgroundRepeat = "no-repeat";
backgroundImg.style.backgroundSize = "100% auto";
// bgImage.id = "bg";
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);
