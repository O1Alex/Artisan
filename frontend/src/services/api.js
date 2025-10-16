import axios from "axios";

const apiService = {
    getCategories: async () => {
        const res = await axios.get("http://localhost:3000/api/categorie");
        return res.data.data
    }
}

export default apiService;