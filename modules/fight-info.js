(function(a){a.fightinfo={},a.fightinfo.$worldGrid=document.getElementById("grid"),a.fightinfo.$mapGrid=document.getElementById("mapGrid"),a.fightinfo.powerful=["Improbability","Omnipotrimp","Mutimp","Hulking_Mutimp"],a.fightinfo.exotics=["Feyimp","Tauntimp","Venimp","Whipimp","Magnimp","Goblimp","Flutimp","Jestimp","Titimp","Chronoimp"],a.fightinfo.colors={bone:"#ffffff",exotic:"#000000",powerful:"#000000"},a.fightinfo.lastProcessedWorld=null,a.fightinfo.lastProcessedMap=null,a.fightinfo.Update=function(){if(game.global.mapsActive)var c=game.global.mapGridArray,d=Array.prototype.slice.call(a.fightinfo.$mapGrid.children);else{if(null===a.fightinfo.lastProcessedWorld||a.fightinfo.lastProcessedWorld!==game.global.world)a.fightinfo.lastProcessedWorld=game.global.world;else return;var c=game.global.gridArray,d=Array.prototype.slice.call(a.fightinfo.$worldGrid.children)}d=d.reverse();var e=[];d.forEach(function(j){e=e.concat(Array.prototype.slice.call(j.children))});for(var f=0;f<e.length;f++){var g=e[f],h=c[f];-1<h.name.toLowerCase().indexOf("skele")?(0!==h.special.length&&(g.innerHTML+=" "),g.innerHTML+=`<span class=\"glyphicon glyphicon-italic\"></span>`,g.style.textShadow="0px 0px 15px #ffffff"):-1<a.fightinfo.powerful.indexOf(h.name)?(0!==h.special.length&&(g.innerHTML+=" "),g.innerHTML+="<span class=\"glyphicon glyphicon-hazard\"></span> ",g.style.textShadow="0px 0px 15px #8c0000"):-1<h.name.toLowerCase().indexOf("cthulimp")?g.style.textShadow="0px 0px 15px #fb753f":-1<h.name.toLowerCase().indexOf("goblimp")?(0!==h.special.length&&(g.innerHTML+=" "),g.innerHTML="<span class=\"icomoon icon-evil\"></span> ",g.style.textShadow="0px 0px 15px #fb753f"):-1<h.name.toLowerCase().indexOf("flutimp")?(0!==h.special.length&&(g.innerHTML+=" "),g.innerHTML="<span class=\"glyphicon glyphicon-globe\"></span> ",g.style.textShadow="0px 0px 15px #fb753f"):-1<h.name.toLowerCase().indexOf("jestimp")?(0!==h.special.length&&(g.innerHTML+=" "),g.innerHTML="<span class=\"icomoon icon-mask\"></span> ",g.style.textShadow="0px 0px 15px #fb753f"):-1<h.name.toLowerCase().indexOf("titimp")?(0!==h.special.length&&(g.innerHTML+=" "),g.innerHTML="<span class=\"icomoon icon-hammer\"></span> ",g.style.textShadow="0px 0px 15px #fb753f"):-1<h.name.toLowerCase().indexOf("chronoimp")?(0!==h.special.length&&(g.innerHTML+=" "),g.innerHTML="<span class=\"glyphicon glyphicon-hourglass\"></span> ",g.style.textShadow="0px 0px 15px #fb753f"):-1<h.name.toLowerCase().indexOf("feyimp")?(0!==h.special.length&&(g.innerHTML+=" "),g.innerHTML+=`<span class=\"icomoon icon-diamond\"></span>`,g.style.textShadow="0px 0px 15px #fb753f"):-1<h.name.toLowerCase().indexOf("tauntimp")?(0!==h.special.length&&(g.innerHTML+=" "),g.innerHTML+=`<span class=\"glyphicon glyphicon-tent\"></span>`,g.style.textShadow="0px 0px 15px #fb753f"):-1<h.name.toLowerCase().indexOf("venimp")?(0!==h.special.length&&(g.innerHTML+=" "),g.innerHTML+=`<span class=\"glyphicon glyphicon-baby-formula\"></span>`,g.style.textShadow="0px 0px 15px #fb753f"):-1<h.name.toLowerCase().indexOf("whipimp")?(0!==h.special.length&&(g.innerHTML+=" "),g.innerHTML+=`<span class=\"icomoon icon-area-graph\"></span>`,g.style.textShadow="0px 0px 15px #fb753f"):-1<h.name.toLowerCase().indexOf("magnimp")&&(0!==h.special.length&&(g.innerHTML+=" "),g.innerHTML+=`<span class=\"glyphicon glyphicon-magnet\"></span>`,g.style.textShadow="0px 0px 15px #fb753f"),null!=h.corrupted&&"none"!==h.corrupted?g.title+=`${h.name} \- ${mutationEffects[h.corrupted].title}`:game.global.mapsActive?g.title=`${h.name}`:g.title+=` ${h.name}`}}})(MODULES);