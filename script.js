const button = document.createElement("button");
button.innerText = "Click Me";

button.addEventListener("click", () => {
    alert("JS created this UI!");
});

document.body.appendChild(button);
