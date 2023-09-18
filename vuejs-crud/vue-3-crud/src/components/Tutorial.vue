<template>
  <div v-if="currentTutorial" class="edit-form">
      <h4>Tutorial</h4>
      <form>
        <div class="form-group">
           <label for="title">Titulo</label>
           <input type="text" class="form-control" id="title" 
              v-model="currentTutorial.title"
           />
        </div>

        <div class="form-group">
            <label for="description">Descrição</label>
            <input type="text" class="form-control" id="description" 
              v-model="currentTotal.description"
            />
        </div>

        <div class="form-group">
            <label><strong>Status:</strong></label>
            {{ currentTutorial.published ? "Published": "Pending"}}
        </div>
      </form>

      <button class="badge badge-primary mr-2" 
        v-if="currentTutorial.published"
        @click="updatePublished(true)"
      >

        Publicado
        
      </button>

      <button class="badge badge-danger mr-2"
        @click="deleteTutorial"
      > 
        Apagar

      </button>

      <button type="submit" class="badge badge-success"
      @click="upadateTutorial"
      >

        Atualizar
      </button>

      <p>{{ message }}</p>
  </div>

  <div v-else>
    <br/>
    <p>Por favor clique em um Tutorial...</p>

  </div>
</template>

<script>

import TutorialDataService from '../services/TutorialDataService';

export default{
  name:"tutorial",
  data(){
    return{
      currentTutorial: null,
      message: ""
    };
  },

  methods: {
    getTutorial(id){
      TutorialDataService.get(id)
      .then(response => {
        this.currentTutorial = response.data;
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      })
    },

    updatePublished(status){
        var data = {
          id: this.currentTutorial.id,
          title: this.currentTutorial.title,
          description: this.currentTutorial.description,
          published: status
        };
        
        TutorialDataService.update(this.currentTutorial.id, data)
        .then(response => {
          this.currentTutorial.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  }
}
</script>