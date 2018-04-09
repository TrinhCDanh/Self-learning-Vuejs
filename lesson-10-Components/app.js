var data = {
  name: 'Yoshi'
}
Vue.component('name-component', {
  template: '<p v-on:click="changeName()">Hello {{ name }}</p>',
  data() {
    return data;
  },
  methods: {
    changeName() {
      this.name = 'Mario';
    }
  }
});

new Vue({
  el: "#ex1",
});

new Vue({
  el: "#ex2",
});
