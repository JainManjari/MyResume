//var count=0;
var button1=document.getElementById("c-color");
var circle=document.getElementById("circle");
var color=["red","black","yellow","orange","green","purple"]
button1.addEventListener("click",function()
{
	// if(count==0)
	// {
	// 	circle.style.backgroundColor="red";
	// }
	// else if(count==1)
	// {
	// 	circle.style.backgroundColor="black";
	// }
	// else if(count==2)
	// {
	// 	circle.style.backgroundColor="yellow";
	// }
	// else if(count==3)
	// {
	// 	circle.style.backgroundColor="orange";
	// }
	// else if(count==4)
	// {
	// 	circle.style.backgroundColor="green";
	// }
	// else
	// {
	// 	circle.style.backgroundColor="purple";
	// 	count=0;
	// }
	// count++;
	var rand=color[Math.floor(Math.random()*color.length)];
	circle.style.backgroundColor=rand;
});

var sh=["shape","rectangle","circle1", "oval","triangle-up","triangle-down", "triangle-top-left", "triangle-bottom-left", "triangle-bottom-right", "triangle-left", "triangle-right"];

var sh1="shape";
var button2=document.getElementById("c-shape");
button2.addEventListener("click", function()
{
     var rand=sh[Math.floor(Math.random()*sh.length)];
     document.getElementById(sh1).setAttribute("id",rand);
     sh1=rand;

})