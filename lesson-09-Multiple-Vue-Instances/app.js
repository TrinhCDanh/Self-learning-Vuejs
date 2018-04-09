var one = new Vue({
  el: "#ex1",
  data: {
    title: 'This is one'
  },
  methods: {

  },
  computed: {
    greet() {
      return "This is function of one";
    }
  }
});

var two = new Vue({
  el: "#ex2",
  data: {
    title: 'This is two'
  },
  methods: {
    changeTitle() {
      one.title = "How to change";
    }
  },
  computed: {
    greet() {
      return "This is function of two";
    }
  }
});
