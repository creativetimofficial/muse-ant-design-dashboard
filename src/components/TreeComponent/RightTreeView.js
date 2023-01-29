import { Sortable, TreeView } from "devextreme-react";
import React from "react";

const RightTreeView = (props) => {
    const {onDragChange, onDragEnd, rightTreeViewRef, rightTreeItems} = props;
    return (
        <div className="form">
            <div className="drive-panel">
                <Sortable
                    filter=".dx-treeview-item"
                    group="shared"
                    data="rightTree"
                    allowDropInsideItem={false}
                    allowReordering={true}
                    onDragChange={onDragChange}
                    onDragEnd={onDragEnd}>
                    <TreeView
                        id="rightTreeView"
                        expandNodesRecursive={false}
                        dataStructure="plain"
                        ref={rightTreeViewRef}
                        items={rightTreeItems}
                        displayExpr="name"
                    />
                </Sortable>
            </div>
        </div>
    )
}


export default RightTreeView;
