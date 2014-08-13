#pragma strict

var scoreGUI : GUIText;
private var score : int;

function Start () {
	clearScore();
}

function Update(){
	scoreGUI.text = "Score : " + score.ToString();
}

function addScore (i : int) {
	score = score + i;
}

function clearScore(){
	score = 0;
}