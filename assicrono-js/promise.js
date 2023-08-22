function buscarDadosPorApi() {
    return new Promise((resolve, reject) => {
        fetch("https://viacep.com.br/ws/57084146/json/")
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
    });
}

buscarDadosPorApi()
    .then(data => {
        console.log("Dados recebidos:", data); // Use a vírgula para separar a string do objeto
    })
    .catch(error => {
        console.log("Erro ao tentar buscar os dados:", error); // Use a vírgula para separar a string do objeto
    });
