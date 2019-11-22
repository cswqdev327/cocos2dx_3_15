var base = cc.Class.extend({

    testValue : 1,

    ctor : function ( name ) {
        this.name = name;
        this.testValue2 = 10;
    },

    testFunc : function () {
        cc.log("base testFunc");
    },
});

var derived = base.extend({

    ctor : function ( name, testID ) {
        this._super(name);
        this._testID = testID;
    },

    testFunc : function() {
        cc.log("derived testFunc");
    }
});


var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    rotY : 0,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        // 모바일 공통 폰트
        //http://kenial.tistory.com/819

        // Arial/Helvetica
        // Courier/Courier New
        // Georgia
        // Times/Times New Roman
        // Trebuchet MS
        // Verdana



        // ios
        // Arial / Helvetica
        // Futura
        // Helvetica CY
        // Helvetica Nenu

        // myTestFunc.bjTestFunc();

        // cc.log("1");
        // // var testFont = new cc.LabelBMFont("1234", "res/bpFont01.fnt");
        // // testFont.setPosition( cc.winSize.width/2, cc.winSize.height/2 );
        // // this.addChild( testFont );
        // this.setPosition( cc.winSize.width/2, cc.winSize.height/2 );
        //
        // var fontDefRedStrokeShadow = new cc.FontDefinition();
        // fontDefRedStrokeShadow._strokeEnabled = true;
        // fontDefRedStrokeShadow.fontName = "Verdana";
        // fontDefRedStrokeShadow.fontSize = 32;
        //
        //
        //
        this._labelttf = new cc.LabelTTF("Arial ABCDE abcde 0123456789 $@#%& 高雄寺 가나다라", 'DroidSans.ttf', 32);
        this._labelttf.setPosition(400, 200);
        this.addChild(this._labelttf);
        // //
        // // // this._labelttf = new cc.LabelTTF("Arial 0123456789 $@#%& 高雄寺 가나다라", fontDefRedStrokeShadow);
        // // // this._labelttf.setPositionY(300);
        // // // this.addChild(this._labelttf);
        // //
        // // this._labelttf1 = new cc.LabelTTF("Helvetica ABCDE abcde 0123456789 $@#%& 高雄寺 가나다라", 'CutiveMono', 32);
        // // this._labelttf1.setPositionY(200);
        // // this.addChild(this._labelttf1);
        // //
        // // this._labelttf2 = new cc.LabelTTF("Courier ABCDE abcde 0123456789 $@#%& 高雄寺 가나다라", 'ComingSoon', 32);
        // // this._labelttf2.setPositionY(100);
        // // this.addChild(this._labelttf2);
        // //
        // // this._labelttf3 = new cc.LabelTTF("Georgia ABCDE abcde 0123456789 $@#%& 高雄寺 가나다라", 'DancingScript-Regular', 32);
        // // this._labelttf3.setPositionY(0);
        // // this.addChild(this._labelttf3);
        //
        // this._labelttf4 = new cc.LabelTTF("Times ABCDE abcde 0123456789 $@#%& 高雄寺 가나다라", 'DroidSans-Bold.ttf', 32);
        // this._labelttf4.setPositionY(-100);
        // this.addChild(this._labelttf4);
        //
        // this._labelttf5 = new cc.LabelTTF("Verdana ABCDE abcde 0123456789 $@#%& 高雄寺 가나다라", 'DroidSansMono', 32);
        // this._labelttf5.setPositionY(-200);
        // this.addChild(this._labelttf5);
        //
        this._labelttf6 = new cc.LabelTTF("RobotoCondensed-Bold ABCDE abcde 0123456789 $@#%& 高雄寺 가나다라", 'res/RobotoCondensed-Bold.ttf', 32);
        this._labelttf6.setPosition( 400, 300);
        this.addChild(this._labelttf6);



        // cc.log("1");
        // cc.loader.loadTxt("res/70Font01.fnt", function(err, txt) {
        //     cc.log("2");
        //     cc.log("txt >>> ", txt );
        //     cc.log("err >>>> ", err );
        // });

        // 70Font01.fnt
        // 70Font01.png

        // var test = 0.5;
        //
        // var spr = new cc.Sprite( res.HelloWorld_png );
        // spr.attr({
        //     anchorX : 0.5,
        //     anchorY : 0.5,
        //     x : cc.winSize.width/2,
        //     y : cc.winSize.height/2,
        // });
        // spr.setContentSize( cc.winSize );
        // this.addChild(spr);
        //
        // this.sprite = spr;

        //
        // var extendSize = cc.size( spr.getTextureRect().width *4, spr.getTextureRect().height  );
        // spr.setTextureRect( spr.getTextureRect(), false, extendSize );
        // cc.log(extendSize.width / spr.getTextureRect().width);
        //
        //
        // var spr2 = new cc.Sprite( res.HelloWorld_png );
        // //spr2.setColor( cc.color(255,0,0,100) );
        // spr2.attr({
        //     anchorX : test,
        //     anchorY : 0,
        //     x : cc.winSize.width / 2,
        //     y : cc.winSize.height / 2  - 300
        // });
        // this.addChild(spr2);


        // this.init();

        // var shader = new cc.GLProgram();
        // shader.retain();
        // shader.init("res/gray.vsh", "res/gray.fsh");
        // shader.addAttribute( cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION );
        // shader.addAttribute( cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR );
        // shader.addAttribute( cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS );
        //
        // shader.link();
        // shader.updateUniforms();
        // spr2.setShaderProgram(shader);

        // this.runAction( cc.sequence(cc.delayTime(3.0), cc.callFunc(this.screenShotBlur, this)) );

        var locBaseObj = new base("base");
        var locDerivedObj = new derived("derived", 100);

        return true;
    },

    screenShotBlur : function ( blurRadius, blurSampleNum, repeat ) {
        // create the first render texture for inScene
        // var inTexture = new cc.RenderTexture(winSize.width, winSize.height);
        //
        // inTexture.sprite.anchorX = 0.5;
        // inTexture.sprite.anchorY = 0.5;
        // inTexture.attr({
        //     x: winSize.width / 2,
        //     y: winSize.height / 2,
        //     anchorX: 0.5,
        //     anchorY: 0.5
        // });
        //
        // // render inScene to its texturebuffer
        // inTexture.begin();
        // this._inScene.visit();
        // inTexture.end();
        //
        // // create the second render texture for outScene
        // var outTexture = new cc.RenderTexture(winSize.width, winSize.height);
        // outTexture.setPosition(winSize.width / 2, winSize.height / 2);
        // outTexture.sprite.anchorX = outTexture.anchorX = 0.5;
        // outTexture.sprite.anchorY = outTexture.anchorY = 0.5;
        //
        // // render outScene to its texturebuffer
        // outTexture.begin();
        // this._outScene.visit();
        // outTexture.end();
        //
        // inTexture.sprite.setBlendFunc(cc.ONE, cc.ONE);                                             // inScene will lay on background and will not be used with alpha
        // outTexture.sprite.setBlendFunc(cc.SRC_ALPHA, cc.ONE_MINUS_SRC_ALPHA);                      // we are going to blend outScene via alpha
        //
        // // add render textures to the layer
        // layer.addChild(inTexture);

        //var myLayer = new cc.Layer(cc.color(255,0,0,100));
        //this.addChild(myLayer);

        cc.log("시작!!!");
        var rt = new cc.RenderTexture( cc.winSize.width, cc.winSize.height );


        rt.sprite.anchorX = 0.5;
        rt.sprite.anchorY = 0.5;
        rt.attr({
            x : cc.winSize.width/2,y : cc.winSize.height/2,
            // x : 0, y : 0,
            anchorX : 0.5,
            anchorY : 0.5
        });

        rt.begin();
        this.visit();
        rt.end();

        //rt.sprite.setBlendFunc(cc.ONE, cc.ONE);


        var shader = new cc.GLProgram();
        shader.retain();
        // shader.init("res/gray.vsh", "res/gray.fsh");
         shader.init("res/blur.vsh", "res/blur.fsh");
        shader.addAttribute( cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION );
        shader.addAttribute( cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR );
        shader.addAttribute( cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS );

        // var resolution   = shader.getUniformLocationForName("resolution");
        // var blurRadius  = shader.getUniformLocationForName("blurRadius");
        // var sampleNum      = shader.getUniformLocationForName("sampleNum");
        //
        // shader.setUniformLocationWith2f(resolution, cc.winSize.width/2, cc.winSize.height/2  );
        // shader.setUniformLocationWith1f(blurRadius, 1.0);
        // shader.setUniformLocationWith1f(sampleNum, 7.0);

        shader.link();
        shader.updateUniforms();

        //shader.setUniformLocationWith2f("resolution", cc.winSize.width/2.0, cc.winSize.height/2.0  );
        //shader.setUniformLocationWith2f("resolution", 1.0, 1.0);
        // shader.setUniformLocationWith1f("blurRadius", 1.0);
        // shader.setUniformLocationWith1f("sampleNum", 7.0);

        // var resolution   = gl.getUniformLocation( shader, "resolution");
        // var blurRadius   = gl.getUniformLocation( shader, "blurRadius");
        // var sampleNum    = gl.getUniformLocation( shader, "sampleNum");

        // var resolution   = shader.getUniformLocationForName("resolution");
        // var blurRadius  = shader.getUniformLocationForName("blurRadius");
        // var sampleNum      = shader.getUniformLocationForName("sampleNum");

        //rt.sprite.setOpacity(100);
        rt.sprite.setShaderProgram(shader);

        // shader.setUniformLocationF32( resolution, cc.winSize.width/2, cc.winSize.height/2 );
        // shader.setUniformLocationF32( blurRadius, 0.1 );
        // shader.setUniformLocationF32( sampleNum, 7.0 );

        //myLayer.addChild(rt);
        this.addChild(rt);

        this.sprite.setVisible(false);

    },

    _calculateGaussianWeight : function ( points ) {
        this._weights = [];

        var dx = 1.0/ (points-1);
        var sigma = 1.0/3.0;
        var norm = 1.0/(Math.sqrt(2.0 * Math.PI)*sigma*points);
        var divsigma2 = 0.5/(sigma*sigma);

        this._weights.push(1.0);

        for (var i = 1; i < points; i++)
        {
            var x = i*dx;
            var temp = norm * Math.exp(-x*x*divsigma2);
            this._weights.push(temp);
            this._weights[0] -= 2.0 * this._weights[i];

            // weights[i] = norm*expf(-x*x*divsigma2);
            // weights[0] -= 2.0f*weights[i];
        }


    }


});

