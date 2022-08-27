let cou=0;
let demo=0;
function openNav() {
if(cou==0){

document.getElementById("main").style.marginLeft = "300px";
document.getElementById("sidebar_only").style.width="280px"
document.getElementById("second_nav").style.marginLeft="320px"
document.getElementById("all_body_project").style.marginLeft="320px"
cou++;
}
else{
    document.getElementById("sidebar_only").style.width = "40px";
document.getElementById("main").style.marginLeft = "50px";
document.getElementById("second_nav").style.marginLeft="100px"
document.getElementById("all_body_project").style.marginLeft="100px"
cou=0;
}
}