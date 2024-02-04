$(document).ready(function() {

  var cupons = {
    'cupom_1': {
      url: 'url_1',
      valor: 15
    },
    'cupom_2': {
      url: 'url_2',
      valor: 7
    },
  };
  
  var url = new URL(window.location.href);
  var params = new URLSearchParams(url.search);

  var cupom = params.get('cupom');

  if (cupom != undefined) {

    if (cupons.hasOwnProperty(cupom)) {
      var url = cupons[cupom]['url'];
      var valor = cupons[cupom]['valor'];

      $('#btn-comprar').attr('href', url);
      $('#valor').html(`R$${valor}`)
    }
    
  }

  $('#btn-ir-comprar').click(function() {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  });

});