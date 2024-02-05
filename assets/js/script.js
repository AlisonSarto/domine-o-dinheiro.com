$(document).ready(function() {

  var url = 'https://pay.kiwify.com.br/sjSqrd3';
  var valor = 20;
  
  var cupons = {
    'PROMO25': {
      url: 'https://pay.kiwify.com.br/eUdZizu',
      valor: 15
    },
  };
  
  var link = new URL(window.location.href);
  var params = new URLSearchParams(link.search);

  var cupom = params.get('cupom');

  if (cupom != undefined && cupons.hasOwnProperty(cupom)) {

    url = cupons[cupom]['url'];
    valor = cupons[cupom]['valor'];
    
  }

  $('#btn-comprar').attr('href', url);
  $('#valor').html(`R$${valor}`);


  $('#btn-ir-comprar').click(function() {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  });

});
