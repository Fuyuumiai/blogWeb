<template>
    <div>
    </div>
</template>

<script>
export default {
  created () {
    this.$router.replace({
      path: this.$route.query.path,
      query: this.$route.query.config
    })
  }
}
</script>
