/*jslint node: true */
/*global describe:true, it:true, mocha:true*/
/* Copyright (c) 2012 Seamus D'Arcy */
/* These tests assume the existance of tables 'foo' and 'moon_bar' with hash key 'id'
 *
 * Run with
 * mocha  dynamodb.test.js --globals encoding
 */

"use strict";

var seneca = require('seneca');
var shared = require('seneca/test/store/shared');
var keys = require('./keys.mine.js');
var si = seneca();

si.use(require('..'), {keyid: keys.id, secret: keys.secret, endpoint: keys.endpoint});

si.__testcount = 0;
var testcount = 0;


describe('dynamodb', function(){
  it('basic', function(done){
    this.timeout(0);
    testcount++;
    shared.basictest(si, done);
  });

  it('close', function(done){
    this.timeout(0);
    shared.closetest(si, testcount, done);
  });
});


