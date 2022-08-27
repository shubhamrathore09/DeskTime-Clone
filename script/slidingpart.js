function slide(){
    return `<div id="my_help">
    <div>
        <p>MyDeskTime</p>
        <div onclick="cencel_help()" class="cencel_help">&times;</div>
    </div>

    <div>
        <p>My DeskTime is the brains of the operation where you can see all the daily, weekly, or monthly stats about your workday.</p>
        <h3>
            Here's what you need to know:
        </h3>
        <li class="li_class">Productivity bar -
            <span>shows the time spent on the computer divided into 5-minute segments and categorized as Productive, Neutral, or Unproductive.</span>
        </li>
        <li class="li_class">
            Used apps -
            <span>hovering your mouse over any of the bars will show you which URLs, documents, or applications were opened during each time segment.</span>
        </li>
        <li class="li_class">
            Projects
            <span>if you use the Project tracking function, this is where you'll see the tasks you've worked on and their total time.</span> 
        </li>

        <img src="https://desktime.com/assets/img/bs4/intro/my-desktime.png" alt="">
    </div>
    <button>Read More</button>
    <button onclick="read_it()">Got it</button>
</div>

<div class="start_tracking">
    <div class="start_head">
        <p>Start tracking time</p>
        <div class="cencel_help" onclick="cencel_help()">&times;</div>
    </div>
    <div class="start_food">
        <ol>
            <li>Once you've created an account, it's time to open My DeskTime and start tracking time.</li>
            <li>You can track time manually with the built-in web timer from your browser</li>
            <li>You can also download and launch the desktop app for automatic time tracking</li>
            <li>To see the tracked data, go to the DeskTime icon and press Show My DeskTime. This opens your Dashboard – from there you can explore all of DeskTime's features.
            </li>
        </ol>
        <div class="start_img">
            <img src="https://desktime.com/assets/img/bs4/onboarding/dashboard/start-tracking-win@3x.png" alt="">
        </div>
    </div>
</div>



<div id="project_track">
    <div class="start_head">
        <p>Project</p>
        <div class="cencel_help" onclick="cencel_help()">&times;</div>
    </div>
    <div class="start_food">
        <ol>
            <li>Open your DeskTime app, click “Show DeskTime” and go to the Projects section.</li>
            <li>Press the green "New Project" button in the upper right corner.</li>
            <li>You can assign projects to all company members or specific employees, set hourly rates, and estimate project costs and time.</li>
            <li>Open your DeskTime app, click “Show DeskTime” and go to the Projects section.Press the green "New Project" button in the upper right corner.You can assign projects to all company members or specific employees, set hourly rates, and estimate project costs and time.You can also use third-party integrations to sync DeskTime with project management apps.
            </li>
        </ol>
        <div class="start_img" style="width:100%; height: 100%;">
            <img src="https://desktime.com/assets/img/bs4/onboarding/dashboard/create-project@3x.png" alt="" height="100%">
        </div>
    </div>
</div>

<div id="desk_app">
    <div class="start_head">
        <p>DeskApp</p>
        <div class="cencel_help" onclick="cencel_help()">&times;</div>
    </div>
    <div class="start_food">
        <ol>
            <li>The best way to fully enjoy everything DeskTime has to offer is with the desktop app. It will start tracking time as soon as you install it and log in.</li>
            <li>To track a specific task or project, go to the DeskTime app icon and press the “Project Manager – Start / Stop / Create” option.</li>
            <li>Find a project and a task you'll be working on from the drop-down menu or fill the required fields with a new project and press “Start”.</li>
            <li>You can oversee and manage all the created projects and tasks in the Projects section.
            </li>
            <li>You can track time with just the app or use it in sync with the web timer.</li>
        </ol>
        <div class="start_img" style="width:100%; height: 100%;">
            <img src="https://desktime.com/assets/img/bs4/onboarding/dashboard/desktop-app-win.png" alt="" height="100%">
        </div>
    </div>
</div>



<div id="web_timer">
    <div class="start_head">
        <p>DeskApp</p>
        <div class="cencel_help" onclick="cencel_help()">&times;</div>
    </div>
    <div class="start_food">
        <ol>
            <li>The web timer offers manual time tracking directly from the browser as soon as you log in to your account – no download, no installation, no hassle.</li>
            <li>Find a project and a task you'll be working on from the drop-down menu or open the web timer and fill the required fields to add a new one.</li>
            <li>Press “Start” when you begin working, and “Stop” when you're finished.</li>
            <li>The tracked data will appear in the My DeskTime dashboard.
            </li>
            
        </ol>
        <div class="start_img" style="width:100%; height: 100%;">
            <img src="https://desktime.com/assets/img/bs4/onboarding/dashboard/web-timer@3x.png" alt="" height="100%">
        </div>
    </div>
</div>



<div id="new_help">
    <div class="start_head">
        <p>DeskApp</p>
        <div class="cencel_help" onclick="cencel_help()">&times;</div>
    </div>
    <div class="start_food" style="display: block;  margin-top: 20px;">
        <p>Please, don’t hesitate to reach out to us if you have any questions or need help setting things up. We’ll gladly help so you can start using DeskTime right away.</p>
        <ol style="list-style:circle ;">
            <li>Contact us at <a href="#">support@desktime.com</a> or via<a href="">Live chat.</a> </li>
            <li>Visit our <a href="">FAQ page </a> to find quick answers to your urgent questions.</li>
            <li>Join <a href="">our webinars</a> to learn more about using DeskTime.</li>
            <li>Book a <a href="">1:1 demo call</a> for a personalized intro to DeskTime.
            </li>
        </ol>
    </div>
</div>`
}
export default slide();