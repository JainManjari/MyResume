var toggle=false;
var border=document.getElementById("border");
var ball=document.getElementById("ball");
var htag=document.getElementsByTagName("h1")[0];
var btag=document.getElementsByTagName("body")[0];

border.addEventListener("click", function ()
{
	if(!toggle)
	{
		btag.style.backgroundColor="black";
		border.style.borderColor="white";
		border.style.backgroundColor="white";
		htag.style.color="white";
		ball.style.marginLeft="100px";
		toggle=true;
	}
	else
	{

		btag.style.backgroundColor="white";
		border.style.borderColor="black";
		border.style.backgroundColor="white";
		htag.style.color="black";
		ball.style.marginLeft="1px";
		toggle=false;
	}
})
