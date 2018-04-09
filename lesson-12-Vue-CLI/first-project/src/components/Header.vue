<template>
  <div id="header">
    <h3 v-on:click="changeTitle()">{{ msg }} {{ title }}</h3>
  </div>
</template>

<script>
import { bus } from '../main';
export default {
    props: {
        title: {
            type: String
        }
    },
  data () {
    return {
      msg: 'This is header'
    }
  },
  methods: {
    changeTitle() {
        // this.$emit('changeTitle', 'nội dung event thay đổi cho component cha');
        this.title = "nội dung event thay đổi cho component cha";
        bus.$emit('changeTitle', 'nội dung event thay đổi cho component cha');
    }
  }
}
</script>

<style scoped>
#header {
    width: 100%;
    background-color: gold;
}
</style>
