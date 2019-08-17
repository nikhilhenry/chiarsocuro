<template>
  <div class="home">
  <div>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <strong class="navbar-item">Chiaroscuro</strong>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navItems" v-on:click="navToggle" v-bind:class="{'is-active':isActive}">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div class="navbar-menu" id="navItems" v-bind:class="{'is-active':isActive}">
    <div class="navbar-end">
      <a class="navbar-item" v-scroll-to="'#hero'">Home</a>
      <a class="navbar-item" v-scroll-to="'#events'">Events</a>
      <a class="navbar-item" v-scroll-to="'footer'">Contact Us</a>
    </div>
  </div>
</nav>
  </div>
  <Hero id="hero"/>
  <Events id="events"/>
  <Footer id="footer"/>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Events from '@/components/Events'
import Footer from '@/components/Footer'

export default {
  name: 'home',
  components: {
    Hero,
    Events,
    Footer,
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
