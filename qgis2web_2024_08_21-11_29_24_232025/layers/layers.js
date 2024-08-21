var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DragmaqDragagemeLocaes_1 = new ol.format.GeoJSON();
var features_DragmaqDragagemeLocaes_1 = format_DragmaqDragagemeLocaes_1.readFeatures(json_DragmaqDragagemeLocaes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DragmaqDragagemeLocaes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DragmaqDragagemeLocaes_1.addFeatures(features_DragmaqDragagemeLocaes_1);
var lyr_DragmaqDragagemeLocaes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DragmaqDragagemeLocaes_1, 
                style: style_DragmaqDragagemeLocaes_1,
                popuplayertitle: "Dragmaq Dragagem e Locações",
                interactive: false,
                title: '<img src="styles/legend/DragmaqDragagemeLocaes_1.png" /> Dragmaq Dragagem e Locações'
            });
var format_GeoAmbiental_2 = new ol.format.GeoJSON();
var features_GeoAmbiental_2 = format_GeoAmbiental_2.readFeatures(json_GeoAmbiental_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeoAmbiental_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeoAmbiental_2.addFeatures(features_GeoAmbiental_2);
var lyr_GeoAmbiental_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeoAmbiental_2, 
                style: style_GeoAmbiental_2,
                popuplayertitle: "Geo Ambiental",
                interactive: false,
                title: '<img src="styles/legend/GeoAmbiental_2.png" /> Geo Ambiental'
            });
var format_DimensionalEngenharia_3 = new ol.format.GeoJSON();
var features_DimensionalEngenharia_3 = format_DimensionalEngenharia_3.readFeatures(json_DimensionalEngenharia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DimensionalEngenharia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DimensionalEngenharia_3.addFeatures(features_DimensionalEngenharia_3);
var lyr_DimensionalEngenharia_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DimensionalEngenharia_3, 
                style: style_DimensionalEngenharia_3,
                popuplayertitle: "Dimensional Engenharia",
                interactive: false,
                title: '<img src="styles/legend/DimensionalEngenharia_3.png" /> Dimensional Engenharia'
            });
var format_ConstrutoraLytornea_4 = new ol.format.GeoJSON();
var features_ConstrutoraLytornea_4 = format_ConstrutoraLytornea_4.readFeatures(json_ConstrutoraLytornea_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConstrutoraLytornea_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConstrutoraLytornea_4.addFeatures(features_ConstrutoraLytornea_4);
var lyr_ConstrutoraLytornea_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConstrutoraLytornea_4, 
                style: style_ConstrutoraLytornea_4,
                popuplayertitle: "Construtora Lytorânea",
                interactive: false,
                title: '<img src="styles/legend/ConstrutoraLytornea_4.png" /> Construtora Lytorânea'
            });
var format_OrienteConstruoCivil_5 = new ol.format.GeoJSON();
var features_OrienteConstruoCivil_5 = format_OrienteConstruoCivil_5.readFeatures(json_OrienteConstruoCivil_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OrienteConstruoCivil_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OrienteConstruoCivil_5.addFeatures(features_OrienteConstruoCivil_5);
var lyr_OrienteConstruoCivil_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OrienteConstruoCivil_5, 
                style: style_OrienteConstruoCivil_5,
                popuplayertitle: "Oriente Construção Civil",
                interactive: false,
                title: '<img src="styles/legend/OrienteConstruoCivil_5.png" /> Oriente Construção Civil'
            });
var format_DASEngenharia_6 = new ol.format.GeoJSON();
var features_DASEngenharia_6 = format_DASEngenharia_6.readFeatures(json_DASEngenharia_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DASEngenharia_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DASEngenharia_6.addFeatures(features_DASEngenharia_6);
var lyr_DASEngenharia_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DASEngenharia_6, 
                style: style_DASEngenharia_6,
                popuplayertitle: "DAS Engenharia",
                interactive: false,
                title: '<img src="styles/legend/DASEngenharia_6.png" /> DAS Engenharia'
            });
