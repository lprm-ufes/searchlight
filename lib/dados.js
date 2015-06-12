// Generated by CoffeeScript 1.9.2
(function() {
  var Dados, Marcador,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Marcador = require('./marcador').Marcador;

  Dados = (function() {
    Dados.EVENT_DATA_LOADED = 'dados:loaded.slmapa';

    Dados.instances = {};

    Dados.getIS = function(config) {
      return Dados.instances[config.container_id];
    };

    function Dados(sl) {
      this.addMarkersTo = bind(this.addMarkersTo, this);
      this.catAddMarkers = bind(this.catAddMarkers, this);
      this.getCatLatLng = bind(this.getCatLatLng, this);
      this.addItemMarkers = bind(this.addItemMarkers, this);
      this._getCatOrCreate = bind(this._getCatOrCreate, this);
      this.get_data = bind(this.get_data, this);
      this.clear = bind(this.clear, this);
      Dados.instances[sl.config.container_id] = this;
      this.sl = sl;
      this.api = sl.slsapi;
      this.config = sl.config;
      this.clear();
    }

    Dados.prototype.clear = function() {
      this.marcadores = {};
      this.marcadores_filhos = {};
      this.categorias = {};
      return this.categorias_id = {};
    };

    Dados.prototype.getFonte = function(i) {
      return this.dataPool.getDataSource(i);
    };

    Dados.prototype.getFontes = function() {
      return this.dataPool.getDataSources();
    };

    Dados.prototype.get_data = function() {
      $("#" + this.config.container_id).trigger("dados:carregando");
      this.dataPool = SLSAPI.dataPool.createDataPool(this.api.mashup);
      this.dataPool.loadAllData();
      this.api.off(SLSAPI.dataPool.DataPool.EVENT_LOAD_STOP);
      return this.api.on(SLSAPI.dataPool.DataPool.EVENT_LOAD_STOP, (function(_this) {
        return function(dataPool) {
          var j, len, ref, source;
          ref = dataPool.dataSources;
          for (j = 0, len = ref.length; j < len; j++) {
            source = ref[j];
            _this.carregaDados(source.notes, source);
          }
          $("#" + _this.config.container_id).trigger('dados:carregados');
          return SLSAPI.events.trigger(_this.api.config.id, Dados.EVENT_DATA_LOADED);
        };
      })(this));
    };

    Dados.prototype.carregaDados = function(data, fonte) {
      var e, geoItem, j, len, results;
      console.log("fonte carregando: " + fonte.url);
      try {
        results = [];
        for (j = 0, len = data.length; j < len; j++) {
          geoItem = data[j];
          results.push(this.addItemMarkers(geoItem));
        }
        return results;
      } catch (_error) {
        e = _error;
        console.error(e.toString());
        this.markers.fire("data:loaded");
        alert("Não foi possivel carregar os dados do mapa. Verifique se a fonte de dados está formatada corretamente.");
      }
    };

    Dados.prototype.getItensCount = function() {
      var cat, itens, j, len, ref;
      itens = 0;
      ref = this.getCategorias();
      for (j = 0, len = ref.length; j < len; j++) {
        cat = ref[j];
        itens += this.getCatByName(cat).length;
      }
      return itens;
    };

    Dados.prototype.getCatByName = function(cat_name) {
      return this.categorias[cat_name];
    };

    Dados.prototype._getCatOrCreate = function(m) {
      var cat;
      cat = this.categorias[m.cat];
      if (cat) {
        return cat;
      } else {
        this.categorias[m.cat] = [];
        this.categorias_id[m.cat] = m.cat_id;
        return this.categorias[m.cat];
      }
    };

    Dados.prototype.getFilhos = function(pai_id) {
      var m;
      m = this.marcadores_filhos[pai_id];
      if (m) {
        return m;
      } else {
        return [];
      }
    };

    Dados.prototype.adicioneFilho = function(pai_id, filho) {
      if (!this.marcadores_filhos[pai_id]) {
        this.marcadores_filhos[pai_id] = [];
      }
      return this.marcadores_filhos[pai_id].push(filho);
    };

    Dados.prototype.addItemMarkers = function(geoItem) {
      var cat, m;
      m = new Marcador(geoItem, this.config);
      cat = this._getCatOrCreate(m);
      return cat.push(m);
    };

    Dados.prototype.getCatLatLng = function(name) {
      var i, j, len, m, ref, v;
      v = [];
      ref = this.categorias[name];
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        m = ref[i];
        v.push(m.getMark().getLatLng());
      }
      return v;
    };

    Dados.prototype.catAddMarkers = function(name, cluster) {
      var j, len, m, ref, results;
      ref = this.getCatByName(name);
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        m = ref[j];
        results.push(cluster.addLayer(m.getMark()));
      }
      return results;
    };

    Dados.prototype.addMarkersTo = function(cluster) {
      var cat, j, len, ref, results;
      ref = this.getCategorias();
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        cat = ref[j];
        results.push(this.catAddMarkers(cat, cluster));
      }
      return results;
    };

    Dados.prototype.getCategorias = function() {
      var cat;
      return (function() {
        var j, len, ref, results;
        ref = Object.keys(this.categorias);
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          cat = ref[j];
          results.push(cat);
        }
        return results;
      }).call(this);
    };

    return Dados;

  })();

  module.exports = {
    'Dados': Dados
  };

}).call(this);