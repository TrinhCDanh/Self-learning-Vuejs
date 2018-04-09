<template>
  <div id="content">
    <p>{{ data }}</p>
    <ul>
        <li v-for="(item, index) in data" v-on:click="item.show = !item.show">
            <strong>{{ item.name }}</strong>
            <p v-show="item.show">{{ item.age }}</p>
            <slot name="slot-name"></slot>
        </li>
    </ul>
    <div style="clear: both"></div>
  </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            msg: 'This is content',
        }
    }
}
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
    li {
        width: 33.33%;
        float: left;
        height: 50px;
        border: 1px solid #000  ;
    }
    ul {
        list-style: none;
    }
</style>
