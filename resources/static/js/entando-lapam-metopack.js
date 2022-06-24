import "./tkrad.js"


const ATTRIBUTES = {
    modulo: 'modulo',
};


class EntandoLapamMetopack extends HTMLElement {

    static get observedAttributes() {
        return Object.values(ATTRIBUTES);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (!Object.values(ATTRIBUTES).includes(name)) {
            throw new Error(`Untracked changed attribute: ${name}`);
        }
        if (this.mountPoint && newValue !== oldValue) {
            this.render();
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const runner = {
            host: "34.159.252.151",
            port: 61500,
            utente: "117513",
            prog: 1,
            titolo: "Metopack"
        }

        runner.modulo = this.getAttribute(ATTRIBUTES.modulo);


        const ele = document.createElement("tkrad-digital")
        ele.setModule(runner, (type, event) => {
            if ( type == "START" ) {
                ele.innerHTML = "Connessione non realizzabile"
            } else if ( type == "ERROR" ) {
                ele.innerHTML = "Connessione momentaneamente non disponibile"
            } else if ( type == "CLOSE" ) {
                ele.innerHTML = "Connessione terminata"
            }
        })

        this.appendChild(ele)

    }
}

customElements.get('entando-lapam-metopack') || customElements.define("entando-lapam-metopack", EntandoLapamMetopack)
