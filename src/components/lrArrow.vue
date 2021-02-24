<template>
  <div>
    <div class="arrow-l">
      <div class="t"></div>
      <div class="b"></div>
    </div>
    <div class="arrow-r">
      <div class="t"></div>
      <div class="b"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  name: "rightBox",
  data () {
    return {
    }
  },
  mounted () {
  },
  created () {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.arrow-l {
  position: absolute;
  bottom: 0;
  .t {
    height: 30px;
    width: 2px;
    background: #00a2ff;
  }
  .b {
    width: 30px;
    height: 2px;
    background: #00a2ff;
  }
}
.arrow-r {
  position: absolute;
  bottom: 0;
  right: 0;
  .t {
    height: 30px;
    width: 2px;
    background: #00a2ff;
    margin-left: 30px;
  }
  .b {
    width: 30px;
    height: 2px;
    background: #00a2ff;
    margin-left: 2px;
  }
}
</style>
