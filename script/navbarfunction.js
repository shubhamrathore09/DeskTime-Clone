let count=0
function check(){
    if(count==0){
    document.querySelector("ul").setAttribute("class","shownavbar")
    count++;}
    else{
        document.querySelector("ul").setAttribute("class","hidenavbar")
        count=0
    }
}
