





let s1=new Date()
let todate1=s1.getDate();
let thismonth1=s1.getMonth()+1;
let thisyear1=s1.getFullYear();
let fulldata1=`${todate1}-${thismonth1}-${thisyear1}`


new_project=()=>{
    document.querySelector(".add_project").style.top="10%"
}
cencel_pro=()=>{
    document.querySelector(".add_project").style.top="-120%";
    document.getElementById("alert_save").style.top="-120%";
}
let No_project=JSON.parse(localStorage.getItem("no_project"))||[]
create_pro=()=>{
    let pro_obj={
        pr_name:document.getElementById("pr_name").value,
        pr_hrate:document.getElementById("pr_hrate").value,
        pr_cost:document.getElementById("pr_cost").value,
        pr_time:document.getElementById("pr_time").value
    }
    pro_obj.date=fulldata1;
    No_project.push(pro_obj);

    console.log(No_project)
    localStorage.setItem("no_project",JSON.stringify(No_project))

    setTimeout(function(){
        document.querySelector(".add_project").style.top="-120%"
        displaydata(No_project)
    },1000)
    appen(No_project)
}

 // if(No.No_project>0){
    // document.getElementById("no_project").style.display=""
    // }


displaydata=(No_project)=>{
    console.log(No_project)
   if(No_project.length>0){
    document.getElementById("no_project").style.display="none"
    }
    else{
        document.getElementById("no_project").style.display="block"
    }
    if(No_project.length>0){
    document.getElementById("project_contain").style.display="none"
}
else{
    document.getElementById("project_contain").style.display="block"
}

document.querySelector("#total_amount_pro").innerHTML=null;

document.querySelector("#total_this_month").innerHTML=null;

document.querySelector("#total_this_week").innerHTML=null;

document.querySelector("#total_amount_pro").innerText=No_project.length;
document.querySelector("#total_this_month").innerText=No_project.length;
document.querySelector("#total_this_week").innerText=No_project.length;
}
displaydata(No_project)


appen(No_project)

function appen(data){
    document.getElementById("project_saved").innerHTML=null;
    data.forEach(function(el,index){
        let div=document.createElement("div");
        let check=document.createElement("input");
        check.setAttribute("type","checkbox")
        let h4=document.createElement("h4");
        h4.innerText=el.pr_name;
        let p=document.createElement("p");
        p.innerText=el.date
        let img=document.createElement("img");
        img.src="https://desktime.com/favicon/favicon-32x32.png"
        let task=document.createElement("p");
        task.innerText=0;
        let dele=document.createElement("i");
        dele.setAttribute("class","fa-solid fa-trash-arrow-up");
        dele.addEventListener("click",function(){
            Delete(el,index);
        })
        div.append(check,h4,p,img,task,dele)
        document.getElementById("project_saved").append(div)
    });
    
}

function Delete(el,index){
    // delete_project(el,index)
    document.getElementById("alert_save").style.top="10%"
    // console.log('s')
    delete_project=(el,index)=>{
    No_project.splice(index,1);
    localStorage.setItem("no_project",JSON.stringify(No_project));
    // document.getElementById("project_saved").innerHTML=null;
    appen(No_project);
    displaydata(No_project)
    document.getElementById("alert_save").style.top="-120%";
}
}


