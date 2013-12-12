#pragma strict

//class FireSound extends MonoBehaviour {
	private static var instance : FireSound;
	
	function Start () {
		instance = this;
	}

	static function Burn() {
		if(!instance.audio.isPlaying)
			instance.audio.Play();
	}
//}


