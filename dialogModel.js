class DialogModel
{
    constructor(dialog)
    {
        this.dialog = dialog;
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
    }
}