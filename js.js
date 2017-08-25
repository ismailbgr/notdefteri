window.onload=function(){
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

function save(){
	localStorage.setItem("yazi",document.getElementById("text").value)
	alert("Kaydedildi")
}

function sifrekoy(){
	localStorage.setItem("sifre",prompt("Şifre Ne Olsun?"))
alert("Şifre Ayarlandı")
	}