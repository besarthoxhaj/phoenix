//
//  HelloWorld.m
//  phoenix
//
//  Created by Besart Shyti on 17/01/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "Loop.h"
#import "RCTLog.h"
@implementation Loop
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(greeting:(NSString *)name)
{
  RCTLogInfo(@"Hello, %@!", name);
}
@end
