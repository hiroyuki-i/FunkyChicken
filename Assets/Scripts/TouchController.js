#pragma strict

private var x : int;
private var player : Player;
private var displaySize : Vector2;

function init(){
	player = FindObjectOfType(Player);
}

function Update () {
	if(Input.touchCount > 0){
		var touchPoint : Vector2 = Camera.main.ScreenToWorldPoint(Input.GetTouch(0).position);
		Debug.Log("touchPoint" + touchPoint);
		if(touchPoint.x > 0){
			player.playerPositioning(1);
		}else if(touchPoint.x < 0){
			player.playerPositioning(-1);
		}
	}
	Debug.Log(Input.touchCount);
}

/*
function Update () {
	if(Input.touchCount > 0){
		var touchPoint : Vector2 = Camera.main.ScreenToWorldPoint(Input.GetTouch(0).position);
		var touchObject : Collider2D  = Physics2D.OverlapPoint(touchPoint);
		Debug.Log(Input.GetTouch(0).position);
		if(touchObject){
			var hitObject : RaycastHit2D = Physics2D.Raycast(touchPoint,-Vector2.up);
			var objName = hitObject.collider.gameObject.name;
			Debug.Log(objName);
			if(objName == "arrowLeft"){
				player.playerPositioning(1);
			}
			if(objName == "arrowRight"){
				player.playerPositioning(-1);
			}
		}
	}
	Debug.Log(Input.touchCount);
}
*/