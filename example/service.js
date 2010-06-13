// Copyright 2010 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you
// may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
// implied. See the License for the specific language governing
// permissions and limitations under the License.

var puts = require('sys').puts;
var pb = require('protobuf_for_node');
var service_test = require('service_test');

var t = Date.now();
var todo = 20;
for (var i = 0; i < todo; i++) {
    service_test.testService.Len({ msg: 'Hello World' }, function cb(response) {
	(--todo) || puts("Async: " + (Date.now() - t));
    });
}

puts(service_test.testService.Len({ msg: 'Hello World' }).len);