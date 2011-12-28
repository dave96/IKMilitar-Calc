function calcular () {
	var generales;
	generales = document.getElementById("honderos").value * 0.4;
	generales = generales + (document.getElementById("gigantes").value * 6.2);
	generales = generales + (document.getElementById("hoplitas").value * 1.4);
	generales = generales + (document.getElementById("arqueros").value * 1.1);
	generales = generales + (document.getElementById("fusileros").value * 4);
	generales = generales + (document.getElementById("espadachines").value * 1.2);
	generales = generales + (document.getElementById("arietes").value * 4.4);
	generales = generales + (document.getElementById("catapultas").value * 11.2);
	generales = generales + (document.getElementById("morteros").value * 31);
	generales = generales + (document.getElementById("cocineros").value * 4);
	generales = generales + (document.getElementById("lanceros").value * 0.6);
	generales = generales + (document.getElementById("medicos").value * 10);
	generales = generales + (document.getElementById("bombarderos").value * 5.8);
	generales = generales + (document.getElementById("girocopteros").value * 2.5);
	generales = generales + (document.getElementById("espolones").value * 5.4);
	generales = generales + (document.getElementById("lanzallamas").value * 6.2);
	generales = generales + (document.getElementById("catapulta").value * 6.4);
	generales = generales + (document.getElementById("mortero").value * 22.4);
	generales = generales + (document.getElementById("espolonvapor").value * 36);
	generales = generales + (document.getElementById("submarino").value * 18.2);
	generales = generales + (document.getElementById("ballestas").value * 6.8);
	generales = generales + (document.getElementById("lanzamisiles").value * 28);
	generales = generales + (document.getElementById("palas").value * 6.2);
	generales = generales + (document.getElementById("portaglobos").value * 28);
	generales = generales + (document.getElementById("mantenimiento").value * 16);
	document.getElementById("generales").innerHTML = Math.round(generales);
	var mantter = (document.getElementById("honderos").value * 2) + (document.getElementById("hoplitas").value * 3) + (document.getElementById("gigantes").value * 12) + (document.getElementById("arqueros").value * 4) + (document.getElementById("fusileros").value * 3) + (document.getElementById("espadachines").value * 4) + (document.getElementById("arietes").value * 15) + (document.getElementById("morteros").value * 30) + (document.getElementById("medicos").value * 20) + (document.getElementById("cocineros").value * 10) + (document.getElementById("lanceros").value * 1) + (document.getElementById("bombarderos").value * 45) + (document.getElementById("girocopteros").value * 15) + (document.getElementById("catapultas").value * 25);
	var invter = document.getElementById("invter").value;
	var mantt = mantter - (mantter * invter);
	var mantnav = (document.getElementById("espolones").value * 15) + (document.getElementById("lanzallamas").value * 25) + (document.getElementById("catapulta").value * 35) + (document.getElementById("mortero").value * 50) + (document.getElementById("espolonvapor").value * 45) + (document.getElementById("submarino").value * 50) + (document.getElementById("ballestas").value * 20) + (document.getElementById("lanzamisiles").value * 55) + (document.getElementById("palas").value * 5) + (document.getElementById("portaglobos").value * 100) + (document.getElementById("mantenimiento").value * 100);
	var invnav = document.getElementById("invnav").value;
	var mantn = mantnav - (mantnav * invnav);
	var gobierno = document.getElementById("gobierno").value;
	if (gobierno != 0) {
		if (gobierno == 2) {
			mantt = mantt - (mantt*0.02);
			mantn = mantn - (mantn*0.02);
		}
		if (gobierno == 3) {
			mantt = mantt + (mantt*0.05);
			mantn = mantn + (mantn*0.05);
		}
		if (gobierno == 4) {
			mantn = mantn - (mantn*0.02);
		}
	}
	var mant = mantn + mantt;
	document.getElementById("manutencion").innerHTML = Math.round(mant);
	var madera = (document.getElementById("honderos").value * 20) + (document.getElementById("hoplitas").value * 40) + (document.getElementById("gigantes").value * 130) + (document.getElementById("arqueros").value * 30) + (document.getElementById("fusileros").value * 50) + (document.getElementById("espadachines").value * 30) + (document.getElementById("arietes").value * 220) + (document.getElementById("morteros").value * 300) + (document.getElementById("medicos").value * 50) + (document.getElementById("cocineros").value * 50) + (document.getElementById("lanceros").value * 30) + (document.getElementById("bombarderos").value * 40) + (document.getElementById("girocopteros").value * 25) + (document.getElementById("catapultas").value * 260) + (document.getElementById("espolones").value * 220) + (document.getElementById("lanzallamas").value * 80) + (document.getElementById("catapulta").value * 180) + (document.getElementById("mortero").value * 220) + (document.getElementById("espolonvapor").value * 300) + (document.getElementById("submarino").value * 160) + (document.getElementById("ballestas").value * 180) + (document.getElementById("lanzamisiles").value * 200) + (document.getElementById("palas").value * 40) + (document.getElementById("portaglobos").value * 700) + (document.getElementById("mantenimiento").value * 300);
	document.getElementById("madera").innerHTML = madera;
	var azufre = (document.getElementById("hoplitas").value * 30) + (document.getElementById("gigantes").value * 180) + (document.getElementById("arqueros").value * 25) + (document.getElementById("fusileros").value * 150) + (document.getElementById("espadachines").value * 30) + (document.getElementById("morteros").value * 1250) + (document.getElementById("bombarderos").value * 250) + (document.getElementById("girocopteros").value * 100) + (document.getElementById("catapultas").value * 300) + (document.getElementById("espolones").value * 50) + (document.getElementById("lanzallamas").value * 230) + (document.getElementById("catapulta").value * 140) + (document.getElementById("mortero").value * 900) + (document.getElementById("espolonvapor").value * 1500) + (document.getElementById("ballestas").value * 160) + (document.getElementById("lanzamisiles").value * 1200) + (document.getElementById("palas").value * 280) + (document.getElementById("portaglobos").value * 700) + (document.getElementById("mantenimiento").value * 250);
	document.getElementById("azufre").innerHTML = azufre;
	var vino = document.getElementById("cocineros").value * 150;
	document.getElementById("vino").innerHTML = vino;
	var cristal = (document.getElementById("medicos").value * 450) + (document.getElementById("submarino").value * 750) + (document.getElementById("mantenimiento").value * 250);
	document.getElementById("cristal").innerHTML = cristal;
	var burgueses = (document.getElementById("honderos").value * 1) + (document.getElementById("hoplitas").value * 1) + (document.getElementById("gigantes").value * 2) + (document.getElementById("arqueros").value * 1) + (document.getElementById("fusileros").value * 1) + (document.getElementById("espadachines").value * 1) + (document.getElementById("arietes").value * 5) + (document.getElementById("morteros").value * 5) + (document.getElementById("medicos").value * 1) + (document.getElementById("cocineros").value * 1) + (document.getElementById("lanceros").value * 1) + (document.getElementById("bombarderos").value * 5) + (document.getElementById("girocopteros").value * 3) + (document.getElementById("catapultas").value * 5) + (document.getElementById("espolones").value * 5) + (document.getElementById("lanzallamas").value * 4) + (document.getElementById("catapulta").value * 5) + (document.getElementById("mortero").value * 5) + (document.getElementById("espolonvapor").value * 2) + (document.getElementById("submarino").value * 6) + (document.getElementById("ballestas").value * 6) + (document.getElementById("lanzamisiles").value * 2) + (document.getElementById("palas").value * 1) + (document.getElementById("portaglobos").value * 8) + (document.getElementById("mantenimiento").value * 7);
	document.getElementById("burgueses").innerHTML = burgueses;
}
function cambiar_color () {
	if (style == 1) {
		document.body.style.backgroundColor = "Gainsboro";
		document.body.style.color = "Black";
		style = 2;
		localStorage.setItem('ikcalc_style', 2);
	} else {
		document.body.style.backgroundColor = "#000";
		document.body.style.color = "#FFF";
		style = 1;
		localStorage.setItem('ikcalc_style', 1);
	}
}
function intl(field) {
  document.getElementById(field).innerHTML = chrome.i18n.getMessage(field) + ": ";
}
function _intl(field) {
  document.getElementById(field).innerHTML = chrome.i18n.getMessage(field);
}
function lang_init() {
  intl("slinger");
  intl("swordsman");
  intl("archer");
  intl("marksman");
  intl("gyrocopter");
  intl("steam_giant");
  intl("bombardier");
  intl("ram");
  intl("catapult");
  intl("mortar");
  intl("medic");
  intl("cook");
  intl("spearman");
  intl("phalanx");
  intl("balloon_ship");
  intl("flamethrower_ship");
  intl("ram_ship");
  intl("steamboat_ship");
  intl("catapult_ship");
  intl("ballista_ship");
  intl("mortar_ship");
  intl("rocketship");
  intl("submarine_ship");
  intl("paddlespeedship");
  intl("tender_ship");
  document.getElementById("calculate").value = chrome.i18n.getMessage("calculate");
  document.getElementById("clean").value = chrome.i18n.getMessage("clean");
  document.getElementById("military").innerHTML = chrome.i18n.getMessage("military")+":";
  _intl("none");
  _intl("maps");
  _intl("honour");
  _intl("logistics");
 var i=1;
 for (i=1;i<=10;i++) {
  element = "militaristic_future"+i;
  document.getElementById(element).innerHTML = chrome.i18n.getMessage("militaristic_future")+" "+i;
 }
  intl("generals");
  intl("upkeep");
  intl("government");
  _intl("other");
  _intl("democracy");
  _intl("dictatorship");
  _intl("nomocracy");
  _intl("oligarchy");
  intl("seafaring");
  _intl("none_");
  _intl("pitch");
  _intl("ship_maintenance");
  _intl("sea_maps");
 i=1;
 for (i=1;i<=10;i++) {
  element = "seafaring_future"+i;
  document.getElementById(element).innerHTML = chrome.i18n.getMessage("seafaring_future")+" "+i;
 }
}
var style;
function body_init() {
lang_init();
guardar();
}
