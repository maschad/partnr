import "node-libs-react-native/globals";
 import { btoa } from "Base64";
 import nodeUrl from 'url';

 global.btoa = btoa;
 global.URL = class URL {
     constructor(url) {
         return nodeUrl.parse(url)
     }
 }

 /**
 * From https://github.com/facebook/react-native/blob/1151c096dab17e5d9a6ac05b61aacecd4305f3db/Libraries/polyfills/Object.es6.js
 * This on RN's master branch as of Sep 11, 2018, however it has not made it into a release yet.
 *
 * The only modification made in Truffle's polyfill was to remove the check for an existing implementation.
 * RN 0.57.7 (and below I assume) uses the non-spec compliant Object.assign that breaks in dev RN builds
 * https://github.com/facebook/react-native/issues/16814
 */
 Object.defineProperty(Object, 'assign', {
   value: function assign(target, varArgs) {
     'use strict';
     if (target == null) {
       throw new TypeError('Cannot convert undefined or null to object');
     }

     let to = Object(target);

     for (let index = 1; index < arguments.length; index++) {
       let nextSource = arguments[index];

       if (nextSource != null) {
         for (let nextKey in nextSource) {
           if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
             to[nextKey] = nextSource[nextKey];
           }
         }
       }
     }
     return to;
   },
   writable: true,
   configurable: true,
 }); 