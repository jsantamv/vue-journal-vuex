export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: `Nostrud dolore culpa excepteur id mollit anim sunt ad exercitation nisi labore nostrud incididunt mollit. 
                    Minim dolor culpa laboris laborum anim cupidatat deserunt duis qui labore aliqua.`,
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: `Nisi labore est Lorem mollit nostrud aliquip sint minim cillum esse cupidatat anim minim laboris. 
                    Id voluptate culpa mollit laborum aliquip tempor dolore quis enim non.`,
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: `Sint eu reprehenderit consequat elit ex deserunt enim ea aute.Nisi eiusmod culpa duis dolor laborum et deserunt aliqua elit.
                    Voluptate culpa ullamco id mollit eu. Et quis laboris est laborum reprehenderit duis non ex.`,
            picture: null
        }
    ]
})