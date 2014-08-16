#pragma strict

var player : GameObject;
var arrows : GameObject;
private var title : GameObject;
private var score : Score;

function Start(){
	title = GameObject.Find("Title");
	score = FindObjectOfType(Score);
	
	#if UNITY_IPHONE || UNITY_ANDROID
	arrows = Instantiate(arrows,arrows.transform.position,arrows.transform.rotation);
	arrows.SetActive(false);
	#endif
}

function Update () {
	if( IsPlaying() == false && Input.GetKeyDown(KeyCode.Return)){
		GameStart();
	}
}

function OnGUI(){
	if(IsPlaying() == false && Event.current.type == EventType.MouseDown){
		GameStart();
	}
}

function GameStart(){
	title.SetActive(false);
	Instantiate (player, player.transform.position, player.transform.rotation);
	score.clearScore();
	
	#if UNITY_IPHONE || UNITY_ANDROID
		arrows.SetActive(true);
	#endif
}

function GameOver(){
	title.SetActive(true);
	
	#if UNITY_IPHONE || UNITY_ANDROID
		arrows.SetActive(false);
	#endif
}

function IsPlaying(){
	return (title.activeSelf == false) ? true : false;
}