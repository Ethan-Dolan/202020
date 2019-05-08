var mains; var hr; var min; var sec;

function print(){
     main = new Date();
     hr = main.getHours();
    if(hr>12){
        hr=hr-12;
    }
    
    if(hr<10){
        hr= "0" + hr;
    }
    
    min = main.getMinutes();
    if(min<10){
        min="0"+min;
        
    }
    sec = main.getSeconds();
    if(sec<10){
        sec="0"+sec;
        
    }
    document.getElementById("time").innerHTML = hr + ":" + min + ":" + sec;
    
}

function playAudio(){
	var audio = new Audio("Beep_Short.mp3");
	audio.play();
	
}

//setInterval(playAudio,1200000);

setInterval(print,1000);

var starttime = document.getElementById("starttime");
var timealert = document.getElementById("timealert");
var hit = document.getElementById("hit");

function valuedisplay(){
		
	timealert.value = parseInt(starttime.value[3]) + 40;
}

hit.addEventListener("click",valuedisplay)

var twenty = 20
if(starttime + 20)

var allButton = document.querySelectorAll(".tabcontainer .buttoncontainer .tabbutton");
var allPanel = document.querySelectorAll(".tabcontainer .panelcontainer .tabpanel");

function showPanel(panelIndex, colorCode){
	
	
};














