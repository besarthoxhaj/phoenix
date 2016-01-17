//
//  HelloSwift.m
//  phoenix
//
//  Created by Besart Shyti on 17/01/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

// HelloSwift.m
#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(HelloSwift, NSObject)

RCT_EXTERN_METHOD(greeting:(NSString *)name)

@end
