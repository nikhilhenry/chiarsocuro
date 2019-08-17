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
           <p class="text has-text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non nisi est sit. Non blandit massa enim nec dui nunc mattis enim ut. Id diam maecenas ultricies mi eget mauris pharetra.
           </p>
        </div>
        <nav  class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="details"><a class="button is-info">DETAILS</a></a>
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
    <Register v-bind:event_title="event.title"/>
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