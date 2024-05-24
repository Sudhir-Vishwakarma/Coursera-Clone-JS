// Side Bar //

let bar_icon = document.querySelector(".individual-bars");
let main_bar = document.querySelector(".main-sidenav-bar");
let xmark_icon = document.querySelector(".sidenav-xmark");
let main_nav = document.querySelector(".individual-nav-container");

bar_icon.addEventListener("click", ()=>{
    main_bar.style.left = "0%";
    main_nav.style.visibility = "hidden";
});

xmark_icon.addEventListener("click", ()=>{
    main_bar.style.left = "-100%";
    main_nav.style.visibility = "visible";
});



// Launch Section //

let analyst = document.querySelector(".launch-analyst");
let manager = document.querySelector(".launch-manager");
let digital = document.querySelector(".launch-digital");
let support = document.querySelector(".launch-support");
let keeper = document.querySelector(".launch-keeper");
let cyber = document.querySelector(".launch-cyber");
let developer = document.querySelector(".launch-developer");
let designer = document.querySelector(".launch-designer");

let launch_analyst = document.querySelector(".launch-data-analyst");
let launch_manager = document.querySelector(".launch-project-manager");
let launch_digital = document.querySelector(".launch-digital-marketer");
let launch_support = document.querySelector(".launch-it-support");
let launch_keeper = document.querySelector(".launch-bookkeeper");
let launch_cyber = document.querySelector(".launch-cybersecurity");
let launch_developer = document.querySelector(".launch-front-end");
let launch_designer = document.querySelector(".launch-ux-designer");

analyst.addEventListener("click" , ()=>{
    console.log("Analyst Button Clicked");
    analyst.style.fontWeight = "bold";
    manager.style.fontWeight = "100";
    digital.style.fontWeight = "100";
    support.style.fontWeight = "100";
    keeper.style.fontWeight = "100";
    cyber.style.fontWeight = "100";
    developer.style.fontWeight = "100";
    designer.style.fontWeight = "100";


    launch_manager.style.display = "none";
    launch_analyst.style.display = "flex";
    launch_digital.style.display = "none";
    launch_support.style.display = "none";
    launch_keeper.style.display = "none";
    launch_cyber.style.display = "none";
    launch_developer.style.display = "none";
    launch_designer.style.display = "none";

    // launch_analyst.style.display = "flex";
})

manager.addEventListener("click" , ()=>{
    console.log("Manager Button Clicked");
    analyst.style.fontWeight = "100";
    manager.style.fontWeight = "bold";
    digital.style.fontWeight = "100";
    support.style.fontWeight = "100";
    keeper.style.fontWeight = "100";
    cyber.style.fontWeight = "100";
    developer.style.fontWeight = "100";
    designer.style.fontWeight = "100";


    launch_manager.style.display = "flex";
    launch_analyst.style.display = "none";
    launch_digital.style.display = "none";
    launch_support.style.display = "none";
    launch_keeper.style.display = "none";
    launch_cyber.style.display = "none";
    launch_developer.style.display = "none";
    launch_designer.style.display = "none";

    // launch_manager.style.display = "flex";
})

digital.addEventListener("click" , ()=>{
    console.log("Digital Button Clicked");
    analyst.style.fontWeight = "100";
    manager.style.fontWeight = "100";
    digital.style.fontWeight = "bold";
    support.style.fontWeight = "100";
    keeper.style.fontWeight = "100";
    cyber.style.fontWeight = "100";
    developer.style.fontWeight = "100";
    designer.style.fontWeight = "100";

    launch_manager.style.display = "none";
    launch_analyst.style.display = "none";
    launch_digital.style.display = "flex";
    launch_support.style.display = "none";
    launch_keeper.style.display = "none";
    launch_cyber.style.display = "none";
    launch_developer.style.display = "none";
    launch_designer.style.display = "none";
})

support.addEventListener("click" , ()=>{
    console.log("Support Button Clicked");
    analyst.style.fontWeight = "100";
    manager.style.fontWeight = "100";
    digital.style.fontWeight = "100";
    support.style.fontWeight = "bold";
    keeper.style.fontWeight = "100";
    cyber.style.fontWeight = "100";
    developer.style.fontWeight = "100";
    designer.style.fontWeight = "100";

    launch_manager.style.display = "none";
    launch_analyst.style.display = "none";
    launch_digital.style.display = "none";
    launch_support.style.display = "flex";
    launch_keeper.style.display = "none";
    launch_cyber.style.display = "none";
    launch_developer.style.display = "none";
    launch_designer.style.display = "none";
})

keeper.addEventListener("click" , ()=>{
    console.log("BookKeeper Button Clicked");
    analyst.style.fontWeight = "100";
    manager.style.fontWeight = "100";
    digital.style.fontWeight = "100";
    support.style.fontWeight = "100";
    keeper.style.fontWeight = "bold";
    cyber.style.fontWeight = "100";
    developer.style.fontWeight = "100";
    designer.style.fontWeight = "100";

    launch_manager.style.display = "none";
    launch_analyst.style.display = "none";
    launch_digital.style.display = "none";
    launch_support.style.display = "none";
    launch_keeper.style.display = "flex";
    launch_cyber.style.display = "none";
    launch_developer.style.display = "none";
    launch_designer.style.display = "none";
})

cyber.addEventListener("click" , ()=>{
    console.log("Cyber Security Button Clicked");
    analyst.style.fontWeight = "100";
    manager.style.fontWeight = "100";
    digital.style.fontWeight = "100";
    support.style.fontWeight = "100";
    keeper.style.fontWeight = "100";
    cyber.style.fontWeight = "bold";
    developer.style.fontWeight = "100";
    designer.style.fontWeight = "100";

    launch_manager.style.display = "none";
    launch_analyst.style.display = "none";
    launch_digital.style.display = "none";
    launch_support.style.display = "none";
    launch_keeper.style.display = "none";
    launch_cyber.style.display = "flex";
    launch_developer.style.display = "none";
    launch_designer.style.display = "none";
})

developer.addEventListener("click" , ()=>{
    console.log("Front-end-Developer Button Clicked");
    analyst.style.fontWeight = "100";
    manager.style.fontWeight = "100";
    digital.style.fontWeight = "100";
    support.style.fontWeight = "100";
    keeper.style.fontWeight = "100";
    cyber.style.fontWeight = "100";
    developer.style.fontWeight = "bold";
    designer.style.fontWeight = "100";

    launch_manager.style.display = "none";
    launch_analyst.style.display = "none";
    launch_digital.style.display = "none";
    launch_support.style.display = "none";
    launch_keeper.style.display = "none";
    launch_cyber.style.display = "none";
    launch_developer.style.display = "flex";
    launch_designer.style.display = "none";
})

designer.addEventListener("click" , ()=>{
    console.log("UX-Designer Button Clicked");
    analyst.style.fontWeight = "100";
    manager.style.fontWeight = "100";
    digital.style.fontWeight = "100";
    support.style.fontWeight = "100";
    keeper.style.fontWeight = "100";
    cyber.style.fontWeight = "100";
    developer.style.fontWeight = "100";
    designer.style.fontWeight = "bold";

    launch_manager.style.display = "none";
    launch_analyst.style.display = "none";
    launch_digital.style.display = "none";
    launch_support.style.display = "none";
    launch_keeper.style.display = "none";
    launch_cyber.style.display = "none";
    launch_developer.style.display = "none";
    launch_designer.style.display = "flex";
})