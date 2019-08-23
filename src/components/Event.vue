<template>
<div>
  <div class="card" v-on:click="modalToggle">
    <div class="card-image"><img v-bind:src="event.image" ></div>
  </div>

  <!-- The modal -->
  <div class="modal" v-bind:class="{'is-active':isActive}">
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="box">
      <article class="media">
        <div class="media-content">
         <div class="content">
           <p>
             <strong class="title">{{event.title}}</strong>
             <br>
           </p>
           <div class="text has-text-left">
            <p><strong class="Subtitle">Number of Participants:</strong> {{event.num_participants}}</p>
            <p><strong class="Subtitle">Grades:</strong> {{event.age_category}}</p>
            <p><strong class="Subtitle">Duration: </strong>{{event.duration}}</p>
            <p><strong class="Subtitle">Materials provided: </strong> {{event.mat_prov}}</p>
            <p><strong class="Subtitle">Materials to brought: </strong> {{event.mat_brought}}</p>
            <p><strong class="Subtitle">Details: </strong>{{event.details}}</p>
           </div>
        </div>
        <nav  class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="details"><a class="button is-success" v-on:click="registerToggle">REGISTER</a></a>
        </div>
        </nav> 
        </div>
      </article>
    </div>
  </div>
  <button class="modal-close is-large" aria-label="close" v-on:click="modalToggle"></button>
</div>

<!-- registration modal -->
  <div class="modal" v-bind:class="{'is-active':isRegisterActive}">
    <Register v-bind:event_title="event.title" v-bind:event="event"/>
    <button class="modal-close is-large" aria-label="close" v-on:click="registerToggle"></button>
  </div>
</div>
</template>

<script>
import Register from '@/components/Register'

export default {
  name:'Event',
  props:["event"],
  components:{
    Register
  },
  data(){
    return{
      isActive:false,
      isRegisterActive:false,
    } 
  },
  methods:{
    modalToggle:function(){
      this.isActive=!this.isActive
    },
    registerToggle:function(){
      this.isRegisterActive=!this.isRegisterActive
      this.isActive=false
    }
  }
}
</script>

<style lang="scss" scoped>
.modal{
  .text{
    margin-bottom: 12px;
  }
}
</style>