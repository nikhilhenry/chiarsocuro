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
            <input class="input" type="text" placeholder="eg. David Stone" v-model="student_name2">
          </div>
        </div>        
        <div class="field" v-if="event.is3 || event.is4">
           <label class="label">Name of Participant 3</label>
          <div class="control">
            <input class="input" type="text" placeholder="eg. David Stone" v-model="student_name3">
          </div>
        </div>
        <div class="field" v-if="event.is4">
           <label class="label">Name of Participant 4</label>
          <div class="control">
            <input class="input" type="text" placeholder="eg. David Stone" v-model="student_name4">
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
        <div class="field" v-if="event.is2 || event.is3 || event.is4">
          <label class="label">Grade in School of Participant 2</label>
          <div class="select">
          <select v-model="student_grade4">
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
        <div class="field" v-if="event.is3 || event.is4">
          <label class="label">Grade in School of Participant 3</label>
          <div class="select">
          <select v-model="student_grade3">
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
        <div class="field" v-if="event.is4">
          <label class="label">Grade in School of Participant 4</label>
          <div class="select">
          <select v-model="student_grade4">
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
            <input class="input" type="text" placeholder="eg. David Stone" v-model="art_fac">
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
            <input class="input" type="phone" placeholder="eg. 9888888888" v-model="school_contact">
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
            <input class="button is-success" type="submit" v-on:click="submit">
          </div>
        </div>
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
      student_name2:null,
      student_name3:null,
      student_name4:null,
      student_email:null,
      student_grade:null,
      student_grade2:null,
      student_grade3:null,
      student_grade4:null,
      school_name:null,
      school_email:null,
      add_info:null,
      accepted:false,
      individual:null,
      art_fac:null,
      school_contact:null,
    }
  },
  methods:{
    submit:function(){
      if(this.student_name && this.student_grade && this.school_name && this.school_email && this.accepted){
        const student = {
          student_name:this.student_name,
          student_name2:this.student_name2,
          student_name3:this.student_name3,
          student_name4:this.student_name4,
          student_email:this.student_email,
          student_grade:this.student_grade,
          student_grade2:this.student_grade2,
          student_grade3:this.student_grade3,
          student_grade4:this.student_grade4,
          school_name:this.school_name,
          school_email:this.school_email,
          add_info:this.add_info,
          art_fac:this.art_fac,
          school_contact:this.school_contact
        };
        firebase.firestore().collection(this.event_title).add(student)
        .then(()=>{
            // this.$router.push('/about')
            console.log(student)
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