#pragma strict

var player : GameObject;
var arrows : GameObject;
private var title : GameObject;
private var score : Score;
private var touchController : TouchController;

function Start(){
	title = GameObject.Find("Title");
	score = FindObjectOfType(Score);
	touchController = FindObjectOfType(TouchController);
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
		arrows = Resources.Load("Arrows");
		arrows = Instantiate(arrows,arrows.transform.position,arrows.transform.rotation);
		arrows.SetActive(true);
		touchController.init();
	#endif
}

function GameOver(){
	title.SetActive(true);
	
	#if UNITY_IPHONE || UNITY_ANDROID
		Destroy(arrows.gameObject);
	#endif
}

function IsPlaying(){
	return (title.activeSelf == false) ? true : false;
}