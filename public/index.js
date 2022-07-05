document.querySelector(".btn").addEventListener("click",function(){
    var buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML)
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
})
function makesound(key){
    var sound = new Audio("tom-3.mp3")
    sound.play();
    buttonAnimation(key)
}
function buttonAnimation(key){
    var activeButton = document.querySelector("." + key)
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },150)

} 
