
  for(var i = 0; i <document.querySelectorAll(".drum").length; i++)
  {
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
      makeSound(this.innerHTML);
      bAnimation(this.innerHTML);
    });
  }
  document.addEventListener("keydown",function(event){
    makeSound(event.key);
    bAnimation(event.key);

  });



function makeSound(key)
{
  switch (key)
  {
    case "w":
    var tom10 = new Audio("sounds/tom-1.mp3");
    tom10.play();
      break;
      case "a":
      var tom20 = new Audio("sounds/tom-2.mp3");
      tom20.play();
        break;
        case "s":
        var tom30 = new Audio("sounds/tom-3.mp3");
        tom30.play();
          break;
          case "d":
          var tom40 = new Audio("sounds/tom-4.mp3");
          tom40.play();
            break;
            case "j":
            var crash1 = new Audio("sounds/crash.mp3");
            crash1.play();
              break;
              case "k":
              var kick1 = new Audio("sounds/kick-bass.mp3");
              kick1.play();
                break;
                case "l":
                var snare1 = new Audio("sounds/snare.mp3");
                snare1.play();
                  break;
    default:

}
}
function bAnimation(currentKey)
{
   var  ac = document.querySelector("." + currentKey);
   ac.classList.add("pressed");
   setTimeout(function()
   {
     ac.classList.remove("pressed");
   },100);
}