var format_Municpios_7 = new ol.format.GeoJSON();
var features_Municpios_7 = format_Municpios_7.readFeatures(json_Municpios_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municpios_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municpios_7.addFeatures(features_Municpios_7);
var lyr_Municpios_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municpios_7, 
                style: style_Municpios_7,
                popuplayertitle: "Municípios",
                interactive: false,
                title: '<img src="styles/legend/Municpios_7.png" /> Municípios'
            });
var format_FrentesMecanizadasRHIX_8 = new ol.format.GeoJSON();
var features_FrentesMecanizadasRHIX_8 = format_FrentesMecanizadasRHIX_8.readFeatures(json_FrentesMecanizadasRHIX_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrentesMecanizadasRHIX_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrentesMecanizadasRHIX_8.addFeatures(features_FrentesMecanizadasRHIX_8);
var lyr_FrentesMecanizadasRHIX_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrentesMecanizadasRHIX_8, 
                style: style_FrentesMecanizadasRHIX_8,
                popuplayertitle: "Frentes Mecanizadas RH IX",
                interactive: true,
    title: 'Frentes Mecanizadas RH IX<br />\
    <img src="styles/legend/FrentesMecanizadasRHIX_8_0.png" /> Em Andamento<br />\
    <img src="styles/legend/FrentesMecanizadasRHIX_8_1.png" /> Finalizado<br />\
    <img src="styles/legend/FrentesMecanizadasRHIX_8_2.png" /> Iniciado<br />\
    <img src="styles/legend/FrentesMecanizadasRHIX_8_3.png" /> Vistoria Prévia<br />'
        });
var format_FrentesMecanizadasRHVIeVIII_9 = new ol.format.GeoJSON();
var features_FrentesMecanizadasRHVIeVIII_9 = format_FrentesMecanizadasRHVIeVIII_9.readFeatures(json_FrentesMecanizadasRHVIeVIII_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrentesMecanizadasRHVIeVIII_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrentesMecanizadasRHVIeVIII_9.addFeatures(features_FrentesMecanizadasRHVIeVIII_9);
var lyr_FrentesMecanizadasRHVIeVIII_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrentesMecanizadasRHVIeVIII_9, 
                style: style_FrentesMecanizadasRHVIeVIII_9,
                popuplayertitle: "Frentes Mecanizadas RH VI e VIII",
                interactive: true,
    title: 'Frentes Mecanizadas RH VI e VIII<br />\
    <img src="styles/legend/FrentesMecanizadasRHVIeVIII_9_0.png" /> Em Andamento<br />\
    <img src="styles/legend/FrentesMecanizadasRHVIeVIII_9_1.png" /> Finalizado<br />\
    <img src="styles/legend/FrentesMecanizadasRHVIeVIII_9_2.png" /> Iniciado<br />\
    <img src="styles/legend/FrentesMecanizadasRHVIeVIII_9_3.png" /> Vistoria Prévia<br />'
        });
var format_FrentesMecanizadasRHV_10 = new ol.format.GeoJSON();
var features_FrentesMecanizadasRHV_10 = format_FrentesMecanizadasRHV_10.readFeatures(json_FrentesMecanizadasRHV_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrentesMecanizadasRHV_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrentesMecanizadasRHV_10.addFeatures(features_FrentesMecanizadasRHV_10);
var lyr_FrentesMecanizadasRHV_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrentesMecanizadasRHV_10, 
                style: style_FrentesMecanizadasRHV_10,
                popuplayertitle: "Frentes Mecanizadas RH V",
                interactive: true,
    title: 'Frentes Mecanizadas RH V<br />\
    <img src="styles/legend/FrentesMecanizadasRHV_10_0.png" /> Em Andamento<br />\
    <img src="styles/legend/FrentesMecanizadasRHV_10_1.png" /> Finalizado<br />\
    <img src="styles/legend/FrentesMecanizadasRHV_10_2.png" /> Iniciado<br />\
    <img src="styles/legend/FrentesMecanizadasRHV_10_3.png" /> Vistoria Prévia<br />'
        });
