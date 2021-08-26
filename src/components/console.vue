<template>
  <div class="console" ref="console">
    <pre>
      {{ output }}
    </pre>
  </div>
</template>

<script>

export default {
  name: "console",
  props: [
    "output"
  ],
  watch: {
    output () {
      this.$refs.console.scrollTop = this.$refs.console.scrollHeight;
    }
  }
};

</script>

<style lang="scss" scoped>

.console {
  height: 250px;
  background-color: black;
  color: green;
  overflow-y: scroll;
}

</style>
