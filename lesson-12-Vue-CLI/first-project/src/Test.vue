<template>
  <div>
    <h3>Component Test</h3>
    <ul>
      <li v-for="item in name">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ['Momon', 'Nabe', 'Demiugure']
    }
  }
}
</script>

<style>
h3 {
  color: tomato;
}
</style>