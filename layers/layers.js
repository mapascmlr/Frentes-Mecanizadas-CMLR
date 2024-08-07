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
var format_RHIX_1 = new ol.format.GeoJSON();
var features_RHIX_1 = format_RHIX_1.readFeatures(json_RHIX_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RHIX_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RHIX_1.addFeatures(features_RHIX_1);
var lyr_RHIX_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RHIX_1, 
                style: style_RHIX_1,
                popuplayertitle: "RH IX",
                interactive: false,
                title: '<img src="styles/legend/RHIX_1.png" /> RH IX'
            });
var format_FrentesMecanizadasRHIX_2 = new ol.format.GeoJSON();
var features_FrentesMecanizadasRHIX_2 = format_FrentesMecanizadasRHIX_2.readFeatures(json_FrentesMecanizadasRHIX_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrentesMecanizadasRHIX_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrentesMecanizadasRHIX_2.addFeatures(features_FrentesMecanizadasRHIX_2);
var lyr_FrentesMecanizadasRHIX_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrentesMecanizadasRHIX_2, 
                style: style_FrentesMecanizadasRHIX_2,
                popuplayertitle: "Frentes Mecanizadas RH IX",
                interactive: true,
    title: 'Frentes Mecanizadas RH IX<br />\
    <img src="styles/legend/FrentesMecanizadasRHIX_2_0.png" /> Em Andamento<br />\
    <img src="styles/legend/FrentesMecanizadasRHIX_2_1.png" /> Finalizado<br />\
    <img src="styles/legend/FrentesMecanizadasRHIX_2_2.png" /> Iniciado<br />\
    <img src="styles/legend/FrentesMecanizadasRHIX_2_3.png" /> Vistoria Prévia<br />'
        });
var format_RHVIeVIII_3 = new ol.format.GeoJSON();
var features_RHVIeVIII_3 = format_RHVIeVIII_3.readFeatures(json_RHVIeVIII_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RHVIeVIII_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RHVIeVIII_3.addFeatures(features_RHVIeVIII_3);
var lyr_RHVIeVIII_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RHVIeVIII_3, 
                style: style_RHVIeVIII_3,
                popuplayertitle: "RH VI e VIII",
                interactive: false,
    title: 'RH VI e VIII<br />\
    <img src="styles/legend/RHVIeVIII_3_0.png" /> RH-VI<br />\
    <img src="styles/legend/RHVIeVIII_3_1.png" /> RH-VIII<br />'
        });
var format_FrentesMecanizadasRHVIeVIII_4 = new ol.format.GeoJSON();
var features_FrentesMecanizadasRHVIeVIII_4 = format_FrentesMecanizadasRHVIeVIII_4.readFeatures(json_FrentesMecanizadasRHVIeVIII_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrentesMecanizadasRHVIeVIII_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrentesMecanizadasRHVIeVIII_4.addFeatures(features_FrentesMecanizadasRHVIeVIII_4);
var lyr_FrentesMecanizadasRHVIeVIII_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrentesMecanizadasRHVIeVIII_4, 
                style: style_FrentesMecanizadasRHVIeVIII_4,
                popuplayertitle: "Frentes Mecanizadas RH VI e VIII",
                interactive: true,
    title: 'Frentes Mecanizadas RH VI e VIII<br />\
    <img src="styles/legend/FrentesMecanizadasRHVIeVIII_4_0.png" /> Em Andamento<br />\
    <img src="styles/legend/FrentesMecanizadasRHVIeVIII_4_1.png" /> Finalizado<br />\
    <img src="styles/legend/FrentesMecanizadasRHVIeVIII_4_2.png" /> Iniciado<br />\
    <img src="styles/legend/FrentesMecanizadasRHVIeVIII_4_3.png" /> Vistoria Prévia<br />'
        });
var format_RHV_5 = new ol.format.GeoJSON();
var features_RHV_5 = format_RHV_5.readFeatures(json_RHV_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RHV_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RHV_5.addFeatures(features_RHV_5);
var lyr_RHV_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RHV_5, 
                style: style_RHV_5,
                popuplayertitle: "RH V",
                interactive: false,
                title: '<img src="styles/legend/RHV_5.png" /> RH V'
            });
