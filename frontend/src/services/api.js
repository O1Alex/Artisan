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
        return res.data.data
    },
    getTopArtisans: async () => {
        const res = await apiClient.get("/artisan", {params: {top: true, limit: 3} });
        return res.data.data
    }

}

export default apiService;