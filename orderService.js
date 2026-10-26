const { EventEmitter } = require('events');
const config = require('./config');

class OrderService extends EventEmitter {
    createOrder(order) {
        this.emit('orderCreated', order);

        setTimeout(() => {
            this.emit('orderProcessed', order);
        }, config.PROCESSING_DELAY_MS);
    }
}

module.exports = OrderService;