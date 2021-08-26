<template>
  <div class="property">
    <label>{{ name }}</label>
    <input type="text" v-if="typeof value !== 'boolean'" :disabled="name.startsWith('#')" v-model="propertyValue"/>
    <input type="checkbox" v-if="typeof value === 'boolean'" :disabled="name.startsWith('#')" v-model="propertyValue"/>
  </div>
</template>

<script>
  export default {
    name: "PropertyEdit",
    emits: [
      "changed"
    ],
    props: [
      "name",
      "value"
    ],
    data() {
      return {
        propertyValue: this.value
      };
    },
    watch: {
      propertyValue (value) {
        const key = this.name;
        this.$emit("changed", { key, value });
      }
    }
  }
</script>

<style lang="scss" scoped>

.property {
  display: flex;
}

.property label {
  width: 100%;
}

.property input {
  width: 100%;
}

</style>
