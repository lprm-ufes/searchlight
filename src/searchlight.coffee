



Dados = require('./dados').Dados
Controle = require('./controle').Controle
Config = require('./config').Config
PopupMarcador = require('./popupMarcador').PopupMarcador
TabList = require('./lista').TabList
TabConfiguracoes = require('./tabConfiguracoes').TabConfiguracoes
Popup = require('./bspopup').Popup


# marcadores
SENADO_FEDERAL = [-15.799088, -47.865350]
UFES = [-20.277233,-40.303752 ]
CT = [-20.273530, -40.305448]
CEMUNI = [ -20.279483,-40.302690]
BIBLIOTECA = [-20.276519, -40.304503]

attribution = 'Map generated by <a href="http://wancharle.github.com/Searchlight">Searchlight</a>,  Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>'

L.Icon.Default.imagePath = "/sl/images/leaflet";    
window.SL_ICON_CLUSTER = new L.DivIcon({ html: '<div><span>1</span></div>', className: 'marker-cluster marker-cluster-small', iconSize: [40,40],popupAnchor:[0,-35]});
window.SL_ICON_PADRAO = new L.Icon.Default()

# referencia para callback
referencia_atual = null
sl_referencias = {}
window.SL = (map_id) ->
    "funcao global para pegar a referencia do objeto mapa"
    return sl_referencias[map_id]

class Searchlight

  constructor: (opcoes={}) ->
    @config = new Config(opcoes)
    @slsapi = new SLSAPI(opcoes)
    @slsapi.on SLSAPI.Config.EVENT_READY, (id)=>
      sl_referencias[@config.map_id]  = this 

      @create()
      $('.collapse').collapse()

      @dados = new Dados(this)
      @dados.get_data()
      @tabList = new TabList(@config)
      @tabConfiguracoes = new TabConfiguracoes(@config,@dados)

  getIS: =>  # retorna a string da instancia
    return "SL(\"#{@config.map_id}\")" 

  create: () =>
    # criando container:
    $("##{@config.container_id}").html("<ul class='nav nav-tabs' role='tablist'>
    <li class='active'><a data-toggle='tab' href='##{@config.tab_id}'>Mapa</a></li>
    <li><a data-toggle='tab' href='#tab-#{@config.lista_id}'>Lista</a></li>
    <li><a data-toggle='tab' href='#tab-#{@config.configuracoes_id}'>Configurações</a></li>
    </ul>
    <div class='tab-content'>
      <div class='tab-pane active' id='#{@config.tab_id}'><div id='#{@config.map_id}' > </div> </div>
      <div class='tab-pane' id='tab-#{@config.lista_id}' ><div class='searchlight-tab' id='#{@config.lista_id}'> </div> </div>
      <div class='tab-pane' id='tab-#{@config.configuracoes_id}' ><div class='searchlight-tab' id='#{@config.configuracoes_id}'> </div> </div>
    </div> ")
    @bsPopup = new Popup(@config)

    @CamadaBasica = L.tileLayer(@config.urlosm,  { 'attribution': attribution, 'maxZoom': 18 })
    @map = L.map(@config.map_id, {layers:[@CamadaBasica],'center': SENADO_FEDERAL,'zoom': 13}) #TODO: mudar centro e zoom 
    
    # criando camada com clusters
    if @config.clusterizar
        @markers = new L.MarkerClusterGroup({ zoomToBoundsOnClick: false})
    else
        @markers = new L.FeatureGroup()
    @map.addLayer(@markers)
   
    # criando classe para controlar o mapa
    @control = new  Controle(this)
   
    # amarrando eventos
    @slsapi.on SLSAPI.dataPool.DataPool.EVENT_LOAD_START, () => 
      console.log('dados carregando')
      @map.spin(true)

  
    SLSAPI.events.on @slsapi.config.id,Dados.EVENT_DATA_LOADED, () => 
      console.log('segundo evento')
      @markers.clearLayers()
      @dados.addMarkersTo(@markers)
      @control.addCatsToControl(@config.map_id)
      @control.atualizarIconesMarcVisiveis()

      # ajusta view aos zoom inicial dos marcadores
      if @map.getBoundsZoom(@markers.getBounds()) == @map.getZoom()
        @executandoZoomDeCarregamento = false
      else
        @map.fitBounds(@markers.getBounds())
        @executandoZoomDeCarregamento = true

      # para o loading
      @markers.fire("data:loaded")

      if @executandoZoomDeCarregamento == false
        $("##{@config.container_id}").trigger('mapa:carregado')

      # ao terminar de carregar faz zoom automatico sobre area dos dados. 
      @autoZoom() #FIXME: nem sempre eh necessário, esta aqui apenas por causa de um bug em alguns mapas.
  

  autoZoom: () =>
    @map.fitBounds(@markers.getBounds())


  mostrarCamadaMarkers: () =>
    @map.addLayer(@markers)
    @map.setView(@map_ultimo_center, @map_ultimo_zoom)

  esconderCamadaMarkers: () =>
    @map.removeLayer(@markers)
    @map_ultimo_zoom =  @map.getZoom()
    @map_ultimo_center = @map.getCenter()
Searchlight.Popup = Popup
Searchlight.PopupMarcador= PopupMarcador
window.Searchlight = Searchlight

# vim: set ts=2 sw=2 sts=2 expandtab: