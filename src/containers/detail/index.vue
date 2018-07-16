

<template>
  <div class="detail-page">
    <div class="item">
      <span>id:</span><span>{{this.$route.query.id}}</span>
    </div>
    <div class="item">
      <span>name:</span><span>{{this.$route.query.name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Detail',
    data() {
      return {
        message: 'Welcome to Detail Page'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .detail-page
    font-size 0.26rem
    padding 0.2rem
    .item
      line-height 0.8rem
</style>



