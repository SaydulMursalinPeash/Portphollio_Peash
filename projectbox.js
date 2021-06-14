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
            $("#project1").hide();
            $("#project2").hide();
            $("#project3").hide();
            $("#project4").hide();
            $("#project5").hide();
        $("#projects-btn").click(function(){
            $(this).ready(function(){
            $("#project1").show(500);
            $("#project2").show(1000);
            $("#project3").show(1500);
            $("#project4").show(2000);
            $("#project5").show(2500);
            })
            

        });
    });
}