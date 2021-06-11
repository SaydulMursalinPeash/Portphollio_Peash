{
    let buttons=document.querySelectorAll(".button");
    let contents=document.querySelectorAll(".content");
    console.log(buttons);
    let active=0;
    buttons[active].classList.toggle("active");
    contents[active].classList.toggle("active");
    buttons.forEach(function(btn,i){
        btn.addEventListener("click",()=>{
            buttons[active].classList.remove("active");
            contents[active].classList.remove("active");
            active=i;
            buttons[active].classList.toggle("active");
            contents[active].classList.toggle("active");
        });
    });
}