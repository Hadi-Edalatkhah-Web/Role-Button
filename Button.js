const button = document.getElementById("container");
const role = document.getElementById("role");
const on=document.getElementById("on");
const off=document.getElementById("off");
let toggle = false;



button.addEventListener("click",function(){
   if(toggle===false)
   {
    role.style.animation="roleOn 1.5s forwards";
    on.style.animation="onOpacity 1s forwards";
    off.style.animation="offOpacity 1s forwards";
   }
   else{
    role.style.animation="roleOff 1.5s forwards";
    off.style.animation="onOpacity 1s forwards";
    on.style.animation="offOpacity 1s forwards";

   }
   toggle=!toggle;
}
);
