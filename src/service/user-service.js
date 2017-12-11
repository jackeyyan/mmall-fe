/*
* @Author: yong-yan
* @Date:   2017-12-08 10:30:40
* @Last Modified by:   yong-yan
* @Last Modified time: 2017-12-08 13:59:42
*/
'use strict';

var _mm =require('util/mm.js');

var _user = {

	//检查登录状态
	checkLogin: function(resolve,reject){
		_mm.request({
    		url: _mm.getServerUrl('/user/get_user_info.do'),
    		method  : 'POST',
    		success :resolve,
    		error   :reject
    	});
	},
    logout: function(resolve,reject){
    	_mm.request({
    		url: _mm.getServerUrl('/user/logout.do'),
    		method  : 'POST',
    		success :resolve,
    		error   :reject
    	});
    }	
}

module.exports = _user;