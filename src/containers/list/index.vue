


<template>
  <ul class="list-page">
    <li v-for="item in list" :key="item.id" :id="item.id" @click="goDetail">{{item.name}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'List',
    data() {
      return {
        list: [
          {id:1,name:'苹果'},
          {id:2,name:'香蕉'},
          {id:3,name:'梨子'},
          {id:4,name:'菠萝'},
          {id:5,name:'哈密瓜'},
        ]
      }
    },
    methods:{
      goDetail(e){
        const id=e.currentTarget.getAttribute("id");
        const name=e.currentTarget.innerText;
        this.$router.push({
         /* 注意：如果使用query传递参数的话要注意以下三点
         *  1.query一定要和页面组件的path值搭配
         *  2.在route路由中无需提前定义好参数
         *  3.在detail页面接收参数通过this.$route.query.形式
         */
          path:'detail',
          query:{id:id, name:name}
        })
      }
    }
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



