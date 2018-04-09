new Vue({
  el: "#ex1",
  data: {
    name: '',
    age: 22,
    x: 0,
    y: 0,
    test: ''
  },
  methods: {
    say(msg) {
      return `Good ${msg} ${this.name}`;
    },
    addOne(num) {
      this.age += num;
    },
    updateXY(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    logName() {
      console.log("logName");
    },
    logAge() {
      console.log("logAge");
    }
  }
});