var format_FrentesMecanizadasRHIVeVII_11 = new ol.format.GeoJSON();
var features_FrentesMecanizadasRHIVeVII_11 = format_FrentesMecanizadasRHIVeVII_11.readFeatures(json_FrentesMecanizadasRHIVeVII_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrentesMecanizadasRHIVeVII_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrentesMecanizadasRHIVeVII_11.addFeatures(features_FrentesMecanizadasRHIVeVII_11);
var lyr_FrentesMecanizadasRHIVeVII_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrentesMecanizadasRHIVeVII_11, 
                style: style_FrentesMecanizadasRHIVeVII_11,
                popuplayertitle: "Frentes Mecanizadas RH IV e VII",
                interactive: true,
    title: 'Frentes Mecanizadas RH IV e VII<br />\
    <img src="styles/legend/FrentesMecanizadasRHIVeVII_11_0.png" /> Em Andamento<br />\
    <img src="styles/legend/FrentesMecanizadasRHIVeVII_11_1.png" /> Finalizado<br />\
    <img src="styles/legend/FrentesMecanizadasRHIVeVII_11_2.png" /> Iniciado<br />\
    <img src="styles/legend/FrentesMecanizadasRHIVeVII_11_3.png" /> Vistoria Prévia<br />'
        });
var format_FrentesMecanizadasRHIII_12 = new ol.format.GeoJSON();
var features_FrentesMecanizadasRHIII_12 = format_FrentesMecanizadasRHIII_12.readFeatures(json_FrentesMecanizadasRHIII_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrentesMecanizadasRHIII_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrentesMecanizadasRHIII_12.addFeatures(features_FrentesMecanizadasRHIII_12);
var lyr_FrentesMecanizadasRHIII_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrentesMecanizadasRHIII_12, 
                style: style_FrentesMecanizadasRHIII_12,
                popuplayertitle: "Frentes Mecanizadas RH III",
                interactive: true,
    title: 'Frentes Mecanizadas RH III<br />\
    <img src="styles/legend/FrentesMecanizadasRHIII_12_0.png" /> Em Andamento<br />\
    <img src="styles/legend/FrentesMecanizadasRHIII_12_1.png" /> Finalizado<br />\
    <img src="styles/legend/FrentesMecanizadasRHIII_12_2.png" /> Iniciado<br />\
    <img src="styles/legend/FrentesMecanizadasRHIII_12_3.png" /> Vistoria Prévia<br />'
        });
