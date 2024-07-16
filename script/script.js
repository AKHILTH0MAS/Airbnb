window.addEventListener("scroll", function(){
    let nav1 = document.getElementById("row-2-3");
    let nav2 = document.getElementById("transformed-nav");
    let paddingbottom = document.getElementById("des-nav-search-id");
    let stickyNav= document.getElementById("sticky-nav-id");
    let corousal_section= document.getElementById("corousal-section-id");
    let scrollPosition = window.scrollY;
    if(scrollPosition>200 && window.innerWidth >= 744){
        nav1.style.display= "none";
        nav2.style.display="block";
        paddingbottom.style.paddingBottom= "0";
        stickyNav.style.position= "sticky";
        stickyNav.style.top= "80px";
        corousal_section.style.marginTop= "340px";
    
    }
    else if(scrollPosition<=200 && window.innerWidth >= 744){
        nav1.style.display= "block";
        nav2.style.display="none";
        stickyNav.style.position= "fixed";
        stickyNav.style.top= "240px";
        paddingbottom.style.paddingBottom= "30px";
    }
    if(scrollPosition>50 && window.innerWidth >= 950){
        nav1.style.display= "none";
        nav2.style.display="flex";
        stickyNav.style.position= "fixed";
        stickyNav.style.top= "0px";
        paddingbottom.style.paddingBottom= "30px";

    } else if(scrollPosition<=200 && window.innerWidth >= 950){
        nav1.style.display= "block";
        nav2.style.display="none";
        stickyNav.style.position= "fixed";
        stickyNav.style.top= "80px";
        paddingbottom.style.paddingBottom= "30px";
        corousal_section.style.marginTop= "230px";

    }
    if(scrollPosition>30 && window.innerWidth >= 1440){
        nav1.style.display= "none";
        nav2.style.display="flex";
        stickyNav.style.position= "fixed";
        stickyNav.style.top= "0px";
        paddingbottom.style.paddingBottom= "30px";

    } else if(scrollPosition<=30 && window.innerWidth >= 1440){
        nav1.style.display= "block";
        nav2.style.display="none";
        stickyNav.style.position= "fixed";
        stickyNav.style.top= "80px";
        paddingbottom.style.paddingBottom= "30px";
        corousal_section.style.marginTop= "244px";

    }
})
window.addEventListener("resize", function(){
    location.reload();
    let nav2 = document.getElementById("transformed-nav");
    if(window.innerWidth >= 744 && window.innerWidth <= 780){
        nav2.style.maxWidth="310px";
    }
})
window.addEventListener("DOMContentLoaded", function(){
    let nav2 = document.getElementById("transformed-nav");
    if(window.innerWidth >= 744 && window.innerWidth <= 780){
        nav2.style.maxWidth="310px";
    }
})


mac-maxWidth