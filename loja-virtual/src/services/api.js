import axios from 'axios';

class BaseService {
    constructor() {
        this.baseUrl = "http://localhost:3001";
    }

    getProducts = async path => {
        let url = `${this.baseUrl}${path}`;
        let response = await axios.get(url)
            .catch(error => console.log("ERRO AO TENTAR BUSCAR DADOS DA API " + error));

        return response;
    };
}

const instance = new BaseService(); // Criar uma instância da classe

export default instance; // Exportar a instância da classe
