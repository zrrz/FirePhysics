#pragma strict

var fireEmitter : GameObject;

var ignited = false;

var audioEffect : GameObject;

function Ignite(mode : IgniteMode) {
	if(!ignited) {
		Instantiate(fireEmitter, transform.position, Quaternion.identity);
		
		var t_manager : MatchstickManager = GameObject.Find("MatchstickManager").GetComponent.<MatchstickManager>();
		t_manager.numMatches++;
		
		ignited = true;
		
		var colliders : Collider[] = Physics.OverlapSphere(transform.position, 0.8); 
		for(var i = 0; i < colliders.Length; i++) {
			colliders[i].SendMessage("Ignite", IgniteMode.Untouched, SendMessageOptions.DontRequireReceiver);
		}
		
		audioEffect.SetActive(true);
		Destroy(audioEffect, audioEffect.audio.clip.length);
		audioEffect.transform.parent = null;
		
		Destroy(gameObject);
	}
}