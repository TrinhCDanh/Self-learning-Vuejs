new Vue({
  el: "#ex1",
  data: {
    name: "Danh"
  },
  methods: {
    say(msg) {
      return `Good ${msg} ${this.name}`;
    }
  }
});
