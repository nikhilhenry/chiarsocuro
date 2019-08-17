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
      <p v-if="errors.length">
        <p v-bind:key="error" v-for="error in errors" class="has-background-danger has-text-white has-text-weight-semibold">{{error}}</p>
      </p>
      <form
      @submit="submit">
        <!-- Full name -->
        <div class="field">
          <label class="label">Full Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="eg. David Stone" v-model="student_name">
          </div>
        </div>
        <!-- Student Email -->
        <div class="field">
          <label class="label">Student Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="eg. student@example.com" v-model="student_email">
          </div>
        </div>
        <!-- School Grade -->
        <div class="field">
          <label class="label">School Grade</label>
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
        <!-- School Email -->
        <div class="field">
          <label class="label">School Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="eg. school@example.com" v-model="school_email">
          </div>
        </div>
        <!-- addition information -->
        <div class="field">
          <label class="label">Additional information</label>
          <div class="control">
            <textarea class="textarea is-small" placeholder="Small textarea" v-model="add_info"></textarea>
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
export default {
  name:'Register',
  props:['event_title'],
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
    submit:function(e){
      if(this.student_name && this.student_email && this.student_grade && this.school_name && this.school_email && this.accepted){
        console.log("success");
        console.log(this.student_name)
        this.$router.push('/about')
      }
      else{
        this.errors.push('Please fill the form completely')
      }
    }
  }
}
</script>