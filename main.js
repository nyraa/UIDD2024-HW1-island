let dialogModel = null;
window.addEventListener("load", function() {
    dialogModel = new DialogModel(document.getElementById("main_dialog"));
    drawIsland(3);

    const supportButton = document.getElementById("support_button");
    supportButton.addEventListener("click", function() {
        const dialog = document.getElementById("main_dialog");
        // dialogModel.showCard("resident");
        dialogModel.showCard("resident", "Resident");
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

    this.document.getElementById("island_button").addEventListener("click", function() {
        dialogModel.showCard("island", "Resident");
        dialogModel.showModal();
    });

    this.document.getElementById("resident_button").addEventListener("click", function() {
        dialogModel.showCard("resident", "Resident");
        dialogModel.showModal();
    });

    this.document.getElementById("extra_support").addEventListener("change", function() {
        if (this.checked)
        {
            document.getElementById("extra_support_label").textContent = "+$500";
        }
        else
        {
            document.getElementById("extra_support_label").textContent = "+$0";
        }
    });

    this.document.getElementById("pay_plan").addEventListener("change", function() {
        const plan = this.value;
        const planList = {
            1: 700,
            2: 2100,
            3: 4200,
            4: 8400
        };
        document.getElementById("pay_plan_label").textContent = `$${planList[plan]}`;
    });


    this.document.getElementById("select_plan").addEventListener("click", function() {
        dialogModel.showCard("payment", "Data");
    });

    this.document.getElementById("paymethod_next_button").addEventListener("click", function() {
        if(document.getElementById("payment_info").checkValidity())
        {
            dialogModel.showCard("paymethod", "Payment Method");
        }
        else
        {
            document.getElementById("payment_info").reportValidity();
        }
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