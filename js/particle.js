particlesJS("particles-js", {
    particles: {
      number: { value: 250, density: { enable: true, value_area: 800 } },
      color: { value: ["#222831","#393E46","#00ADB5","#EEEEEE","#F38181","#FCE38A","#EAFFD0","#95E1D3"] },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 4,
        random: true,
        anim: { enable: true, speed: 10, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#fff",
        opacity: 0,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 150, line_linked: { opacity: 0.5 } },
        bubble: { distance: 100, size: 10, duration: 1, opacity: 2, speed:1 },
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });