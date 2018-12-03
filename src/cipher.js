window.cipher = {
//declaramos la funcion para cifrar el mensaje
encode : function (offset,phrase){
  let cipherPhrase ='';
  let chartValue = 0;
      for (var i=0; i<phrase.length ; i++){
          chartValue = phrase.charCodeAt(i);
          if (chartValue>=65 && chartValue<=90){
            chartValue = (chartValue - 65 + parseInt(offset))%26+65;
            chartValue = String.fromCharCode(chartValue);
            cipherPhrase += chartValue
          }
          if(chartValue==32) {
            cipherPhrase += " ";
          }
        }
  return cipherPhrase;
},

decode : function(offset,phrase){
  let cipherPhrase ='';
  let chartValue = 0;
  let numerador=0;
        for (var i=0; i<phrase.length ; i++){
          chartValue = phrase.charCodeAt(i);
          numerador= (chartValue - 65 - parseInt(offset));
          if (chartValue>=65 && chartValue<=90){
            if (numerador>0 || ((numerador)%26)===0) {
            chartValue = (numerador)%26+65;
            }else {
              chartValue = ((numerador)%26+26)+65;
            }
            chartValue = String.fromCharCode(chartValue);
            cipherPhrase += chartValue;
          }
          if(chartValue==32){
            cipherPhrase += " ";
          }
        }
  return cipherPhrase;
}
// ...
};
