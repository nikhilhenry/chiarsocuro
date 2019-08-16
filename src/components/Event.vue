<template>
  <div class="card">
    <div class="card-image"><img v-bind:src="event.image"></div>
  </div>
</template>

<script>
export default {
  name:'Event',
  props:["event"],
}
</script>