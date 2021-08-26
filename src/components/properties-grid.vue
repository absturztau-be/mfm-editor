<template>
  <div
    class="properties-grid"
  >
    <PropertyEdit v-for="(value, propertyName) in data" :key="propertyName" :name="propertyName" :value="value" @changed="update"/>
  </div>
</template>

<script>

import PropertyEdit from "./property-edit.vue";

export default {
  name: "PropertiesGrid",
  components: {
    PropertyEdit
  },
  emits: [
    "changed"
  ],
  props: [
    "data"
  ],
  methods: {
    update (params) {
      const newData = {};
      Object.keys(this.data).forEach((key) => {
        newData[key] = this.data[key];
        if (params.key === key) {
          newData[key] = params.value;
        }
      });
      this.$emit("changed", { data: newData });
    }
  }
};

</script>

<style scoped>

.properties-grid {
  width: 500px;
  height: 100%;
  background-color: #666;
  border: 1px solid black;
}

</style>
