#pragma strict

var flickerAmount = 1.0;

var color1 : Color = Color.red;
var color2 : Color = Color(1.0, 0.6, 0.15, 1.0);

private var originalIntensity : float;

function Start () {
	originalIntensity = light.intensity;
}

function Update () {
	light.intensity = originalIntensity + Random.Range(-flickerAmount, flickerAmount);
	light.color = Color.Lerp(color1, color2, Random.Range(0.0, 1.0));
}