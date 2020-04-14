var list=document.querySelectorAll(".nav-menu a");
var id1;
for(let i=0;i<list.length;i++)
{
    list[i].addEventListener("click",function(event)
    {
         event.preventDefault();
         var value=this.textContent.trim().toLowerCase();
         var sectionId=document.getElementById(value);
         var curr=0;
         var targetPos=sectionId.getBoundingClientRect().y;
        // id1=setInterval(jsnav,10,targetPos);
        //  id1=setInterval(function()
        //  {
        //      scrollVertical(sectionId)
        //  },10);
        function jsnav()
        {
                    if(curr>=targetPos)
                    {
                        clearInterval(id1);
                        return;
                    }
                    window.scrollBy(0,50);
                    curr+=50;
                  
        }
        var id1=setInterval(jsnav,10);
    });
}

// function scrollVertical(sectionId)
// {
//     var secCor=sectionId.getBoundingClientRect().top;
//     if(secCor<=0)
//     {
//         clearInterval(id1);
//         return;
//     }
//     window.scrollBy(0,50);
// }

var skillDisplay=document.getElementsByClassName("skill-display")[0];
var progessBars=document.querySelectorAll(".skill-progress > div");
var progessBar=document.querySelectorAll(".skill-progress");
function isInViewPort(ele)
{
      var coordinates=ele.getBoundingClientRect();
      return (coordinates.top<=window.innerHeight);
}
var animationDone=new Array(progessBar.length);
for(var i=0;i<animationDone.length;i++)
{
    animationDone[i]=false;
}

function initialisedBars()
{
    for(let i of progessBars)
    {
        i.style.width=0+'%';
        i.style.padding=0+"px";
    }
}

initialisedBars();

function initialisedBar(bar)
{
    bar.style.width=0+"%";
    bar.style.padding=0+"px";
}

function fillBars()
{
    for(let i of progessBars)
    {
        let value=i.getAttribute("data-bar");
        i.style.padding=2+"px";
        let curr=0;
        function barFill()
        {
            if(curr>=value)
            {
                clearInterval(b);
                return;
            }
            curr++;
            i.style.width=curr+"%";
        }
        var b=setInterval(barFill,3);
    }
}

function fillBar(bar)
{
        let value=bar.getAttribute("data-bar");
        bar.style.padding=2+"px";
        let curr=0;
        function barFill()
        {
            if(curr>=value)
            {
                clearInterval(b);
                return;
            }
            curr++;
            bar.style.width=curr+"%";
        }
        var b=setInterval(barFill,3);

}

var html=document.documentElement;
var body=document.getElementsByTagName("body")[0];
var number=document.getElementById("percent-number");
var bodyHeight=body.offsetHeight;
window.addEventListener("scroll",function()
{
    for(var i =0;i<progessBar.length;i++)   
    {
       if(!animationDone[i] && isInViewPort(progessBar[i]))
       {
           fillBar(progessBar[i].firstElementChild);
           animationDone[i]=true;
           //console.log("skill");
       }
       else if(!isInViewPort(progessBar[i]))
       {
           animationDone[i]=false;
           initialisedBar(progessBar[i].firstElementChild);
       }
    }
   // number.innerText=Math.floor((html["scrollTop"]/bodyHeight)*100);


});


