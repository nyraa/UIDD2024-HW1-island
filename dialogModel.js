class DialogModel
{
    constructor(dialog)
    {
        this.dialog = dialog;
        this.cardStack = [];
    }
    showModal()
    {
        this.dialog.showModal();
    }
    close()
    {
        this.dialog.close();
        this.cardStack = [];
    }
    showCard(step, title)
    {
        if(title)
        {
            document.getElementById("dialog_title").textContent = title;
        }
        const selector = document.querySelector(`.dialog-card-selector[data-card-step="${step}"]`);
        selector.checked = true;
        this.cardStack.push({selector, title: title ?? document.getElementById("dialog_title").textContent});
    }
    back()
    {
        if(this.cardStack.length > 0)
        {
            this.cardStack.pop().selector.checked = false;
        }
        if(this.cardStack.length > 0)
        {
            const last = this.cardStack[this.cardStack.length - 1];
            last.selector.checked = true;
            document.getElementById("dialog_title").textContent = last.title;
        }
        else
        {
            this.close();
        }
    }
}