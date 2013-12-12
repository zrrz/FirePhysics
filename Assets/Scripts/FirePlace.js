#pragma strict

var ignited = false;
var win = false;

private var timer : float = 0.0;
var winTime : float = 2.0;

private var fire : GameObject;
var growSpeed : float = 1.0f;

function Start() {
	fire = transform.FindChild("Fire").gameObject;
}

function Update() {
	if(ignited && !win) {
		if(fire.transform.localScale.x < 1.0) {
			fire.transform.localScale += Vector3.one * growSpeed * Time.deltaTime;
		}
		timer += Time.deltaTime;
		
		if(timer > winTime) {
			win = true;
		}
	}
}

function Ignite(mode : IgniteMode) {
	if(mode == IgniteMode.Untouched) {
		transform.FindChild("BigFire").gameObject.SetActive(true);
		transform.FindChild("Fire").gameObject.SetActive(true);
		transform.FindChild("light").gameObject.SetActive(true);
		ignited = true;
	}
}

function OnGUI() {
	if(win) {
		GUI.Box(Rect(Screen.width/2 - 150, Screen.height/2 - 150, 300, 300), "YOU WIN!");
		if(Application.loadedLevel == Application.levelCount - 1) {
			if(GUI.Button(Rect(Screen.width/2 - 80, Screen.height/2 - 40, 160, 80), "Play Again")) {
				Application.LoadLevel(0);
			}
		} else {
			if(GUI.Button(Rect(Screen.width/2 - 80, Screen.height/2 - 40, 160, 80), "Next Level")) {
				Application.LoadLevel(Application.loadedLevel + 1);
			}
		}
	}
}