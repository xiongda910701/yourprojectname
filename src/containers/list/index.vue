<template>
  <ul class="list-page">
    <li v-for="item in list" :key="item.id" :id="item.id" @click="goDetail">{{item.name}}</li>
  </ul>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'List',
    data() {
      return {
        list: []
      }
    },
    methods: {
      //定义页面跳转函数
      goDetail(e) {
        const id = e.currentTarget.getAttribute("id");
        const name = e.currentTarget.innerText;
        this.$router.push({
          path: 'detail',
          query: {id: id, name: name}
        })
      },
      //定义获取数据函数
      getData() {
        axios.get('/api/index.json').then((res) => {
          if (res.status == 200) {
            this.list = res.data.data.list;
          }
        }).catch((error) => {
          console.log(error);
        })
      },
    },
    mounted() {
      this.getData();//调用获取数据函数
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .list-page
    font-size 0.26rem
    li
      height 0.7rem
      line-height 0.7rem
      background-color white
      border-bottom 1px solid #ececec
      padding-left 0.2rem

</style>


