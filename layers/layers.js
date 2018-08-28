var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental '
            });var format_Caldas_1 = new ol.format.GeoJSON();
var features_Caldas_1 = format_Caldas_1.readFeatures(json_Caldas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caldas_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Caldas_1.addFeatures(features_Caldas_1);var lyr_Caldas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Caldas_1, 
                style: style_Caldas_1,
                title: '<img src="styles/legend/Caldas_1.png" /> Caldas'
            });var format_RendimientoTonHaCaldas2017_2 = new ol.format.GeoJSON();
var features_RendimientoTonHaCaldas2017_2 = format_RendimientoTonHaCaldas2017_2.readFeatures(json_RendimientoTonHaCaldas2017_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RendimientoTonHaCaldas2017_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RendimientoTonHaCaldas2017_2.addFeatures(features_RendimientoTonHaCaldas2017_2);var lyr_RendimientoTonHaCaldas2017_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RendimientoTonHaCaldas2017_2, 
                style: style_RendimientoTonHaCaldas2017_2,
    title: 'Rendimiento (Ton/Ha) - Caldas - 2017<br />\
    <img src="styles/legend/RendimientoTonHaCaldas2017_2_0.png" />  3.8 - 4.4 <br />\
    <img src="styles/legend/RendimientoTonHaCaldas2017_2_1.png" />  4.4 - 5.1 <br />\
    <img src="styles/legend/RendimientoTonHaCaldas2017_2_2.png" />  5.1 - 5.7 <br />\
    <img src="styles/legend/RendimientoTonHaCaldas2017_2_3.png" />  5.7 - 6.4 <br />\
    <img src="styles/legend/RendimientoTonHaCaldas2017_2_4.png" />  6.4 - 7.0 <br />'
        });

lyr_LimiteDepartamental_0.setVisible(true);lyr_Caldas_1.setVisible(true);lyr_RendimientoTonHaCaldas2017_2.setVisible(true);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_Caldas_1,lyr_RendimientoTonHaCaldas2017_2];
lyr_LimiteDepartamental_0.set('fieldAliases', {'nombre_dep': 'nombre_dep', });
lyr_Caldas_1.set('fieldAliases', {'nombre_dep': 'nombre_dep', });
lyr_RendimientoTonHaCaldas2017_2.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'R.(Ton/Ha)': 'R.(Ton/Ha)', 'No': 'No', });
lyr_LimiteDepartamental_0.set('fieldImages', {'nombre_dep': 'TextEdit', });
lyr_Caldas_1.set('fieldImages', {'nombre_dep': 'TextEdit', });
lyr_RendimientoTonHaCaldas2017_2.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'R.(Ton/Ha)': 'TextEdit', 'No': 'TextEdit', });
lyr_LimiteDepartamental_0.set('fieldLabels', {'nombre_dep': 'inline label', });
lyr_Caldas_1.set('fieldLabels', {'nombre_dep': 'inline label', });
lyr_RendimientoTonHaCaldas2017_2.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'R.(Ton/Ha)': 'inline label', 'No': 'inline label', });
lyr_RendimientoTonHaCaldas2017_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});