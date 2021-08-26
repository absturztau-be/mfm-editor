import TreePanel from "./components/tree-panel.vue";
import MfmPreview from "./components/mfm-preview.vue";
import PropertiesGrid from "./components/properties-grid.vue";
import Console from "./components/console.vue";

import { Tree } from "./mfm-tree/tree.js";
import { Text } from "./mfm-tree/text.js";
import { Spin } from "./mfm-tree/spin.js";

export default {
  name: "app",
  components: {
    TreePanel,
    MfmPreview,
    PropertiesGrid,
    Console
  },
  created () {
    this.log("create sample tree");
    this.sceneGraph = new Tree();
    const speen = new Spin();
    const text = new Text();
    text.params.text = ":woozy:";
    speen.children.push(text);
    this.sceneGraph.root.children.push(speen);
    this.updateRenderer();
    this.log("editor created...");
  },
  data () {
    return {
      mfm: "",
      output: "",
      selectedNode: {}
    }
  },
  methods: {
    log(message) {
      const datetime = new Date();
      const dateString = datetime.getUTCFullYear() + "-" +
        ("0" + (datetime.getUTCMonth()+1)).slice(-2) + "-" +
        ("0" + datetime.getUTCDate()).slice(-2) + " " +
        ("0" + datetime.getUTCHours()).slice(-2) + ":" +
        ("0" + datetime.getUTCMinutes()).slice(-2) + ":" +
        ("0" + datetime.getUTCSeconds()).slice(-2);

      this.output += "[" + dateString + "] " + message + "\n";
    },
    nodeSelected(node) {
      if (node.node) {
        this.log("selected node: " + node.node.text);
        this.selectedNode = {};
        setTimeout(() => { this.selectedNode = node.node; }, 10);
      } else {
        this.log("deselected node");
        this.selectedNode = {};
      }
    },
    paramsChanged (params) {
      this.selectedNode.params = params.data;
      this.updateRenderer();
    },
    updateRenderer() {
      this.mfm = this.sceneGraph.generate();
      this.log(this.mfm);
    }
  }
}
