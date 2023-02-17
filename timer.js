//declaring variables	
  

const timeelement = document.querySelector(".timer");
const start=document.getElementById("start")
const pause=document.getElementById("pause")
const reset=document.getElementById("reset");

let  seconds = 0;
let interval = null; //this is what ticks up our timer;

//update the timer


//Event listeners for the icons

start.addEventListener("click",Start);
pause.addEventListener("click",Pause);
reset.addEventListener("click",Reset);



// function for thr timer
function Timer(){
seconds++

//formating timer

let hours = Math.floor(seconds/3600);
let mins = Math.floor((seconds-(hours*3600))/60);
let secs = seconds % 60;
if(secs < 100) secs = "0" + secs;
if(mins < 100) mins = "0" + mins;
if(hours < 100)hours = "0" + hours;
timeelement.innerText = `${hours}:${mins}:${secs}`;


}


Timer()


// function for the start button
function Start(){
if(interval){
	return
}
interval = setInterval(Timer,1000);
}


//function for the pause button
function Pause(){
clearInterval(interval);
interval = null;
}

// function for the reset button
function Reset(){
Pause();
seconds=0;// so when you press play it would not start from where it stopped it starts from the beginning
timeelement.innerText = "00:00:00";
;
}


</script>

</body>
</html>