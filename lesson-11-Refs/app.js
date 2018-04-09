new Vue({
  el: "#ex1",
  data: {
    name: ''
  },
  methods: {
    readRefs() {
      this.name = this.$refs.namerefs.value;
    }
  }
});


