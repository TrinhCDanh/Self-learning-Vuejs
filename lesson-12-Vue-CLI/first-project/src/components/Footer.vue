<template>
  <div id="footer">
    <h3>{{ msg }} {{ title }}</h3>
  </div>
</template>

<script>
import { bus } from '../main';
export default {
  props: {
      title: {
          type: Array,
          required: true
      }
  },
  data () {
    return {
      msg: 'This is footer'
    }
  },
  created() {
    bus.$on('changeTitle', (dataListen) => {
      this.title = dataListen;
    });
  }
}
</script>

<style scoped>
#footer {
   background-color: tomato;
}
</style>
