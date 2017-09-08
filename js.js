window.onload=function(){
	if(location.hash == "#nopass"){
		document.getElementById("save").disabled = true;
		document.getElementById("save").innerHTML += "(Disabled)(NoPass Mode)"
		document.getElementById("addpass").disabled = true;
		document.getElementById("addpass").innerHTML += "(Disabled)(NoPass Mode)"
		document.getElementById("text").innerHTML = "(NoPass Mode)"
	}else{
	localStorage
	if(localStorage.sifre == undefined){
localStorage.setItem("sifre",prompt("Şifre Ne Olsun?"))
document.getElementById("text").innerHTML = localStorage.yazi
	}else{
	var getsifre = prompt("Şifre ?")
if(getsifre == localStorage.sifre){
	document.getElementById("text").innerHTML = localStorage.yazi
}else{
	location.reload()
}	
}
	}
	var cacheStatus = document.getElementById("cachestatus")
	if (navigator.onLine) {
        window.applicationCache.addEventListener('updateready', function(e) {
            if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
                window.applicationCache.swapCache();
                cacheStatus.innerHTML="Güncel Bilgi Hazır!";
                location.reload();


            }
        }, false);
        window.applicationCache.addEventListener('cached', function(e) {cacheStatus.innerHTML="Önbellek Güncellenmeye Hazır"; },false);
        window.applicationCache.addEventListener('noupdate', function(e) { cacheStatus.innerHTML="Önbellek Güncel!!"; },false);
        window.applicationCache.addEventListener('downloading', function(e) { cacheStatus.innerHTML="İndiriiyor..."; },false);
        window.applicationCache.addEventListener('error', function(e) { cacheStatus.innerHTML="Önbelleğe Alma Hatası"; },false);
        window.applicationCache.update();
    } else {
        cacheStatus.innerHTML="Çevrimdışı";
    }

	
	

}

function jqalert(text){
	var jqalerttextarea = document.createElement("p")
jqalerttextarea.setAttribute("class","gizli")	
jqalerttextarea.setAttribute("id","jqalerttextarea")
document.body.appendChild(jqalerttextarea)
document.getElementById("jqalerttextarea").innerHTML = "<h2>"+text+"</h2>"
$("#jqalerttextarea").dialog();
}


function save(){
	localStorage.setItem("yazi",document.getElementById("text").value)
	jqalert("Kaydedildi")
}

function sifrekoy(){
	var sifre = prompt("Şifre Ne Olsun?");
	if(sifre !== null){
	localStorage.setItem("sifre",sifre)
	jqalert("Şifre Ayarlandı")
	}

	}