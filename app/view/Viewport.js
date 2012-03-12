Ext.define('ExtJsCheckedTree.view.Viewport', {
    extend:'Ext.container.Viewport',

    requires:[
        'ExtJsCheckedTree.view.MyTree'
    ],

    layout:'fit',

    initComponent:function () {
        this.items = {
            layout:'border',
            defaults:{
                collapsible:true,
                split:true
            },
            items:[
                {
                    title:'The tree',
                    region:'west',
                    flex:1.5,
                    xtype:'mytree'
                },
                {
                    title:'The other component',
                    collapsible:false,
                    region:'center',
                    items:[
                        {
                            text: 'Render clicked items',
                            xtype:'button',
                            handler: function(e) {
                                // THIS IS NOT WORKING!
                                var t = Ext.widget('mytree');
                                var checkedItems = t.getChecked();
                                alert(checkedItems);

                            }
                        }
                    ]
                }
            ]
        };

        this.callParent(arguments);
    }
});
