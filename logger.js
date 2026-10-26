const config = require('./config');

function setupLogger(orderService) {
    orderService.on('orderCreated', (order) => {
        const timestamp = new Date().toLocaleString();
        console.log(`[${timestamp}] Đơn hàng #${order.id} đã được tạo`);
    });

    orderService.on('order:Processed', (order) => {
        const timestamp = new Date().toLocaleString();
        console.log(`[${timestamp}] Đơn hàng #${order.id} đã được xử lý`);
    });
}

module.exports = setupLogger;