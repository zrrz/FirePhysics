#pragma strict

var match : Texture2D;
var matchGray : Texture2D;

var numMatches = 0;

function OnGUI() {
	if(numMatches > 0 )
		GUI.DrawTexture(Rect(0,0,60,60), match);
	else
		GUI.DrawTexture(Rect(0,0,60,60), matchGray);
		
	if(numMatches > 1 )
		GUI.DrawTexture(Rect(60,0,60,60), match);
	else
		GUI.DrawTexture(Rect(60,0,60,60), matchGray);
		
	if(numMatches > 2 )
		GUI.DrawTexture(Rect(120,0,60,60), match);
	else
		GUI.DrawTexture(Rect(120,0,60,60), matchGray);
}