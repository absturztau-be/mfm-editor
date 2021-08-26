<template>
  <div class="container">
    <div class="workplace">
      <TreePanel :tree="sceneGraph" @node-select="nodeSelected" @changed="updateRenderer"/>
      <MfmPreview :mfm="mfm"/>
      <PropertiesGrid :data="selectedNode.params" @changed="paramsChanged"/>
    </div>
    <Console :output="output"/>
  </div>
</template>

<script src="./App.js"></script>
<style lang="scss" src="./App.scss"></style>
