window.addEventListener("load", function() {
    drawIsland(3)
});

function drawIsland(stage=0)
{
    const canvas = document.getElementById("island_canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
    
    const image = new Image();
    image.src = `assets/${stage}.png`;

    image.onload = function() {
        ctx.drawImage(image, 0, 0);
    };
}