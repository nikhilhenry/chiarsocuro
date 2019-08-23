<template>
  <div>
  <div class="modal-background"></div>
  <div class="modal-content">
  <div class="box">
    <article class="media">
    <div class="media-content">
    <div class="content">
      <p class="title">Registration</p>
      <p class="subtitle">{{event_title}}</p>
      <!-- errors -->
      <div v-if="errors.length">
        <p v-bind:key="error" v-for="error in errors" class="has-background-danger has-text-white has-text-weight-semibold">{{error}}</p>
      </div>
      <form
      @submit="submit">
        <!-- Full name -->
        <div class="field">
          <label class="label">Name of participant</label>
          <div class="control">
            <input class="input" type="text" placeholder="eg. David Stone" v-model="student_name">
          </div>
        </div>
        <!-- Full name 2 -->
        <div class="field" v-if="event.is2 || event.is3 || event.is4">
          <label class="label">Name of Participant 2</label>
          <div class="control">
            <input class="input" type="text" placeholder="eg. David Stone" v-model="student_name">
          </div>
        </div>        
        <div class="field" v-if="event.is3 || event.is4">
           <label class="label">Name of Participant 3</label>
          <div class="control">
            <input class="input" type="text" placeholder="eg. David Stone" v-model="student_name">
          </div>
        </div>
        <div class="field" v-if="event.is4">
           <label class="label">Name of Participant 4</label>
          <div class="control">
            <input class="input" type="text" placeholder="eg. David Stone" v-model="student_name">
          </div>
        </div>
        <!-- Student Email -->
        <div class="field">
          <label class="label">Student Email (optional)</label>
          <div class="control">
            <input class="input" type="email" placeholder="eg. student@example.com" v-model="student_email">
          </div>
        </div>
        <!-- School Grade -->
        <div class="field">
          <label class="label">Grade in School</label>
          <div class="select">
          <select v-model="student_grade">
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          </div>
        </div>
        <div class="field" v-if="event.is2">
          <label class="label">Grade in School of Participant 2</label>
          <div class="select">
          <select v-model="student_grade">
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          </div>
        </div>
        <!-- School name -->
        <div class="field">
          <label class="label">School Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="eg. Legacy School Bangalore" v-model="school_name">
          </div>
        </div>
        <!-- Art faculty -->
        <div class="field">
          <label class="label">Name of Art Faculty</label>
          <div class="control">
            <input class="input" type="text" placeholder="eg. David Stone" v-model="school_name">
          </div>
        </div>     
        <!-- School Email -->
        <div class="field">
          <label class="label">School Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="eg. school@example.com" v-model="school_email">
          </div>
        </div>
        <!-- School Contact -->
        <div class="field">
          <label class="label">School Contact</label>
          <div class="control">
            <input class="input" type="phone" placeholder="eg. 9888888888" v-model="school_email">
          </div>
        </div>
        <!-- addition information
        <div class="field">
          <label class="label">Additional information</label>
          <div class="control">
            <textarea class="textarea is-small" placeholder="Optional information such group or non-school participant " v-model="add_info"></textarea>
          </div>
        </div> -->

        <!-- individual registration -->
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="individual">
              Non-school participant (for individual entry)
            </label>
          </div>
        </div>
        <!-- terms and  conditions -->
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="accepted">
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>
        <p v-if="event.is3 || event.is4 ||event.is2">*Please fill another form to submit registration for another group.</p>
        <!-- submit -->
        <div class="field">
          <div class="control">
            <input class="button is-success" type="submit" value="Submit">
          </div>
        </div>        
      </form>
    </div>
    </div>
    </article>
  </div>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name:'Register',
  props:['event_title','event'],
  data(){
    return{
      errors:[],
      student_name:null,
      student_email:null,
      student_grade:null,
      school_name:null,
      school_email:null,
      add_info:null,
      accepted:false,
    }
  },
  methods:{
    submit:function(){
      if(this.student_name && this.student_email && this.student_grade && this.school_name && this.school_email && this.accepted){
        const student = {
          student_name:this.student_name,
          student_email:this.student_email,
          student_grade:this.student_grade,
          school_name:this.school_name,
          school_email:this.school_email,
          add_info:this.add_info,
        };
        firebase.firestore().collection(this.event_title).add(student)
          .then(()=>{
            this.$router.push('/about')
          })
          // eslint-disable-next-line
          .catch(err=>{
            alert('Registration Failed. Please try again later')
          })
      }
      else{
        this.errors.push('Please fill the form completely')
      }
    }
  }
}
</script>