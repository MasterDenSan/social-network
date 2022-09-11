export interface DialogsI {
    dialogsPage: {
        dialogs: {
            id: number
            name: string
        }[],
        masseges: {
            massege: string
        }[]
    },
    friends: any[],
    addDialogMessageActionCreator: (messageBody: string) => void
}