window.addEventListener("load", function() {
    const dialogModel = new DialogModel(document.getElementById("main_dialog"));
    drawIsland(3);

    const supportButton = document.getElementById("support_button");
    supportButton.addEventListener("click", function() {
        const dialog = document.getElementById("main_dialog");
        dialog.showModal();
    });

    this.document.querySelectorAll(".back-button").forEach((button) => {
        button.addEventListener("click", function() {
            dialogModel.back();
        });
    });
    this.document.querySelectorAll(".close-button").forEach((button) => {
        button.addEventListener("click", function() {
            dialogModel.close();
        });
    });
});

function drawIsland(stage=0)
{
    const canvas = document.getElementById("island_canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
    
    const image = new Image();
    image.src = `assets/island/${stage}.png`;

    image.onload = function() {
        ctx.drawImage(image, 0, 0);
    };
}