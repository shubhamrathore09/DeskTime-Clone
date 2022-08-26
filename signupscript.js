document.querySelector("#signup").addEventListener("submit",createfunc);
    let Arr=JSON.parse(localStorage.getItem("storeDetails")) || [];
    function createfunc(event){
        event.preventDefault();
        obj={
            name:document.querySelector("#name").value,
            email:document.querySelector("#email").value,
            password:document.querySelector("#password").value,
        }
        if (obj.email=="" || obj.password=="" || obj.name==""){
            alert("Invalid input")
            return;
        } else {
            alert("signed up successfully")
            window.location.href="login.html"
        }
        Arr.push(obj);
        localStorage.setItem("storeDetails",JSON.stringify(Arr));
    }