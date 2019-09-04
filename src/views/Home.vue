<template>
  <div class="home">
  <div>
  <nav class="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
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
      <a class="navbar-item" href="/chiaroscuro/brochure.pdf" download><strong>Download Brochure</strong></a>
      <a class="navbar-item" v-scroll-to="'#hero'">Home</a>
      <a class="navbar-item" v-scroll-to="'#events'">Events</a>
      <a class="navbar-item" v-on:click="modalToggle">General Guidelines</a>
      <a class="navbar-item" v-scroll-to="'footer'">Contact Us</a>
    </div>
  </div>
</nav>
  </div>
  <Hero id="hero"/>
  <Events id="events"/>
  <Footer id="footer"/>

<!-- general guidelines -->
  <!-- The modal -->
  <div class="modal" v-bind:class="{'is-active':isModalActive}">
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="box">
      <article class="media">
        <div class="media-content">
         <div class="content">
           <p>
             <strong class="title">General Guidelines</strong>
             <br>
           </p>
           <div class="text has-text-left">
             <ul>
               <li>Participation is restricted to students of Grade 6-12.</li>
               <li>A student may participate in only one competition.</li>
               <li>All schools must submit their completed registration forms by the deadline - September 5th, 2019.</li>
               <li>Participants must bring all the required materials as specified for their event.</li>
               <li>1 faculty chaperone must accompany every 10 participants.</li>
               <li>Participants will be responsible for all their personal belongings - art supplies, electronics and any other preparatory material. Legacy School Bangalore is not liable for the loss of any items.</li>
               <li>Plagiarism and other unethical activities will not be tolerated.</li>
               <li>The use of foul language and any inappropriate behaviour will not be tolerated. In such a situation, the participating team will be disqualified from the competition. </li>
               <li>The decision of the judges will be final and binding.</li>
               <li>Additional details / theme for each event will be revealed on the day of the festival. </li>
               <li>Legacy School Bangalore reserves the right to make any amendments to the rules or events if deemed necessary.</li>
               <li>Legacy School Bangalore reserves the right to determine / accept participation.</li>
               <li>Registration fees are non-refundable.</li>
               <li>All materials given and artworks made are Legacy School’s property. </li>
               <li>Selected pieces of artwork created during the competition will be showcased with the name of the students / students and their school, at the Sublime Art Gallery UB City after the event. Any sale proceeds will be reimbursed to the student. After the exhibition, remaining art works will be couriered to the respective school at their risk.</li>
             </ul>
           </div>
        </div>
        </div>
      </article>
    </div>
  </div>
  <button class="modal-close is-large" aria-label="close" v-on:click="modalToggle"></button>
</div>
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
      isActive:false,
      isModalActive:false,
    }
  },
  methods:{
    navToggle:function(){
      this.isActive=!this.isActive;
    },
    modalToggle:function(){
      this.isModalActive=!this.isModalActive;
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
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.212), 0 0 0 1px rgba(10,10,10,0.212);
  }
</style>
