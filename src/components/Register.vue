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
      <form>
        <!-- Full name -->
        <div class="field">
          <label class="label">Full Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="eg. David Stone">
          </div>
        </div>
        <!-- Student Email -->
        <div class="field">
          <label class="label">Student Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="eg. student@example.com">
          </div>
        </div>
        <!-- School Grade -->
        <div class="field">
          <label class="label">School Grade</label>
          <div class="select">
          <select>
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
            <input class="input" type="text" placeholder="eg. Legacy School Bangalore">
          </div>
        </div>
        <!-- School Email -->
        <div class="field">
          <label class="label">School Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="eg. school@example.com">
          </div>
        </div>
        <!-- addition information -->
        <div class="field">
          <label class="label">Additional information</label>
          <div class="control">
            <textarea class="textarea is-small" placeholder="Small textarea"></textarea>
          </div>
        </div>
        <!-- terms and  conditions -->
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox">
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
  props:['event_title']
}
</script>