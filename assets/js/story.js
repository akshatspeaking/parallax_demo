
// RESPONSIVE HERO CODE 

var mq = window.matchMedia( "(max-width: 800px)" );
if (mq.matches) {
   // window width is at less than 570px
}
else {
   // window width is greater than 570px




// On 


window.addEventListener("scroll", heroScroll);

const bg = document.querySelector(".bg-container")

const trees = document.querySelector(".trees-container");

const plot = document.querySelector(".plot-container"); 

const intro = document.querySelector(".intro-container");

const overlayHero = document.querySelector(".overlay-hero");

const story = document.querySelector(".intro-text");

function heroScroll(e) {
   let y = window.scrollY;
  //  console.log(y);

   // Default state - on top position:

   if (y < 10) {
    
      plot.style.marginTop = "20rem";
      bg.style.backgroundSize = "100%";
      intro.style.opacity = "1";


      overlayHero.style.opacity = "0.2" ;       
      trees.style.backgroundSize = "100%";

      // bg.style.backgroundPosition = "50% 65%";      
   }

// Scroll transition states (10)

   else if (y > 10 && y < 600) {
      if (y > 10 && y < 50) {
         bg.style.backgroundSize = `105%`;
         trees.style.backgroundSize = `105%`;
         intro.style.opacity = "0.99";
         plot.style.marginTop = "20rem";

         overlayHero.style.opacity = "0.25" ; 
               // bg.style.backgroundPosition = "50% 66%";
      }
      else if (y > 50 && y < 100) {
         bg.style.backgroundSize = `110%`;  
         trees.style.backgroundSize = `110%`;
         intro.style.opacity = "0.95";
         plot.style.marginTop = "15rem";

         overlayHero.style.opacity = "0.3" ; 
         
         // bg.style.backgroundPosition = "50% 68%";

      }
      else if (y > 100 && y < 150) {
         bg.style.backgroundSize = `115%`;    
         trees.style.backgroundSize = `115%`;  
         plot.style.marginTop = "17.5rem";

         intro.style.opacity = "0.9";

         overlayHero.style.opacity = "0.4" ;   

         // bg.style.backgroundPosition = "50% 71%";
    
      }
      else if (y > 150 && y < 200) {
         bg.style.backgroundSize = `120%`; 
         trees.style.backgroundSize = `120%`; 
         intro.style.opacity = "0.8";
         plot.style.marginTop = "15rem";

         overlayHero.style.opacity = "0.55" ;  

         // bg.style.backgroundPosition = "50% 74%";
     
      }
      else if (y > 200 && y < 250) {
         bg.style.backgroundSize = `125%`; 
         trees.style.backgroundSize = `125%`; 
         intro.style.opacity = "0.68";
         plot.style.marginTop = "10rem";

         overlayHero.style.opacity = "0.6" ;  
         // bg.style.backgroundPosition = "50% 78%";

      }
           else if (y > 250 && y < 300) {
               bg.style.backgroundSize = `130%`;      
               trees.style.backgroundSize = `130%`;      
               plot.style.marginTop = "0rem";

               overlayHero.style.opacity = "0.7" ;   
               intro.style.opacity = "0.55";

               // bg.style.backgroundPosition = "50% 75%";
            }
            else if (y > 300 && y < 350) {
               bg.style.backgroundSize = `135%`;      
               trees.style.backgroundSize = `135%`;   
               plot.style.marginTop = "-7.5rem";

               overlayHero.style.opacity = "0.8" ; 
               intro.style.opacity = "0.4";

               // bg.style.backgroundPosition = "50% 90%";
            }

            else if (y > 350 && y < 400) {
               bg.style.backgroundSize = `142%`; 
               trees.style.backgroundSize = `142%`;      
               plot.style.marginTop = "-8.5rem";

               overlayHero.style.opacity = "0.9" ;   
               intro.style.opacity = "0.15";

               // bg.style.backgroundPosition = "50% 90%";
            }
            else if (y > 400 && y < 450) {
               bg.style.backgroundSize = `150%`;    
               trees.style.backgroundSize = `150%`;      
               plot.style.marginTop = "-9rem";

               overlayHero.style.opacity = "0.97" ;  
               intro.style.opacity = "0";

               // bg.style.backgroundPosition = "50% 90%";

     
            }
            else if (y > 450 && y < 500) {
               bg.style.backgroundSize = `165%`;   
               trees.style.backgroundSize = `165%`; 
               plot.style.marginTop = "-9.5rem";
     
               overlayHero.style.opacity = "1" ;      
               intro.style.opacity = "0";

               // bg.style.backgroundPosition = "50% 90%";
 
            }
            else if (y > 500 && y < 600) {
               bg.style.backgroundSize = `180%`;  
               trees.style.backgroundSize = `180%`; 
               plot.style.marginTop = "-11rem";
     
    
               overlayHero.style.opacity = "1" ;     
               
               // bg.style.backgroundPosition = "50% 90%";

            }
            }

// Finishing state here:

            else if (y > 600) {
               bg.style.backgroundSize = `200%`; 
               trees.style.backgroundSize = `200%`; 
               plot.style.marginTop = "-11rem";
     
               overlayHero.style.opacity = "1" ;
               intro.style.opacity = "0";

               // bg.style.backgroundPosition = "50% 90%";

            }

            else if (y > 600 && y < 1200) {
               // Slide up birth of idea text.
            }
}

}












