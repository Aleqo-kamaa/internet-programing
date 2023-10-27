// Get a reference to the body element
const body = document.body;

// Function to change the background color
function changeBackgroundColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFFF33"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
}

// Add a click event listener to the body
body.addEventListener("click", changeBackgroundColor);
