let count=0;
let min=0;
let hour=0;
let id=0;
let onetimeclick=0;
let dis_stop=document.getElementById("display");
dis_stop.innerText=`${hour}:${min}:${count}`
let dat=new Date();
let seco=dat.getSeconds()
let minuts=dat.getMinutes();
let hours=dat.getHours();
let actual_time=`${hours}:${minuts}`
start=()=>{
let dat=new Date();
let seco=dat.getSeconds()
let minuts=dat.getMinutes();
let hours=dat.getHours();
let actual_time=`${hours}:${minuts}`
    document.getElementById("mydesk_f").innerHTML=null;
    document.getElementById("mydesk_f").innerText=actual_time
    if(onetimeclick==0){
    id= setInterval(function(){
    console.log(count)
    count++
    if(count==5){
        min++;
        console.log(min)
        count=0
    }
    if(min==2){
        hour++;
        min=0;
        count=0;
        document.getElementById("mydesk_six").innerText=hour;
    }
    dis_stop.innerHTML=null
    // document.getElementById("display").innerText=count
    dis_stop.innerText=`${hour}:${min}:${count}`

},1000)
onetimeclick++
}
}
stop=()=>{
    let dat=new Date();
let seco=dat.getSeconds()
let minuts=dat.getMinutes();
let hours=dat.getHours();
let actual_time=`${hours}:${minuts}`
    actual_time=`${hours}:${minuts}`
    document.getElementById("mydesk_s").innerHTML=null;
    clearInterval(id)
    onetimeclick=0;
    document.getElementById("mydesk_s").innerText=actual_time
}
Delete=()=>{
    count=0;
    min=0;
    hour=0;
    dis_stop.innerText=`${hour}:${min}:${count}`
    document.getElementById("mydesk_six").innerText=`0s`
    document.getElementById("mydesk_f").innerText=`-`
    document.getElementById("mydesk_s").innerHTML=`-`;
}