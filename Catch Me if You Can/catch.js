var cat=document.getElementById("catch");
var viewHeight=window.innerHeight;
var viewWidth=window.innerWidth;

window.addEventListener("resize", function(event)
{ 
   viewHeight=window.innerHeight;
   viewWidth=window.innerWidth;

});


cat.addEventListener("mouseover", function()
{
     var coordinates=cat.getBoundingClientRect();
     var position=newPosition(coordinates.height,coordinates.width);
     cat.style.top=position.y+"px";
     cat.style.left=position.x+"px";
});

function newPosition(bHeight,bWidth)
{
    var newX=Math.floor(Math.random()*viewWidth)+1-bWidth;
    var newY=Math.floor(Math.random()*viewHeight)+1-bHeight;
    if(newX<0)
    {
        newX=0;
    }
    if(newY<0)
    {
        newY=0;
    }

    return {x:newX,y:newY};
}
