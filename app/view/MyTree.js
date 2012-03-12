    Ext.define('ExtJsCheckedTree.view.MyTree', {
        extend:'Ext.tree.TreePanel',
        alias:'widget.mytree',
        store:'MyTrees',
        rootVisible:false,
        useArrows:true,

        viewConfig:{
            plugins:{
                ptype:'treeviewdragdrop',
                dragGroup:'fromTileToGridDDGroup',
                dropGroup:'fromGridToTileDDGroup',
                enableDrop:false
            }

        }
//        frame:true provides a nice looking border, but I don't think we need it....if we do it should be in the viewport
//        ,
//        frame:true
    });
