import { http } from './config';

export default {
    get: (p) => {
        const purchase_orders = [];
        http.get(`/purchase_orders/?text=${p}`)
        .then(res => {
            res.data.forEach(el => {
                purchase_orders.push(el);
            });
        })

        return purchase_orders;
    }
}