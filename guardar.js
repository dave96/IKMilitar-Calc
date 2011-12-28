function guardar() {
  Downloadify.create('downloadify',{
    filename: function(){
      return 'reporte.txt';
    },
    data: function(){ 
      return generar_reporte();
    },
    onComplete: function(){ 
    },
    onCancel: function(){ 
    },
    onError: function(){ 
    },
    transparent: false,
    swf: './downloadify/media/downloadify.swf',
    downloadImage: './downloadify/images/download.png',
    width: 100,
    height: 30,
    transparent: true,
    append: false
  });
}
function generar_reporte() {
  return 'Generales: '+document.getElementById("generales").innerHTML+'\nManutención: '+document.getElementById("manutencion").innerHTML;
}
