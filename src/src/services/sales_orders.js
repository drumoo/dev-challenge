import { http } from './config';

export default {
    get: (p) => {
        const sales_orders = [];
        http.get(`/sales_orders/?text=${p}`)
        .then(res => {
            res.data.forEach(el => {
                sales_orders.push(el);
            });
        })

        return sales_orders
    }
}