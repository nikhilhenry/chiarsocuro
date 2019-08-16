<template>
  <div>
    <section class="events">
    <div class="container is-fluid has-text-centered">
      <h1 class="title">Events</h1>
      <p class="subtitle is-6 has-text-weight-light"><i>**Note registration closes on 19 September**</i></p>
      <div class="_events">
      <!-- first row -->
      <div class="columns">
        <div class="column is-one-third"  v-bind:key="event.id" v-for="event in events1"><Event v-bind:event="event"/></div>
      </div>
      <!--second row-->
      <div class="columns">
        <div class="column is-one-third"  v-bind:key="event.id" v-for="event in events2"><Event v-bind:event="event"/></div>
      </div>
      <!--third row-->
      <div class="columns">
        <div class="column is-one-third"  v-bind:key="event.id" v-for="event in events3"><Event v-bind:event="event"/></div>
      </div>
    </div>
    </div>
    </section>
  </div>
</template>

<script>
import Event from '@/components/Event'

export default {
  name:'Events',
  components:{
    Event
  },
  data(){
    return{
      events1:[
        {
          title:'Comic Design',
          image:require('../assets/comic_design.png')
        },
        {
          title:'Culinary Art',
          image:require('../assets/culinary_art.png')
        },
        {
          title:'Installation',
          image:require('../assets/installation.png')
        }
      ],
    events2:[
      {
        title:'Music Illustration',
        image:require('../assets/music_illustration.png')
      },
      {
        title:'Photography',
        image:require('../assets/photography.png')
      },
      {
        title:'Sculptures',
        image:require('../assets/sculptures.png')
      }
    ],
    events3:[
      {
        title:'Shoe Art',
        image:require('../assets/shoe_art.png')
      },
      {
        title:'Sketch Swap',
        image:require('../assets/sketch_swap.png')
      },
      {
        title:'Team Canvas',
        image:require('../assets/team_canvas.png')
      }
    ]
    }
  }
}
</script>

<style lang="scss" scoped>
._events{
  margin-top: 60px;
}
</style>