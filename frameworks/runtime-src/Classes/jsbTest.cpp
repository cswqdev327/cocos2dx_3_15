//
//  jsbTest.cpp
//  iosTest-mobile
//
//  Created by flysherdev11 on 2018. 10. 23..
//

#include "jsbTest.hpp"


bool js_bjTestFunc( JSContext *cx, uint32_t argc, jsval *vp )
{
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    CCLOG("good");
    
    return true;
}


void register_myTestFuncJS_Helper( JSContext* cx, JS::HandleObject global )
{
    JS::RootedObject ns(cx);
    get_or_create_js_obj(cx, global, "myTestFunc", &ns);
    
    
    JS_DefineFunction(cx, ns, "bjTestFunc", js_bjTestFunc, 0, JSPROP_ENUMERATE | JSPROP_PERMANENT);
}





