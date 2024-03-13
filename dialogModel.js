class DialogModel
{
    constructor()
    {
        this.dialogStack = [];
    }
    show(dialog)
    {
        if(this.dialogStack.length > 0)
        {
            this.dialogStack.at(-1).close();
        }
        dialog.showModal();
        this.dialogStack.push(dialog);
    }
    pop()
    {
        if(this.dialogStack.length > 0)
        {
            this.dialogStack.at(-1).close();
            const closedDialog = this.dialogStack.pop();
            if(this.dialogStack.length > 0)
            {
                this.dialogStack.at(-1).showModal();
            }
            return closedDialog;
        }
    }
    closeAll()
    {
        this.dialogStack.forEach((dialog) => dialog.close());
        this.dialogStack = [];
    }
}