var int=document.getElementById("number");
var btn=document.getElementById("button");
var curr=document.querySelectorAll(".current");
var next=document.querySelectorAll(".next");
var length=curr.length;
var id1;

function intialisedCandN()
{
    for(var i=0;i<length;i++)
    {
        curr[i].innerText=0;
        next[i].innerText=1;
    }

}

btn.addEventListener("click", function()
{
   
    var target=parseInt(int.value);
    if(target<1 || target>99999)
    {
        alert("Please enter a number within range");
        clearInterval(id1);
        return;
    }
    intialisedCandN();
    clearInterval(id1);
    var initial=0;
    function ctn()
    {
        if(initial==target)
        {
            clearInterval(id1);
            alert("Time up");
            return;
        }
        increaseCount(curr,next,length-1);
        initial++;
        
        // next[1].classList.add("animate");
        // next[1].innerText=initial;
        // setTimeout(function()
        // {
        //     next[1].classList.remove("animate");
        //     curr[1].innerText=next[1].innerText;
        // },500);  
    }

    id1=setInterval(ctn,1000);
   

});


 
function increaseCount(curr,next,index)
{
    let currNo=curr[index];
    let nextNo=next[index];
    if(currNo.innerText==9)
    {
        increaseCount(curr,next,index-1);
    }
    nextNo.classList.add("animate");
    setTimeout(function()
    {
        currNo.innerText=nextNo.innerText;
        nextNo.classList.remove("animate");
        nextNo.innerText=parseInt(nextNo.innerText)+1;
        console.log(currNo.innerText,nextNo.innerText);
        if(nextNo.innerText>9)
        {
            nextNo.innerText=0;
        }
    },500);
}




