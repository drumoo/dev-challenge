import { http } from './config';

export default {
    get: (p) => {
        const equipments = [];
        http.get(`/equipments/?text=${p}`)
        .then(res => {
            res.data.forEach(el => {
                equipments.push(el);
            });
        })

        return equipments;
    }
}