new Vue({
  el: "#ex1",
  data: {
    name: "Danh",
    website: "http://shoesvn.cf/",
    htmlTag: "<p>This tag html</p>"
  },
  methods: {
    say(msg) {
      return `Good ${msg} ${this.name}`;
    }
  }
});
