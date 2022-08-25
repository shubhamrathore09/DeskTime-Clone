

  
  // Close the dropdown menu if the user clicks outside of it
  


let arr=[
  "https://images.g2crowd.com/uploads/report_medal/image/1003165/medal.svg",
  "https://images.g2crowd.com/uploads/report_medal/image/1003079/medal.svg",

  "https://www.g2.com/assets/product-badges/users-love-us-4fca521cb6d80c30d02e3df6bd0013f5395fb3ae22e81b3e3608e258d8feba63.svg"

]
let img=document.getElementById("bsdk")



let state=0;
  function right(){

    state++;
    if(state==arr.length){
      state=0;
    }
    img.src=arr[state]
  }


  
  function left(){

    state--;
    if(state==-1){
      state=arr.length-1;
    }
    img.src=arr[state]
  }