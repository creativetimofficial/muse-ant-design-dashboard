import React from "react";
import { Tree, TreeNodeProps } from "antd";
const { TreeNode } = Tree;

class CustomTreeNode extends TreeNode  {
    render() {
        return <h1>{"cccc"}</h1>
    }   
}

export default CustomTreeNode;
