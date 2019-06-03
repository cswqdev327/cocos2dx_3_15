//
//  jsbTest.hpp
//  iosTest-mobile
//
//  Created by flysherdev11 on 2018. 10. 23..
//

#ifndef jsbTest_hpp
#define jsbTest_hpp

#include <stdio.h>
#include <string>
#include "platform/CCApplication.h"
#include <external/spidermonkey/include/android/js/Value.h>
#include "scripting/js-bindings/manual/cocos2d_specifics.hpp"

#include "jsapi.h"
#include "jsfriendapi.h"

bool js_bjTestFunc( JSContext *cx, uint32_t argc, jsval *vp );

void register_myTestFuncJS_Helper( JSContext* cx, JS::HandleObject global );


#endif /* jsbTest_hpp */
