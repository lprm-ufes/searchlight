// Generated by CoffeeScript 1.9.2
(function() {
  var ClusterCtr, PilhaDeZoom,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  PilhaDeZoom = require('./pilhadezoom').PilhaDeZoom;

  ClusterCtr = (function() {
    function ClusterCtr(sl) {
      this.popupOrZoom = bind(this.popupOrZoom, this);
      this.atualizaPopup = bind(this.atualizaPopup, this);
      this.getCatsCluster = bind(this.getCatsCluster, this);
      this.update = bind(this.update, this);
      this.focar = bind(this.focar, this);
      this.desfocar = bind(this.desfocar, this);
      this.showPopup = bind(this.showPopup, this);
      this.mostraPopup = bind(this.mostraPopup, this);
      this.cancelPopup = bind(this.cancelPopup, this);
      this.zoomGrupo = bind(this.zoomGrupo, this);
      this.clusterDuploClick = bind(this.clusterDuploClick, this);
      this.clusterClick = bind(this.clusterClick, this);
      this.closePopup = bind(this.closePopup, this);
      this.criaPopup = bind(this.criaPopup, this);
      this.registraEventosClusters = bind(this.registraEventosClusters, this);
      this.sl = sl;
      this.criaPopup();
      this.pilha_de_zoom = new PilhaDeZoom(this.sl);
      this.clusters = {};
      this.id_analise = "#" + this.sl.config.map_id + " div.searchlight-analise";
      $(this.id_analise).append("<p class='center'><a href='#' onclick='" + (this.sl.getIS()) + ".control.clusterCtr.desfocar()'>DESFOCAR</a></p>");
      $(this.id_analise).hide();
      this.sl.map.on('dblclick', (function(_this) {
        return function(a) {
          return _this.clusterDuploClick();
        };
      })(this));
      this.registraEventosClusters();
    }

    ClusterCtr.prototype.registraEventosClusters = function() {
      if (this.camadaAnalise) {
        this.camadaAnalise.on('clusterdblclick', (function(_this) {
          return function(a) {
            return a.layer.zoomToBounds();
          };
        })(this));
        this.camadaAnalise.on('clusterclick', (function(_this) {
          return function(a) {
            return a.layer.zoomToBounds();
          };
        })(this));
      } else {
        this.sl.markers.on('clusterdblclick', (function(_this) {
          return function(a) {
            return _this.clusterDuploClick(a);
          };
        })(this));
        this.sl.markers.on('clusterclick', (function(_this) {
          return function(a) {
            if (Object.keys(_this.sl.dados.categorias).length > 1) {
              return _this.clusterClick(a);
            } else {
              return a.layer.zoomToBounds();
            }
          };
        })(this));
      }
      return this.clickOrdem = 0;
    };

    ClusterCtr.prototype.criaPopup = function() {
      var popup;
      popup = L.popup();
      this.popup = popup;
      return this.timeUltimoClick = new Date().getTime();
    };

    ClusterCtr.prototype.closePopup = function() {
      this.sl.map.closePopup();
      return this.sl.bsPopup.close();
    };

    ClusterCtr.prototype.clusterClick = function(a) {
      var d;
      if (a == null) {
        a = null;
      }
      d = new Date();
      if ((d.getTime() - this.timeUltimoClick) > 1500) {
        this.clickOrdem = 1;
        this.popupOrZoom(a);
      }
      return this.timeUltimoClick = d.getTime();
    };

    ClusterCtr.prototype.clusterDuploClick = function() {
      return this.cancelPopup();
    };

    ClusterCtr.prototype.zoomGrupo = function() {
      this.closePopup();
      this.pilha_de_zoom.salva_zoom();
      if (this.cluster_clicado) {
        return this.cluster_clicado.layer.zoomToBounds();
      }
    };

    ClusterCtr.prototype.cancelPopup = function() {
      this.clickOrdem = 2;
      return this.zoomGrupo();
    };

    ClusterCtr.prototype.mostraPopup = function() {
      this.atualizaPopup();
      if (this.sl.config.useBsPopup) {
        return this.sl.bsPopup.show();
      } else {
        return this.popup.openOn(this.sl.map);
      }
    };

    ClusterCtr.prototype.showPopup = function() {
      if (this.clickOrdem === 1) {
        this.mostraPopup();
      }
      return this.clickOrdem = 0;
    };

    ClusterCtr.prototype.desfocar = function() {
      this.closePopup();
      $(this.id_analise).hide();
      this.sl.map.removeLayer(this.camadaAnalise);
      this.sl.mostrarCamadaMarkers();
      this.camadaAnalise = null;
      this.desfocou = true;
      return this.registraEventosClusters();
    };

    ClusterCtr.prototype.focar = function(cat) {
      var c, cats, j, k, len, len1, m, ref, x;
      this.sl.esconderCamadaMarkers();
      if (this.camadaAnalise) {
        this.sl.map.removeLayer(this.camadaAnalise);
      }
      this.camadaAnalise = new L.MarkerClusterGroup({
        zoomToBoundsOnClick: false
      });
      this.sl.map.addLayer(this.camadaAnalise);
      this.camadaAnalise.fire("data:loading");
      cats = this.getCatsCluster();
      for (x = j = 0, len = cats.length; j < len; x = ++j) {
        c = cats[x];
        if (cat === c[0]) {
          ref = c[1];
          for (k = 0, len1 = ref.length; k < len1; k++) {
            m = ref[k];
            this.camadaAnalise.addLayer(m);
          }
        }
      }
      this.sl.map.fitBounds(this.camadaAnalise.getBounds());
      this.camadaAnalise.fire("data:loaded");
      this.sl.control.registraEventosCamadaAnalise();
      this.registraEventosClusters();
      $(this.id_analise).show();
      return this.closePopup();
    };

    ClusterCtr.prototype.update = function() {
      return this.clusters = {};
    };

    ClusterCtr.prototype.getCatsCluster = function() {
      var cat, cats, cats_ord, cluster_cats, cluster_id, i, j, k, len, len1, m, ref, ref1;
      cluster_id = this.cluster_clicado.layer._leaflet_id;
      cluster_cats = this.clusters[cluster_id];
      if (cluster_cats) {
        return cluster_cats;
      }
      cats = {};
      ref = this.cluster_clicado.layer.getAllChildMarkers();
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        m = ref[i];
        if (m.slinfo) {
          cat = m.slinfo.cat;
          if (cats[cat]) {
            cats[cat].push(m);
          } else {
            cats[cat] = [m];
          }
        }
      }
      cats_ord = [];
      ref1 = Object.keys(cats);
      for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
        cat = ref1[i];
        cats_ord.push([cat, cats[cat]]);
      }
      cats_ord.sort(function(a, b) {
        return b[1].length - a[1].length;
      });
      this.clusters[cluster_id] = cats_ord;
      return cats_ord;
    };

    ClusterCtr.prototype.atualizaPopup = function() {
      var cat, cat_id, cats_ord, html, i, iconUrl, j, k, len, len1;
      cats_ord = this.getCatsCluster();
      html = "<div class='clusterPopup'>";
      if (!this.sl.Icones) {
        html += "<ul>";
        cat = cats_ord[0];
        for (i = j = 0, len = cats_ord.length; j < len; i = ++j) {
          cat = cats_ord[i];
          html += "<li><a title='Focar no subgrupo " + cat[0] + "'  href='#' onclick='SL(\"" + this.sl.config.map_id + "\").control.clusterCtr.focar(\"" + cat[0] + "\");return true;'>" + cat[0] + "</a> (" + cat[1].length + ")</li>";
        }
        html += "</ul>";
      } else {
        html += '<ul class="icones">';
        for (i = k = 0, len1 = cats_ord.length; k < len1; i = ++k) {
          cat = cats_ord[i];
          cat_id = this.sl.dados.categorias_id[cat[0]];
          iconUrl = this.sl.Icones[cat_id].options.iconUrl;
          html += "<li>";
          html += "<p class='img'><a title='Focar no subgrupo " + cat[0] + "' href='#' onclick='SL(\"" + this.sl.config.map_id + "\").control.clusterCtr.focar(\"" + cat[0] + "\")'><img src='" + iconUrl + "'></a></p>";
          html += "<p class='texto'><a title='Focar no subgrupo " + cat[0] + "' href='#' onclick=':SL(\"" + this.sl.config.map_id + "\").control.clusterCtr.focar(\"" + cat[0] + "\")'>" + cat[1].length + "</a></p>";
          html += "</li>";
        }
        html += "</ul>";
      }
      html += "<p class='center'><input type='button' onclick='SL(\"" + this.sl.config.map_id + "\").control.clusterCtr.zoomGrupo();' value='expandir grupo' /></p>";
      html += "</div>";
      if (this.sl.config.useBsPopup) {
        this.sl.bsPopup.setTitle("Dados sobre este do grupo");
        return this.sl.bsPopup.setBody(html);
      } else {
        return this.popup.setContent(html);
      }
    };

    ClusterCtr.prototype.popupOrZoom = function(cluster) {
      var obj;
      this.sl.map.closePopup();
      this.popup.setLatLng(cluster.layer.getLatLng());
      obj = this;
      if (this.clickOrdem === 1) {
        this.cluster_clicado = cluster;
        return setTimeout((function(_this) {
          return function() {
            return _this.showPopup(_this.sl.config.map_id);
          };
        })(this), 600);
      }
    };

    return ClusterCtr;

  })();

  module.exports = {
    ClusterCtr: ClusterCtr
  };

}).call(this);