var HelloWorldScene = cc.Scene.extend({
    ctor : function () {
        this._super();
    },

    onEnter:function () {
        this._super();
        //var layer = new ParallaxTestLayer();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

var testScene = cc.Scene.extend({
    ctor : function() {
        this._super();


        cc.spriteFrameCache.addSpriteFrames( res.SlotEntry_plist );
        ccs.armatureDataManager.addArmatureFileInfo( res.SlotEntryAR );

       this.init();
      //  this.initTest();
    },

    initTest : function() {
        var testUI  = ccs.uiReader.widgetFromJsonFile( res.SlotEntryUI );
        testUI.attr({
            x : cc.winSize.width/2,
            y : cc.winSize.height/2,
            anchorX : 0.5,
            anchorY : 0.5,
        });

        this.addChild( testUI );

        this.testAR3 = new ccs.Armature( 'mb_SlotEntryTestAR' );
        this.testAR3.attr({
            x : cc.winSize.width / 2,
            y : cc.winSize.height/ 2
        });
        this.addChild(this.testAR3);
        this.testAR3.getAnimation().play( 'normal', -1, 1 );

        this.btn03 = new ccui.Button();
        this.btn03.loadTextureNormal(res.HelloWorld_png,ccui.Widget.LOCAL_TEXTURE );
        this.btn03.addTouchEventListener( this.onButton01Touch, this );
        this.btn03.setTouchEnabled(true);
        this.btn03.attr( {
            x : 100,
            y : cc.winSize.height - 50,
            anchorX : 0.5,
            anchorY : 0.5,
            scale : 0.5
        } );
        this.addChild( this.btn03 );

        //this.testFlag = 0;
    },

    init : function() {

        this.offset = 200;

        this.initSlotEntry();

        this.btn01 = new ccui.Button();
        this.btn01.loadTextureNormal(res.HelloWorld_png,ccui.Widget.LOCAL_TEXTURE );
        this.btn01.addTouchEventListener( this.onButton01Touch, this );
        this.btn01.setTouchEnabled(true);
        this.btn01.attr( {
            x : 100,
            y : cc.winSize.height - 50,
            anchorX : 0.5,
            anchorY : 0.5,
            scale : 0.5
        } );
        this.addChild( this.btn01 );

        this.btn02 = new ccui.Button();
        this.btn02.loadTextureNormal(res.HelloWorld_png,ccui.Widget.LOCAL_TEXTURE );
        this.btn02.addTouchEventListener( this.onButton02Touch, this );
        this.btn02.setTouchEnabled(true);
        this.btn02.attr( {
            x : cc.winSize.width - 200,
            y : cc.winSize.height - 50,
            anchorX : 0.5,
            anchorY : 0.5,
            scale : 0.5
        } );
        this.addChild( this.btn02);
    },

    onButton01Touch : function(sender, eventType) {
        switch ( eventType )  {
            case ccui.Widget.TOUCH_BEGAN:
            {

            }break;
            case ccui.Widget.TOUCH_ENDED:
            {
                /**
                 * Scroll inner container to vertical percent position of ScrollView.
                 * @param {Number} percent
                 * @param {Number} time
                 * @param {Boolean} attenuated
                 */
                this.listView.scrollToPercentHorizontal( 10, 4, true );

            }break;
        }
    },

    onButton02Touch : function(sender, eventType) {
        switch ( eventType )  {
            case ccui.Widget.TOUCH_BEGAN:
            {
                //cc.log("begin");
            }break;
            case ccui.Widget.TOUCH_ENDED:
            {
                this.listView.scrollToPercentHorizontal( 90, 4, true );
            }break;
        }
    },

    initSlotEntry : function() {

        var testAR2 = new ccs.Armature('mb_SlotEntryTestAR');
        var count = 20;

        this.listView = new ccui.ScrollView();

        this.listView.setDirection( ccui.ScrollView.DIR_HORIZONTAL );
        this.listView.setTouchEnabled(true);
        this.listView.setBounceEnabled(true);

        this.listView.setContentSize( cc.winSize );
        this.listView.setInnerContainerSize(cc.size( testAR2.getContentSize().width * count , cc.winSize.height ) );

        this.listView.setColor(cc.color(255,0,0,150));
        this.listView.setPosition( cc.p(0,0) );

        this.addChild(this.listView);

        this.listView.addEventListener( this.onScrollViewEvent.bind(this));

        this.slotEntryArr = [];

        this.radius = 100;
        this.posZOffset = 3;
        this.rotYOffset = 2.5;

        for( var i = 0; i < count; ++i ) {

            var testAR = new ccs.Armature( 'mb_SlotEntryTestAR' );
            var testUI = ccs.uiReader.widgetFromJsonFile( res.SlotEntryUI );
            testUI.attr({
                anchorX : 0.5,
                anchorY : 0.5
            });

            this.slotEntryArr[i] = new cc.Node();
            this.slotEntryArr[i].attr({
                anchorX : 0.5,
                anchorY : 0.5,
                x : 0 + i * testUI.getContentSize().width,
                y : cc.winSize.height / 2
            });


            this.listView.addChild(  this.slotEntryArr[i] );
            this.slotEntryArr[i].addChild( testAR );
            //this.slotEntryArr[i].addChild( testUI );

            var jackpotLabel = new cc.LabelBMFont(9999, res.BaseFont );
            jackpotLabel.attr({
                x : 0,
                y : 130,
                scale : 0.3
            });
            this.slotEntryArr[i].addChild(jackpotLabel);

            var jackpotLabel2 = new cc.LabelBMFont(1111, res.BaseFont );
            jackpotLabel2.attr({
                x : 0,
                y : 180,
                scale : 0.3
            });
            this.slotEntryArr[i].addChild(jackpotLabel2);


            var locPos = this.listView.convertToNodeSpace( this.slotEntryArr[i].getPosition() );
            var containerPos = this.listView.getInnerContainerPosition();
            var worldPos = cc.pAdd(containerPos ,locPos );
            var rate = this._getRateFromCenter( worldPos.x); // return : ( this.rateMin ~ this.rateMax )

            var degree = 90 - (rate * 90);

            var radian = cc.degreesToRadians(degree);
            var posX = this.radius * Math.cos( radian );
            var posZ = this.radius * Math.sin( radian );

            var originPos = this.slotEntryArr[i].getPosition();
            var result = cc.math.vec3( originPos.x  , originPos.y, this.radius - posZ * this.posZOffset);

            cc.log("i : " + i + " , rate : " + rate  + ", degree : " + degree +  " , posZ :  " + (this.radius - posZ*this.posZOffset)  );

            this.slotEntryArr[i].setRotation3D( cc.math.vec3(0,(degree-90)/this.rotYOffset,0) );
            this.slotEntryArr[i].setPosition3D( result );

            testAR.getAnimation().play('Over', -1, 1);
        }

        this.items =  this.listView.getChildren();

        this.rateMin = -1;
        this.rateMax = 1;

    },

    onScrollViewEvent : function( sender, eventType ) {
        switch (eventType) {
            case ccui.ScrollView.EVENT_SCROLLING: {
               // cc.log("ccui.ScrollView.EVENT_SCROLLING");

            }break;
            case ccui.ScrollView.MOVEDIR_LEFT: {
                //cc.log("ccui.ScrollView.MOVEDIR_LEFT");
            }break;
            case ccui.ScrollView.EVENT_CONTAINER_MOVED: {
                //cc.log("ccui.ScrollView.EVENT_CONTAINER_MOVED");
                this.updateSlotEntries();
            }break;
            case ccui.ScrollView.EVENT_AUTOSCROLL_ENDED: {
                //cc.log("ccui.ScrollView.EVENT_AUTOSCROLL_ENDED");
            }break;
        }
    },

    updateSlotEntries : function() {
        for( var i = 0; i < this.items.length; ++i ) {

            var locPos = this.listView.convertToNodeSpace( this.slotEntryArr[i].getPosition() );
            var containerPos = this.listView.getInnerContainerPosition();
            var worldPos = cc.pAdd(containerPos ,locPos );
            var rate = this._getRateFromCenter( worldPos.x); // return : ( this.rateMin ~ this.rateMax )

            var degree = 90 - (rate * 90);
            var radian = cc.degreesToRadians(degree);
            var posX = this.radius * Math.cos( radian );
            var posZ = this.radius * Math.sin( radian );

            var originPos = this.slotEntryArr[i].getPosition();
            var result = cc.math.vec3( originPos.x , originPos.y, this.radius - posZ * this.posZOffset);

            //cc.log("i : " + i + " , rate : " + rate  + ", degree : " + degree +  " , posZ :  " + (this.radius - posZ*this.posZOffset)  );

            this.slotEntryArr[i].setRotation3D( cc.math.vec3(0,(degree-90)/this.rotYOffset,0) );
            this.slotEntryArr[i].setPosition3D( result );

        }
    },

    _getRateFromCenter : function( worldPosX) {

        var centerX = cc.winSize.width / 2;
        var dist = worldPosX - centerX;
        var rate = dist / (centerX + 200 );

        if( rate > this.rateMax)       rate = this.rateMax;
        else if( rate < this.rateMin ) rate = this.rateMin;

        return rate;
    },

});

var testScene2 = cc.Scene.extend({

    SlotMachineType : {
        NORMAL : 0,
        VIP    : 1
    },

    _layerNormal  : null,
    _layerVIP     : null,

    _buttons      : [],

    _normalSlotEntryArr : [],
    _vipSlotEntryArr    : [],

    _normalScrollView   : null,
    _vipScrollView      : null,

    radius     : 100,
    posZOffset : 3,
    rotYOffset : 2.5,

    ctor : function() {
        this._super();

        cc.spriteFrameCache.addSpriteFrames( res.LobbyBG_plist );
        cc.spriteFrameCache.addSpriteFrames( res.SlotEntry_plist );
        ccs.armatureDataManager.addArmatureFileInfo( res.SlotEntryAR );

        this._layerNormal = new cc.LayerColor( cc.color(255,0,0,30), cc.winSize.width, cc.winSize.height );
        this._layerNormal.attr({
           x : 0,
           y : 0
        });
        cc.log( this._layerNormal );

        this._layerVIP = new cc.LayerColor( cc.color(0,255,0,30), cc.winSize.width, cc.winSize.height );
        this._layerVIP.attr({
           x : 0,
           y : -cc.winSize.height
        });

        cc.log( this._layerVIP );

        this.addChild( this._layerNormal );
        this.addChild( this._layerVIP );

        this._normalScrollView  = new ccui.ScrollView();
        this._vipScrollView     = new ccui.ScrollView();

        this._init();
    },

    _init : function() {
        this._initButtons();
        this._initLayerNormal();
        this._initLayerVIP();
        this._initLobbyBG();
    },

    _initLobbyBG : function() {

        var floor = new cc.Node();
        for( var i = 0; i < 10; ++i ) {
           var floorSpr = new cc.Sprite( '#lb_MobileLobby_Floor.png' );
           floorSpr.attr({
                x : i * floorSpr.getContentSize().width,
                y : 0,
                anchorX : 0.5,
                anchorY : 0
           });
           floor.addChild( floorSpr );
        }

        this._layerNormal.addChild(floor, -10);
        floor.setRotation3D( cc.math.vec3( -60, 0, 0 ) );
    },

    _initLayerNormal : function() {
        this._initSlotMachines( this.SlotMachineType.NORMAL );
    },

    _initLayerVIP : function() {
        this._initSlotMachines( this.SlotMachineType.VIP );
    },

    _initSlotMachines : function( type ) {
        var locScrollView   = ( type === this.SlotMachineType.NORMAL ) ? this._normalScrollView     : this._vipScrollView;
        var locSlotEntryArr = ( type === this.SlotMachineType.NORMAL ) ? this._normalSlotEntryArr   : this._vipSlotEntryArr;
        var locLayer        = ( type === this.SlotMachineType.NORMAL ) ? this._layerNormal          : this._layerVIP;
        var locScrollViewCB = ( type === this.SlotMachineType.NORMAL ) ? this.onNormalScrollViewCB.bind(this) : this.onVIPScrollViewCB.bind(this);

        var slotAR = new ccs.Armature('mb_SlotEntryTestAR');

        var locSlotAR = null,
            locSlotUI = null,
            count     = 20;

        // scroll view
        locScrollView.setDirection( ccui.ScrollView.DIR_HORIZONTAL );
        locScrollView.setTouchEnabled(true);
        locScrollView.setBounceEnabled(true);
        locScrollView.setContentSize( cc.winSize );
        locScrollView.setInnerContainerSize(cc.size( slotAR.getContentSize().width * count , cc.winSize.height ) );
        locScrollView.setColor(cc.color(255,0,0,150));
        locScrollView.setPosition( cc.p(0,0) );
        locScrollView.addEventListener( locScrollViewCB );
        locLayer.addChild(locScrollView);

        // 2. slotMachines
        for( var i = 0; i < count; ++i ) {
            locSlotAR = new ccs.Armature('mb_SlotEntryTestAR');
            locSlotUI = ccs.uiReader.widgetFromJsonFile( res.SlotEntryUI );

            locSlotEntryArr[i] = new cc.Node();
            locSlotEntryArr[i].attr({
                anchorX : 0.5,
                anchorY : 0.5,
                x : 0 + i * locSlotUI.getContentSize().width,
                y : cc.winSize.height / 2
            });
            locScrollView.addChild(  locSlotEntryArr[i] );

            locSlotEntryArr[i].addChild( locSlotAR );
            //this.slotEntryArr[i].addChild( testUI );

            var jackpotLabel = new cc.LabelBMFont(9999, res.BaseFont );
            jackpotLabel.attr({
                x : 0,
                y : 130,
                scale : 0.3
            });
            locSlotEntryArr[i].addChild(jackpotLabel);

            var jackpotLabel2 = new cc.LabelBMFont(1111, res.BaseFont );
            jackpotLabel2.attr({
                x : 0,
                y : 180,
                scale : 0.3
            });
            locSlotEntryArr[i].addChild(jackpotLabel2);

            var locPos          = locScrollView.convertToNodeSpace( locSlotEntryArr[i].getPosition() );
            var containerPos    = locScrollView.getInnerContainerPosition();
            var worldPos        = cc.pAdd(containerPos ,locPos );
            var rate            = this._getRateFromCenter( worldPos.x); // return : ( this.rateMin ~ this.rateMax )

            var degree  = 90 - (rate * 90);
            var radian  = cc.degreesToRadians(degree);
            var posZ    = this.radius * Math.sin( radian );
            //var posX = this.radius * Math.cos( radian );

            var originPos   = locSlotEntryArr[i].getPosition();
            var result      = cc.math.vec3( originPos.x  , originPos.y, this.radius - posZ * this.posZOffset);

            cc.log("i : " + i + " , rate : " + rate  + ", degree : " + degree +  " , posZ :  " + (this.radius - posZ*this.posZOffset)  );

            locSlotEntryArr[i].setRotation3D( cc.math.vec3(0,(degree-90)/this.rotYOffset,0) );
            locSlotEntryArr[i].setPosition3D( result );

            locSlotAR.getAnimation().play('Over', -1, 1);
        }

        this.items =  locScrollView.getChildren();

        locScrollView.jumpToRight();
    },

    _updateSlotMachines : function( type ) {
        var locScrollView   = ( type === this.SlotMachineType.NORMAL ) ? this._normalScrollView : this._vipScrollView;
        var locSlotEntryArr = ( type === this.SlotMachineType.NORMAL ) ? this._normalSlotEntryArr : this._vipSlotEntryArr;

        for( var i = 0; i < this.items.length; ++i ) {

            var locPos          = locScrollView.convertToNodeSpace( locSlotEntryArr[i].getPosition() );
            var containerPos    = locScrollView.getInnerContainerPosition();
            var worldPos        = cc.pAdd(containerPos ,locPos );
            var rate            = this._getRateFromCenter( worldPos.x); // return : ( this.rateMin ~ this.rateMax )

            var degree  = 90 - (rate * 90);
            var radian  = cc.degreesToRadians(degree);
            var posZ    = this.radius * Math.sin( radian );
            //var posX  = this.radius * Math.cos( radian );

            var originPos   = locSlotEntryArr[i].getPosition();
            var result      = cc.math.vec3( originPos.x , originPos.y, this.radius - posZ * this.posZOffset);

            //cc.log("i : " + i + " , rate : " + rate  + ", degree : " + degree +  " , posZ :  " + (this.radius - posZ*this.posZOffset)  );

            locSlotEntryArr[i].setRotation3D( cc.math.vec3(0,(degree-90)/this.rotYOffset,0) );
            locSlotEntryArr[i].setPosition3D( result );
        }
    },

    onNormalScrollViewCB : function( sender, eventType ) {
        switch (eventType) {
            case ccui.ScrollView.EVENT_CONTAINER_MOVED: {
                this._updateSlotMachines( this.SlotMachineType.NORMAL );
            }break;

            // case ccui.ScrollView.EVENT_SCROLLING: {
            //     // cc.log("ccui.ScrollView.EVENT_SCROLLING");
            //
            // }break;
            // case ccui.ScrollView.MOVEDIR_LEFT: {
            //     //cc.log("ccui.ScrollView.MOVEDIR_LEFT");
            // }break;
            //
            // case ccui.ScrollView.EVENT_AUTOSCROLL_ENDED: {
            //     //cc.log("ccui.ScrollView.EVENT_AUTOSCROLL_ENDED");
            // }break;
        }
    },

    onVIPScrollViewCB : function( sender, eventType ) {
        switch (eventType) {
            case ccui.ScrollView.EVENT_CONTAINER_MOVED: {
                this._updateSlotMachines( this.SlotMachineType.VIP );
            }break;
            // case ccui.ScrollView.EVENT_SCROLLING: {
            //     // cc.log("ccui.ScrollView.EVENT_SCROLLING");
            //
            // }break;
            // case ccui.ScrollView.MOVEDIR_LEFT: {
            //     //cc.log("ccui.ScrollView.MOVEDIR_LEFT");
            // }break;
            // case ccui.ScrollView.EVENT_CONTAINER_MOVED: {
            //     //cc.log("ccui.ScrollView.EVENT_CONTAINER_MOVED");
            //     this._updateSlotMachines( this.SlotMachineType.VIP );
            // }break;
            // case ccui.ScrollView.EVENT_AUTOSCROLL_ENDED: {
            //     //cc.log("ccui.ScrollView.EVENT_AUTOSCROLL_ENDED");
            // }break;
        }
    },

    _getRateFromCenter : function( worldPosX) {
        var centerX = cc.winSize.width / 2;
        var dist = worldPosX - centerX;
        var rate = dist / (centerX + 200 );

        if( rate > this.rateMax)       rate = this.rateMax;
        else if( rate < this.rateMin ) rate = this.rateMin;

        return rate;
    },

    _initButtons : function() {

        for( var i = 0; i < 4; ++i ) {
            this._buttons[i] = new ccui.Button( res.HelloWorld_png, "", "", ccui.Widget.LOCAL_TEXTURE );
            this._buttons[i].setTouchEnabled(true);
            this._buttons[i].attr( {
                x : 100 + i * 200,
                y : cc.winSize.height - 100,
                scale : 0.5
            });
            this.addChild( this._buttons[i] );
        }

        this._buttons[0].addTouchEventListener( this._onClickBtn01, this );
        this._buttons[1].addTouchEventListener( this._onClickBtn02, this );
        this._buttons[2].addTouchEventListener( this._onClickBtn03, this );
        this._buttons[3].addTouchEventListener( this._onClickBtn04, this );
    },

    _onClickBtn01 : function( sender, eventType ) {
        switch( eventType ) {
            case ccui.Widget.TOUCH_ENDED:
            {
                this._gotoLayer( this.SlotMachineType.NORMAL );
            }break;
        }
    },

    _onClickBtn02 : function( sender, eventType ) {
        switch( eventType ) {
            case ccui.Widget.TOUCH_ENDED:
            {
                this._gotoLayer( this.SlotMachineType.VIP );
            }break;
        }
    },

    _onClickBtn03 : function( sender, eventType ) {
        switch( eventType ) {
            case ccui.Widget.TOUCH_ENDED:
            {

            }break;
        }
    },

    _onClickBtn04 : function( sender, eventType ) {
        switch( eventType ) {
            case ccui.Widget.TOUCH_ENDED:
            {
                var cam = this.getDefaultCamera();
                var camPos3D = cam.getPosition3D();
                cam.runAction( new cc.MoveTo( 1, camPos3D ).easing( cc.easeBackInOut() )  )
            }break;
        }
    },

    _gotoLayer : function( type ) {
        if( type === this.SlotMachineType.NORMAL ) {  // NORMAL
            this._layerNormal.runAction( new cc.MoveTo( 1, cc.p( 0, 0 ) ).easing(cc.easeQuadraticActionOut()) );
            this._layerVIP.runAction( new cc.MoveTo( 1, cc.p( 0, -cc.winSize.height ) ).easing(cc.easeQuadraticActionOut()) );

            this._normalScrollView.jumpToRight();
            this._normalScrollView.runAction( cc.sequence( cc.delayTime(1), cc.callFunc( this._scrollToLeft, this, type )) );

            var cam = this.getDefaultCamera();
            var camPos = cam.getPosition3D();

            var originCamPos3D = cc.math.vec3( camPos.x , camPos.y, camPos.z );
            var camMoveToPos3D = cc.math.vec3(originCamPos3D.x, originCamPos3D.y, originCamPos3D.z + 40) ;

            cc.log( originCamPos3D.z );
            cc.log( camMoveToPos3D.z );

            var move01  = cc.moveTo( 0.5, camMoveToPos3D ).easing( cc.easeBackOut());
            var move02  = cc.moveTo( 0.5, originCamPos3D ).easing( cc.easeBackIn() );

            cam.runAction( cc.sequence( move01, move02 ) );
        }
        else {                                        // VIP
            this._layerNormal.runAction( new cc.MoveTo( 1, cc.p( 0, cc.winSize.height ) ).easing(cc.easeQuadraticActionIn()) );
            this._layerVIP.runAction( new cc.MoveTo( 1, cc.p( 0, 0 ) ).easing(cc.easeQuadraticActionIn()) );

            this._vipScrollView.jumpToRight();
            this._vipScrollView.runAction( cc.sequence(cc.delayTime(1), cc.callFunc( this._scrollToLeft, this, type ) ));

            var cam = this.getDefaultCamera();
            var camPos = cam.getPosition3D();

            var originCamPos3D = cc.math.vec3( camPos.x , camPos.y, camPos.z );
            var camMoveToPos3D = cc.math.vec3(originCamPos3D.x, originCamPos3D.y, originCamPos3D.z + 20) ;

            cc.log( originCamPos3D.z );
            cc.log( camMoveToPos3D.z );

            var move01  = cc.moveTo( 0.5, camMoveToPos3D ).easing( cc.easeBackOut());
            var move02  = cc.moveTo( 0.5, originCamPos3D ).easing( cc.easeBackIn() );

            cam.runAction( cc.sequence( move01, move02 ) );
        }
    },

    _scrollToLeft : function( type ) {
        if( type === this.SlotMachineType.NORMAL ) {
            this._normalScrollView.scrollToPercentHorizontal( 0, 2, true );
        }
        else {
            this._vipScrollView.scrollToPercentHorizontal( 0, 2, true );
        }
    }

});

var testScene3 = cc.Scene.extend({
    _buttons      : [],
    _flag  : false,
    ctor : function() {
        this._super();
        cc.log("ctor");
        this._initButtons();

        this.scheduleUpdate();
    },


    onEnter : function() {
        this._super();
        cc.log("onEnter");

       // this._initButtons();
    },

    update : function() {
        if( this._flag === false ) {
            return;
        }

        for( var i = 0; i < this._nodeList.length; ++i  ) {
            this._nodeList[i].foo();
        }
    },

    _initButtons : function() {
        cc.log("_initButtons");
        for( var i = 0; i < 2; ++i ) {
            this._buttons[i] = new ccui.Button( res.HelloWorld_png, "", "", ccui.Widget.LOCAL_TEXTURE );
            this._buttons[i].setTouchEnabled(true);
            this._buttons[i].attr( {
                x : 100 + i * 200,
                y : cc.winSize.height - 100,
                scale : 0.5
            });
            this.addChild( this._buttons[i] );
        }

        this._buttons[0].addTouchEventListener( this._onClickBtn01, this );
        this._buttons[1].addTouchEventListener( this._onClickBtn02, this );
       // this._buttons[2].addTouchEventListener( this._onClickBtn03, this );
       // this._buttons[3].addTouchEventListener( this._onClickBtn04, this );
    },

    _onClickBtn01 : function( sender, eventType ) {
        switch( eventType ) {
            case ccui.Widget.TOUCH_ENDED:
            {
                this._flag = true;
            }break;
        }
    },

    _onClickBtn02 : function( sender, eventType ) {
        switch( eventType ) {
            case ccui.Widget.TOUCH_ENDED:
            {
                this._flag = false;
                //this._gotoLayer( this.SlotMachineType.VIP );
            }break;
        }
    },


});

var testScene_test = cc.Scene.extend({
    ctor : function () {
        this._super();
        this._init();
    },

    _init : function () {
        var menuItem1 = new cc.MenuItemFont( "생성", this.onTest1.bind(this) );
        var menu = new cc.Menu(menuItem1);

        menu.setPosition( cc.winSize.width/2, cc.winSize.height/2 + 180  );
        this.addChild( menu ,9999);
    },

    onEnter : function () {
        this._super();
        cc.log("testScene_test::onEnter");
    },

    onEnterTransitionDidFinish : function () {
        this._super();

        cc.director.purgeCachedData();
        GetTextureInfo(true);
    },

    onTest1 : function () {
        // var loc_testScene = new testScene_Resource();
        // cc.director.runScene( loc_testScene );
        // ccs.armatureDataManager.removeArmatureFileInfo("res/c_lbNewEntryAR_mb.ExportJson");
        // cc.spriteFrameCache.removeSpriteFrameByName("res/c_lbNewMainAtlas_mb.plist");
        // cc.textureCache.removeTextureForKey("res/c_lbNewMainAtlas_mb.png");

    }
});

var testconatainer = cc.Node.extend({

    ctor :function () {
        this._super();

        cc.spriteFrameCache.addSpriteFrames("res/c_lbNewMainAtlas_mb.plist");
        ccs.armatureDataManager.addArmatureFileInfo("res/c_lbNewEntryAR_mb.ExportJson");
        var aaa = new ccs.Armature("c_lbNewEntryAR_mb");
        this.addChild(aaa, 1);
        aaa.setPosition( cc.winSize.width/2, cc.winSize.height/2 );
        this.a = aaa;

        cc.spriteFrameCache.addSpriteFrames("res/image/PU_newBonusGuideAtlas_mb.plist");
        var uiRoot  = ccs.uiReader.widgetFromJsonFile("res/PU_newBonusGuideUI_mb.ExportJson");
        this.addChild(uiRoot,2);
        uiRoot.setVisible(true);
        uiRoot.setAnchorPoint(0.5, 0.5);
        uiRoot.setPosition(cc.winSize.width/2, cc.winSize.height/2);
        this.uiRoot = uiRoot;
    },

    onEnter : function () {
        this._super();

    },

    onExit : function () {
        this._super();
        cc.log("testconatainer :: onExit");
    },

    cleanup : function () {
        this._super();
        cc.log("testconatainer :: cleaup");
        // GetTextureInfo(true);
    }

});

var testScene_Resource = cc.Scene.extend({
    ctor : function () {
        this._super();

        this._init();
    },

    _init : function () {
        this._rootNode = new testconatainer();
        this.addChild( this._rootNode,1 );

        var menuItem1 = new cc.MenuItemFont( "생성1", this.onTest1.bind(this) );
        var menuItem2 = new cc.MenuItemFont( "생성2", this.onTest2.bind(this) );
        var menuItem3 = new cc.MenuItemFont( "씬",    this.onTest3.bind(this) );

        var menu = new cc.Menu(menuItem1, menuItem2, menuItem3 );

        menuItem1.setPosition( -150, 0);
        menuItem2.setPosition( 0, 0);
        menuItem3.setPosition( 150, 0);

        menu.setPosition( cc.winSize.width/2, cc.winSize.height/2 + 250  );
        this.addChild( menu ,10);

        // GetTextureInfo();
    },

    onExit : function () {
        this._super();
        cc.log("testScene_Resource :: onExit");
    },

    cleanup : function () {
        this._super();
        cc.log("testScene_Resource :: cleanup");


    },

    onTest1 : function () {
        cc.log("onTest1");

        // this._rootNode.removeFromParent(true);
        // this._rootNode = null;
        // cc.director.purgeCachedData();
        // GetTextureInfo();
        // cc.director.pause();

    },

    onTest2 : function () {
        cc.log("onTest2");

        // // cc.spriteFrameCache.removeSpriteFramesFromFile("res/c_lbNewMainAtlas_mb.plist");
        // // var arfileInfo = ccs.armatureDataManager.getAnimationDatas();
        // // cc.log(">> " , JSON.stringify(arfileInfo) );
        // // this.abc.removeFromParent();
        // // this.abcd.removeFromParent();
        // // ccs.armatureDataManager.removeArmatureFileInfo("res/c_lbNewEntryAR_mb.ExportJson");
        // cc.spriteFrameCache.removeSpriteFramesFromFile("res/image/PU_newBonusGuideAtlas_mb.plist");
        // cc.textureCache.removeTextureForKey("res/image/PU_newBonusGuideAtlas_mb.png");
        // GetTextureInfo();
        // cc.director.purgeCachedData();
        // cc.log("1");
        // cc.director.purgeCachedData();
        // // this._uiRoot.removeFromParent();
        //
        // // cc.textureCache.removeTextureForKey("res/c_lbNewMainAtlas_mb.png");
        // cc.log("2");
        //
        // //
        // // ccs.armatureDataManager.addArmatureFileInfo("res/mb_SlotEntryTestAR.ExportJson");
        // // var aaa = new ccs.Armature("c_lbNewEntryAR_mb");
        // // this.addChild(aaa, 1);
        // // aaa.setPosition( cc.winSize.width/2 + 100, cc.winSize.height/2 );
        // // arfileInfo = ccs.armatureDataManager.getAnimationDatas();
        // // cc.log(">> " , JSON.stringify(arfileInfo) );
        //
        // cc.director.purgeCachedData();
        //
        // var arfileInfo = ccs.armatureDataManager.getAnimationDatas();
        // cc.log(">> " , JSON.stringify(arfileInfo) );
        // cc.log("3");
        // GetTextureInfo();
    },

    onTest3 : function () {
        cc.log("onTest3");
        var loc_testScene = new testScene_test();
        cc.director.runScene( loc_testScene );

    },



});

var GetTextureInfo = function( isTotal ){
    if( !Boolean( cc.game.config[ cc.game.CONFIG_KEY.debugMode ])){
        return;
    }
    isTotal = isTotal || true;

    var texInfos = {};
    var str = cc.textureCache.getCachedTextureInfo();

    var texInfosStr = str.split("\n");

    var len = texInfosStr.length;
    var split = null;
    if( isTotal ) {
        for (var n = 0; n < len - 2; n++) {
            var info = {};
            if (texInfosStr[n][0] === "\"") {
                split = texInfosStr[n].split(" ");
                var filePath = split[0].slice(1, split[0].length - 1); // " " 제거
                info.file   = GetFileName(filePath);
                info.rc     = Number(split[1].substr(3, split[1].length - 3));
                info.id     = Number(split[2].substr(3, split[1].length - 3));
                info.width  = Number(split[3]);
                info.height = Number(split[5]);
                info.bpp    = Number(split[7]);
                info.kb     = Number(split[10]);
                cc.log(n, " : ", info.file, " rc=", info.rc, "id=", info.id, info.width, "X", info.height, "bpp=", info.bpp, "kb=", info.kb);
                //cc.log(n, " : ", split[0]);
                texInfos[info.file] = info;
            }
        }
    }
    split = texInfosStr[len -2].split(" ");
    texInfos[ "TotalKB"] = Number(split[5]);
    texInfos[ "TotalCount" ] = len -2;
    cc.log("[CHECK] texInfo", n,texInfos.TotalCount, texInfos.TotalKB , "MB=", (texInfos.TotalKB / 1024.0));
    return info;
};

var GetFileName = function ( path ) {
    if( !path )
        return null;

    if( path.indexOf("https://") > -1 )
        return path;

    var arSplitUrl = path.split("/");
    if (arSplitUrl.length > 0)
        return arSplitUrl[arSplitUrl.length - 1];

    // 1
    return null;
};

