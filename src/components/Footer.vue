<template>
  <div>
    <footer class="footer">
      <div class="columns">
      <!-- social media links -->
      <div class="column is-one-thirds has-text-left">
      <strong class="title is-3">Follow us on social media</strong>
      <div class="container">
      <span class="icon is-large"><a href="https://www.instagram.com/chiarsocuro"><i class="fab fa-instagram fa-2x"></i></a></span>
      <span class="icon is-large"><a href="https://www.instagram.com/chiarsocuro"><i class="fab fa-facebook fa-2x"></i></a></span>
      </div>
      <p class="address"><strong class="title is-5">Address: </strong> 6/1A, 6/2 Byrathi Village, Bidarahalli Hobli, Off Hennur-Bagalur Main Road (New, International Airport Link Road), Bengaluru, Karnataka 560077</p>
      </div>
      <!-- contact information -->
      <div class="column has-text-right-tablet">
      <strong class="title is-3 is-spaced">Contact</strong>
      <div class="container">
        <ul>
          <li class="subtitle is-5">Events Coordinator: <a href="mailto:events@lsb.edu.in">events@lsb.edu.in</a></li>
          <li class="subtitle is-5">Student Support: <a href="mailto:chiaroscuro@lsb.edu.in">chiaroscuro@lsb.edu.in</a></li>
          <li class="subtitle is-5">Phone: <a href="tel:+7022292406">+702292406</a></li>
        </ul>
      </div>
      </div>
      </div>
      <!-- credit & copyright -->
      <div class="content has-text-centered">
        <p>
          <strong>Built </strong>by <a href="https://nikhilhenry.github.io">Nikhil Henry</a>
          <br>
          <strong>&copy; Chiarsocuro 2019</strong> by Legacy School Bangalore
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name:'Footer'
}
</script>

<style lang="scss" scoped>
$desktop: 700px;
@mixin desktop {
    @media (min-width: #{$desktop}) {
        @content;
    }
}


  .footer{
    margin-top:4rem!important;
    padding-bottom:10px;
    .address{
      @include desktop {
        max-width: 40%;
      }
    } 
  }
</style>