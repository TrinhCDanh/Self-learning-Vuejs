new Vue({
  el: "#ex1",
  data: {
    age: 20,
    a: 0,
    b: 0
  },
  methods: {
  },
  computed: {
    addA() {
      console.log("addA");
      return this.a + this.age;
    },
    addB() {
      console.log("addB");
      return this.b + this.age;
    }
  }
});
