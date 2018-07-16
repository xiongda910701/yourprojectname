<template>
  <div class="person-page">
    <h1>{{message}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Person',
    data() {
      return {
        message: 'Welcome to Person Page'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
