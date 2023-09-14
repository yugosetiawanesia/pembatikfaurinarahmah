function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6OMwVnDxXhN":
        Script1();
        break;
      case "6nAFwagrDdp":
        Script2();
        break;
      case "6TYcy9tmCR3":
        Script3();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document
function add_line() {
 var line = document.createElement("audio");
 var head=document.getElementsByTagName('body')[0];
 line.type = "audio/mp3";
 line.src="";
 line.id="bgSong" ;
 line.autoplay = true;
 line.loop = true;
 head.appendChild(line);
}
//but we only want to add these once!
if(document.getElementById('bgSong')==null){
 add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}
var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"1.mp3";
audio.load();
audio.play();

// Function to increase volume
  function increaseVolume() {
    if (audio.volume < 1.0) {
      audio.volume += 0.1;
    }
  }

  // Function to decrease volume
  function decreaseVolume() {
    if (audio.volume > 0.0) {
      audio.volume -= 0.1;
    }
  }

  // Example key bindings to increase/decrease volume
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
      increaseVolume();
    } else if (event.key === 'ArrowDown') {
      decreaseVolume();
    }
  });

}

function Script2()
{
  //Getting the player
const player = GetPlayer();

//Where to start
let sec = 0;

//Set up the timer
function startTimer(){
  sec += 1;
  player.SetVar("Timer",sec);
  if (sec == 20) {
    clearInterval(timerId);
  }
}

//Start the timer
timerId=setInterval(startTimer,1000);
}

function Script3()
{
  clearInterval(timerId);
let sec = 0;

}

