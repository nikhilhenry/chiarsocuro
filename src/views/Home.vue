<template>
  <div class="home">
  <div>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <strong class="navbar-item">Chiaroscuro</strong>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navItems" v-on:click="navToggle" v-bind:class="{'is-active':isActive}">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div class="navbar-menu" id="navItems" v-bind="{'is-active':isActive}">
    <div class="navbar-end">
      <a class="navbar-item">Home</a>
      <a class="navbar-item">Events</a>
      <a class="navbar-item">Contact Us</a>
    </div>
  </div>
</nav>
  </div>
  <Hero/>
  <Events/>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Events from '@/components/Events'

export default {
  name: 'home',
  components: {
    Hero,
    Events,
  },
  data(){
    return{
      isActive:false
    }
  },
  methods:{
    navToggle:function(){
      this.isActive=!this.isActive;
    }
  }
}
</script>

<style lang="scss" scoped>
  nav{
    .navbar-brand{
      strong{
        font-size: 1.5rem;
        color: black;
      }
    }
  }
</style>