var format_FrentesMecanizadasRHIeII_13 = new ol.format.GeoJSON();
var features_FrentesMecanizadasRHIeII_13 = format_FrentesMecanizadasRHIeII_13.readFeatures(json_FrentesMecanizadasRHIeII_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrentesMecanizadasRHIeII_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrentesMecanizadasRHIeII_13.addFeatures(features_FrentesMecanizadasRHIeII_13);
var lyr_FrentesMecanizadasRHIeII_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrentesMecanizadasRHIeII_13, 
                style: style_FrentesMecanizadasRHIeII_13,
                popuplayertitle: "Frentes Mecanizadas RH I e II",
                interactive: true,
    title: 'Frentes Mecanizadas RH I e II<br />\
    <img src="styles/legend/FrentesMecanizadasRHIeII_13_0.png" /> Em Andamento<br />\
    <img src="styles/legend/FrentesMecanizadasRHIeII_13_1.png" /> Finalizado<br />\
    <img src="styles/legend/FrentesMecanizadasRHIeII_13_2.png" /> Iniciado<br />\
    <img src="styles/legend/FrentesMecanizadasRHIeII_13_3.png" /> Vistoria Prévia<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_DragmaqDragagemeLocaes_1.setVisible(true);lyr_GeoAmbiental_2.setVisible(true);lyr_DimensionalEngenharia_3.setVisible(true);lyr_ConstrutoraLytornea_4.setVisible(true);lyr_OrienteConstruoCivil_5.setVisible(true);lyr_DASEngenharia_6.setVisible(true);lyr_Municpios_7.setVisible(true);lyr_FrentesMecanizadasRHIX_8.setVisible(true);lyr_FrentesMecanizadasRHVIeVIII_9.setVisible(true);lyr_FrentesMecanizadasRHV_10.setVisible(true);lyr_FrentesMecanizadasRHIVeVII_11.setVisible(true);lyr_FrentesMecanizadasRHIII_12.setVisible(true);lyr_FrentesMecanizadasRHIeII_13.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DragmaqDragagemeLocaes_1,lyr_GeoAmbiental_2,lyr_DimensionalEngenharia_3,lyr_ConstrutoraLytornea_4,lyr_OrienteConstruoCivil_5,lyr_DASEngenharia_6,lyr_Municpios_7,lyr_FrentesMecanizadasRHIX_8,lyr_FrentesMecanizadasRHVIeVIII_9,lyr_FrentesMecanizadasRHV_10,lyr_FrentesMecanizadasRHIVeVII_11,lyr_FrentesMecanizadasRHIII_12,lyr_FrentesMecanizadasRHIeII_13];
lyr_DragmaqDragagemeLocaes_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'id': 'id', 'rh': 'rh', 'nome_rh': 'nome_rh', 'area_km': 'area_km', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'area_ha': 'area_ha', 'areaha_tes': 'areaha_tes', 'areakm2': 'areakm2', });
lyr_GeoAmbiental_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'id': 'id', 'rh': 'rh', 'nome_rh': 'nome_rh', 'area_km': 'area_km', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'area_ha': 'area_ha', 'areaha_tes': 'areaha_tes', 'areakm2': 'areakm2', });
lyr_DimensionalEngenharia_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'id': 'id', 'rh': 'rh', 'nome_rh': 'nome_rh', 'area_km': 'area_km', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'area_ha': 'area_ha', 'areaha_tes': 'areaha_tes', 'areakm2': 'areakm2', });
lyr_ConstrutoraLytornea_4.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'id': 'id', 'rh': 'rh', 'nome_rh': 'nome_rh', 'area_km': 'area_km', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'area_ha': 'area_ha', 'areaha_tes': 'areaha_tes', 'areakm2': 'areakm2', });
lyr_OrienteConstruoCivil_5.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'id': 'id', 'rh': 'rh', 'nome_rh': 'nome_rh', 'area_km': 'area_km', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'area_ha': 'area_ha', 'areaha_tes': 'areaha_tes', 'areakm2': 'areakm2', });
lyr_DASEngenharia_6.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'id': 'id', 'rh': 'rh', 'nome_rh': 'nome_rh', 'area_km': 'area_km', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'area_ha': 'area_ha', 'areaha_tes': 'areaha_tes', 'areakm2': 'areakm2', });
lyr_Municpios_7.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_FrentesMecanizadasRHIX_8.set('fieldAliases', {'Status': 'Status', 'Corpo Híd': 'Corpo Hídrico', 'Município': 'Município', 'Empresa': 'Empresa', 'Classif.': 'Classificação', 'Início': 'Início', 'Término': 'Término', 'Antes': 'Antes', 'Durante': 'Durante', 'Depois': 'Depois', });
lyr_FrentesMecanizadasRHVIeVIII_9.set('fieldAliases', {'Status': 'Status', 'Corpo Híd': 'Corpo Hídrico', 'Município': 'Município', 'Empresa': 'Empresa', 'Classif.': 'Classificação', 'Início': 'Início', 'Término': 'Término', 'Antes': 'Antes', 'Durante': 'Durante', 'Depois': 'Depois', });
lyr_FrentesMecanizadasRHV_10.set('fieldAliases', {'Status': 'Status', 'Corpo Híd': 'Corpo Hídrico', 'Município': 'Município', 'Empresa': 'Empresa', 'Classif.': 'Classificação', 'Início': 'Início', 'Término': 'Término', 'Antes': 'Antes', 'Durante': 'Durante', 'Depois': 'Depois', });
lyr_FrentesMecanizadasRHIVeVII_11.set('fieldAliases', {'status': 'Status', 'corpo híd': 'Corpo Hídrico', 'município': 'Município', 'empresa': 'Empresa', 'classif.': 'Classificação', 'início': 'Início', 'término': 'Término', 'antes': 'Antes', 'durante': 'Durante', 'depois': 'Depois', });
lyr_FrentesMecanizadasRHIII_12.set('fieldAliases', {'corpo híd': 'Corpo Hídrico', 'município': 'Município', 'empresa': 'Empresa', 'início': 'Início', 'término': 'Término', 'classif.': 'Classificação', 'antes': 'Antes', 'durante': 'Durante', 'depois': 'Depois', 'status': 'Status', });
lyr_FrentesMecanizadasRHIeII_13.set('fieldAliases', {'corpo híd': 'Corpo Hídrico', 'município': 'Município', 'status iii': 'Status', 'empresa': 'Empresa', 'classifica': 'Classificação', 'início': 'Início', 'término': 'Término', 'antes': 'Antes', 'durante': 'Durante', 'depois': 'Depois', });
lyr_DragmaqDragagemeLocaes_1.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'Range', 'id': 'TextEdit', 'rh': 'TextEdit', 'nome_rh': 'TextEdit', 'area_km': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'area_ha': 'TextEdit', 'areaha_tes': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_GeoAmbiental_2.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'Range', 'id': 'TextEdit', 'rh': 'TextEdit', 'nome_rh': 'TextEdit', 'area_km': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'area_ha': 'TextEdit', 'areaha_tes': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_DimensionalEngenharia_3.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'Range', 'id': 'TextEdit', 'rh': 'TextEdit', 'nome_rh': 'TextEdit', 'area_km': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'area_ha': 'TextEdit', 'areaha_tes': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_ConstrutoraLytornea_4.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'Range', 'id': 'TextEdit', 'rh': 'TextEdit', 'nome_rh': 'TextEdit', 'area_km': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'area_ha': 'TextEdit', 'areaha_tes': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_OrienteConstruoCivil_5.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'Range', 'id': 'TextEdit', 'rh': 'TextEdit', 'nome_rh': 'TextEdit', 'area_km': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'area_ha': 'TextEdit', 'areaha_tes': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_DASEngenharia_6.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'Range', 'id': 'TextEdit', 'rh': 'TextEdit', 'nome_rh': 'TextEdit', 'area_km': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'area_ha': 'TextEdit', 'areaha_tes': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_Municpios_7.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_FrentesMecanizadasRHIX_8.set('fieldImages', {'Status': 'TextEdit', 'Corpo Híd': 'TextEdit', 'Município': 'TextEdit', 'Empresa': 'TextEdit', 'Classif.': 'TextEdit', 'Início': 'TextEdit', 'Término': 'TextEdit', 'Antes': 'TextEdit', 'Durante': 'TextEdit', 'Depois': 'TextEdit', });
lyr_FrentesMecanizadasRHVIeVIII_9.set('fieldImages', {'Status': 'TextEdit', 'Corpo Híd': 'TextEdit', 'Município': 'TextEdit', 'Empresa': 'TextEdit', 'Classif.': 'TextEdit', 'Início': 'TextEdit', 'Término': 'TextEdit', 'Antes': 'TextEdit', 'Durante': 'TextEdit', 'Depois': 'TextEdit', });
lyr_FrentesMecanizadasRHV_10.set('fieldImages', {'Status': 'TextEdit', 'Corpo Híd': 'TextEdit', 'Município': 'TextEdit', 'Empresa': 'TextEdit', 'Classif.': 'TextEdit', 'Início': 'TextEdit', 'Término': 'TextEdit', 'Antes': 'TextEdit', 'Durante': 'TextEdit', 'Depois': 'TextEdit', });
lyr_FrentesMecanizadasRHIVeVII_11.set('fieldImages', {'status': 'TextEdit', 'corpo híd': 'TextEdit', 'município': 'TextEdit', 'empresa': 'TextEdit', 'classif.': 'TextEdit', 'início': 'TextEdit', 'término': 'TextEdit', 'antes': 'TextEdit', 'durante': 'TextEdit', 'depois': 'TextEdit', });
lyr_FrentesMecanizadasRHIII_12.set('fieldImages', {'corpo híd': 'TextEdit', 'município': 'TextEdit', 'empresa': 'TextEdit', 'início': 'TextEdit', 'término': 'TextEdit', 'classif.': 'TextEdit', 'antes': 'TextEdit', 'durante': 'TextEdit', 'depois': 'TextEdit', 'status': 'TextEdit', });
lyr_FrentesMecanizadasRHIeII_13.set('fieldImages', {'corpo híd': 'TextEdit', 'município': 'TextEdit', 'status iii': 'TextEdit', 'empresa': 'TextEdit', 'classifica': 'TextEdit', 'início': 'TextEdit', 'término': 'TextEdit', 'antes': 'TextEdit', 'durante': 'TextEdit', 'depois': 'TextEdit', });
lyr_DragmaqDragagemeLocaes_1.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'rh': 'no label', 'nome_rh': 'no label', 'area_km': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'area_ha': 'no label', 'areaha_tes': 'no label', 'areakm2': 'no label', });
lyr_GeoAmbiental_2.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'rh': 'no label', 'nome_rh': 'no label', 'area_km': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'area_ha': 'no label', 'areaha_tes': 'no label', 'areakm2': 'no label', });
lyr_DimensionalEngenharia_3.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'rh': 'no label', 'nome_rh': 'no label', 'area_km': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'area_ha': 'no label', 'areaha_tes': 'no label', 'areakm2': 'no label', });
lyr_ConstrutoraLytornea_4.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'rh': 'no label', 'nome_rh': 'no label', 'area_km': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'area_ha': 'no label', 'areaha_tes': 'no label', 'areakm2': 'no label', });
lyr_OrienteConstruoCivil_5.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'rh': 'no label', 'nome_rh': 'no label', 'area_km': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'area_ha': 'no label', 'areaha_tes': 'no label', 'areakm2': 'no label', });
lyr_DASEngenharia_6.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'rh': 'no label', 'nome_rh': 'no label', 'area_km': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'area_ha': 'no label', 'areaha_tes': 'no label', 'areakm2': 'no label', });
lyr_Municpios_7.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'inline label - visible with data', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_FrentesMecanizadasRHIX_8.set('fieldLabels', {'Status': 'inline label - visible with data', 'Corpo Híd': 'inline label - visible with data', 'Município': 'inline label - visible with data', 'Empresa': 'inline label - visible with data', 'Classif.': 'inline label - visible with data', 'Início': 'inline label - visible with data', 'Término': 'inline label - visible with data', 'Antes': 'inline label - visible with data', 'Durante': 'inline label - visible with data', 'Depois': 'inline label - visible with data', });
lyr_FrentesMecanizadasRHVIeVIII_9.set('fieldLabels', {'Status': 'inline label - visible with data', 'Corpo Híd': 'inline label - visible with data', 'Município': 'inline label - visible with data', 'Empresa': 'inline label - visible with data', 'Classif.': 'inline label - visible with data', 'Início': 'inline label - visible with data', 'Término': 'inline label - visible with data', 'Antes': 'inline label - visible with data', 'Durante': 'inline label - visible with data', 'Depois': 'inline label - visible with data', });
lyr_FrentesMecanizadasRHV_10.set('fieldLabels', {'Status': 'inline label - visible with data', 'Corpo Híd': 'inline label - visible with data', 'Município': 'inline label - visible with data', 'Empresa': 'inline label - visible with data', 'Classif.': 'inline label - visible with data', 'Início': 'inline label - visible with data', 'Término': 'inline label - visible with data', 'Antes': 'inline label - visible with data', 'Durante': 'inline label - visible with data', 'Depois': 'inline label - visible with data', });
lyr_FrentesMecanizadasRHIVeVII_11.set('fieldLabels', {'status': 'inline label - visible with data', 'corpo híd': 'inline label - visible with data', 'município': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'classif.': 'inline label - visible with data', 'início': 'inline label - visible with data', 'término': 'inline label - visible with data', 'antes': 'inline label - visible with data', 'durante': 'inline label - visible with data', 'depois': 'inline label - visible with data', });
lyr_FrentesMecanizadasRHIII_12.set('fieldLabels', {'corpo híd': 'inline label - visible with data', 'município': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'início': 'inline label - visible with data', 'término': 'inline label - visible with data', 'classif.': 'inline label - visible with data', 'antes': 'inline label - visible with data', 'durante': 'inline label - visible with data', 'depois': 'inline label - visible with data', 'status': 'inline label - visible with data', });
lyr_FrentesMecanizadasRHIeII_13.set('fieldLabels', {'corpo híd': 'inline label - visible with data', 'município': 'inline label - visible with data', 'status iii': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'classifica': 'inline label - visible with data', 'início': 'inline label - visible with data', 'término': 'inline label - visible with data', 'antes': 'inline label - visible with data', 'durante': 'inline label - visible with data', 'depois': 'inline label - visible with data', });
lyr_FrentesMecanizadasRHIeII_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});