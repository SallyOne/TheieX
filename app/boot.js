System.register(['angular2/platform/browser', './global/global.component'], function(exports_1) {
    var browser_1, global_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (global_component_1_1) {
                global_component_1 = global_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(global_component_1.globalComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map