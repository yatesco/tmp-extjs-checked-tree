Ext.Loader.setConfig({enabled:true});

Ext.application({
    name: 'ExtJsCheckedTree',
    autoCreateViewport:true,
    models: ['MyTree'],
    stores: ['MyTrees']
});