Ext.define('ExtJsCheckedTree.model.MyTree', {
    extend:'Ext.data.Model',

    fields:[
        'type', // Undefined, Label, Available, Unavailable, Absent, Resource
        'status',
        'description'
    ]

});
