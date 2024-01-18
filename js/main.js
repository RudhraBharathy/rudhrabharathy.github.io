$(document).ready(function () {
  var bars = $("#nav-action");
  var nav = $(".nav_links_container");

  var menuLinks = $(".nav_links_container");
  menuLinks.on("click", function (event) {
    if (
      $(event.target).is(
        ".navlink-one, .navlink-two, .navlink-three, .navlink-four"
      )
    ) {
      bars.removeClass("active");
      nav.css("display", "none");
    }
  });

  bars.on("click", function () {
    bars.toggleClass("active");
  });

  $(window).scroll(function () {
    $(".navbar").toggleClass("color-change", $(document).scrollTop() > 30);
  });

  $(".bars").click(function (event) {
    $(".nav_links_container").slideToggle(500);
    event.preventDefault();

    $(".nav_links_container li a").click(function () {
      if ($(window).width() < 768) {
        $(".nav_links_container").slideUp(500);
      }
    });
  });

  var typed = new Typed("#typed", {
    strings: ["Web Developer", "Freelancer", "Problem Solver"],
    typeSpeed: 40,
    backSpeed: 30,
    smartBackspace: true,
    loop: true,
    contentType: "html",
    showCursor: false,
    attr: null,
  });

  $("#myageinyear").text(new Date().getFullYear() - 2002 - 1);

  let root = document.documentElement;
  var canvas = $("#myCanvas");
  canvas.on("mousemove", function (e) {
    var mousePos = getMousePos(canvas, e);
    root.style.setProperty("--contact-rotation", mousePos["val"] + "rad");
  });

  function getMousePos(canvas, e) {
    var rect = canvas[0].getBoundingClientRect();
    a = (rect.left + rect.right) / 2;
    s = (rect.top + rect.bottom) / 2;
    return {
      val: Math.atan2(a - e.clientX, e.clientY - s),
    };
  }

  const form = $("#contact-form");
  const resultMessage = $("#messageNote");
  form.on("submit", function (event) {
    event.preventDefault();
    resultMessage.css("display", "block");
    resultMessage.css("color", "white");
    resultMessage.text("Message Sending.....");
    const name = $("#contact-name").val();
    const email = $("#contact-email").val();
    const message = $("#contact-message").val();

    var emailBody = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>
                body { font-family: 'Arial', sans-serif; line-height: 1.3; color: #000; } .message-container { padding: 20px; border: 1px solid #ccc; border-radius: 5px; background-color: #f9f9f9; } .field-label { font-size: 17px; font-weight: bold; color: #000; } .field-values { font-size: 15px; color: #000; }
            </style>
        </head>
        <body>
            <div class="message-container">
                <p class="field-label">Name:</p><p class="field-values">${name}</p>
                <p class="field-label">Email:</p><p class="field-values">${email}</p>
                <p class="field-label">Message:</p><p class="field-values">${message}</p>
            </div>
        </body>
        </html>
    `;

    Email.send({
      SecureToken: "2762de28-d3a9-4066-88a7-638828eb9bf9",
      To: "bharathyganeshan@gmail.com",
      From: "bharathyganeshan@gmail.com",
      Subject: `Message from ${name}`,
      Body: emailBody,
    }).then((message) => {
      if (message === "OK") {
        resultMessage.css("display", "block");
        resultMessage.css("color", "green");
        resultMessage.text("Message Sent Successfully!!!");
        form.trigger("reset");
        setTimeout(setMessageAppearTime, 2500);
        function setMessageAppearTime() {
          resultMessage.html("");
          resultMessage.css("display", "none");
        }
      } else {
        resultMessage.css("display", "block");
        resultMessage.css("color", "red");
        resultMessage.text("Message not Sent");
        setTimeout(setMessageAppearTime, 3000);
        function setMessageAppearTime() {
          resultMessage.html("");
          resultMessage.css("display", "none");
        }
      }
    });
  });

  window.sr = ScrollReveal({
    viewFactor: 0.15,
    duration: 500,
    distance: "0px",
    scale: 0.9,
  });

  const revealOptions = {
    easing: "ease-in",
    origin: "top",
    duration: 1000,
    delay: 0,
    distance: "20px",
    mobile: true,
    reset: true,
    useDelay: "always",
    viewFactor: 0.2,
    viewOffset: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };

  sr.reveal(".reveal", revealOptions, 250);
  sr.reveal(".home-hero_content");
  sr.reveal(".projects-container-main");
  sr.reveal(".aboutme-container-2");
  sr.reveal(".my-skil-exp-edu-container-main");
  sr.reveal(".contact-sub-container");

  var scrollToTopBtn = $(".scrollToTopBtn");
  var rootElement = document.documentElement;

  function handleScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.15) {
      scrollToTopBtn.addClass("showBtn");
    } else {
      scrollToTopBtn.removeClass("showBtn");
    }
  }

  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  scrollToTopBtn.on("click", scrollToTop);
  $(document).on("scroll", handleScroll);

  const d = new Date();
  let year = d.getFullYear();
  $("#footer-year").html(year);
});

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

scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
