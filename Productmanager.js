class ProductManager {
    
    constructor() {
        this.eventos = [];
    }

    getEventos = () => {
        return this.eventos;
    }

    agregarEvento = (title, description, price, thumbnail, code, stock) => {
        const evento = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock, 
        }
        
        if (this.eventos.length === 0) {
            evento.id = 1;
        } else {
            evento.id = this.eventos[this.eventos.length - 1].id + 1;
        }

        this.eventos.push(evento);
    }

    addProduct = (idEvento, idUsuario) => {
        const eventoIndex = this.eventos.findIndex(e=>e.id === idEvento);

        if (eventoIndex === -1) {
            console.log('Evento no encontrado');
            return;
        }

        const usuarioRegistrado = this.eventos[eventoIndex].participantes.includes(idUsuario);

        if (usuarioRegistrado) {
            console.log('usuario ya registrado');
            return;
        }

        this.eventos[eventoIndex].participantes.push(idUsuario);
    }
}

const manejadorEventos = new ProductManager();
console.log(manejadorEventos.getEventos());