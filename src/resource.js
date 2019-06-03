var res = {
    // HelloWorld_png : "res/HelloWorld.png",
    VegasEntryAR 			: 'res/c_lbNewEntryAR_mb.ExportJson',
    VegasLobbyMenu_plist	: 'res/c_lbNewMainAtlas_mb.plist',
    VegasLobbyMenu_png  	: 'res/c_lbNewMainAtlas_mb.plist',

    // LobbyBG_plist   : 'res/LB_ClassicLobbyAtlas_mb.plist',
    // LobbyBG_png     : 'res/LB_ClassicLobbyAtlas_mb.png',
    //
    SlotEntry_plist : 'res/mb_SlotEntryTestAtlas.plist',
    SlotEntry_png   : 'res/mb_SlotEntryTestAtlas.png',
    SlotEntryAR     : 'res/mb_SlotEntryTestAR.ExportJson',

    Test_plist : 'res/PU_newBonusGuideAtlas_mp.plist',
    Test_png : 'res/PU_newBonusGuideAtlas_mp.png'
    // SlotEntryUI     : 'res/mb_SlotEntryTestUI.ExportJson'
    // BaseFont_png    : 'res/bpFreespinFn.png',
    // BaseFont        : 'res/bpFreespinFn.fnt'

    // VegasLobbyMenu_png		: 'res/c_lbNewMainAtlas_mb.png'
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
