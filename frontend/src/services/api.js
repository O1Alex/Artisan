import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:3000/api",
    timeout: 5000,
    headers:{
        "Content-Type": "application/json",
    }
})

const apiService = {
    getCategories: async () => {
        const res = await apiClient.get("/categorie");
        return res.data.data;
    },
    getTopArtisans: async () => {
        const res = await apiClient.get("/artisan", {params: {top: true, limit: 5} });
        return res.data.data;
    },
    getCategorieById: async (id) => {
        const res = await apiClient.get(`/categorie/${id}`);
        return res.data.data;
    },
    getArtisansByCategorieId: async (categorie_id) => {
        const res = await apiClient.get("/artisan", {
            params: {categorie_id}
        });
        return res.data.data;
    },
    getArtisansByName: async (nom) => {
        const res = await apiClient.get("/artisan", {
            params: { nom }
        });
        return res.data.data;
    },
};

export default apiService;