var format_FrentesMecanizadasRHV_6 = new ol.format.GeoJSON();
var features_FrentesMecanizadasRHV_6 = format_FrentesMecanizadasRHV_6.readFeatures(json_FrentesMecanizadasRHV_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrentesMecanizadasRHV_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrentesMecanizadasRHV_6.addFeatures(features_FrentesMecanizadasRHV_6);
var lyr_FrentesMecanizadasRHV_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrentesMecanizadasRHV_6, 
                style: style_FrentesMecanizadasRHV_6,
                popuplayertitle: "Frentes Mecanizadas RH V",
                interactive: true,
    title: 'Frentes Mecanizadas RH V<br />\
    <img src="styles/legend/FrentesMecanizadasRHV_6_0.png" /> Em Andamento<br />\
    <img src="styles/legend/FrentesMecanizadasRHV_6_1.png" /> Finalizado<br />\
    <img src="styles/legend/FrentesMecanizadasRHV_6_2.png" /> Iniciado<br />\
    <img src="styles/legend/FrentesMecanizadasRHV_6_3.png" /> Vistoria Prévia<br />'
        });
var format_RHIVeVII_7 = new ol.format.GeoJSON();
var features_RHIVeVII_7 = format_RHIVeVII_7.readFeatures(json_RHIVeVII_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RHIVeVII_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RHIVeVII_7.addFeatures(features_RHIVeVII_7);
var lyr_RHIVeVII_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RHIVeVII_7, 
                style: style_RHIVeVII_7,
                popuplayertitle: "RH IV e VII",
                interactive: false,
    title: 'RH IV e VII<br />\
    <img src="styles/legend/RHIVeVII_7_0.png" /> RH-IV<br />\
    <img src="styles/legend/RHIVeVII_7_1.png" /> RH-VII<br />'
        });
var format_FrentesMecanizadasRHIVeVII_8 = new ol.format.GeoJSON();
var features_FrentesMecanizadasRHIVeVII_8 = format_FrentesMecanizadasRHIVeVII_8.readFeatures(json_FrentesMecanizadasRHIVeVII_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrentesMecanizadasRHIVeVII_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrentesMecanizadasRHIVeVII_8.addFeatures(features_FrentesMecanizadasRHIVeVII_8);
var lyr_FrentesMecanizadasRHIVeVII_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrentesMecanizadasRHIVeVII_8, 
                style: style_FrentesMecanizadasRHIVeVII_8,
                popuplayertitle: "Frentes Mecanizadas RH IV e VII",
                interactive: true,
    title: 'Frentes Mecanizadas RH IV e VII<br />\
    <img src="styles/legend/FrentesMecanizadasRHIVeVII_8_0.png" /> Em Andamento<br />\
    <img src="styles/legend/FrentesMecanizadasRHIVeVII_8_1.png" /> Finalizado<br />\
    <img src="styles/legend/FrentesMecanizadasRHIVeVII_8_2.png" /> Iniciado<br />\
    <img src="styles/legend/FrentesMecanizadasRHIVeVII_8_3.png" /> Vistoria Prévia<br />'
        });
var format_RHIII_9 = new ol.format.GeoJSON();
var features_RHIII_9 = format_RHIII_9.readFeatures(json_RHIII_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RHIII_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RHIII_9.addFeatures(features_RHIII_9);
var lyr_RHIII_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RHIII_9, 
                style: style_RHIII_9,
                popuplayertitle: "RH III",
                interactive: false,
                title: '<img src="styles/legend/RHIII_9.png" /> RH III'
            });
var format_FrentesMecanizadasRHIII_10 = new ol.format.GeoJSON();
var features_FrentesMecanizadasRHIII_10 = format_FrentesMecanizadasRHIII_10.readFeatures(json_FrentesMecanizadasRHIII_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrentesMecanizadasRHIII_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrentesMecanizadasRHIII_10.addFeatures(features_FrentesMecanizadasRHIII_10);
var lyr_FrentesMecanizadasRHIII_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrentesMecanizadasRHIII_10, 
                style: style_FrentesMecanizadasRHIII_10,
                popuplayertitle: "Frentes Mecanizadas RH III",
                interactive: true,
    title: 'Frentes Mecanizadas RH III<br />\
    <img src="styles/legend/FrentesMecanizadasRHIII_10_0.png" /> Em Andamento<br />\
    <img src="styles/legend/FrentesMecanizadasRHIII_10_1.png" /> Finalizado<br />\
    <img src="styles/legend/FrentesMecanizadasRHIII_10_2.png" /> Iniciado<br />\
    <img src="styles/legend/FrentesMecanizadasRHIII_10_3.png" /> Vistoria Prévia<br />'
        });
