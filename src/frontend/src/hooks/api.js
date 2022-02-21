import axios from "axios";

const URL_API = "https://localhost:7113/";


export const api = {
    getEquipments: async (key) => {
        key = (key.trim()) ? ("/" + key) : "";        
        let response = await axios.get(URL_API + "Equipments" + key);        
        return response.data;
    },
    getWorkforce: async (key) => {
        key = (key.trim()) ? ("/" + key) : "";
        let response = await axios.get(URL_API + "Workforce" + key);   
        return response.data;
    },
    getMaterials: async (key) => {
        key = (key.trim()) ? ("/" + key) : "";     
        let response = await axios.get(URL_API + "Materials" + key);
        return response.data;
    },
    getPurchaseOrders: async (key) => {
        key = (key.trim()) ? ("/" + key) : "";
        let response = await axios.get(URL_API + "PurchaseOrders" + key);
        return response.data;
    },
    getSalesOrders: async (key) => {
        key = (key.trim()) ? ("/" + key) : "";
        let response = await axios.get(URL_API + "SalesOrders" + key);
        return response.data;
    }     
}