import { http } from './config';

export default {
    get: (p) => {
        const workforce = [];
        http.get(`/workforce/?text=${p}`)
        .then(res => {
            res.data.forEach(el => {
                workforce.push(el);
            });
        })

        return workforce;
    }
}