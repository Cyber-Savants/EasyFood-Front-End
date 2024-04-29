export class Order {
    constructor(id, entradas, segundo, bebidas, tiempoEntrega, state, fecha, restaurantId, userId) {
        this.id = id;
        this.entradas = entradas;
        this.segundo = segundo;
        this.bebidas = bebidas;
        this.tiempoEntrega = tiempoEntrega;
        this.state = state;
        this.fecha = fecha;
        this.restaurantId = restaurantId;
        this.userId = userId;
    }
}