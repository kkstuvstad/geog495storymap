//colors created for arrows

var colors = chroma.scale('RdYlBu').mode('lch').colors(3);

for (i = 0; i < 3; i++) {
  $('head').append($("<style> .marker-color-" + (i + 1).toString() + " { color: " + colors[i] + "; font-size: 15px; text-shadow: 0 0 3px #ffffff;} </style>"));
}

//legends for each layer defined
var legend1 = '<b>Field Trip Routes</b><br /><i style="background: ' + colors[2] + '; opacity: 0.5;"></i><p>Trip #1</p><i style="background: ' + colors[1] + '; opacity: 0.5;"></i><p>Trip #2</p><i style="background: ' + colors[0] + '; opacity: 0.5;"></i><p>Trip #3</p>'
//layers
var layers = {
  layer1: {
    layer: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	     maxZoom: 18,
	     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a> | Story Map created by Kristoffer Stuvstad'
    }),
    legend: legend1
  },
  layer2: {
    layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	     maxZoom: 18,
	     attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community | Story Map created by Kristoffer Stuvstad'
    }),
  },
  layer3: {
    layer: L.swoopyArrow([44.568067, -123.280298], [44.504378, -123.551216], {
      color: "#64A7D9",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer4: {
    layer: L.swoopyArrow([44.504378, -123.551216], [44.427943, -124.067588], {
      color: "#64A7D9",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer5: {
    layer: L.swoopyArrow([44.427943, -124.067588], [45.354083, -123.97136], {
      color: "#64A7D9",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer6: {
    layer: L.swoopyArrow([45.354083, -123.97136], [45.48454, -123.844351], {
      color: "#64A7D9",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer7: {
    layer: L.swoopyArrow([45.48454, -123.844351], [46.122811, -123.934084], {
      color: "#64A7D9",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer8: {
    layer: L.swoopyArrow([46.122811, -123.934084], [46.134491, -123.88032], {
      color: "#64A7D9",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer9: {
    layer: L.swoopyArrow([46.134491, -123.88032], [46.189987, -123.823622], {
      color: "#64A7D9",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer10: {
    layer: L.swoopyArrow([46.189987, -123.823622], [45.539653, -122.244373], {
      color: "#64A7D9",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer11: {
    layer: L.swoopyArrow([45.539653, -122.244373], [44.568067, -123.280298], {
      color: "#64A7D9",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer12: {
    layer: L.swoopyArrow([44.568067, -123.280298], [45.499859, -122.684197], {
      color: "#FF0000",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer13: {
    layer: L.swoopyArrow([45.499859, -122.684197], [45.511908, -122.597848], {
      color: "#FF0000",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer14: {
    layer: L.swoopyArrow([45.511908, -122.597848], [45.559083, -122.644099], {
      color: "#FF0000",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer15: {
    layer: L.swoopyArrow([45.559083, -122.644099], [45.515366, -122.673311], {
      color: "#FF0000",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer16: {
    layer: L.swoopyArrow([45.515366, -122.673311], [44.568067, -123.280298], {
      color: "#FF0000",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer17: {
    layer: L.swoopyArrow([44.568067, -123.280298], [44.613887, -123.630814], {
      color: "#FF0000",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer18: {
    layer: L.swoopyArrow([44.613887, -123.630814], [44.636436, -123.796003], {
      color: "#FF0000",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer19: {
    layer: L.swoopyArrow([44.636436, -123.796003], [44.72621, -124.058214], {
      color: "#FF0000",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer20: {
    layer: L.swoopyArrow([44.72621, -124.058214], [44.959493, -124.020181], {
      color: "#FF0000",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer21: {
    layer: L.swoopyArrow([44.959493, -124.020181], [44.568067, -123.280298], {
      color: "#FF0000",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer22: {
    layer: L.swoopyArrow([44.568067, -123.280298], [44.658784, -123.235155], {
      color: "#FFA500",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer23: {
    layer: L.swoopyArrow([44.658784, -123.235155], [44.410418, -122.653989], {
      color: "#FFA500",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer24: {
    layer: L.swoopyArrow([44.410418, -122.653989], [44.400011, -122.092044], {
      color: "#FFA500",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer25: {
    layer: L.swoopyArrow([44.400011, -122.092044], [44.045212, -121.316997], {
      color: "#FFA500",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer26: {
    layer: L.swoopyArrow([44.045212, -121.316997], [43.88536, -121.447999], {
      color: "#FFA500",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer27: {
    layer: L.swoopyArrow([43.88536, -121.447999], [44.042979, -121.333473], {
      color: "#FFA500",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer28: {
    layer: L.swoopyArrow([44.042979, -121.333473], [43.965922, -121.341418], {
      color: "#FFA500",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer29: {
    layer: L.swoopyArrow([43.965922, -121.341418], [44.420571, -121.856419], {
      color: "#FFA500",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer30: {
    layer: L.swoopyArrow([44.420571, -121.856419], [44.399346, -122.481387], {
      color: "#FFA500",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  },
  layer31: {
    layer: L.swoopyArrow([44.399346, -122.481387], [44.568067, -123.280298], {
      color: "#FFA500",
      textClassName: "swoopy-arrow",
      minZoom: 4,
      maxZoom: 12,
      factor: 0.75,
      wight: 5,
      iconSize: [60, 20],
      iconAnchor: [60, 5]
    })
  }
};

//scenes
var scenes = {
  scene1: {lat: 44.937132, lng: -121.957832, zoom: 7, layers: [layers.layer1, layers.layer3, layers.layer4,
  layers.layer5, layers.layer6, layers.layer7, layers.layer8, layers.layer9, layers.layer10, layers.layer11,
  layers.layer12, layers.layer13, layers.layer14, layers.layer15, layers.layer16, layers.layer17, layers.layer18,
  layers.layer19, layers.layer20, layers.layer21, layers.layer22, layers.layer23, layers.layer24, layers.layer25,
  layers.layer26, layers.layer27, layers.layer28, layers.layer29, layers.layer30, layers.layer31], name: "scene1"},
  scene2: {lat: 45.325718, lng: -123.327272, zoom: 8, layers: [layers.layer1, layers.layer3, layers.layer4,
  layers.layer5, layers.layer6, layers.layer7, layers.layer8, layers.layer9, layers.layer10,
  layers.layer11], name: "scene2"},
  scene3: {lat: 45.086410, lng: -122.921817, zoom: 9, layers: [layers.layer1, layers.layer12, layers.layer13,
  layers.layer14, layers.layer15, layers.layer16, layers.layer17, layers.layer18, layers.layer19,
  layers.layer20, layers.layer21], name: "scene3"},
  scene4: {lat: 44.285077, lng: -122.771880, zoom: 9, layers: [layers.layer1, layers.layer22, layers.layer23,
  layers.layer24, layers.layer25, layers.layer26, layers.layer27, layers.layer28, layers.layer29,
  layers.layer30, layers.layer31], name: "scene4"},
  scene5: {lat: 44.504378, lng: -123.551216, zoom: 15, layers: [layers.layer2], name: "scene5"},
  scene6: {lat: 44.427943, lng: -124.067588, zoom: 16, layers: [layers.layer2], name: "scene6"},
  scene7: {lat: 45.354083, lng: -123.971360, zoom: 15, layers: [layers.layer2], name: "scene7"},
  scene8: {lat: 45.484540, lng: -123.844351, zoom: 17, layers: [layers.layer2], name: "scene8"},
  scene9: {lat: 46.122811, lng: -123.934084, zoom: 16, layers: [layers.layer2], name: "scene9"},
  scene10: {lat: 46.134491, lng: -123.880320, zoom: 17, layers: [layers.layer2], name: "scene10"},
  scene11: {lat: 46.189987, lng: -123.823622, zoom: 17, layers: [layers.layer2], name: "scene11"},
  scene12: {lat: 45.539653, lng: -122.244373, zoom: 15, layers: [layers.layer2], name: "scene12"},
  scene13: {lat: 45.499859, lng: -122.684197, zoom: 16, layers: [layers.layer2], name: "scene13"},
  scene14: {lat: 45.511908, lng: -122.597848, zoom: 16, layers: [layers.layer2], name: "scene14"},
  scene15: {lat: 45.559083, lng: -122.644099, zoom: 17, layers: [layers.layer2], name: "scene15"},
  scene16: {lat: 45.515366, lng: -122.673311, zoom: 17, layers: [layers.layer2], name: "scene16"},
  scene17: {lat: 44.613887, lng: -123.630814, zoom: 17, layers: [layers.layer2], name: "scene17"},
  scene18: {lat: 44.636436, lng: -123.796003, zoom: 17, layers: [layers.layer2], name: "scene18"},
  scene19: {lat: 44.726210, lng: -124.058214, zoom: 17, layers: [layers.layer2], name: "scene19"},
  scene20: {lat: 44.959493, lng: -124.020181, zoom: 17, layers: [layers.layer2], name: "scene20"},
  scene21: {lat: 44.658784, lng: -123.235155, zoom: 17, layers: [layers.layer2], name: "scene21"},
  scene22: {lat: 44.410418, lng: -122.653989, zoom: 16, layers: [layers.layer2], name: "scene22"},
  scene23: {lat: 44.400011, lng: -122.092044, zoom: 16, layers: [layers.layer2], name: "scene23"},
  scene24: {lat: 44.045212, lng: -121.316997, zoom: 17, layers: [layers.layer2], name: "scene24"},
  scene25: {lat: 43.885360, lng: -121.447999, zoom: 18, layers: [layers.layer2], name: "scene25"},
  scene26: {lat: 43.965922, lng: -121.341418, zoom: 17, layers: [layers.layer2], name: "scene26"},
  scene27: {lat: 44.420571, lng: -121.856419, zoom: 21, layers: [layers.layer2], name: "scene27"}
};
//storymap object
$('#storymap').storymap({
    //triggerpos: `a string of percentage`, // A percentage string'33.333%',
    scenes: scenes,
    baselayer: layers.layer2,
    legend: true,
    loader: true,
    flyto: false,
    credits: 'Map built by Kristoffer Stuvstad',
    scalebar: true,
    scrolldown: true,
    progressline: true,
    navwidget: true,
    createMap: function () {
      var map = L.map($(".storymap-map")[0], {zoomControl: false}).setView([44, -120], 7);
      basemap = this.baselayer.layer.addTo(map);
      return map;
    }
});
