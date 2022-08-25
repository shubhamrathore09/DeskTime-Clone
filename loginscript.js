
  document.querySelector("#signin").addEventListener("submit",signinfunc);
  let Arr=JSON.parse(localStorage.getItem("storeDetails")) || [];
  let Arr2=JSON.parse(localStorage.getItem("storedDetails")) || JSON.parse(localStorage.getItem("storedDetails1")) || [];
  function signinfunc(){
      event.preventDefault();
      obj1={
          email:document.querySelector("#email").value,
          password:document.querySelector("#password").value,
      }
      if(obj1.email=="" || obj1.password==""){
          alert("Invalid input")
          return;
      }
      Arr2.push(obj1);
      let c=0;
      for(let i=0;i<Arr.length-1;i++){
          if(Arr[i]!=obj1){
              c++;
          } else {
              c=0;
          }
      }
      if(c>1){
          alert("Create account")
      } else {
          alert("successfully logged In")
          window.location.href="Navbar.html"
      }
      localStorage.setItem("storeDetails",JSON.stringify(Arr2));
  }