type libioParams = {
    autoplay?: boolean,
    showErrorsInConsole?: boolean,
}

type elList = {
    id: number,
    classList: string[]
}

export class Libio {
    private parentElement: Element
    private autoplay
    private showErrorsInConsole
    private elementsList: []

    constructor(element: Element, {autoplay, showErrorsInConsole}: libioParams = {}) {
        this.showErrorsInConsole = showErrorsInConsole;
        if(!element) {
            this.logError('Libio error! Main element in undefined!')
            return;
        }

        this.parentElement = element;
        this.autoplay = autoplay;

        this.eventsCreator();
    }

    public create() {
        console.log("Libio has been created");
    }

    private eventsCreator() {
        this.parentElement.addEventListener('click', () => {
            console.log('click');
            const first = document.querySelector('.first');
            console.log(first);
            
            first?.classList.add('closed-just-now');
            
        })
    }

    private logError(text: string) {
        if (!this.showErrorsInConsole) return;
        console.log(`%c${text}`, 'color: red; background: #212529; font-size: 15px');
    }

    private convertElementsToData() {

    }
}
