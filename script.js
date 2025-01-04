function valueSetter(){
   gsap.set("#home span .child", { y: "100%" });
   gsap.set("#nav a", { y: "-100%", opacity: 0 });
   gsap.set("#home .row img", { opacity: 0 });
   gsap.set("#imgrig", {opacity: 0});
}

function revealToSpan(){
  document.querySelectorAll(".reveal").forEach(function (elem) {
    // create two span elements
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");

    // add classes to the span elements
    spanParent.classList.add("parent");
    spanChild.classList.add("child");

    // set the text content of the span elements
    spanChild.innerHTML = elem.innerHTML;

    // append the spanChild to the spanParent
    spanParent.appendChild(spanChild);

    // set the text content of the elem to an empty string and append the spanParent to the elem
    elem.innerHTML = "";
    elem.appendChild(spanParent);
  });
}


function loaderAnimation(){
  let tl = gsap.timeline();

  tl.from("#loader .child span", {
    x: 100,
    duration: 1.4,
    stagger: 0.2,
    delay: 1,
    ease: Power3.easeInOut,
  })

    .to("#loader .parent .child", {
      y: "-100%",
      duration: 1,
      delay: 1,
      ease: Circ.easeInOut,
    })

    .to("#loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })

    .to("#green", {
      height: "100%",
      duration: 1,
      delay: -0.8,
      top: 0,
      ease: Circ.easeInOut,
    })

    .to("#green", {
      height: 0,
      duration: 1,
      delay: -0.3,
      ease: Circ.easeInOut,
      onComplete: function() {
        animateHomepage();
      },
    });
}

function animateHomepage(){
  let tl = gsap.timeline()

  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: Expo.easeInOut,
  })
    .to("#home span .child", {
      y: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: Expo.easeInOut,
    })
    .to("#home .row img", {
      opacity: 1,
      delay: -.5,
      ease: Expo.easeInOut,
    })
    .to("#imgrig", {
      opacity: 1,
      ease: Expo.easeInOut,
    })
}

function locoInitialiaze() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
}

function imageHoverEffect(){
  document.querySelectorAll(".contnr")
  .forEach(function (contnr){
    
    contnr.addEventListener("mouseover", function(dets){
      contnr.style.filter = "grayscale(1)";
      contnr.style.cursor = "pointer";
      document.querySelector("#work").style.backgroundColor = dets.target.dataset.color;
    });

    contnr.addEventListener("mouseleave", function () {
      contnr.style.filter = "grayscale(0)";
      document.querySelector("#work").style.backgroundColor = "#f2f2f2";
    });
  })
}


revealToSpan();
valueSetter();
loaderAnimation();
locoInitialiaze();
imageHoverEffect();
