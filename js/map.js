// Opção do map
var mapOptions = {
    center: [-22.911138717648036, -43.23611525623754],
    zoom: 11,
};

// Criando um objeto do map
var map = new L.map("map", mapOptions);

// Criando uma camada
var layer = new L.TileLayer(
    "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
);

// Adicionando a camada
map.addLayer(layer);

// Cria Icone UERJ
var iconUerj = L.icon({
    iconUrl: "icon/logouerj.png",

    iconSize: [35, 110], // size of the icon
    //iconAnchor:   [-22.911138717648036, -43.23611525623754], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -45], // point from which the popup should open relative to the iconAnchor
});

// Cria Icone casa masculino
var iconcasa_az = L.icon({
    iconUrl: "icon/casa_az.png",

    iconSize: [35, 35], // size of the icon
    //iconAnchor:   [-22.911138717648036, -43.23611525623754], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -10], // point from which the popup should open relative to the iconAnchor
});

// Cria Icone casa feminino
var iconcasa_am = L.icon({
    iconUrl: "icon/casa_am.png",

    iconSize: [35, 35], // size of the icon
    //iconAnchor:   [-22.911138717648036, -43.23611525623754], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -10], // point from which the popup should open relative to the iconAnchor
});

// Cria Icone casa qualquer
var iconcasa_p = L.icon({
    iconUrl: "icon/casa_p.png",

    iconSize: [35, 35], // size of the icon
    //iconAnchor:   [-22.911138717648036, -43.23611525623754], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -10], // point from which the popup should open relative to the iconAnchor
});

// Colocando e estilizando os marcadores no mapa
var marker = L.marker([-22.911138717648036, -43.23611525623754], {
    icon: iconUerj,
})
    .addTo(map)
    .bindPopup("UERJ");
var marker = L.marker([-22.921384, -43.236217], { icon: iconcasa_az })
    .addTo(map)
    .bindPopup("Tijuca, Masculino");
var marker = L.marker([-22.997856, -43.399788], { icon: iconcasa_am })
    .addTo(map)
    .bindPopup("Barra, Feminino");
var marker = L.marker([-22.913465, -43.232063], { icon: iconcasa_p })
    .addTo(map)
    .bindPopup("Maracanã, Qualquer");
var marker = L.marker([-22.913465, -43.22093], { icon:  iconcasa_az})
    .addTo(map)
    .bindPopup("Maracanã, Masculino");
var marker = L.marker([-22.880924843993736, -43.08712899684906], { icon:  iconcasa_am}) 
    .addTo(map)
    .bindPopup("Fonseca, Feminino");

// Adcionando os dados ao mapa
var layer = L.geoJSON().addTo(map);
layer.addData(dadosMapa);

function setaBairros(e){
    let valorBusca = $( "#busca-input" ).val();
    let novosDados = dadosMapa.filter((dado) => {
        return dado.properties.bairro == valorBusca
    })

    for(dado of novosDados){
        map.setView(new L.LatLng(dado.geometry.coordinates[0], dado.geometry.coordinates[1]), 15);
    }

    if(valorBusca == 'Todos'){
        map.setView(new L.LatLng(-22.91113871764803, -43.23611525623754), 10);
    }
}
