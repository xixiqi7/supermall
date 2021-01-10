<template>
<nav-bar>
  <div slot="left" @click="backClick" class="back">
    <img src="~assets/img/common/back.svg">
  </div>
  <div slot="center" class="titles">
    <div v-for="(item, index) in titles" class="titles-item"
         :class="{active: currentIndex === index}"
         @click="titleClick(index)">
      {{item}}
    </div>
  </div>
</nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data(){
    return {
      titles : ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index){
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.titles {
  display: flex;
  font-size: 14px;
}
.titles-item {
  flex: 1;
}
.active {
  color: var(--color-high-text)
}
.back img {
  margin-top: 10px;
}
</style>
