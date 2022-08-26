function sidenav(){
    return `<div id="sidebar_only">
    <a href=""><img src="https://desktime.com/favicon/favicon-32x32.png" alt="">DeskTime</a>


   
    <a href=""><i class="fa-solid fa-desktop"><p>My DeskTime</p></i></a>
    <a href=""><i class="fa-solid fa-lock"><p>Project</p></i></a>
    <a href=""><i class="fa-solid fa-calendar"><p>Work Schdules</p></i></a>
    <a href=""> <i class="fa-solid fa-calendar-check"><p>Booking</p></i></a>
    <a href=""><i class="fa-solid fa-calendar-days"><p>Absence Calender</p></i></a>
    <a href=""><i class="fa-solid fa-file-lines"><p>Invoicing</p></i></a>
    <a href=""><i class="fa-solid fa-chart-pie"><p>Reports</p></i></a>
    <a href=""><i class="fa-solid fa-file-export"><p>Exports</p></i></a>
    <a href=""><i class="fa-solid fa-gear"><p>Setting</p></i></a>
    
</div>

<div id="main">
    <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
    <div class="sidebar_main"><input type="text" name="" id="" placeholder="Search" ><i class="fa-solid fa-magnifying-glass"></i></div>
    <div class="sidebar_main_name" id="name_main"><i class="fa-solid fa-bell"></i><div><p id="save_name">shubham</p><p id="save_company_name">rathore</p></div> <h1 id="save_latter">S</h1></div>
  
</div>
<div id="second_nav">
<h3>Get started with DeskTime <input type="range"></h3>
<button><span>1</span>Start tracking time</button>
<button><span>2</span>Create a project</button>
<button><span>3</span>Desktop App</button>
<button><span><i class="fa-solid fa-check"></i></span>web timer</button>
<button><span>5</span>Edit the setting</button>
<button><span>6</span>subscribe to DeskTime</button>
<a href="">Help</a>
</div>`
}
export default sidenav();