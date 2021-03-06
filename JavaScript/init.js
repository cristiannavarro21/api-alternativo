const articulos = "https://cristiannavarro21.github.io/api-alternativo/articulos.json"
const cliente = "https://cristiannavarro21.github.io/api-alternativo/cliente.json"
const pedido = "https://cristiannavarro21.github.io/api-alternativo/pedido.json"

var showSpinner = function(){
    document.getElementById("spinner-wrapper").style.display = "block";
  }
  
  var hideSpinner = function(){
    document.getElementById("spinner-wrapper").style.display = "none";
  }
  
  var getJSONData = function(url){
      var result = {};
      showSpinner();
      return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }else{
          throw Error(response.statusText);
        }
      })
      .then(function(response) {
            result.status = 'ok';
            result.data = response;
            hideSpinner();
            return result;
      })
      .catch(function(error) {
          result.status = 'error';
          result.data = error;
          hideSpinner();
          return result;
      });
  }