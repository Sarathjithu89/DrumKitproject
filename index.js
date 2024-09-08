
var buttonNumber=document.querySelectorAll(".drum").length;//the loop for the buttons
for(var i=0;i<buttonNumber;i++){

    //the mouse click event
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonHTML=this.innerHTML;
        soundEffect(buttonHTML);
        buttonAnimation(buttonHTML);
    });  

}
//the keyboard press event
document.addEventListener("keydown",function(event){
    var pressedKey=event.key;
    soundEffect(pressedKey.toUpperCase());
    buttonAnimation(pressedKey);
});

//the function to call when the events are triggerd to play the audio
function soundEffect(effect){

    switch(effect){

        case "W":
            var audio=new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;

        case "A":
            var audio2=new Audio('./sounds/tom-2.mp3');
            audio2.play();
            break;

        case "S":
            var audio3=new Audio('./sounds/tom-3.mp3');
            audio3.play();
            break;
        case "D":
            var audio4=new Audio('./sounds/tom-4.mp3');
            audio4.play();
            break;
        case "J":
            var audio5=new Audio("./sounds/crash.mp3");
            audio5.play();
            break;
        case "K":
            var audio6=new Audio("./sounds/kick-bass.mp3");
            audio6.play();
            break;
        case "L":
            var audio7=new Audio("./sounds/snare.mp3");
            audio7.play();
            break;
        default:console.log(effect);
    }
}

// the function to change the style of the button after the event
function buttonAnimation(input){
    let thisButton=document.querySelector(("."+input).toLowerCase());
    thisButton.classList.add("pressed");
//time out function for the button to regain the original state
    setTimeout(() => {
        thisButton.classList.remove("pressed");

    }, 110);


}
