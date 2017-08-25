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
	
	
	
	

}

function save(){
	localStorage.setItem("yazi",document.getElementById("text").value)
	alert("Kaydedildi")
}

function sifrekoy(){
	localStorage.setItem("sifre",prompt("Şifre Ne Olsun?"))
alert("Şifre Ayarlandı")
	}