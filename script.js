$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    //toggle menu/navbar script//
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});
function myFunction(){
    var x= document.getElementById("eq");
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
// function setupTabs(){
//     document.querySelectorAll(".tab__content").forEach(button =>{
//         button.addEventListener("click", () =>{
//             const sideBar= button.parentElement;
//             const tabsContainer= sideBar.parentElement;
//             const tabNumber=button.dataset.forTab;
//             const tabToActivate=tabsContainer.querySelector('.tab__content[data-tab="${tabNumber}"]');
            
//             sideBar.querySelectorAll(".tabs__button").forEach(button =>{
//                 button.classList.remove("tabs__button--active");
//             });

//             button.classList.add("tabs__button--active");
//             tabToActivate.classList.add("tab__content--active");
//         })
//     })
// }
// document.addEventListener("DOMContentLoaded", () =>{
//     setupTabs();
// })