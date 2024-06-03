









// Side Bar //

document.addEventListener("DOMContentLoaded", ()=>{
    let bar_icon = document.querySelector(".individual-bars");
    let main_bar = document.querySelector(".main-sidenav-bar");
    let xmark_icon = document.querySelector(".sidenav-xmark");
    let main_nav = document.querySelector(".individual-nav-container");

    if (bar_icon && main_bar && xmark_icon && main_nav) {
        bar_icon.addEventListener("click", () => {
            main_bar.style.left = "0%";
            main_nav.style.visibility = "hidden";
        });

        xmark_icon.addEventListener("click", () => {
            main_bar.style.left = "-100%";
            main_nav.style.visibility = "visible";
        });
    } else {
        // console.error("One or more elements are null");
    }
})





// Launch Section //

document.addEventListener("DOMContentLoaded", () => {
    const analyst = document.querySelector(".launch-analyst");
    const manager = document.querySelector(".launch-manager");
    const digital = document.querySelector(".launch-digital");
    const support = document.querySelector(".launch-support");
    const keeper = document.querySelector(".launch-keeper");
    const cyber = document.querySelector(".launch-cyber");
    const developer = document.querySelector(".launch-developer");
    const designer = document.querySelector(".launch-designer");

    const launch_analyst = document.querySelector(".launch-data-analyst");
    const launch_manager = document.querySelector(".launch-project-manager");
    const launch_digital = document.querySelector(".launch-digital-marketer");
    const launch_support = document.querySelector(".launch-it-support");
    const launch_keeper = document.querySelector(".launch-bookkeeper");
    const launch_cyber = document.querySelector(".launch-cybersecurity");
    const launch_developer = document.querySelector(".launch-front-end");
    const launch_designer = document.querySelector(".launch-ux-designer");

    if (analyst && manager && digital && support && keeper && cyber && developer && designer &&
        launch_analyst && launch_manager && launch_digital && launch_support && launch_keeper &&
        launch_cyber && launch_developer && launch_designer) {
        
        analyst.addEventListener("click", () => {
            console.log("Analyst Button Clicked");
            setActiveTab(analyst, launch_analyst);
        });

        manager.addEventListener("click", () => {
            console.log("Manager Button Clicked");
            setActiveTab(manager, launch_manager);
        });

        digital.addEventListener("click", () => {
            console.log("Digital Button Clicked");
            setActiveTab(digital, launch_digital);
        });

        support.addEventListener("click", () => {
            console.log("Support Button Clicked");
            setActiveTab(support, launch_support);
        });

        keeper.addEventListener("click", () => {
            console.log("BookKeeper Button Clicked");
            setActiveTab(keeper, launch_keeper);
        });

        cyber.addEventListener("click", () => {
            console.log("Cyber Security Button Clicked");
            setActiveTab(cyber, launch_cyber);
        });

        developer.addEventListener("click", () => {
            console.log("Front-end Developer Button Clicked");
            setActiveTab(developer, launch_developer);
        });

        designer.addEventListener("click", () => {
            console.log("UX Designer Button Clicked");
            setActiveTab(designer, launch_designer);
        });
    } else {
        console.error("One or more elements are null");
    }

    function setActiveTab(activeTab, activeContent) {
        const tabs = [analyst, manager, digital, support, keeper, cyber, developer, designer];
        const contents = [launch_analyst, launch_manager, launch_digital, launch_support, launch_keeper, launch_cyber, launch_developer, launch_designer];

        tabs.forEach(tab => tab.style.fontWeight = "100");
        contents.forEach(content => content.style.display = "none");

        activeTab.style.fontWeight = "bold";
        activeContent.style.display = "flex";
    }
});


// Testimonials Section //


document.addEventListener("DOMContentLoaded", ()=>{
    let test_right = document.querySelector(".community-right");
    let test_left = document.querySelector(".community-left");
    let test_container = document.querySelector(".testimonials-container");

    if(test_right && test_left && test_container){
        test_left.addEventListener("click", ()=>{
            console.log("Left Button Is working");
            test_container.scrollBy({
                left: -600,
                behavior: 'smooth'
            });
        });
        
        test_right.addEventListener("click", ()=>{
            console.log("Right Button Is working");
            test_container.scrollBy({
                left: 600,
                behavior: 'smooth'
            });
        });
    }
})






// Business Page start //
// Side-Bar //
document.addEventListener("DOMContentLoaded", ()=>{
    let business_bar = document.querySelector(".business-nav-bar");
    let business_xmark = document.querySelector(".business-nav-xmark");
    let business_sidebar = document.querySelector(".business-sidebar");

    if(business_bar && business_xmark && business_sidebar){
        business_bar.addEventListener("click", ()=>{
            business_sidebar.style.left = "0%";
            console.log("sidebar Btn Clicked");
            business_bar.style.display = "none";
            business_xmark.style.display = "block";
        });

        business_xmark.addEventListener("click", ()=>{
            business_sidebar.style.left = "-100%";
            business_xmark.style.display = "none";
            business_bar.style.display = "block";
        })
    } else {
        console.log("Working");
    }


   

})


// Business Page Testimonials Section //


document.addEventListener("DOMContentLoaded", ()=>{
    let academic_right = document.querySelector(".academic-right");
    let academic_left = document.querySelector(".academic-left");
    let academic_container = document.querySelector(".academic-container2");

    if(academic_right && academic_left && academic_container){
        academic_left.addEventListener("click", ()=>{
            console.log("Left Button Is working");
            academic_container.scrollBy({
                left: -630,
                behavior: 'smooth'
            });
            academic_right.style.color = "lightgray";
            academic_left.style.color = "white";
        });
        
        academic_right.addEventListener("click", ()=>{
            console.log("Right Button Is working");
            academic_container.scrollBy({
                left: 630,
                behavior: 'smooth'
            });
            academic_left.style.color = "lightgray";
            academic_right.style.color = "white";
        });
    }
})





