<template>
  <div class="tree-panel">
    <Tree ref="treeComp" :value="tree.root.children" @change="treeChanged">
      <template v-slot="{node, index, path, tree}">
        <div class="node" :class="{ 'selected' : node.selected }">
          <button @click="tree.toggleFold(node, path)" v-if="node.children.length > 0">
            {{ node.$folded ? '+' : '-' }}
          </button>
          <button v-show="node.children.length === 0" disabled>
            <i class="fas fa-circle"></i>
          </button>
          <span class="select-target" @click="select(tree, path)" @contextmenu="onContextMenu($event, node, tree, path)">
            {{node.text}}
          </span>
        </div>
      </template>
    </Tree>
    <div
      class="empty"
      @contextmenu="onContextMenu($event, tree.root)"
    ></div>
  </div>
</template>

<script>

import "he-tree-vue/dist/he-tree-vue.css";
import Nodes from "../mfm-tree/nodes.js";
import { Tree, Fold, Draggable } from "he-tree-vue";

export default {
  name: "TreePanel",
  emits: [
    "node-select",
    "changed"
  ],
  props: [
    "tree"
  ],
  components: {
    Tree: Tree.mixPlugins([Fold, Draggable])
  },
  data () {
    return {
      menuShow: false
    };
  },
  computed: {
    nodes() {
      return Nodes;
    }
  },
  methods: {
    select(treeComp, pathToSelect) {
      treeComp.walkTreeData((node, index, parent, path) => {
        if (JSON.stringify(pathToSelect) === JSON.stringify(path)) {
          node.selected = !node.selected;
          if (node.selected) {
            this.$emit("node-select", { node });
          } else {
            this.$emit("node-select", { node: null });
          }
        } else {
          node.selected = false;
        }
      });
      treeComp.$forceUpdate();
    },
    onContextMenu (e, node, treeComp, path) {
      e.preventDefault();
      const items = [];
      Object.keys(this.nodes).forEach((key) => {
        items.push({
          label: key,
          onClick: () => {
            this.addNode(node, treeComp, key);
          }
        });
      });
      const base = [
        { label: "Add", children: items }
      ];
      if (path) {
        base.push({ label: "Remove", onClick: () => {
          this.removeNode(path, treeComp);
        }});
      }
      this.$contextmenu({
        x: e.x,
        y: e.y,
        items: base
      });
    },
    removeNode (path, treeComp) {
      treeComp.removeNodeByPath(path);
      treeComp.$forceUpdate();
      this.treeChanged();
    },
    addNode (node, treeComp, name) {
      node.children.push(new Nodes[name]());
      if (treeComp) {
        treeComp.$forceUpdate();
      } else {
        this.$refs.treeComp.$forceUpdate();
      }
      this.treeChanged();
    },
    treeChanged () {
      this.$emit("changed");
    },
  }
};

</script>

<style>
.tree-panel .tree-node {
  padding: 0;
  margin: 0;
}

.dropdown-menu {
  position: absolute;
  border: 1px solid black;
}

</style>

<style lang="scss" scoped>

.tree-panel {
  width: 400px;
  height: 100%;
  background-color: #666;
  border: 1px solid black;
}

.tree-panel .tree-node .node {
  display: flex;
}

.tree-panel .tree-node .node .select-target {
  flex-grow: 1;
  margin: 0 2px;
}

.tree-panel button {
  width: 28px;
}

.tree-panel .selected {
  border: 1px solid lime;
}

.dropdown-menu .dropdown-item {
  display: block;
  background-color: gray;
  color: white;
}

.dropdown-menu .dropdown-item:hover {
  background-color: #666;
}

.empty {
  height: 100%;
}

</style>

