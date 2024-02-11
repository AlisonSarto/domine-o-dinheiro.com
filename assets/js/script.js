$(document).ready(function() {

  var url = 'https://pay.kiwify.com.br/sjSqrd3';
  var valor = 20;
  var valorAntigo = valor;

  var cupons = {
    '50-OFF': {
      url: 'https://pay.kiwify.com.br/eUdZizu',
      valor: 10
    },
  };
  
  var link = new URL(window.location.href);
  var params = new URLSearchParams(link.search);

  var cupom = params.get('cupom');

  if (cupom != undefined && cupons.hasOwnProperty(cupom)) {

    url = cupons[cupom]['url'];
    valor = cupons[cupom]['valor'];

    $('#cupom').text(cupom);
    $('#container-cupom').show();

    $('#antigo-valor').text(valorAntigo);
    $('#container-valor-antigo').show();
    
  }

  $('#btn-comprar').attr('href', url);
  $('#valor').html(`R$${valor}`);


  $('#btn-ir-comprar').click(function() {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  });

});