var format_RHII_11 = new ol.format.GeoJSON();
var features_RHII_11 = format_RHII_11.readFeatures(json_RHII_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RHII_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RHII_11.addFeatures(features_RHII_11);
var lyr_RHII_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RHII_11, 
                style: style_RHII_11,
                popuplayertitle: "RH II",
                interactive: false,
                title: '<img src="styles/legend/RHII_11.png" /> RH II'
            });
var format_RHI_12 = new ol.format.GeoJSON();
var features_RHI_12 = format_RHI_12.readFeatures(json_RHI_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RHI_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RHI_12.addFeatures(features_RHI_12);
var lyr_RHI_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RHI_12, 
                style: style_RHI_12,
                popuplayertitle: "RH I",
                interactive: false,
                title: '<img src="styles/legend/RHI_12.png" /> RH I'
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
var group_RHIeII = new ol.layer.Group({
                                layers: [lyr_RHII_11,lyr_RHI_12,lyr_FrentesMecanizadasRHIeII_13,],
                                fold: "open",
                                title: "RH I e II"});
var group_RHIII = new ol.layer.Group({
                                layers: [lyr_RHIII_9,lyr_FrentesMecanizadasRHIII_10,],
                                fold: "open",
                                title: "RH III"});
var group_RHIVVII = new ol.layer.Group({
                                layers: [lyr_RHIVeVII_7,lyr_FrentesMecanizadasRHIVeVII_8,],
                                fold: "open",
                                title: "RH IV VII"});
var group_RHV = new ol.layer.Group({
                                layers: [lyr_RHV_5,lyr_FrentesMecanizadasRHV_6,],
                                fold: "open",
                                title: "RH V"});
var group_RHVIeVIII = new ol.layer.Group({
                                layers: [lyr_RHVIeVIII_3,lyr_FrentesMecanizadasRHVIeVIII_4,],
                                fold: "open",
                                title: "RH VI e VIII"});
var group_RHIX = new ol.layer.Group({
                                layers: [lyr_RHIX_1,lyr_FrentesMecanizadasRHIX_2,],
                                fold: "open",
                                title: "RH IX"});

lyr_GoogleSatellite_0.setVisible(true);lyr_RHIX_1.setVisible(true);lyr_FrentesMecanizadasRHIX_2.setVisible(true);lyr_RHVIeVIII_3.setVisible(true);lyr_FrentesMecanizadasRHVIeVIII_4.setVisible(true);lyr_RHV_5.setVisible(true);lyr_FrentesMecanizadasRHV_6.setVisible(true);lyr_RHIVeVII_7.setVisible(true);lyr_FrentesMecanizadasRHIVeVII_8.setVisible(true);lyr_RHIII_9.setVisible(true);lyr_FrentesMecanizadasRHIII_10.setVisible(true);lyr_RHII_11.setVisible(true);lyr_RHI_12.setVisible(true);lyr_FrentesMecanizadasRHIeII_13.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_RHIX,group_RHVIeVIII,group_RHV,group_RHIVVII,group_RHIII,group_RHIeII];
lyr_RHIX_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'id': 'id', 'rh': 'rh', 'nome_rh': 'nome_rh', 'area_km': 'area_km', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'area_ha': 'area_ha', 'areaha_tes': 'areaha_tes', 'areakm2': 'areakm2', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', });
lyr_FrentesMecanizadasRHIX_2.set('fieldAliases', {'Status': 'Status', 'Corpo Híd': 'Corpo Hídrico', 'Município': 'Município', 'Empresa': 'Empresa', 'Classif.': 'Classificação', 'Início': 'Início', 'Término': 'Término', 'Antes': 'Antes', 'Durante': 'Durante', 'Depois': 'Depois', });
lyr_RHVIeVIII_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'id': 'id', 'rh': 'rh', 'nome_rh': 'nome_rh', 'area_km': 'area_km', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'area_ha': 'area_ha', 'areaha_tes': 'areaha_tes', 'areakm2': 'areakm2', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', });
lyr_FrentesMecanizadasRHVIeVIII_4.set('fieldAliases', {'Status': 'Status', 'Corpo Híd': 'Corpo Hídrico', 'Município': 'Município', 'Empresa': 'Empresa', 'Classif.': 'Classificação', 'Início': 'Início', 'Término': 'Término', 'Antes': 'Antes', 'Durante': 'Durante', 'Depois': 'Depois', });
lyr_RHV_5.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'id': 'id', 'rh': 'rh', 'nome_rh': 'nome_rh', 'area_km': 'area_km', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'area_ha': 'area_ha', 'areaha_tes': 'areaha_tes', 'areakm2': 'areakm2', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', });
lyr_FrentesMecanizadasRHV_6.set('fieldAliases', {'Status': 'Status', 'Corpo Híd': 'Corpo Hídrico', 'Município': 'Município', 'Empresa': 'Empresa', 'Classif.': 'Classificação', 'Início': 'Início', 'Término': 'Término', 'Antes': 'Antes', 'Durante': 'Durante', 'Depois': 'Depois', });
lyr_RHIVeVII_7.set('fieldAliases', {'qc_id': 'qc_id', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'id': 'id', 'rh': 'rh', 'nome_rh': 'nome_rh', 'area_km': 'area_km', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'area_ha': 'area_ha', 'areaha_tes': 'areaha_tes', 'areakm2': 'areakm2', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', });
lyr_FrentesMecanizadasRHIVeVII_8.set('fieldAliases', {'status': 'Status', 'corpo híd': 'Corpo Hídrico', 'município': 'Município', 'empresa': 'Empresa', 'classif.': 'Classificação', 'início': 'Início', 'término': 'Término', 'antes': 'Antes', 'durante': 'Durante', 'depois': 'Depois', });
lyr_RHIII_9.set('fieldAliases', {'objectid': 'objectid', 'id': 'id', 'rh': 'rh', 'nome_rh': 'nome_rh', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', });
lyr_FrentesMecanizadasRHIII_10.set('fieldAliases', {'corpo híd': 'Corpo Hídrico', 'município': 'Município', 'empresa': 'Empresa', 'início': 'Início', 'término': 'Término', 'classif.': 'Classificação', 'antes': 'Antes', 'durante': 'Durante', 'depois': 'Depois', 'status': 'Status', });
lyr_RHII_11.set('fieldAliases', {'rh': 'rh', 'nome_rh': 'nome_rh', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', });
lyr_RHI_12.set('fieldAliases', {'rh': 'rh', 'nome_rh': 'nome_rh', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', });
lyr_FrentesMecanizadasRHIeII_13.set('fieldAliases', {'corpo híd': 'Corpo Hídrico', 'município': 'Município', 'status iii': 'Status', 'empresa': 'Empresa', 'classifica': 'Classificação', 'início': 'Início', 'término': 'Término', 'antes': 'Antes', 'durante': 'Durante', 'depois': 'Depois', });
lyr_RHIX_1.set('fieldImages', {'ogc_fid': '', 'objectid': '', 'id': '', 'rh': '', 'nome_rh': '', 'area_km': '', 'shape_leng': '', 'shape_area': '', 'area_ha': '', 'areaha_tes': '', 'areakm2': '', 'auxiliary_': '', 'auxiliar_1': '', });
lyr_FrentesMecanizadasRHIX_2.set('fieldImages', {'Status': 'TextEdit', 'Corpo Híd': 'TextEdit', 'Município': 'TextEdit', 'Empresa': 'TextEdit', 'Classif.': 'TextEdit', 'Início': 'TextEdit', 'Término': 'TextEdit', 'Antes': 'TextEdit', 'Durante': 'TextEdit', 'Depois': 'TextEdit', });
lyr_RHVIeVIII_3.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'Range', 'id': 'TextEdit', 'rh': 'TextEdit', 'nome_rh': 'TextEdit', 'area_km': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'area_ha': 'TextEdit', 'areaha_tes': 'TextEdit', 'areakm2': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', });
lyr_FrentesMecanizadasRHVIeVIII_4.set('fieldImages', {'Status': 'TextEdit', 'Corpo Híd': 'TextEdit', 'Município': 'TextEdit', 'Empresa': 'TextEdit', 'Classif.': 'TextEdit', 'Início': 'TextEdit', 'Término': 'TextEdit', 'Antes': 'TextEdit', 'Durante': 'TextEdit', 'Depois': 'TextEdit', });
lyr_RHV_5.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'Range', 'id': 'TextEdit', 'rh': 'TextEdit', 'nome_rh': 'TextEdit', 'area_km': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'area_ha': 'TextEdit', 'areaha_tes': 'TextEdit', 'areakm2': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', });
lyr_FrentesMecanizadasRHV_6.set('fieldImages', {'Status': 'TextEdit', 'Corpo Híd': 'TextEdit', 'Município': 'TextEdit', 'Empresa': 'TextEdit', 'Classif.': 'TextEdit', 'Início': 'TextEdit', 'Término': 'TextEdit', 'Antes': 'TextEdit', 'Durante': 'TextEdit', 'Depois': 'TextEdit', });
lyr_RHIVeVII_7.set('fieldImages', {'qc_id': 'TextEdit', 'ogc_fid': 'Range', 'objectid': 'Range', 'id': 'TextEdit', 'rh': 'TextEdit', 'nome_rh': 'TextEdit', 'area_km': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'area_ha': 'TextEdit', 'areaha_tes': 'TextEdit', 'areakm2': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', });
lyr_FrentesMecanizadasRHIVeVII_8.set('fieldImages', {'status': 'TextEdit', 'corpo híd': 'TextEdit', 'município': 'TextEdit', 'empresa': 'TextEdit', 'classif.': 'TextEdit', 'início': 'TextEdit', 'término': 'TextEdit', 'antes': 'TextEdit', 'durante': 'TextEdit', 'depois': 'TextEdit', });
lyr_RHIII_9.set('fieldImages', {'objectid': '', 'id': '', 'rh': '', 'nome_rh': '', 'auxiliary_': '', 'auxiliar_1': '', });
lyr_FrentesMecanizadasRHIII_10.set('fieldImages', {'corpo híd': 'TextEdit', 'município': 'TextEdit', 'empresa': 'TextEdit', 'início': 'TextEdit', 'término': 'TextEdit', 'classif.': 'TextEdit', 'antes': 'TextEdit', 'durante': 'TextEdit', 'depois': 'TextEdit', 'status': 'TextEdit', });
lyr_RHII_11.set('fieldImages', {'rh': '', 'nome_rh': '', 'auxiliary_': '', 'auxiliar_1': '', });
lyr_RHI_12.set('fieldImages', {'rh': '', 'nome_rh': '', 'auxiliary_': '', 'auxiliar_1': '', });
lyr_FrentesMecanizadasRHIeII_13.set('fieldImages', {'corpo híd': 'TextEdit', 'município': 'TextEdit', 'status iii': 'TextEdit', 'empresa': 'TextEdit', 'classifica': 'TextEdit', 'início': 'TextEdit', 'término': 'TextEdit', 'antes': 'TextEdit', 'durante': 'TextEdit', 'depois': 'TextEdit', });
lyr_RHIX_1.set('fieldLabels', {'ogc_fid': 'inline label - visible with data', 'objectid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'rh': 'inline label - visible with data', 'nome_rh': 'inline label - visible with data', 'area_km': 'inline label - visible with data', 'shape_leng': 'inline label - visible with data', 'shape_area': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'areaha_tes': 'inline label - visible with data', 'areakm2': 'inline label - visible with data', 'auxiliary_': 'inline label - visible with data', 'auxiliar_1': 'inline label - visible with data', });
lyr_FrentesMecanizadasRHIX_2.set('fieldLabels', {'Status': 'inline label - visible with data', 'Corpo Híd': 'inline label - visible with data', 'Município': 'inline label - visible with data', 'Empresa': 'inline label - visible with data', 'Classif.': 'inline label - visible with data', 'Início': 'inline label - visible with data', 'Término': 'inline label - visible with data', 'Antes': 'inline label - visible with data', 'Durante': 'inline label - visible with data', 'Depois': 'inline label - visible with data', });
lyr_RHVIeVIII_3.set('fieldLabels', {'ogc_fid': 'inline label - visible with data', 'objectid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'rh': 'inline label - visible with data', 'nome_rh': 'inline label - visible with data', 'area_km': 'inline label - visible with data', 'shape_leng': 'inline label - visible with data', 'shape_area': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'areaha_tes': 'inline label - visible with data', 'areakm2': 'inline label - visible with data', 'auxiliary_': 'inline label - visible with data', 'auxiliar_1': 'inline label - visible with data', });
lyr_FrentesMecanizadasRHVIeVIII_4.set('fieldLabels', {'Status': 'inline label - visible with data', 'Corpo Híd': 'inline label - visible with data', 'Município': 'inline label - visible with data', 'Empresa': 'inline label - visible with data', 'Classif.': 'inline label - visible with data', 'Início': 'inline label - visible with data', 'Término': 'inline label - visible with data', 'Antes': 'inline label - visible with data', 'Durante': 'inline label - visible with data', 'Depois': 'inline label - visible with data', });
lyr_RHV_5.set('fieldLabels', {'ogc_fid': 'inline label - visible with data', 'objectid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'rh': 'inline label - visible with data', 'nome_rh': 'inline label - visible with data', 'area_km': 'inline label - visible with data', 'shape_leng': 'inline label - visible with data', 'shape_area': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'areaha_tes': 'inline label - visible with data', 'areakm2': 'inline label - visible with data', 'auxiliary_': 'inline label - visible with data', 'auxiliar_1': 'inline label - visible with data', });
lyr_FrentesMecanizadasRHV_6.set('fieldLabels', {'Status': 'inline label - visible with data', 'Corpo Híd': 'inline label - visible with data', 'Município': 'inline label - visible with data', 'Empresa': 'inline label - visible with data', 'Classif.': 'inline label - visible with data', 'Início': 'inline label - visible with data', 'Término': 'inline label - visible with data', 'Antes': 'inline label - visible with data', 'Durante': 'inline label - visible with data', 'Depois': 'inline label - visible with data', });
lyr_RHIVeVII_7.set('fieldLabels', {'qc_id': 'inline label - visible with data', 'ogc_fid': 'inline label - visible with data', 'objectid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'rh': 'inline label - visible with data', 'nome_rh': 'inline label - visible with data', 'area_km': 'inline label - visible with data', 'shape_leng': 'inline label - visible with data', 'shape_area': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'areaha_tes': 'inline label - visible with data', 'areakm2': 'inline label - visible with data', 'auxiliary_': 'inline label - visible with data', 'auxiliar_1': 'inline label - visible with data', });
lyr_FrentesMecanizadasRHIVeVII_8.set('fieldLabels', {'status': 'inline label - visible with data', 'corpo híd': 'inline label - visible with data', 'município': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'classif.': 'inline label - visible with data', 'início': 'inline label - visible with data', 'término': 'inline label - visible with data', 'antes': 'inline label - visible with data', 'durante': 'inline label - visible with data', 'depois': 'inline label - visible with data', });
lyr_RHIII_9.set('fieldLabels', {'objectid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'rh': 'inline label - visible with data', 'nome_rh': 'inline label - visible with data', 'auxiliary_': 'inline label - visible with data', 'auxiliar_1': 'inline label - visible with data', });
lyr_FrentesMecanizadasRHIII_10.set('fieldLabels', {'corpo híd': 'inline label - visible with data', 'município': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'início': 'inline label - visible with data', 'término': 'inline label - visible with data', 'classif.': 'inline label - visible with data', 'antes': 'inline label - visible with data', 'durante': 'inline label - visible with data', 'depois': 'inline label - visible with data', 'status': 'inline label - visible with data', });
lyr_RHII_11.set('fieldLabels', {'rh': 'inline label - visible with data', 'nome_rh': 'inline label - visible with data', 'auxiliary_': 'inline label - visible with data', 'auxiliar_1': 'inline label - visible with data', });
lyr_RHI_12.set('fieldLabels', {'rh': 'inline label - visible with data', 'nome_rh': 'inline label - visible with data', 'auxiliary_': 'inline label - visible with data', 'auxiliar_1': 'inline label - visible with data', });
lyr_FrentesMecanizadasRHIeII_13.set('fieldLabels', {'corpo híd': 'inline label - visible with data', 'município': 'inline label - visible with data', 'status iii': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'classifica': 'inline label - visible with data', 'início': 'inline label - visible with data', 'término': 'inline label - visible with data', 'antes': 'inline label - visible with data', 'durante': 'inline label - visible with data', 'depois': 'inline label - visible with data', });
lyr_FrentesMecanizadasRHIeII_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});