// JS FOR MODALS

// const imgSelect = document.querySelectorAll(".img-responsive");
const imgSelect = document.querySelectorAll(".birth-img"); //n
// console.log(imgSelect);
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = overlay.querySelector(".close");
const para = overlay.querySelector("p");
const sliderRight = overlay.querySelector(".fa-chevron-right");

function handleClick(event) {
  // console.log(event.currentTarget.dataset.caption);
  let id = event.currentTarget.dataset.id;
  //   let sliderId = event.currentTarget.dataset.birth;
  let currentTarget = event.currentTarget;

  //   console.log(id)
  // overlayClose.innerText = "✖️ close";
  // overlayImage.src = event.currentTarget.dataset.src;
  overlayImage.src = event.currentTarget
    .querySelector(".img")
    .querySelector(".img-responsive").src;
  //   console.log(overlayImage.src);
  para.innerText = event.currentTarget.dataset.caption; //NEW LINE ADDED
  // h1.innerText = `Name: ${data[id].name}`;
  // h2.innerText = `Category: ${data[id].category}`;
  overlay.classList.add("open");
  console.log(event.currentTarget);

  sliderRight.addEventListener("click", event => {
    // console.log(id);
    //   console.log(currentTarget.dataset.src);
    //   console.log(sliderId);
    // for(i = 0; i <= sliderId; i++)
    //  if(sliderId!==0) {
    //    newId = toString(Number(sliderId) + 1);
    //    // console.log(newId);
    //    let a = imgSelect[sliderId].getAttribute('data-birth');
    //    overlayImage.src=
    // console.log(event.target);
    //   overlayImage.src = currentTarget.dataset.src;
    if (true) {
      // console.log(overlayImage.src);
      // console.log(imgSelect[id].getAttribute("data-src"));
      currentTarget = imgSelect[id].getAttribute("data-src");
      // let currentText = currentTarget.dataset.caption;
      // console.log(currentText);
      console.log(currentTarget);
      overlayImage.src = currentTarget;
      if (id == 0 || id == 1) {
        if (id != 1) {
          id = Number(id) + 1;
        } else {
          id = 0;
        }
        let currentText = imgSelect[id].getAttribute("data-caption");
        para.innerText = currentText;
      }
      if (id == 2 || id == 3 || id == 4 || id == 5) {
        if (id != 5) {
          id = Number(id) + 1;
        } else {
          id = 2;
        }
        let currentText = imgSelect[id].getAttribute("data-caption");
        para.innerText = currentText;
      }
      if (id == 6 || id == 7 || id == 8 || id == 9 || id == 10 || id == 11) {
        if (id != 11) {
          id = Number(id) + 1;
        } else {
          id = 6;
        }
        let currentText = imgSelect[id].getAttribute("data-caption");
        para.innerText = currentText;
      }
      if (
        id == 12 ||
        id == 13 ||
        id == 14 ||
        id == 15 ||
        id == 16 ||
        id == 17
      ) {
        if (id != 17) {
          id = Number(id) + 1;
        } else {
          id = 12;
        }
        let currentText = imgSelect[id].getAttribute("data-caption");
        para.innerText = currentText;
      }
    }
  });
}

function handleClose(e) {
  overlay.classList.remove("open");
}

function handleSliderRight(e) {
  console.log();
}

imgSelect.forEach((e, index) => {
  // console.log(e);
  e.setAttribute("data-id", index);
  // console.log(data-id);
  e.addEventListener("click", handleClick);
});

overlayClose.addEventListener("click", handleClose);
