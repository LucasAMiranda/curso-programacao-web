import httpCommon from "../src/http-common";

class TutorialDataService{
    getAll(){
        return httpCommon.get("/tutorials");
    }

    get(id){
        return httpCommon.get(`tutorials/${id}`)
    }

    create(data){
        return httpCommon.post("/tutorials", data)
    }

    update(id, data){
        return httpCommon.put(`/tutorials/${id}`, data);
    }

    delete(id){
        return httpCommon.delete(`/tutorials/${id}`)
    }

    deleteAll(){
        return httpCommon.delete('tutorials')
    }

    findByTitle(title){
        return httpCommon.get(`/tutorials?title=${title}`)
    }
}
export default new TutorialDataService();