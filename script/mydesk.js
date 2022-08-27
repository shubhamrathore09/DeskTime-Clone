

check=()=>{
   document.getElementById("my_help").style.top="0%"
}

cencel_help=()=>{
        document.getElementById("my_help").style.top="-120%"
        document.querySelector(".start_tracking").style.top="-120%"
        document.querySelector("#project_track").style.top="-120%"
        document.querySelector("#desk_app").style.top="-120%"
        document.querySelector("#web_timer").style.top="-120%"
        document.getElementById("new_help").style.top="-120%"
}
start_tracking=()=>{
    document.querySelector(".start_tracking").style.top="10%"

}
start_track=()=>{
    document.querySelector("#project_track").style.top="10%"
}
start_app=()=>{
    document.querySelector("#desk_app").style.top="10%"
}
start_web=()=>{
    document.querySelector("#web_timer").style.top="10%"
}

new_help=()=>{
    document.getElementById("new_help").style.top="10%"
}

document.getElementById("mydesk_data").innerHTML=null;

let s=new Date()
let todate=s.getDate();
let thismonth=s.getMonth()+1;
let thisyear=s.getFullYear();
let fulldata=`${todate}-${thismonth}-${thisyear}`

document.getElementById("mydesk_data").innerText=fulldata;


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

let data=false;
async function promise(res){
     data=res
     setTimeout(function(){
    if(data){
        count=0;
        min=0;
        hour=0;
        dis_stop.innerText=`${hour}:${min}:${count}`
        document.getElementById("mydesk_six").innerText=`0s`
        document.getElementById("mydesk_f").innerText=`-`
        document.getElementById("mydesk_s").innerHTML=`-`;
       
    }
    else{
        
    }
},1500)
   
};

Delete=()=>{
    let del_not=false;
    document.getElementById("dele_alert").style.top="0%"

}

Yes=()=>{
    document.getElementById("dele_alert").style.top="-100%"
    data=true
    promise(data)
    clearInterval(id)
}

No=()=>{
    document.getElementById("dele_alert").style.top="-100%"
    data=false
    promise(data)
}