const quotes = [
	{
		quote: "20년 후, 당신은 했던 일보다 하지 않았던 일로 인해 더 실망을 할 것이다.",
		author: "- 마크 트웨인",
	},
	{
		quote: "쉽게 포기하는 자는 결코 승리할 수 없고, 승리하는 자는 결코 포기하지 않는다.",
		author: "- 나폴레옹 힐",
	},
	{
		quote: "인생의 실패자들은 포기할 때 자신이 성공에서 얼마나 가까이 있었는지 모른다.",
		author: "- 토마스 에디슨",
	},
	{
		quote: "마찰 없이 보석을 광나게 할 수 없듯, 시련 없이 사람을 완전하게 할 수 없다.",
		author: "- 에이브러햄 링컨",
	},
	{
		quote: "위대한 일을 하는 유일한 방법은 당신이 이 일을 진짜 사랑하는 것이다.",
		author: "- 스티브 잡스",
	},
	{
		quote: "불행하면 인생이 널 비웃을 것이고, 행복하면 인생이 네게 웃음을 지을 것이다.",
		author: "- 찰리 채플린",
	},
	{
		quote: "인생은 원래 공평하지 못하다. 그런 현실에 대하여 불평할 생각하지 말고 받아들여라.",
		author: "- 빌 게이츠",
	},
	{
		quote: "최선을 다하고 있다고 말해봤자 소용없다. 필요한 일을 함에 있어서는 반드시 성공해야 한다.",
		author: "- 윈스턴 처칠",
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
