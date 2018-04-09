<template>
  <div id="app">
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-content v-bind:data="data">
      <p slot="slot-name">This is slot</p>
    </app-content>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
// import Test from './Test.vue';
import Header from './components/Header.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    // 'test': Test,
    'app-header': Header,
    'app-content': Content,
    'app-footer': Footer
  },
  name: 'app',
  data () {
    return {
      msg: 'Hello World',
      title: 'Vuejs',
      data: [
          {name: 'Trinh', age: 22, show: false},
          {name: 'Cong', age: 22, show: false},
          {name: 'Danh', age: 22, show: false}
      ]
    }
  },
  methods: {
    updateTitle(updateTitle) {
      this.title = updateTitle;
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
h3 {
  color: gold;
}
</style>
