console.log("hello world");
let list = document.querySelectorAll("menu .main-ul li a");

function navActive() {
    list.forEach((items)=>
    items.classList.remove("nav-active"))
    this.classList.add("nav-active");
}
list.forEach((items)=>
items.addEventListener("click",navActive));

let navSlideBtn = document.getElementById("nav-slide-btn");


let navSlideIndex = ()=>{
    setTimeout(() => {
        let navslide = document.getElementById("nav-slide");
        navslide.classList.toggle("nav-slidex-index");
    }, 500);
}

navSlideBtn.addEventListener("click",e=()=>{
    let navSlideBtn = document.getElementById("nav-slide-btn");
    navSlideBtn.classList.toggle("btn-active");
    let navSlideContainer = document.getElementById("nav-slide-container");
    navSlideContainer.classList.toggle("nav-slide-container-acitve");
    let navslide = document.getElementById("nav-slide");
    navslide.classList.toggle("nav-slidex-index");
})

let closeSlideBtn = document.getElementById("close-btn");

closeSlideBtn.addEventListener("click", e=()=>{
    let navSlideContainer = document.getElementById("nav-slide-container");
    navSlideContainer.classList.remove("nav-slide-container-acitve");
    navSlideContainer.style.transitionDelay="0s";
    let navSlideBtn = document.getElementById("nav-slide-btn");
    navSlideBtn.classList.remove("btn-active");
    navSlideIndex()

})

let navSlideList = document.querySelectorAll("#nav-slide-container menu .slide-main-ul li a");
// console.log(navSlideList);

function slidenavActive() {
    navSlideList.forEach((items)=>
    items.classList.remove("slide-active"))
    this.classList.add("slide-active");
    let navSlideContainer = document.getElementById("nav-slide-container");
    navSlideContainer.classList.remove("nav-slide-container-acitve");
    navSlideContainer.style.transitionDelay="0s";
    let navSlideBtn = document.getElementById("nav-slide-btn");
    navSlideBtn.classList.toggle("btn-active");
    navSlideIndex()
}
navSlideList.forEach((slideList)=>{
    slideList.addEventListener("click",slidenavActive)

})

window.addEventListener("scroll", e=()=>{
    let navBar =document.getElementById("nav-bar");
    navBar.classList.toggle("nav-active" , window.scrollY > 10)
})



$(document).ready(e=()=>{
    $(".slide-what-we-offer div span").click(e=()=>{
        $(".slide-what-we-offer-list").animate({
            height: "toggle"
        })
    })
    $(".slide-blog div span").click(e=()=>{
        $(".slide-blog-list").animate({
            height: "toggle"
        })
    })
    // ---------------------- six slide box

    $("#left-body-para-slide-box-head-container-1").click(e=()=>{
        $("#left-body-para-slide-box-para-container-1").animate({
            height: "toggle"
        })
    })
    $("#left-body-para-slide-box-head-container-2").click(e=()=>{
        $("#left-body-para-slide-box-para-container-2").animate({
            height: "toggle"
        })
    })
    $("#left-body-para-slide-box-head-container-3").click(e=()=>{
        $("#left-body-para-slide-box-para-container-3").animate({
            height: "toggle"
        })
    })
})

 
// ---------------navbar-slide-anit 

let angleActive=(btnclass , rotate, rotateClass)=>{
    let angleActive = document.getElementById(btnclass);
    angleActive.addEventListener("click", e=()=>{
    let angleActive = document.getElementById(rotate);
    angleActive.classList.toggle(rotateClass);
})}
window.onload = angleActive("we-offer-angle-down","we-offer-angle-down","angle-active");
window.onload = angleActive("blog-angle-down","blog-angle-down","angle-active");

// -----------------video animation 

let videoBackground = document.getElementById("video-background");
videoBackground.src = "./img/video-demo2.mp4";

let videoTimer = setTimeout(() => {
    videoBackground.src = "";
}, 20000);


// window.addEventListener("scroll",e=()=>{
//     scrollHeight = document.documentElement.scrollTop;
//     console.log(scrollHeight)
//     docPara = document.getElementById("2ndpara")
//     docscrollHeight = document.getElementById("2ndpara").scrollHeight;
//     console.log(docscrollHeight)
//     // scrollHeight >= docscrollHeight ? console.log(true):console.log(false);
//     if(scrollHeight >= docscrollHeight+200){
//         console.log(docPara)
//         docPara.classList.add("paraClass");
//     }
// })


// --------------------scroll animation 

let scrollAnimate = (section , inputAnimateId , inputAnimateClass , scrollPlusAmuounts)=>{
    let scrollTop =document.documentElement.scrollTop;
    let elementScroll= document.getElementById(section);
    // console.log(elementScroll);
    elementScrollAmount = elementScroll.scrollHeight;
    // console.log(elementScrollAmount)
    if (scrollTop >= elementScrollAmount + scrollPlusAmuounts) {
        let animateClass = document.getElementById(inputAnimateId);
        animateClass.classList.add(inputAnimateClass);
    }
}

