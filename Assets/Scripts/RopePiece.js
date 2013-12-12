#pragma strict

var ignited = false;

var timer : float = 0.0;
var burnTime : float = 1.0;
var igniteTime : float = 3.0;
var didIgnite = false;

function Update () {
	if(ignited) {
		timer += Time.deltaTime;
		if(timer > burnTime) {
			if(!didIgnite) {
				var colliders : Collider[] = Physics.OverlapSphere(transform.position, 0.32); 
				for(var i = 0; i < colliders.Length; i++) {
					colliders[i].SendMessage("Ignite", IgniteMode.Untouched, SendMessageOptions.DontRequireReceiver);
				}
				didIgnite = true;
			} else {
				if(timer > igniteTime) {
					Destroy(transform.hingeJoint);
				}
			}
		}
	}
	
	if(transform.position.y < -10.0) {
		Destroy(gameObject);
	}
}

function Ignite(mode : IgniteMode) {
	ignited = true;
	transform.GetChild(0).gameObject.SetActive(true);
	FireSound.Burn();
}

function OnCollisionEnter(col : Collision) {
	if(ignited)
		col.collider.SendMessage("Ignite", IgniteMode.Untouched, SendMessageOptions.DontRequireReceiver);
}