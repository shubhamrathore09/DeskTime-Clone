document.querySelector("#signup").addEventListener("submit",createfunc);
    let Arr=JSON.parse(localStorage.getItem("storeDetails")) || [];
    function createfunc(){
        event.preventDefault();
        obj={
            
            email:document.querySelector("#email").value,
            password:document.querySelector("#password").value,
        }
        if (obj.email=="" || obj.password==""){
            alert("Invalid input")
            return;
        } else {
            alert("signed up successfully")
            window.location.href="login.html"
        }
        Arr.push(obj);
        localStorage.setItem("storeDetails",JSON.stringify(Arr));
    }