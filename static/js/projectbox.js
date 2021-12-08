{
    let box=document.querySelectorAll(".project-box");
    console.log(box);
    let a=0;
    box.forEach((b,i)=>{
        b.addEventListener("click",()=>{
            box[a].classList.remove("active");
            a=i;
            box[a].classList.toggle("active");

        });
    });
}
