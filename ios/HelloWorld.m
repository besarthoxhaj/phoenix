//
//  HelloWorld.m
//  phoenix
//
//  Created by Besart Shyti on 17/01/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "HelloWorld.h"
#import "RCTLog.h"
@implementation HelloWorld
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(greeting:(NSString *)name)
{
  RCTLogInfo(@"Hello, %@!", name);
}
@end
