<template>
  <div class="list row">
      <div class="col-md-8">
         <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Pesquisar por titulo" 
             v-model="title" />
         </div>
         <div class="input-group-append">
           <button class="btn btn-outline-secondary" type="button" @click="searchTitle">
              Pesquisar
          </button>
         </div>
      </div>

      <div class="col-md-6">
        <h4>Lista de Tutoriais</h4>
        <ul class="list-group">
            <li class="list-group-item"
              :class="{active:index == currentIndex}"  
              v-for="{tutorial, index} in tutorials"
              :key="index"
              @click="setActiveTutorial(tutorial, index)"
            >

            {{ tutorial.title }}
          </li>
        </ul>

        <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials" >
            Remover Todos 
        </button>
      </div>

      <div class="col-md-6">
        <div v-if="currentTutorial">
          <h4>Tutorial</h4>
          <div>
            <label><strong>Titulo:</strong></label>{{currentTutorial.title }}
          </div>
          <div>
            <label><strong>Descrição: </strong></label>{{ currentTutorial.description }}
          </div>
          <div>
            <label><strong>Status: </strong></label>{{currentTutorial.published ? "Published" : "Pending" }}
          </div>

          <router-link :to="'/tutorials/' + currentTutorial.id" class="badge badge-warning">Editar</router-link>
      </div>
      <div v-else>
        <br/>
        <p>Porfavor, click em um Tutorial...</p>
      </div>
    </div>
  </div>
</template>

<script>
import TutorialDataService from '../services/TutorialDataService';

export default {
  name:"tutorial-list",
  data(){
    return{
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: ""
    };
  },

  methods:{
    retrieveTutorials(){
      TutorialDataService.getAll()
      .then(response => {
        this.tutorials = response.data
        console.log(response.data)
      })
      .catch(e => {
        console.log(e);
      });
    },

    refreshList(){
      this.retrieveTutorials();
      this.currenTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index){
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },

    removeAllTutorials(){
      TutorialDataService.deleteAll()
      .then(response => {
        console.log(response.data)
      })
      .catch(e => {
        console.log(e);
      });
    },

    searchTitle(){
      TutorialDataService.findByTitle(this.title)
      .then(response => {
        this.tutorials = response.data
        console.log(response.data)
      })
      .catch(e => {
        console.log(e);
      });
    },

    mounted(){
      this.retrieveTutorials();
    }

  }  

};
</script>

<style>
  .list{
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
</style>