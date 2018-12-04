let btnCypher = document.getElementById('btn-cypher');
let btnDeCypher = document.getElementById('btn-decypher');
let btnHome = document.getElementById('btn-home');
let btnWhatsapp = document.getElementById('btn-whatsapp');
let btnCopy = document.getElementById('btn-copy');
let phrase="";
let offset=0;
let valor="";

const ocultDiv1 =() =>{
  document.getElementById("div2").style.display='block';
  document.getElementById("div1").style.display='none';
}
const ocultDiv2 =() =>{
  document.getElementById("div1").style.display='block';
  document.getElementById("div2").style.display='none';
}
btnCypher.addEventListener('click', () => {
  phrase = document.getElementById('phrase').value;
  offset = document.getElementById('offset').value;
  ocultDiv1();
  valor= cipher.encode(offset,phrase.toUpperCase());
  document.getElementById('p-span-result').innerHTML="CON CLAVE ";
  document.getElementById('result').value=valor;
});

btnDeCypher.addEventListener('click', () => {
  phrase = document.getElementById('phrase').value;
  offset = document.getElementById('offset').value;
  ocultDiv1();
  valor= cipher.decode(offset,phrase.toUpperCase());
  document.getElementById('p-span-result').innerHTML="SIN CLAVE";
  document.getElementById('result').value=valor;
});

btnHome.addEventListener('click', () => {
  ocultDiv2();
  document.getElementById('phrase').value="";
  document.getElementById('offset').value="";
});

btnWhatsapp.addEventListener('click', () => {
  let celPhone = document.getElementById('input-whatsapp').value;
  celPhone="https://api.whatsapp.com/send?phone=51"+celPhone+"&text="+(document.getElementById('result').value)+"                        http://bit.ly/protected_chat";
  window.open(celPhone);
});

btnCopy.addEventListener('click', () => {
   var aux = document.getElementById('result');
   aux.select();
   // Copia el texto seleccionado
   document.execCommand("copy");
});

