import axios from "axios";

const apiUrl = 'http://localhost:3001';
const api = axios.create({
    baseURL: apiUrl
});

export const fetchTransactions = async () =>{
    try{
        const response = await api.get(`${apiUrl}/transactions`);
        return response.data;
    
    }catch(error){
        throw error;
    }
};

export const addTransaction = async(transaction) => {
    try{
        const response = await api.post(`${apiUrl}/transactions`, transaction);
        return response.data;
    
    }catch(error){
        throw error;
    }
};
