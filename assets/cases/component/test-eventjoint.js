let uikiller = require('uikiller');

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
        uikiller.bindComponent(this);
    },

    _onLabelTouchMove(sender, event) {
        this._label.position = this.node.convertToNodeSpaceAR(event.getLocation());   
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});