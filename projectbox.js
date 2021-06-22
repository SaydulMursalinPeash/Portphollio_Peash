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
{
    $(document).ready(function(){
            $(".project-box").css("left","100%");
            $("#projects-btn").click(function(){
                $("#project1").animate({left:"0px"},400);
                $("#project2").animate({left:"0px"},700);
                $("#project3").animate({left:"0px"},900);
                $("#project4").animate({left:"0px"},1000);
                $("#project5").animate({left:"0px"},1080);
            });
            

        });
}