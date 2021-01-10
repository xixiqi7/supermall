import {debounce} from "./utils";

import backTop from "components/context/backtop/BackTop"
export const itemListenerMixin = {
  data(){
    return {
      itemImgListener: null
    }
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh, 1)

    this.itemImgListener = ()=> {
      refresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  }
}

export const backTopMixin = {
  components: {
    backTop
  },
  data(){
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    }
  }
}
