new Vue({
  el: "#ex1",
  data: {
    available: false,
    nearby: false
  },
  methods: {
    say(msg) {
      return `Good ${msg} ${this.name}`;
    }
  },
  computed: {
      onChange() {
        return {
          available: this.available,
          nearby: this.nearby
        }
      }
  }
});
