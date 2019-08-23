<template>
  <div>
    <section class="events">
    <div class="container is-fluid has-text-centered">
      <h1 class="title is-1">Events</h1>
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
          image:require('../assets/comic_design.png'),
          num_particapants:'1 per school',
          age_category:'Group 1: Grades 6-8 Group 2: Grades 9-12',
          duration:'2 Hours',
          mat_prov:'A4 size cartridge paper',
          mat_brought:'Sketch pens, pencils, colour pencils',
          details:'1. Participants will have to create a maximum of an 8 panel comic strip based on the prompt provided 2. The comic can be a single plane, a web strip, or a one pager 3. The comic should represent a cohesive story. Though the ending could be a cliffhanger, the comic CANNOT act as a trailer for the intended story',
          eval_para:'Knowledge of Conventions; Storyline; Relevance; Comprehension',
        },
        {
          title:'Culinary Art',
          image:require('../assets/culinary_art.png'),
          num_participants:'1 team per school (2 participants in a team)',
          age_category:'Grades 9-12',
          duration:'1 Hour 30 Minutes',
          mat_prov:'Frosting, piping bag, piping nozzles, decoration sprinkles, fondant, spoons, butter, knives, plates',
          mat_brought:'Sponge cake (Round with a 6 inch diameter), apron, gloves (mandartory) ',
          details:"1. Participant will be provided with the prompt on the day 2. Participants are required to decorate a cake using all the materials provided 3. The materials wasted will be taken into consideration as a judging criteria 4. Participant's cake will be distributed with meals",
          eval_para:'Concept; Relevance; Presentation; Aesthetics; Wastage',
        },
        {
          title:'Installation',
          image:require('../assets/installation.png'),
          num_participants:'1 team per school (4 participants in a team)',
          age_category:'Grades 9-12',
          duration:'3 Hours 30 Minutes',
          mat_prov:'Newspaper, Cardboard, Recycled material',
          mat_brought:'Carton box (max size 2×2×2 fee), relevant materials to aid the creation of the installation',
          details:'1. Participants will make an installation (3D art) in the given time using available materials based on the prompt provided on the day 2. Participant 1 will sketch the design for the installation, and participants 2 & 3 will construct the installation 3. Participant 4 will present and explain the ideaton process and the installation created',
          eval_para:'Concept; Creativity; Relevance; Presentation; Expression',
        }
      ],
    events2:[
      {
          title:'Music Illustration',
          image:require('../assets/music_illustration.png'),
          num_participants:'1 participant per school',
          age_category:'Group 1: Grades 6-8 Group 2: "Grades 9-12"',
          duration:'3 Hours 30 Minutes',
          mat_prov:'1 computer per group upon prior registration. A maximum of 6 computers on a first come first serve basis is available',
          mat_brought:'NA',
          details:'1. Participants of grades 6-8 will have to listen to the song provided on the day to create their illustation Participants of grades 9-12 will hvae to listen to the song provided on the day to create their illustation. Participants can use the title, a verse, the lyrics, the essence of the song, or even the beat to inspire the illustation. Applications like Autodesk Sketchbook on IOS devices and MediBang or Krita on Windows devices can be used',
          eval_para:'Concept; Relevance; Composition; Style',
      },
      {
          title:'Photography',
          image:require('../assets/photography.png'),
          num_participants:'2 participants per school',
          age_category:'Group 1: Grades 6-8 Grades 9-12',
          duration:'3 Hours',
          mat_prov:'Computer with light room and photoshop',
          mat_brought:'DSLR/ Digital Camera (5MP or higher), SD Card, USB drive and cable',
          details:'1. Participant 1 will be required to capture photographs based on the prompt provided on the day of the competition, after which Participant 2 will edit the photograph with relevance to the topic, using Photoshop or Lightroom.One original photograph must be selected by the participants and submitted to be judged.The original photograph must not be altered and must be submitted in JPEG format.The participant must also submit one digitally edited version in JPEG format that will be judged as the final work',
          eval_para:'Concept; Relevance; Composition; Expression',
      },
      {
          title:'Sculptures',
          image:require('../assets/sculptures.png'),
          num_participants:'1 Participant per school',
          age_category:'Grades 9-12',
          duration:'3 Hour',
          mat_prov:'2KG of clay, bucket of water (per participant)',
          mat_brought:'Sculpting tools, other materials required',
          details:'Each participant is given the clay and the prompt. With that they have to create a sculpture on a 1 foot by 1 foot cardboard',
          eval_para:'Concept; Relevance; Style; Technique',
      }
    ],
    events3:[
      {
          title:'Shoe Art',
          image:require('../assets/shoe_art.png'),
          num_participants:'1 team per school (3 participants per team)',
          age_category:'Grades 8-10',
          duration:'3 Hours 30 Minutes',
          mat_prov:'A pair of canvas shoes',
          mat_brought:"Participants' choice of medium, materials to aid in product display [Eg: Cardboard boxes]",
          details:'2 participants will be required to design one pair of shoes. Each shoe should compliment each other based on the prompt provided on the day. The third participant will create the product display, logo, and brand name and develop a sales pitch for the shoe',
          eval_para:'Concept; Relevance; Composition; Presentation; Expression',
      },
      {
          title:'Sketch Swap',
          image:require('../assets/sketch_swap.png'),
          num_participants:'1 team per school (4 participants per team)',
          age_category:'Group 1: Grades 6-8 Group 2: Grades 9-12',
          duration:'2 Hours 10 Minutes',
          mat_prov:'A3 size cartridge paper',
          mat_brought:"Participants' choice of medium",
          details:'1. Participants will have to work as a team to create 1 composition The team has 10 minutes to discuss what they want to create as well as decide the order of the participants. Each participant has 30 minutes to work on the piece, and volunteers or teachers will keep time until the end of the competition',
          eval_para:'Concept; Relevance; Composition; Presentation; Expression',
      },
      {
          title:'Team Canvas',
          image:require('../assets/team_canvas.png'),
          num_participants:'1 team per school (4 participants per team)',
          age_category:'Grades 9-12',
          duration:'3 Hours 30 Minutes',
          mat_prov:'Large Canvas (Size: 2.5 feet × 2.5 feet)',
          mat_brought:"Participants' choice of medium",
          details:'1. Participants will be provided with a large canvas. 3 of the participants will be required to create a finished piece in any style of their choice. The 4th participant will write a concept note explaining the painting as well as its interpretation based on the prompt provided on the day',
          eval_para:'Concept; Relevance; Composition; Presentation; Expression',
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