// -------------------- counter 

let clientFeedbackTag = document.getElementsByClassName("clientFeedback")[0];
let trustUsersTag = document.getElementsByClassName("trustUsers")[0];
let winningAwardsTag = document.getElementsByClassName("winningAwards")[0];
let completedWorksTag = document.getElementsByClassName("completedWorks")[0];

// console.log(clientFeedbackTag,trustUsersTag,winningAwardsTag,completedWorksTag);

let clientFeedback = 0 ,trustUsers = 0 , winningAwards = 0 , completedWorks = 0;


let counterFun = (countItem , countTag , numberOFCounter , countTimer) =>{
    let clientFeedbackCounter = () =>{
        countItem += 1;
        countTag.textContent = countItem;
        if(countItem === numberOFCounter){
            clearInterval(clientFeedbackIntervalId)
        }
    }
    let clientFeedbackIntervalId = setInterval(clientFeedbackCounter , countTimer);
}

let countOnWindow =()=>{
    counterFun(clientFeedback,clientFeedbackTag ,18 ,100);
    counterFun(trustUsers ,trustUsersTag,95,20);
    counterFun(winningAwards,winningAwardsTag,9,200);
    counterFun(completedWorks,completedWorksTag,300,7)
}
countOnWindow();
window.addEventListener("scroll", e=()=>{
    scrollAnimate("first-section-ani","section-img-animate","section-img-animate" ,500);
    scrollAnimate("third-section-ani","third-section-img-animate","third-section-img-animate",1100);

    scrollAnimate("fourth-section-first-body-container","fourth-section-first-body-items-head-img-1","fourth-section-first-body-items-head-img-animate",2000)
    scrollAnimate("fourth-section-first-body-container","fourth-section-first-body-items-head-img-2","fourth-section-first-body-items-head-img-animate",2000)
    scrollAnimate("fourth-section-first-body-container","fourth-section-first-body-items-head-img-3","fourth-section-first-body-items-head-img-animate",2000)
    scrollAnimate("fourth-section-first-body-container","fourth-section-first-body-items-body-container-1","fourth-section-first-body-items-body-container-animation",2000)
    scrollAnimate("fourth-section-first-body-container","fourth-section-first-body-items-body-container-2","fourth-section-first-body-items-body-container-animation",2000)
    scrollAnimate("fourth-section-first-body-container","fourth-section-first-body-items-body-container-3","fourth-section-first-body-items-body-container-animation",2000)

    scrollAnimate("fourth-section-second-body-container","fourth-section-second-body-items-head-img-1","fourth-section-first-body-items-head-img-animate",2000);
    scrollAnimate("fourth-section-second-body-container","fourth-section-second-body-items-head-img-2","fourth-section-first-body-items-head-img-animate",2000);
    scrollAnimate("fourth-section-second-body-container","fourth-section-second-body-items-head-img-3","fourth-section-first-body-items-head-img-animate",2000);
    scrollAnimate("fourth-section-second-body-container","fourth-section-second-body-items-body-container-1","fourth-section-first-body-items-body-container-animation",2000);
    scrollAnimate("fourth-section-second-body-container","fourth-section-second-body-items-body-container-2","fourth-section-first-body-items-body-container-animation",2000);
    scrollAnimate("fourth-section-second-body-container","fourth-section-second-body-items-body-container-3","fourth-section-first-body-items-body-container-animation",2000);

    let scrollTopBtn = document.getElementById("scrollTop-btn");
    let scrollTop =document.documentElement.scrollHeight;
    // console.log( scrollTop)
    scrollTopBtn.classList.toggle("scrollTop-btn-animate" , window.scrollY >= scrollTop-3000)
    scrollTopBtn.addEventListener("click", e=()=>{
        window.scrollTo({
            top: 0,
            behavior : "smooth"
        })
    })



});






let paraSlide = document.getElementById("left-body-para-slide-box-head-container-1");

paraSlide.addEventListener("click", e=()=>{
    document.getElementById("left-body-para-slide-box-head-arrow-span-1").classList.toggle("left-body-para-slide-box-head-arrow-span-ani");
})
let secParaSlide = document.getElementById("left-body-para-slide-box-head-container-2");

secParaSlide.addEventListener("click", e=()=>{
    document.getElementById("left-body-para-slide-box-head-arrow-span-2").classList.toggle("left-body-para-slide-box-head-arrow-span-ani");
})

let thirParaSlide = document.getElementById("left-body-para-slide-box-head-container-3");

thirParaSlide.addEventListener("click", e=()=>{
    document.getElementById("left-body-para-slide-box-head-arrow-span-3").classList.toggle("left-body-para-slide-box-head-arrow-span-ani");
})



