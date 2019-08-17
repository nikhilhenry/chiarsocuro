<template>
  <div class="hero">
  <section class="hero is-fullheight">
    <div class="hero-body">
    <div class="container has-text-centered">
      <p class="subtitle is-5 is-size-7-mobile is-spaced has-text-white">7th Annual Inter-school Art and Design Fesitival and Competitions</p>
      <p class="title is-1 has-text-white">Chiaroscuro'19</p>
      <p class="subtitle is-3 has-text-white">September 20</p>
      <p class="subtitle is-5 has-text-white">Hosted by Legacy School Bangalore</p>
    </div>
    </div>
  </section>
  </div>  
</template>

<script>
export default {
  name:'Hero'
}
</script>

<style lang="scss" scoped>
.hero{
  background-image:url('../assets/backdrop.jpg');
  img{
    max-height: 7rem;
    margin-bottom: 6px;
  }
}
</style>