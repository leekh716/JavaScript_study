const range = document.querySelector("#range");
const number = document.querySelector("#guess input");
const button = document.querySelector("#guess input:last-child");
const result = document.querySelector("#show");

const HIDDEN_CLASSNAME = "hidden";


function showError(str){
	alert(str);
}

function maxNumber(){
	if (number.value > range.value)
	{
		showError("Range Over!");
		number.value = range.value;
	}
}

function clickPlay(event){
	event.preventDefault();
	if (range.value === "" || number.value === "")
	{
		result.classList.remove(HIDDEN_CLASSNAME);
		showError("Choose a number!");
	}
	else
	{
		result.classList.remove(HIDDEN_CLASSNAME);
		const answer = document.querySelector("#answer");
		const machineAnswer = String(Math.ceil(Math.random() * range.value));
		answer.innerText = `You chose: ${number.value}, the machine chose: ${machineAnswer}.`;
		const wonLose = result.querySelector("#result");
		if (number.value === machineAnswer)
			wonLose.innerText = "You won!";
		else
			wonLose.innerText = "You lost!";
	}
}

number.addEventListener("input", maxNumber);
button.addEventListener("click", clickPlay);
