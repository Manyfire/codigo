let tocar = () => alert('Good morning Wold');

let tocar2= document.getElementById('eventoLisenet');
tocar2.addEventListener('click',tocar);

//fromulario envio:
const form= document.querySelector('#formulario');

const enviar=(event) => {
 //  para aceder al nombre del input es:event.target y el name del input;
 const{name,email,password} = event.target;
// console.log(
//   name.value,
//   email.value,
//   password.value
//);
if((name.value == "many")&&(email.value == 'reer@gmail.com')&&(password.value == 1234)){
  console.log('Hello Many')
}
else {
  alert('BOLUDO!!...Please enter All champs correcly!');
  
}

}

form.addEventListener('submit',enviar);

//Navegacion-menu
const tocarMenu = () => {
  document.querySelector("header").style.backgroundColor="white";
}

for(let i=0; i<=3;i++){
  let menu= document.querySelectorAll('.menu')[i];

  menu.addEventListener('click',tocarMenu);
}