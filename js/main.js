
var bars = document.getElementById("nav-action");
var nav = document.querySelector(".nav_links_container");

var menu1 = document.querySelector(".navlink-one");
var menu2 = document.querySelector(".navlink-two");
var menu3 = document.querySelector(".navlink-three");
var menu4 = document.querySelector(".navlink-four");


bars.addEventListener("click", barClicked, false);

menu1.addEventListener("click", menusClicked, false);
menu2.addEventListener("click", menusClicked, false);
menu3.addEventListener("click", menusClicked, false);
menu4.addEventListener("click", menusClicked, false);


function barClicked() {
    bars.classList.toggle('active');
}

function menusClicked() {
    bars.classList.remove('active');
    nav.style.display = "none";
}


$(window).scroll(function () {
    if ($(document).scrollTop() > 30) {
        $('.navbar').addClass('color-change');
    } else {
        $('.navbar').removeClass('color-change');
    }
});
$(document).ready(function(){

    $('.bars').click(function(event){
    $('.nav_links_container').slideToggle(500);
    event.preventDefault();
    
    $('.nav_links_container li a').click(function(event) {
        if ($(window).width() < 768) {
          $(',nav_links_container').slideUp(500);
        }
      });
});

});


var typed = new Typed("#typed", {
    strings: ["Coder", "Web Developer", "Fast Learner"],
    typeSpeed: 40,
    backSpeed: 30,
    smartBackspace: true,
    loop: true,
    contentType: 'html',
    showCursor: false,
    attr: null,
})


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



$('#myageinyear').innerText = new Date().getFullYear() - 2002 - 1;




let root = document.documentElement;

var canvas = document.getElementById('myCanvas');
canvas.addEventListener('mousemove', function (e) {
    var mousePos = getMousePos(canvas, e);
    root.style.setProperty('--contact-rotation', mousePos['val'] + "rad");
});


function getMousePos(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    a = (rect.left + rect.right) / 2
    s = (rect.top + rect.bottom) / 2
    return {
        val: Math.atan2(a - e.clientX, e.clientY - s)
    };
}


function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_molucuf";
    const templateID = "template_m49tvm9";

    if (params.name && params.email && params.message) {
        emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));
    }

}

function pageReload(){
    return window.location.reload(true);
}