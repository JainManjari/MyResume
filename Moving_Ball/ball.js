var ball=document.getElementById("ball");
ball.style.top=ball.offsetTop+"px";
ball.style.left=ball.offsetLeft+"px";
ballHeight=ball.offsetHeight;
ballWidth=ball.offsetWidth;
var viewHeight=window.innerHeight;
var viewWidth=window.innerWidth;
window.addEventListener("resize",function(event)
{
    viewHeight=window.innerHeight;
    viewWidth=window.innerWidth;
})
function setValue(val)
{
    return val+"px";
}
function keyCode(keyPress)
{
    var top=parseInt(ball.style.top);
    var left=parseInt(ball.style.left);
    //var value=event.keyCode;
    if(keyPress==119 || keyPress==87)
    {
        if(top>5)
        {
            ball.style.top=setValue(top-5);
        }
      //  ball.classList.remove("up");
    }
    if(keyPress==97 || keyPress==65)
    {
        if(left>5)
        {
            ball.style.left=setValue(left-5);
        }
    }
    if(keyPress==115 || keyPress==83)
    {
        if(top<(viewHeight-ballHeight)-7.01)
        {
            ball.style.top=setValue(top+5);
        }
    }
    if(keyPress==100 || keyPress==68)
    {
        if(left<(viewWidth-ballWidth)-5)
        {
            ball.style.left=setValue(left+5);
        }
    }
    
};

document.addEventListener("keypress", function(event)
{
     keyCode(event.keyCode);
});