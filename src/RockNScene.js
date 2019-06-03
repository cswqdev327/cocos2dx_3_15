/**
 * Created by flysherdev11 on 2017. 11. 15..
 */


var RNCScene = cc.Scene.extend( {
    ctor : function() {
        this._super();
        //this.retain();
    },

    onEnter : function() {
        this._super();
    },

    onExit : function() {
        //this.release();
        this._super();
    },
} );


var MyScene = RNCScene.extend({
   
    ctor : function() {
        this._super();  
        this.setName("MyScene");
        cc.log("MyScene::ctor");
        for( var i = 0; i < 10000; ++i ) {
            var testNode = new cc.Node();
            this.addChild( testNode );
        }

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesBegan : function(touches, event) {
                return true;
            },
            onTouchesEnded: function (touches, event) {
                //var scene = new HelloWorldScene();
                //cc.director.runScene( scene );
                cc.textureCache.removeTextureForKey(res.VegasLobbyMenu_png);
                cc.log( "TextureCache Info => " +  cc.textureCache.getCachedTextureInfo() );
            }
        }, this);
    },
    
    onEnter : function() {
        cc.log("MyScene::onEnter");
        this._super();


    },
    
    onExit : function() {
        this._super();
        cc.log("MyScene::onExit");
    },
});