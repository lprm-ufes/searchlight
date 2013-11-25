(function(){function len(obj){if(obj instanceof Array||typeof obj==="string")return obj.length;else{var count=0;for(var i in obj){if(obj.hasOwnProperty(i))count++}return count}}var JSON,str,JSON,str,JSON,str,JSON,str,SENADO_FEDERAL,UFES,CT,CEMUNI,BIBLIOTECA,public_spreadsheet_url,attribution,sl_IconCluster,sl_IconePadrao,referencia_atual,sl_referencias;JSON=JSON||{};if(!JSON.stringify){
	JSON.stringify = function(obj) {
		var t = typeof (obj);
		if (t != "object" || obj === null) {
			// simple data type
			if (t == "string")
				obj = '"' + obj + '"';
			if (t == "function")
				return; // return undefined
			else
				return String(obj);
		} else {
			// recurse array or object
			var n, v, json = []
			var arr = (obj && obj.constructor == Array);
			for (n in obj) {
				v = obj[n];
				t = typeof (v);
				if (t != "function" && t != "undefined") {
					if (t == "string")
						v = '"' + v + '"';
					else if ((t == "object" || t == "function") && v !== null)
						v = JSON.stringify(v);
					json.push((arr ? "" : '"' + n + '":') + String(v));
				}
			}
			return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
		}
	};
	}str=JSON.stringify;ValueError=function(message){var self=this;self.name="ValueError";self.message=message};ValueError.prototype=new Error();ValueError.prototype.constructor=ValueError;String.prototype.strip=String.prototype.trim;String.prototype.lstrip=String.prototype.trimLeft;String.prototype.rstrip=String.prototype.trimRight;String.prototype.join=function(iterable){return iterable.join(this)};String.prototype.zfill=function(size){var s,s;s=this;while(s.length<size){s="0"+s}return s};function list(iterable){if(typeof iterable==="undefined")iterable=[];var result,i;result=[];var _$rapyd$_Iter0=iterable;for(var _$rapyd$_Index0=0;_$rapyd$_Index0<_$rapyd$_Iter0.length;_$rapyd$_Index0++){i=_$rapyd$_Iter0[_$rapyd$_Index0];result.append(i)}return result}Array.prototype.append=Array.prototype.push;Array.prototype.find=Array.prototype.indexOf;Array.prototype.index=function(index){var val;val=this.find(index);if(val==-1){throw new ValueError(str(index)+" is not in list")}return val};Array.prototype.insert=function(index,item){this.splice(index,0,item)};Array.prototype.pop=function(index){if(typeof index==="undefined")index=this.length-1;return this.splice(index,1)[0]};Array.prototype.extend=function(array2){this.push.apply(this,array2)};Array.prototype.remove=function(item){var index;index=this.find(item);this.splice(index,1)};Array.prototype.copy=function(){return this.slice(0)};if(!Array.prototype.map){
	Array.prototype.map = function(callback, thisArg) {
		var T, A, k;
		if (this == null) {
			throw new TypeError(" this is null or not defined");
		}
		var O = Object(this);
		var len = O.length >>> 0;
		if ({}.toString.call(callback) != "[object Function]") {
			throw new TypeError(callback + " is not a function");
		}
		if (thisArg) {
			T = thisArg;
		}
		A = new Array(len);
		for (var k = 0; k < len; k++) {
			var kValue, mappedValue;
			if (k in O) {
				kValue = O[k];
				mappedValue = callback.call(T, kValue);
				A[k] = mappedValue;
			}
		}
		return A;
	};
	}function map(oper,arr){return arr.map(oper)}if(!Array.prototype.filter){
	Array.prototype.filter = function(filterfun, thisArg) {
		"use strict";
		if (this == null) {
			throw new TypeError(" this is null or not defined");
		}
		var O = Object(this);
		var len = O.length >>> 0;
		if ({}.toString.call(filterfun) != "[object Function]") {
			throw new TypeError(filterfun + " is not a function");
		}
		if (thisArg) {
			T = thisArg;
		}
		var A = [];
		var thisp = arguments[1];
		for (var k = 0; k < len; k++) {
			if (k in O) {
				var val = O[k]; // in case fun mutates this
				if (filterfun.call(T, val))
					A.push(val);
			}
		}
		return A;
	};
	}function filter(oper,arr){return arr.filter(oper)}function dict(iterable){var result,key;result={};var _$rapyd$_Iter1=iterable;for(var _$rapyd$_Index1=0;_$rapyd$_Index1<_$rapyd$_Iter1.length;_$rapyd$_Index1++){key=_$rapyd$_Iter1[_$rapyd$_Index1];result[key]=iterable[key]}return result}if(typeof Object.getOwnPropertyNames!=="function"){dict.keys=function(hash){var keys;keys=[];
		for (var x in hash) {
			if (hash.hasOwnProperty(x)) {
				keys.push(x);
			}
		}
		;return keys}}else{dict.keys=function(hash){return Object.getOwnPropertyNames(hash)}}dict.values=function(hash){var vals,key;vals=[];var _$rapyd$_Iter2=dict.keys(hash);for(var _$rapyd$_Index2=0;_$rapyd$_Index2<_$rapyd$_Iter2.length;_$rapyd$_Index2++){key=_$rapyd$_Iter2[_$rapyd$_Index2];vals.append(hash[key])}return vals};dict.items=function(hash){var items,key;items=[];var _$rapyd$_Iter3=dict.keys(hash);for(var _$rapyd$_Index3=0;_$rapyd$_Index3<_$rapyd$_Iter3.length;_$rapyd$_Index3++){key=_$rapyd$_Iter3[_$rapyd$_Index3];items.append([key,hash[key]])}return items};dict.copy=dict;dict.clear=function(hash){var key;var _$rapyd$_Iter4=dict.keys(hash);for(var _$rapyd$_Index4=0;_$rapyd$_Index4<_$rapyd$_Iter4.length;_$rapyd$_Index4++){key=_$rapyd$_Iter4[_$rapyd$_Index4];delete hash[key]}};L.Icon.Default.imagePath="images/leaflet";function getJSONP(url,func){$.ajax({"url":url,"success":func,"type":"POST","dataType":"jsonp"})}function getJSON(url,func){$.ajax({"url":url,"success":func,"dataType":"json","beforeSend":function(xhr){if(xhr.overrideMimeType){xhr.overrideMimeType("application/json")}},"contentType":"application/json","mimeType":"textPlain"})}function getURLParameter(name){return $(document).getUrlParam(name)}PilhaDeZoom=function(sl){var self=this;var html,html,html,html;self.pilha=[];self.sl=sl;self.id_undozoom="#"+self.sl.map_id+" div.searchlight-undozoom";html="";html+="<a class='undo' title='desfazer zoom em grupo' href='javascript:SL(\""+self.sl.map_id+"\").control.clusterCtr.pilha_de_zoom.desfazer()'>&nbsp;</a>";html+="<a class='redo' title='refazer zoom em grupo' href='javascript:SL(\""+self.sl.map_id+"\").control.clusterCtr.pilha_de_zoom.refazer()'>&nbsp;</a>";html+="&nbsp;";$(self.id_undozoom).append(html);$(self.id_undozoom).hide();self.undo_visivel=false;self.redo_visivel=false;self.undozoom_visivel=false;self.undo_index=0;self.redo_index=0;self.last_undo=null};PilhaDeZoom.prototype.salva_zoom=function(){var self=this;var zoom,center;zoom=self.sl.map.getZoom();center=self.sl.map.getCenter();self.pilha.append([center,zoom]);self.last_undo=null;self.show_undo();self.hide_redo();self.undo_index=len(self.pilha)-1};PilhaDeZoom.prototype.desfazer=function(){var self=this;var z,c;if(!self.last_undo){z=self.sl.map.getZoom();c=self.sl.map.getCenter();self.last_undo=[c,z];self.pilha.append(self.last_undo)}if(self.undo_index==len(self.pilha)-1){self.undo_index=len(self.pilha)-2}[center,zoom]=self.pilha[self.undo_index];self.undo_index-=1;if(self.undo_index<0){self.hide_undo()}self.show_redo();self.sl.map.setView(center,zoom)};PilhaDeZoom.prototype.refazer=function(){var self=this;if(self.undo_index<0){self.undo_index=0}[center,zoom]=self.pilha[self.undo_index+1];self.undo_index+=1;self.sl.map.setView(center,zoom);if(self.undo_index>=len(self.pilha)-1){self.hide_redo()}self.show_undo()};PilhaDeZoom.prototype.show=function(){var self=this;if(!self.undozoom_visivel){$(self.id_undozoom).show();self.undozoom_visivel=true}if(!self.undo_visivel){self.hide_undo()}if(!self.redo_visivel){self.hide_redo()}};PilhaDeZoom.prototype.hide=function(){var self=this;if(!self.undo_visivel&&!self.redo_visivel){$(self.id_undozoom).hide();self.undozoom_visivel=false}};PilhaDeZoom.prototype.show_undo=function(){var self=this;self.undo_visivel=true;self.show();$(self.id_undozoom+" a.undo").show()};PilhaDeZoom.prototype.show_redo=function(){var self=this;self.redo_visivel=true;self.show();$(self.id_undozoom+" a.redo").show()};PilhaDeZoom.prototype.hide_undo=function(){var self=this;$(self.id_undozoom+" a.undo").hide();self.undo_visivel=false;self.hide()};PilhaDeZoom.prototype.hide_redo=function(){var self=this;$(self.id_undozoom+" a.redo").hide();self.redo_visivel=false;self.hide()};PilhaDeZoom.prototype.esta_vazia=function(){var self=this;return len(self.pilha)==0};ClusterCtr=function(sl){var self=this;var obj;self.sl=sl;obj=self;self.criaPopup();self.pilha_de_zoom=new PilhaDeZoom(sl);self.clusters={};self.id_analise="#"+self.sl.map_id+" div.searchlight-analise";$(self.id_analise).append("<p class='center'><a href='javascript:SL(\""+self.sl.map_id+"\").control.clusterCtr.desfocar()'>DESFOCAR</a></p>");$(self.id_analise).hide();self.sl.map.on("dblclick",function(a){obj.clusterDuploClick()});self.registraEventosClusters()};ClusterCtr.prototype.registraEventosClusters=function(){var self=this;var obj;obj=self;if(self.camadaAnalise){self.camadaAnalise.on("clusterdblclick",function(a){a.layer.zoomToBounds()});self.camadaAnalise.on("clusterclick",function(a){a.layer.zoomToBounds()})}else{self.sl.markers.on("clusterdblclick",function(a){obj.clusterDuploClick(a)});self.sl.markers.on("clusterclick",function(a){if(dict.keys(obj.sl.dados.categorias).length>1){obj.clusterClick(a)}else{a.layer.zoomToBounds()}})}self.clickOrdem=0};ClusterCtr.prototype.criaPopup=function(){var self=this;var popup;popup=L.popup();self.popup=popup;self.timeUltimoClick=(new Date).getTime()};ClusterCtr.prototype.clusterClick=function(a){var self=this;if(typeof a==="undefined")a=null;var d;d=new Date;if(d.getTime()-self.timeUltimoClick>1500){self.clickOrdem=1;self.popupOrZoom(a)}self.timeUltimoClick=d.getTime()};ClusterCtr.prototype.clusterDuploClick=function(a){var self=this;if(typeof a==="undefined")a=null;self.cancelPopup()};ClusterCtr.prototype.zoomGrupo=function(){var self=this;self.sl.map.closePopup();self.pilha_de_zoom.salva_zoom();self.cluster_clicado.layer.zoomToBounds()};ClusterCtr.prototype.cancelPopup=function(){var self=this;self.clickOrdem=2;self.zoomGrupo()};ClusterCtr.prototype.mostraPopup=function(){var self=this;self.atualizaPopup();self.popup.openOn(self.sl.map)};ClusterCtr.prototype.showPopup=function(){var self=this;if(self.clickOrdem==1){self.mostraPopup()}self.clickOrdem=0};ClusterCtr.prototype.desfocar=function(){var self=this;self.sl.map.closePopup();$(self.id_analise).hide();self.sl.map.removeLayer(self.camadaAnalise);self.sl.mostrarCamadaMarkers();self.camadaAnalise=null;self.desfocou=true;self.registraEventosClusters()};ClusterCtr.prototype.focar=function(cat){var self=this;var cats,m,c;self.sl.esconderCamadaMarkers();self.camadaAnalise=new L.MarkerClusterGroup({zoomToBoundsOnClick:false});self.sl.map.addLayer(self.camadaAnalise);self.camadaAnalise.fire("data:loading");cats=self.getCatsCluster();var _$rapyd$_Iter5=cats;for(var _$rapyd$_Index5=0;_$rapyd$_Index5<_$rapyd$_Iter5.length;_$rapyd$_Index5++){c=_$rapyd$_Iter5[_$rapyd$_Index5];if(cat==c[0]){var _$rapyd$_Iter6=c[1];for(var _$rapyd$_Index6=0;_$rapyd$_Index6<_$rapyd$_Iter6.length;_$rapyd$_Index6++){m=_$rapyd$_Iter6[_$rapyd$_Index6];self.camadaAnalise.addLayer(m)}}}self.sl.map.fitBounds(self.camadaAnalise.getBounds());self.camadaAnalise.fire("data:loaded");self.sl.control.registraEventosCamadaAnalise();self.registraEventosClusters();$(self.id_analise).show()};ClusterCtr.prototype.update=function(){var self=this;self.clusters={}};ClusterCtr.prototype.getCatsCluster=function(){var self=this;var cluster_id,cluster_cats,cats,cat,m,cats_ord;cluster_id=self.cluster_clicado.layer._leaflet_id;cluster_cats=self.clusters[cluster_id];if(cluster_cats){return cluster_cats}cats={};var _$rapyd$_Iter7=self.cluster_clicado.layer.getAllChildMarkers();for(var _$rapyd$_Index7=0;_$rapyd$_Index7<_$rapyd$_Iter7.length;_$rapyd$_Index7++){m=_$rapyd$_Iter7[_$rapyd$_Index7];if(m.slinfo){cat=m.slinfo.cat;if(cats[cat]){cats[cat].append(m)}else{cats[cat]=[m]}}}cats_ord=[];var _$rapyd$_Iter8=dict.keys(cats);for(var _$rapyd$_Index8=0;_$rapyd$_Index8<_$rapyd$_Iter8.length;_$rapyd$_Index8++){cat=_$rapyd$_Iter8[_$rapyd$_Index8];cats_ord.append([cat,cats[cat]])}cats_ord.sort(function(a,b){return b[1].length-a[1].length});self.clusters[cluster_id]=cats_ord;return cats_ord};ClusterCtr.prototype.atualizaPopup=function(){var self=this;var cats_ord,html,html,cat,html,html,html,cat_id,iconUrl,html,html,html,html,cat,html,html,html;cats_ord=self.getCatsCluster();html="<div class='clusterPopup'>";if(!self.sl.Icones){html+="<ul>";cat=cats_ord[0];var _$rapyd$_Iter9=cats_ord;for(var _$rapyd$_Index9=0;_$rapyd$_Index9<_$rapyd$_Iter9.length;_$rapyd$_Index9++){cat=_$rapyd$_Iter9[_$rapyd$_Index9];html+="<li><a title='Focar no subgrupo "+cat[0]+"'  href='javascript:SL(\""+self.sl.map_id+'").control.clusterCtr.focar("'+cat[0]+"\")'>"+cat[0]+"</a> ("+cat[1].length+")</li>"}html+="</ul>"}else{html+='<ul class="icones">';var _$rapyd$_Iter10=cats_ord;for(var _$rapyd$_Index10=0;_$rapyd$_Index10<_$rapyd$_Iter10.length;_$rapyd$_Index10++){cat=_$rapyd$_Iter10[_$rapyd$_Index10];cat_id=self.sl.dados.categorias_id[cat[0]];iconUrl=self.sl.Icones[cat_id].options.iconUrl;html+="<li>";html+="<p class='img'><a title='Focar no subgrupo "+cat[0]+"' href='javascript:SL(\""+self.sl.map_id+'").control.clusterCtr.focar("'+cat[0]+"\")'><img src='"+iconUrl+"'></a></p>";html+="<p class='texto'><a title='Focar no subgrupo "+cat[0]+"' href='javascript:SL(\""+self.sl.map_id+'").control.clusterCtr.focar("'+cat[0]+"\")'>"+cat[1].length+"</a></p>";html+="</li>"}html+="</ul>"}html+="<p class='center'><input type='button' onclick='SL(\""+self.sl.map_id+"\").control.clusterCtr.zoomGrupo();' value='expandir grupo' /></p>";html+="</div>";self.popup.setContent(html)};ClusterCtr.prototype.popupOrZoom=function(cluster){var self=this;var obj;self.sl.map.closePopup();self.popup.setLatLng(cluster.layer.getLatLng());obj=self;if(self.clickOrdem==1){self.cluster_clicado=cluster;setTimeout(function(){obj.showPopup(obj.sl.map_id)},600)}};Controle=function(sl){var self=this;var obj;obj=self;self.sl=sl;self.sl.map.addControl(new MyControl);self.sl.map.addControl(new UndoRedoControl);self.id_control="#"+self.sl.map_id+" div.searchlight-control";self.id_opcoes="#"+self.sl.map_id+" div.searchlight-opcoes";self.id_camadas=self.opcoes+"ul";self.show=function(event){if(obj.clusterCtr.camadaAnalise==null){$(obj.id_opcoes).show()}};$(self.id_control).mouseenter(self.show);$(self.id_control).bind("touchstart",self.show);self.hide=function(event){$(obj.id_opcoes).hide()};$("#"+self.sl.map_id).mouseover(self.hide);$("#"+self.sl.map_id).bind("touchstart",self.hide);self.sl.map.on("zoomend",function(){if(obj.marcador_clicado==null){obj.sl.map.closePopup()}else{obj.marcador_clicado=null}if(obj.clusterCtr.desfocou){obj.clusterCtr.desfocou=false;obj.clusterCtr.mostraPopup()}obj.atualizarIconesMarcVisiveis();if(obj.sl.carregando==true){obj.sl.carregando=false;if(window["onSLcarregaDados"]!=undefined){onSLcarregaDados(obj.sl)}}});self.sl.map.on("moveend",function(){obj.atualizarIconesMarcVisiveis()});self.sl.markers.on("click",function(ev){obj.markerClick(ev)});self.clusterCtr=new ClusterCtr(sl)};Controle.prototype.registraEventosCamadaAnalise=function(){var self=this;var obj;obj=self;self.clusterCtr.camadaAnalise.on("click",function(ev){obj.markerClick(ev)})};Controle.prototype.atualizarIconesMarcVisiveis=function(){var self=this;if(self.sl.esconder_icones){if(self.sl.map.getZoom()>=16){self.mostrarIconesMarcVisiveis()}else{self.esconderIconesMarcVisiveis()}}};Controle.prototype.mostrarIconesMarcVisiveis=function(){var self=this;var m;var _$rapyd$_Iter11=self.getMarcadoresVisiveis();for(var _$rapyd$_Index11=0;_$rapyd$_Index11<_$rapyd$_Iter11.length;_$rapyd$_Index11++){m=_$rapyd$_Iter11[_$rapyd$_Index11];m.setIcon(m.slinfo.icon)}};Controle.prototype.esconderIconesMarcVisiveis=function(){var self=this;var m;var _$rapyd$_Iter12=self.getMarcadoresVisiveis();for(var _$rapyd$_Index12=0;_$rapyd$_Index12<_$rapyd$_Iter12.length;_$rapyd$_Index12++){m=_$rapyd$_Iter12[_$rapyd$_Index12];m.setIcon(sl_IconCluster)}};Controle.prototype.getMarcadoresVisiveis=function(){var self=this;var marcadores,marcadores,marcadores_visiveis,mark,m;if(self.clusterCtr.camadaAnalise){marcadores=self.clusterCtr.camadaAnalise._layers}else{marcadores=self.sl.markers._layers}marcadores_visiveis=[];var _$rapyd$_Iter13=dict.keys(marcadores);for(var _$rapyd$_Index13=0;_$rapyd$_Index13<_$rapyd$_Iter13.length;_$rapyd$_Index13++){m=_$rapyd$_Iter13[_$rapyd$_Index13];mark=marcadores[m];if(mark.hasOwnProperty("slinfo")){marcadores_visiveis.append(mark)}}return marcadores_visiveis};Controle.prototype.markerClick=function(ev){var self=this;var m,center;m=ev.layer;self.marcador_clicado=m;if(self.sl.esconder_icones){if(m.slinfo.ultimo_zoom){self.sl.map.setView(m.slinfo.ultimo_center,m.slinfo.ultimo_zoom);m.slinfo.ultimo_zoom=null;m.slinfo.ultimo_center=null;self.sl.map.closePopup()}else{m.slinfo.ultimo_zoom=self.sl.map.getZoom();m.slinfo.ultimo_center=self.sl.map.getCenter();center=new L.LatLng(m.slinfo.latitude,m.slinfo.longitude);self.sl.map.setView(center,18)}}};Controle.prototype.addCatsToControl=function(map_id){var self=this;var op,ul,cats,k,c;if(dict.keys(self.sl.dados.categorias).length>1){op="#"+map_id+" div.searchlight-opcoes";ul=op+" ul";cats=[];var _$rapyd$_Iter14=dict.keys(self.sl.dados.categorias);for(var _$rapyd$_Index14=0;_$rapyd$_Index14<_$rapyd$_Iter14.length;_$rapyd$_Index14++){k=_$rapyd$_Iter14[_$rapyd$_Index14];cats.append([k,self.sl.dados.categorias[k].length])}cats.sort(function(a,b){return b[1]-a[1]});$(ul).empty();var _$rapyd$_Iter15=cats;for(var _$rapyd$_Index15=0;_$rapyd$_Index15<_$rapyd$_Iter15.length;_$rapyd$_Index15++){c=_$rapyd$_Iter15[_$rapyd$_Index15];$(ul).append("<li><input type='checkbox' checked name='"+map_id+"-cat' value='"+c[0]+"' class='categoria'/>"+c[0]+" ("+c[1]+")</li>")}$(op).append("<p class='center'><input type='button' onclick='SL(\""+map_id+"\").control.update();' value='Atualizar Mapa' /></p>")}else{if(!$(self.id_opcoes).hasClass("sem-categoria")){$(self.id_opcoes).addClass("sem-categoria")}}};Controle.prototype.update=function(){var self=this;$(self.id_opcoes).hide();self.clusterCtr.update();self.sl.markers.clearLayers();if($("input:checkbox[name="+self.sl.map_id+"-cat]:checked").size()>0){self.sl.markers.fire("data:loading");setTimeout("SL('"+self.sl.map_id+"').control.carregaDados()",50)}};Controle.prototype.carregaDados=function(){var self=this;var sl;sl=self.sl;$("input:checkbox[name="+self.sl.map_id+"-cat]:checked").each(function(){var cat;cat=$(this).val();sl.dados.catAddMarkers(cat,sl.markers)});sl.map.fitBounds(sl.markers.getBounds());sl.markers.fire("data:loaded");sl.control.atualizarIconesMarcVisiveis()};Marcador=function(geoItem){var self=this;self.m=null;self.latitude=parseFloat(geoItem.latitude.replace(",","."));self.longitude=parseFloat(geoItem.longitude.replace(",","."));self.texto=geoItem.texto;if(geoItem.icon){self.icon=geoItem.icon}else{self.icon=sl_IconePadrao}if(geoItem.cat){self.cat_id=geoItem.cat_id;self.cat=geoItem.cat.replace(",","").replace('"',"")}else{self.cat="descategorizado";self.cat_id=1}};Marcador.prototype.getMark=function(){var self=this;var p,m;if(self.m==null){p=[self.latitude,self.longitude];m=new L.Marker(p);m.setIcon(self.icon);self.m=m;self.m.slinfo=self;self.m.bindPopup(m.slinfo.texto,{"maxWidth":640})}return self.m};Dados=function(){var self=this;self.clear()};Dados.prototype.clear=function(){var self=this;self.marcadores=[];self.categorias={};self.categorias_id={}};Dados.prototype.getCat=function(m){var self=this;var cat;cat=self.categorias[m.cat];if(cat){return cat}else{self.categorias[m.cat]=[];self.categorias_id[m.cat]=m.cat_id;return self.categorias[m.cat]}};Dados.prototype.addItem=function(i,func_convert){var self=this;var geoItem,m,cat;geoItem=func_convert(i);m=new Marcador(geoItem);cat=self.getCat(m);cat.append(m)};Dados.prototype.getCatLatLng=function(name){var self=this;var v,m;v=[];var _$rapyd$_Iter16=self.categorias[name];for(var _$rapyd$_Index16=0;_$rapyd$_Index16<_$rapyd$_Iter16.length;_$rapyd$_Index16++){m=_$rapyd$_Iter16[_$rapyd$_Index16];v.append(m.getMark().getLatLng())}return v};Dados.prototype.catAddMarkers=function(name,cluster){var self=this;var m;var _$rapyd$_Iter17=self.categorias[name];for(var _$rapyd$_Index17=0;_$rapyd$_Index17<_$rapyd$_Iter17.length;_$rapyd$_Index17++){m=_$rapyd$_Iter17[_$rapyd$_Index17];cluster.addLayer(m.getMark())}};Dados.prototype.addMarkersTo=function(cluster){var self=this;var k;var _$rapyd$_Iter18=dict.keys(self.categorias);for(var _$rapyd$_Index18=0;_$rapyd$_Index18<_$rapyd$_Iter18.length;_$rapyd$_Index18++){k=_$rapyd$_Iter18[_$rapyd$_Index18];self.catAddMarkers(k,cluster)}};SENADO_FEDERAL=[-15.799088,-47.86535];UFES=[-20.277233,-40.303752];CT=[-20.27353,-40.305448];CEMUNI=[-20.279483,-40.30269];BIBLIOTECA=[-20.276519,-40.304503];public_spreadsheet_url="https://docs.google.com/spreadsheet/pub?key=0AhU-mW4ERuT5dHBRcGF5eml1aGhnTzl0RXh3MHdVakE&single=true&gid=0&output=html";attribution='Map generated by <a href="http://wancharle.github.com/Searchlight">Searchlight</a>,  Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>';L.Icon.Default.imagePath=getSLpath()+"../images/leaflet";function main(){var mainf,mps;mainf=getURLParameter("mainf");if(mainf){eval(mainf+"()")}else{mps=new Searchlight;window.onSLcarregaDados=function(sl){sl.autoZoom()}}}sl_IconCluster=new L.DivIcon({html:"<div><span>1</span></div>",className:"marker-cluster marker-cluster-small",iconSize:new L.Point(40,40)});sl_IconePadrao=new L.Icon.Default;referencia_atual=null;sl_referencias={};function SL(map_id){"funcao global para pegar a referencia do objeto mapa";return sl_referencias[map_id]}window.SL=SL;Searchlight=function(url,func_convert,map_id,icones,clusterizar,esconder_icones,urlosm){var self=this;if(typeof url==="undefined")url=null;if(typeof func_convert==="undefined")func_convert=null;if(typeof map_id==="undefined")map_id="map";if(typeof icones==="undefined")icones=null;if(typeof clusterizar==="undefined")clusterizar=true;if(typeof esconder_icones==="undefined")esconder_icones=true;if(typeof urlosm==="undefined")urlosm="http://{s}.tile.osm.org/{z}/{x}/{y}.png";sl_referencias[map_id]=self;self.map_id=map_id;self.esconder_icones=esconder_icones;self.clusterizar=clusterizar;self.Icones=icones;self.urlosm=urlosm;if(url){self.url=url}else{self.url=decodeURIComponent(getURLParameter("data"))}if(func_convert){self.func_convert=func_convert}else{self.func_convert=function(item){return item}}self.create();self.dados=new Dados;self.get_data()};Searchlight.prototype.create=function(){var self=this;self.CamadaBasica=L.tileLayer(self.urlosm,{"attribution":attribution,"maxZoom":18});self.map=L.map(self.map_id,{layers:[self.CamadaBasica],"center":SENADO_FEDERAL,"zoom":13});if(self.clusterizar){self.markers=new L.MarkerClusterGroup({zoomToBoundsOnClick:false})}else{self.markers=new L.FeatureGroup}self.map.addLayer(self.markers);self.control=new Controle(self)};Searchlight.prototype.get_data=function(){var self=this;var obj;obj=self;self.markers.fire("data:loading");if(self.url.indexOf("docs.google.com/spreadsheet")>-1){Tabletop.init({"key":self.url,"callback":function(data){obj.carregaDados(data)},"simpleSheet":true})}else{if(self.url.slice(0,4)=="http"){getJSONP(self.url,function(data){obj.carregaDados(data)})}else{getJSON(self.url,function(data){obj.carregaDados(data)})}}};Searchlight.prototype.add_itens_gdoc=function(data){var self=this;var p,d;var _$rapyd$_Iter19=data;for(var _$rapyd$_Index19=0;_$rapyd$_Index19<_$rapyd$_Iter19.length;_$rapyd$_Index19++){d=_$rapyd$_Iter19[_$rapyd$_Index19];p=[parseFloat(d.latitude.replace(",",".")),parseFloat(d.longitude.replace(",","."))];L.marker(p).addTo(self.basel).bindPopup(d.textomarcador)}self.map.addLayer(self.basel);self.map.fitBounds(self.basel.getBounds())};Searchlight.prototype.autoZoom=function(){var self=this;self.map.fitBounds(self.markers.getBounds())};Searchlight.prototype.carregaDados=function(data){var self=this;var d;try{var _$rapyd$_Iter20=data;for(var _$rapyd$_Index20=0;_$rapyd$_Index20<_$rapyd$_Iter20.length;_$rapyd$_Index20++){d=_$rapyd$_Iter20[_$rapyd$_Index20];self.addItem(d)}}catch(_$rapyd$_Exception){self.markers.fire("data:loaded");alert("Não foi possivel carregar os dados do mapa. Verifique se a fonte de dados está formatada corretamente.");return}self.markers.clearLayers();self.dados.addMarkersTo(self.markers);if(self.map.getBoundsZoom(self.markers.getBounds())==self.map.getZoom()){self.carregando=false}else{self.map.fitBounds(self.markers.getBounds());self.carregando=true}self.control.addCatsToControl(self.map_id);self.markers.fire("data:loaded");self.control.atualizarIconesMarcVisiveis();if(self.carregando==false&&window["onSLcarregaDados"]!=undefined){onSLcarregaDados(self)}};Searchlight.prototype.addItem=function(item){var self=this;self.dados.addItem(item,self.func_convert)};Searchlight.prototype.mostrarCamadaMarkers=function(){var self=this;self.map.addLayer(self.markers);self.map.setView(self.map_ultimo_center,self.map_ultimo_zoom)};Searchlight.prototype.esconderCamadaMarkers=function(){var self=this;self.map.removeLayer(self.markers);self.map_ultimo_zoom=self.map.getZoom();self.map_ultimo_center=self.map.getCenter()}})();