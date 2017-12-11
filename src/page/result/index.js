/*
* @Author: yong-yan
* @Date:   2017-12-11 13:49:35
* @Last Modified by:   yong-yan
* @Last Modified time: 2017-12-11 14:31:55
*/
'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
	var type = _mm.getUrlParam('type') || 'default',
	$element = $('.' + type + '-success');
	$element.show();
})