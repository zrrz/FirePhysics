#pragma strict

function Ignite(mode : IgniteMode) {
	var joint : FixedJoint = GetComponent("FixedJoint");	
	if(joint != null) {
		joint.connectedBody.gameObject.SendMessage("Ignite", IgniteMode.Untouched, SendMessageOptions.DontRequireReceiver);
	}
	Destroy(gameObject);
}