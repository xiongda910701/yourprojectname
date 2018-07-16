
<template>
  <div class="home-page">
    <router-link to="/" tag="div">去首页</router-link>
    <router-link to="/list" tag="div">去列表页</router-link>
    <router-link to="/detail" tag="div">去详情页</router-link>
    <router-link to="/person" tag="div">去个人中心页</router-link>

    <div class="btn-box">
      <button type="button" name="home" @click="goPage">去首页</button>
      <button type="button" name="list" @click="goPage">去列表页</button>
      <button type="button" name="detail" @click="goPage">去详情页</button>
      <button type="button" name="person" @click="goPage">去个人中心页</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    data() {
      return {
        message: 'Welcome to Home Page'
      }
    },
    methods:{
      goPage(e){
        const path= e.currentTarget.getAttribute('name');
        if(path==='home'){
          this.$router.push('/');
        }else{
          this.$router.push(path);
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .home-page
    font-size 0.26em
    a,div
      color deepskyblue
      display block
      margin 0.3rem 0.2rem

</style>



