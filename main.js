let dialogModel = null;
window.addEventListener("load", function() {
    dialogModel = new DialogModel(document.getElementById("main_dialog"));
    drawIsland(3);

    const supportButton = document.getElementById("support_button");
    supportButton.addEventListener("click", function() {
        const dialog = document.getElementById("main_dialog");
        dialogModel.showCard("resident");
        dialogModel.showModal();
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
    this.document.getElementById("select_plan").addEventListener("click", function() {
        dialogModel.showCard("payment", "Data");
    });
    loadResidentCard();
});

function payToResident(resident)
{
    document.getElementById("resident_big_photo").src = resident.image;
    document.getElementById("resident_description").textContent = resident.description;
    dialogModel.showCard("detail", "Donation");
}

function loadResidentCard()
{
    // TODO: fetch resident data
    const residents = [
        {
            name: "山田　涼",
            description: "窮到吃草，多多捐",
            image: "assets/residents/ryo.png"
        },
    ];
    // TODO: generate resident cards
    const residentContainer = document.getElementById("dialog_resident_info");
    residents.forEach((resident) => {
        const card = document.createElement("div");
        card.classList.add("resident-info");
        const photo = document.createElement("div");
        photo.classList.add("resident-photo");
        const img = document.createElement("img");
        img.src = resident.image;
        photo.appendChild(img);
        const name = document.createElement("div");
        name.classList.add("resident-name");
        name.textContent = resident.name;
        card.appendChild(photo);
        card.appendChild(name);
        residentContainer.appendChild(card);

        card.addEventListener("click", function() {
            payToResident(resident);
        });
    });
    // TODO: add event listeners to resident cards
}

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