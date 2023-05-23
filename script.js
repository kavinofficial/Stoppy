let st=document.getElementById('st');
let end=document.getElementById('end');
let reset=document.getElementById('reset');
let hr1=document.getElementById('h');
let min1=document.getElementById('m');
let sec1=document.getElementById('s');
let sec=0;
let min=0;
let hr=0;
function clock(){
    sec++;
    if(sec<=9)
    sec1.innerHTML="0"+sec;
    else if(sec>9 && sec<99)
    sec1.innerHTML=sec;
    else if(sec==99)
    {
        min++;
        sec=0;
    }
    if(min<=9)
    min1.innerHTML="0"+min;
    else if(min>9 && min<=59)
    min1.innerHTML=min;
    else if(min>59)
    {
        hr++;
        min=0;
    }
    if(hr<=9)
    hr1.innerHTML="0"+hr;
    else if(hr>9 && hr<=59)
    hr1.innerHTML=hr;
    else if(hr>59)
    {
        clearInterval(clock);
    }
}
let time;
let clk=0;
st.addEventListener("click",()=>{
    if(clk==0)
    {
        time=setInterval(clock,9);
        clk=1;
    }
})
end.addEventListener("click",()=>{
    clearInterval(time);
    clk=0;
})
reset.addEventListener("click",()=>{
    clearInterval(time);
    hr=0;
    min=0;
    sec=0;
    min1.innerHTML=0+"0";
    sec1.innerHTML=0+"0";
    hr1.innerHTML=0+"0";
    clk=0;
})
