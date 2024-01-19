let button = document.querySelector(".button");
let container = document.querySelector(".container");


function handleClick() {
  window.location.reload();
}

button.addEventListener('click',(e)=>{
  e.preventDefault()
  function animateProgressBar(progressBar, duration) {
    let progress = 0;
    const increment = 1 / duration * 100; // Adjust the increment value for desired smoothness
  
    const interval = setInterval(() => {
      progress += increment;
      let exact = Math.floor(progress);
      progressBar.style.width = `${progress}%`;
      progressBar.innerHTML = `${exact}%`;
      progressBar.style.color = 'white';

      let progressb = document.querySelector(".progressb");

  
      if (progress >= 100) {
        clearInterval(interval);
        button.innerHTML = "Done";
        progressb.style.backgroundImage = "url('crackers.gif')";

        let circle = document.createElement("div");
        circle.classList.add("circle");
        container.insertBefore(circle, container.firstChild);
        console.log(container)

        
      }else{
        button.innerHTML = "Make Order";
        progressb.style.backgroundImage = "none";
        button.addEventListener("click", handleClick);

      }
    }, 5); // Adjust the interval duration for desired speed


    function drawProgress(progress) {
      var canvas = document.getElementById("progressCanvas");
      var context = canvas.getContext("2d");

      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the background circle
      context.beginPath();
      context.arc(canvas.width / 2, canvas.height / 2, 65, 0, 2 * Math.PI);
      context.lineWidth = 8;
      context.strokeStyle = "#ddd";
      context.stroke();

      // Draw the progress circle
      context.beginPath();
      context.arc(
        canvas.width / 2,
        canvas.height / 2,
        65,
        -0.5 * Math.PI,
        (-0.45 + 2 * progress) * Math.PI
      );
      context.lineWidth = 8;
      context.strokeStyle = "#4caf50";
      context.stroke();

      // Display the progress value in the middle
      context.font = "20px Arial";
      context.fillStyle = "#fff";
      context.textAlign = "center";
      context.textBaseline = "middle";

      

      context.fillText(Math.round(progress * 100) + "%", canvas.width / 2, canvas.height / 2);

      if(Math.round(progress)  == 100){
        context.style.backgroundColor = "green";
      }
    }

    // Example: Update progress every 100 milliseconds
    var currentProgress = 0;
    var progressInterval = setInterval(function () {
      currentProgress += 0.01;
      if (currentProgress > 1) {
        clearInterval(progressInterval);
        // canvas.innerHTML = currentProgress;
      }
      drawProgress(currentProgress);
    }, 135);
  
  }

  


  
  const progressBar = document.querySelector('.progress');
  animateProgressBar(progressBar, 2000); // Example: animates to 30% in 2 seconds
})