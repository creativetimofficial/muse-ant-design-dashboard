import { Sortable, TreeView } from "devextreme-react";
import React from "react";

const LeftTreeView = (props) => {
    const {onDragChange, onDragEnd, leftTreeViewRef, leftTreeItems} = props;

    return (
        // <div className="form">
            <div className="drive-panel">
                <Sortable
                    filter=".dx-treeview-item"
                    group="shared"
                    data="leftTree"
                    allowDropInsideItem={false}
                    allowReordering={false}
                    onDragChange={onDragChange}
                    onDragEnd={onDragEnd}>
                    <TreeView
                        id="leftTreeView"
                        expandNodesRecursive={false}
                        dataStructure="plain"
                        ref={leftTreeViewRef}
                        items={leftTreeItems}
                        // width={250}
                        // height={380}
                        displayExpr="name"
                    />
                </Sortable>
            </div>
        // </div>
    )
}


export default LeftTreeView;
