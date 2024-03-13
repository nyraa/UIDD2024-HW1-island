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
    }
    showCard(step)
    {
        const selector = $(`.dialog-card-selector[data-card-step="${step}"]`);
        selector.checked = true;
        this.cardStack.push(selector);
    }
    back()
    {
        if(this.cardStack.length > 0)
        {
            this.cardStack.pop().checked = false;
        }
        else
        {
            this.close();
        }
        if(this.cardStack.length > 0)
        {
            this.cardStack[this.cardStack.length - 1].checked = true;
        }
    }
}