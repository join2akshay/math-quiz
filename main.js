let playing=false;
let score=0;
let action;
let timeremain;
document.getElementById('start').onclick=function(){
    
    if(playing===true)
        {
           location.reload(); 
        }
    else
    {
        playing=true;
        document.getElementById('scoreValue').innerHTML = score ;
        document.getElementById('time').style.display="block"; 
        timeremain=60;
        
        document.getElementById('start').innerHTML="Reset Game";
       
        startCount();
    }
    
    
    
}


function startCount()
{
    
   action = setInterval(function(){
       timeremain -=1;
       document.getElementById('timeremain').innerHTML = timeremain;
   },1000);
}
