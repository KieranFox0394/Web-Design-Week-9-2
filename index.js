var gameCount = 1;
var userWins = 0;
var resultText = document.getElementById("result");

document.getElementById("rock").onclick = function(){
	if(gameCount <=3 && userWins < 1){
		gameCount++;
		var randomChoice = Math.floor(Math.random() * 3);
		if(randomChoice == 0){//rock - tie
			document.getElementById("random").src = "img/rock.png";
			result.appendChild(document.createElement("br"));
			result.appendChild(document.createTextNode("Tie"));
		}else if (randomChoice == 1){//paper
			document.getElementById("random").src = "img/paper.png";
			result.appendChild(document.createElement("br"));
			result.appendChild(document.createTextNode("You Lose"));
		}else{//scissors
			document.getElementById("random").src = "img/scissors.png";
			result.appendChild(document.createElement("br"));
			result.appendChild(document.createTextNode("You Win"));
			userWins++;
			gameOver();
		}
	}
}

document.getElementById("paper").onclick = function(){
	if(gameCount <=3 && userWins < 1){
		gameCount++;
		var randomChoice = Math.floor(Math.random() * 3);
		if(randomChoice == 0){//rock
			document.getElementById("random").src = "img/rock.png";
			result.appendChild(document.createElement("br"));
			result.appendChild(document.createTextNode("You Win"));
			userWins++;
			gameOver();
		}else if (randomChoice == 1){//paper
			document.getElementById("random").src = "img/paper.png";
			result.appendChild(document.createElement("br"));
			result.appendChild(document.createTextNode("Tie"));
		}else{//scissors
			document.getElementById("random").src = "img/scissors.png";
			result.appendChild(document.createElement("br"));
			result.appendChild(document.createTextNode("You Lose"));
		}
	}
}

document.getElementById("scissors").onclick = function(){
	if(gameCount <=3 && userWins < 1){
		gameCount++;
		var randomChoice = Math.floor(Math.random() * 3);
		if(randomChoice == 0){//rock
			document.getElementById("random").src = "img/rock.png";
			result.appendChild(document.createElement("br"));
			result.appendChild(document.createTextNode("You Lose"));
		}else if (randomChoice == 1){//paper
			document.getElementById("random").src = "img/paper.png";
			result.appendChild(document.createElement("br"));
			result.appendChild(document.createTextNode("You Win"));
			userWins++;
			gameOver();
		}else{//scissors
			document.getElementById("random").src = "img/scissors.png";
			result.appendChild(document.createElement("br"));
			result.appendChild(document.createTextNode("Tie"));
		}
	}

}


function gameOver(){
		var random = document.getElementById('random');
		random.style.opacity = 1.0;
		var rock = document.getElementById('rock');
		rock.style.opacity = 1.0;
		var paper = document.getElementById('paper');
		paper.style.opacity = 1.0;
		var scissors = document.getElementById('scissors');
		scissors.style.opacity = 1.0;
		
		result.appendChild(document.createElement("br"));
		result.appendChild(document.createTextNode("Game Over"));
	}