const moonpath = "M14.5 27.5C14.5 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 14.5 12.3122 14.5 27.5Z";

const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darMode = document.querySelector("#darkMode");
let toggle = false;

darMode.addEventListener('click', () => {
  const timeline = anime.timeline({
  
    duration: 750,
    easing: "easeOutExpo",
  });
  timeline.add({
    targets: ".sun",

    d: [{ value: toggle ? sunPath : moonpath }]
  })
    .add({

      targets: "#darkMode",
      rotate: 320,
      
    },
      "-= 350"
    )
    
   
    


    .add({

      targets: "body,section",
      backgroundColor: toggle ? 'rgb(255,255,255,0)' : "rgb(22,22,22,8)",
      color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
    }, '-=700'
    );



  if (!toggle) {
    toggle = true;
    
    
    

     
  } else {
    toggle = false;
    
  }

});


