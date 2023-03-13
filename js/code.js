//starts the program
let score = 0;
let rounds = 5;
main();

/*
gets random number and % 3 will provide the choice
of the computer player (number % 3 = (0,1,2) 
(0,1,2) is then the outcome (0=r,1=p,2=s)
*/
function getComputerChoice(){
	number = Math.floor(Math.random() * 3) + 1;
	switch(number){
		case (1): 
			return 'r'; 
			break;
		case (2): 
			return 'p'; 
			break;
		case (3): 
			return 's'; 
			break;
		default: 
			console.log("invalid computer choice");
			return '-1';
			break;
	}
}

/*
arguments player[r,p,s],computer[r,p,s])
rock beats scissor (rs)
paper beats rock (pr)
scissor beats paper (sp)
(r,p,s) x (r,p,s) = 9 combinations possible 
{(rr),(rp),(rs),(pr),(pp),(ps),(sr),(sp),(ss)}
return values (t,w,l) (player perspective)
tie (t), player wins (w), player lose (l) (so computer wins)	
*/
function playRound(playerSelection, computerSelection){
	//tie player==computer (inputs (rr),(pp),(ss))
	if(playerSelection==computerSelection){
		return 'tie!'; //(rr,pp,ss), score doesnt change
	}else{
		//player wins (inputs(rs),(pr),(sp), score++
		if(playerSelection=="r" && computerSelection=="s"){
			score++;
			return 'you win!';
		}else if(playerSelection=="p" && computerSelection=="r"){
			score++;
			return 'you win!';
		}else if(playerSelection=="s" && computerSelection=="p"){
			score++;
			return 'you win!';
		//player lose (inputs (sr),(rp),(ps), score--
		}else if(playerSelection=="s" && computerSelection=="r"){
			score--;
			return 'you lose!';
		}else if(playerSelection=="r" && computerSelection=="p"){
			score--;
			return 'you lose!';
		}else if(playerSelection=="p" && computerSelection=="s"){
			score--;
			return 'you lose!';
		}else{
			return '-1';
		}
	}
}
function checkPlayerInput(playerSelection){
	if(playerSelection == null){
		return '-1';
	}
	if(playerSelection == 'r' || playerSelection.toLowerCase() == 'rock'){
		return "r";
	}else if(playerSelection == 's' || playerSelection.toLowerCase() == 'scissor'){
		return "s";
	}else if(playerSelection == 'p' || playerSelection.toLowerCase() == 'paper'){
		return 'p';
	}else{
		return '-1';
	}
}


function main(){
	uiEdition();
}

function uiEdition(){
	let playerSelection = "r";
	let computerSelection = "r";
	let output = '';
	let counter = 0;

	//TODO: get playerSelection from button click
	//TODO: output score and informations
	
	/*
	while (counter < rounds) {
		//playerSelection = prompt("enter your choice [r,p,s] ???");
		if(checkPlayerInput(playerSelection)!='-1'){
		computerSelection = getComputerChoice();
			//console.log("you:" + playerSelection + " vs. "+"KI:" + computerSelection);
			output = playRound(playerSelection, computerSelection);
			if (output == '-1'){
				break;
			}else{
				console.log(output);
			}
			console.log("round= "+score+", score="+output);	
			counter++;
		}else{
			console.log("invalid input! please insert: r,p or s");
		}
	}
	*/
}

function consoleEdition(){
	console.log("Welcome to the rps game!");
	console.log("Enter [r,rock] or [p,paper] or [s,scissor]");
	let playerSelection = "r";
	let computerSelection = "r";
	let output = '';
	let counter = 0;

	while (counter < rounds) {
		playerSelection = prompt("enter your choice [r,p,s] ???");
		if(checkPlayerInput(playerSelection)!='-1'){
		computerSelection = getComputerChoice();
			console.log("you:" + playerSelection + " vs. "+"KI:" + computerSelection);
			output = playRound(playerSelection, computerSelection);
			if (output == '-1'){
				break;
			}else{
				console.log(output);
			}
			console.log("round= "+score+", score="+output);	
			counter++;
		}else{
			console.log("invalid input! please insert: r,p or s");
		}
	}
}

