import "./tkrad.js"


class EntandoLapamMetopack extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        const runner = {
            host: "34.159.252.151",
            port: 61500,
            utente: "117513",
            prog: 1,
            modulo: "report/bilancioPeriodico",
            titolo: "Metopack"
        }
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
