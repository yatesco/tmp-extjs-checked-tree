Ext.define('ExtJsCheckedTree.store.MyTrees', {
	extend: 'Ext.data.TreeStore',
	model: 'ExtJsCheckedTree.model.MyTree',
	require: 'ExtJsCheckedTree.model.MyTree',
	proxy: {
		type: 'ajax',
		url: 'data/mytree.json',
		autoLoad: true
	}
});
