﻿/*
ajax객체 호환함수
getXMLHTTPRequest()
*/
function getXMLHTTPRequest(){
	var req =  false;
	try {
		/* for Firefox */
		req = new XMLHttpRequest(); 
	}
	catch (err){
		try {
			/* for some versions of IE */
			req = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (err) {
			try {
				/* for some other versions of IE */
				req = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (err) {
				req = false;
			}
		}
	}
	return req;
}


