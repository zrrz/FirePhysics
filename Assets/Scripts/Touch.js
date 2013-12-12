#pragma strict

enum IgniteMode {
	Touched, Untouched
}

var fireParticles : GameObject;

function Start() {
	fireParticles.SetActive(false);
}

function Update () {
	if(Input.GetButton("Fire1")) {
		var hit : RaycastHit;
		if(Physics.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), hit)) {
			fireParticles.transform.position = hit.point;
			hit.collider.SendMessage("Ignite", IgniteMode.Touched, SendMessageOptions.DontRequireReceiver);
		} 
	} 
	if(Input.GetButtonDown("Fire1")) {
		fireParticles.SetActive(true);
	} 
	if(Input.GetButtonUp("Fire1")) {
		fireParticles.SetActive(false);
	}
}

function OnGUI() {
	
}