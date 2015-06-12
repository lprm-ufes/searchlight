// Generated by CoffeeScript 1.9.2
(function() {
  var Popup, PopupFontes;

  Popup = require('./bspopup').Popup;

  PopupFontes = (function() {
    function PopupFontes(config) {
      this.idUrl = config.container_id + '-url';
      this.idFunc = config.container_id + '-func';
      this.popup = Popup.getIS(config);
      this.config = config;
    }

    PopupFontes.prototype.setFonte = function(fonte, i) {
      if (fonte == null) {
        fonte = null;
      }
      if (i == null) {
        i = null;
      }
      if (i === null) {
        this.fonte = {
          url: '',
          func_code: ''
        };
      } else {
        this.fonte = fonte;
      }
      return this.fonte_id = i;
    };

    PopupFontes.prototype.renderPopup = function(callback, oktext) {
      var html, self;
      if (callback == null) {
        callback = null;
      }
      if (oktext == null) {
        oktext = 'Adicionar';
      }
      html = "<div class='form-group'> <label for='" + this.idUrl + "' class='control-label'>URL</label> <input type='url' class='form-control' value='" + this.fonte.url + "' id='" + this.idUrl + "' placeholder='informe o endereço público dos dados'> <p class='help-block'>Formatos aceitos: json, jsonp, csv e google spreadsheet.</p> <label for='" + this.idFunc + "' class='control-label'>Código da função de conversão</label> <textarea rows='6' type='text' class='form-control' id='" + this.idFunc + "' placeholder='código para converter os dados no formato do searchlight'>" + this.fonte.func_code + "</textarea> <br/> </div>";
      this.popup.setTitle('Cadastrar Fonte de Dados');
      self = this;
      this.popup.setBody(html, oktext, function(e) {
        return self.popupValidate(e);
      }, true, function(e) {
        return self.popupCancel(e);
      });
      this.popup.show();
      return this.popupValido = false;
    };

    PopupFontes.prototype.saveFonte = function(url, func_code) {
      if (this.fonte_id >= 0 && this.fonte_id !== null) {
        this.fonte.url = url;
        this.fonte.func_code = func_code;
      } else {
        console.log('adicionando  nova fonte');
        this.config.fontes.addFonte({
          url: url,
          func_code: func_code
        });
      }
      return $("#" + this.config.container_id).trigger("fontes:update");
    };

    PopupFontes.prototype.popupValidate = function(e) {
      var func_code, func_name, url;
      url = $("#" + this.idUrl).val();
      if (url) {
        func_code = $("#" + this.idFunc).val();
        try {
          func_name = "sl" + ((new Date()).getTime());
          eval(func_name + " = " + func_code);
          func_code = eval(func_name);
          this.popupValido = true;
          this.saveFonte(url, func_code);
        } catch (_error) {
          e = _error;
          alert(e.toString());
        }
      }
      if (!this.popupValido) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
      } else {
        return true;
      }
    };

    PopupFontes.prototype.popupCancel = function(e) {
      this.popupValido = true;
      return true;
    };

    return PopupFontes;

  })();

  module.exports = {
    PopupFontes: PopupFontes
  };

}).call(this);