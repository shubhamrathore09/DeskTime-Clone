



function navbar() {
    return `<div class="navbar-ul">

    </div>
    <div id="navbar">
        <input type="checkbox" id="check_div" onclick="check()">
        <label for="check" class="checkbtn">
        <i class="fa fa-bars"></i>
       
    </label>
    <div class="first"> 
        <p>
        <a href="index.html"><img src="https://desktime.com/favicon/favicon-32x32.png" alt="">
        </p>
            <p>Desktime</p></a>
    </div>
    <div class="second"s>
        <ul>
            <li> <a href="./demo.html">Demo</a></li>
            <li>  <a href="fe.html">Feature</a></li>
            <li><a href="price.html">Pricing</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="./blog.html">Blog</a></li>
            <li class="li_but"><button><a href="">LOGIN</a></button></li>
            <li class="li_but"><button id="navbar_last_but"><a href="">SIGN-UP</a></button></li>
        </ul>  
</div>
</div>`
}
export default navbar();
