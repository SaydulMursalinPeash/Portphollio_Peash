function update(){
    let date=new Date();
    let clock=document.getElementById("Time");
    let hour=date.getHours();
    if(hour>12){
        hour=hour-12;
    }
    let minuite=date.getMinutes();
    let second=date.getSeconds();
    let Time=hour+":"+minuite+":"+second;
    clock.innerHTML=Time;
    let h=document.getElementById("hour");
    let m=document.getElementById("minuite");
    let s=document.getElementById("second");
    let h2=(hour*30+minuite*0.5)+'deg';
    m2=(minuite*6+second*0.1)+'deg';
    s2=(second*6)+'deg';
    console.log(h2);
    h.style.transform='rotate('+h2+')';
    m.style.transform='rotate('+m2+')';
    s.style.transform='rotate('+s2+')';
    setTimeout(update,1);
}
update();