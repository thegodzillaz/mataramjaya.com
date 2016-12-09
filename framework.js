var jx,jx2,jx3;
var atas;
function starUp(){
	getBarHeader();
	getBarFooter();
}
function getBarHeader(){
	jx=mesinAjax(); 
	url="head.html";
	jx.onreadystatechange=function(){
		var data;
		if(jx.readyState==4){
			data=jx.responseText;
			data+=document.getElementById("bingkaiUtama").innerHTML;
			document.getElementById("bingkaiUtama").innerHTML=data;
		}
	};
	jx.open("GET",url,true);
	jx.send(null);
}
function getBarFooter(){
	jx2=mesinAjax();
	url="foot.html";
	jx2.onreadystatechange=function(){		
		var data;
		if(jx2.readyState==4){
			data=jx2.responseText;
			document.getElementById("bingkaiUtama").innerHTML+=data;
		}
	};
	jx2.open("GET",url,true);
	jx2.send(null);
}
function getBarsamping(){
	jx2=mesinAjax();
	url="foot.html";
	jx2.onreadystatechange=function(){		
		var data;
		if(jx2.readyState==4){
			data=jx2.responseText;
			document.getElementById("bingkaiUtama").innerHTML+=data;
		}
	};
	jx2.open("GET",url,true);
	jx2.send(null);
}
function mesinAjax(){
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}
	if(window.ActiveXObject){
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
	return null;
}