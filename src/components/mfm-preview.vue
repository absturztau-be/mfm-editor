<template>
  <div ref="root" class="mfm-preview" @contextmenu="onContextMenu($event)">
    <div class="preview-container">
      <MfmCore class="preview" :text="mfm"></MfmCore>
    </div>
    <textarea v-model="mfm"></textarea>
  </div>
</template>

<script>

import MfmCore from "./mfm.js";

export default {
  name: "MfmPreview",
  components: {
    MfmCore
  },
  props: [
    "mfm"
  ],
  methods: {
    reset() {
      this.$refs.root.classList.add("paused");
      this.$forceUpdate();
      setTimeout(() => { this.$refs.root.classList.remove("paused"); }, 10);
      this.$forceUpdate();
    },
    onContextMenu (e) {
      e.preventDefault();
      this.$contextmenu({
        x: e.x,
        y: e.y,
        items: [{ label: "Refresh", onClick: () => {
          this.reset();
        }}]
      });
    }
  },
  watch: {
    mfm () {
      this.reset();
    }
  }
};

</script>

<style lang="scss">

.mfm-preview {
  &.paused {
    .preview {
      display: none;
    }
  }
}

</style>

<style scoped>

.mfm-preview {
  width: 100%;
  height: 100%;
  background-color: gray;
  display: flex;
  flex-direction: column;
}

.preview-container {
  height: 100%;
  width: 100%;
  padding: 20px;
}

textarea {
  width: 100%;
  height: 250px;
  display: inline-block;
}

</style>
