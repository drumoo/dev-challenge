import { http } from './config';

export default {
    get: (p) => {
        const produts = [];
        http.get(`/produts/?text=${p}`)
        .then(res => {
            res.data.forEach(el => {
                produts.push(el);
            });
        })

        return produts;
    }
}