async function buscarDadosPorApi(){
    try{
        const response = await fetch("https://viacep.com.br/ws/57084146/json/")

        const data = await response.json()

        console.log("Dados Recebidos: ", data)
    }
    catch(error){
        console.error("Error ao tentar buscar os dados: ", error)
    }
}

buscarDadosPorApi();