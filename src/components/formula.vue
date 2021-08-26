<template>
  <div v-if="block" v-html="compiledFormula"></div>
  <span v-else v-html="compiledFormula"></span>
</template>

<script>

import { defineComponent } from "vue";
import * as katex from "katex";

export default defineComponent({
  props: {
    formula: {
      type: String,
      required: true
    },
    block: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    compiledFormula () {
      return katex.renderToString(this.formula, {
        throwOnError: false
      });
    }
  }
});

</script>

<style lang="scss">
@import "../../node_modules/katex/dist/katex.min.css";
</style>
