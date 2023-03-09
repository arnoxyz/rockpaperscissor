
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
	number = 123;// TODO: generate random number 
	choice = number % 3;
	switch(choice){
		case (0): 
			return 'r'; 
			break;
		case (1): 
			return 'p'; 
			break;
		case (2): 
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
TODO: clean up if and check if it works
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


function main(){
	console.log("Welcome to the rps game!");
	//TODO: get player input and process it (check for invalid input)
	//console.log("Insert: r,p,s or rock,paper,scissor")
	let playerSelection = "r";
	let computerSelection = "r";
	let output = '';

	for (let i = 1; i <= rounds; i++) {
		//TODO:promp for input and get input
		playerSelection = "s";
		//TODO:process input with computer generated choice
		computerSelection = getComputerChoice();
		output = playRound(playerSelection, computerSelection);
		if (output == '-1'){
			break;
		}else{
			console.log(output);
		}
		//TODO:print score and round information
		console.log("round= "+score+", score="+output);	
		}
}

