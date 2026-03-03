document.addEventListener("mousemove", function(e) {
    console.log("Mouse X:", e.clientX);
});

document.body.addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
});

document.getElementById("btn").addEventListener("click", function() {
    alert("You clicked the button!");

});
