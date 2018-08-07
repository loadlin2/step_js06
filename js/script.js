console.log('u a ' + window.location);



const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let comp = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
console.log('Your choice: 0 - rock, 1 - scissors, 2 - paper');
if ((player==2)&&(comp==0) || (player==1)&&(comp==2) ||(player==0)&&(comp==1))
 {
	console.log ('winner player ' + player);
	console.log ('pass comp ' + comp);
}
else if (player===comp)
{
	console.log('without winner');
	console.log ('choiee player ' + player);
	console.log ('choice comp ' + comp);
} else {
		console.log ('pass player ' + player);
	console.log ('winner comp ' + comp);
}