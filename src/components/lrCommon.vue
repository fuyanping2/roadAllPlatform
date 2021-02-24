<template>
  <div class="r-line">
    <span class="dot"></span>
    <span class="line"></span>
    <span class="dot"></span>
  </div>
</template>

<script>
export default {
  name: 'lrCommon',
  components: {
  },
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
.r-line {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: vw(5);
  .dot {
    width: vw(10);
    height: vh(3);
    background: #4f93fc;
    border-radius: 1px;
  }
  .line {
    width: 90%;
    height: vh(1);
    background: #0f439b;
  }
}
</style>
