//
//  HelloSwift.swift
//  phoenix
//
//  Created by Besart Shyti on 17/01/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

@objc(HelloSwift)
class HelloSwift: NSObject {

  @objc func greeting(name: String, callback: (String: [String]) -> Void) {
    let someArray = [name]
    callback(String: someArray)
  }
}
