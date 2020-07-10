<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  methods: {
    handleSpinCustom () {
      this.$Spin.show()
    }
  },
  mounted () {
    this.$nextTick(
      this.handleSpinCustom()
    )
  }
}
</script>
