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
             <strong>{{event.title}}</strong>
             <br>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
           </p>
        </div>
        <nav  class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="details"><a class="button is-info">DETAILS</a></a>
          <a class="level-item" aria-label="details"><a class="button is-success">REGISTER</a></a>
        </div>
        </nav> 
        </div>
      </article>
    </div>
  </div>
  <button class="modal-close is-large" aria-label="close" v-on:click="modalToggle"></button>
</div>
</div>
</template>

<script>
export default {
  name:'Event',
  props:["event"],
  data(){
    return{
      isActive:false
    } 
  },
  methods:{
    modalToggle:function(){
      this.isActive=!this.isActive
    }
  }
}
</script>