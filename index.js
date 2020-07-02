import './layout/style.sass';
import './index.html';

const select = e => document.querySelector(e);

function Buscar(){

  let user_id = select("#consulta").value
  
  let options = { method: 'GET', mode: 'no-cors', cache: 'default'};
  let url = "http://localhost:3000/encomendas"
  let encomendaAPI = [];

  fetch(url)
  .then( res => res.json())
  .then(data => {
    data.forEach( elem => encomendaAPI.push(elem))
  })
  
  let Index = encomendaAPI.findIndex(elem => elem.id === user_id);

  console.log(encomendaAPI)


  if(Index){
    const {cliente, valor, data, entregue} = encomendaAPI[Index]; 

    select(".cliente").innerHTML = `${ cliente.id } - ${cliente.nome}`
    select(".valor").innerHTML = `R$ ${ valor }`
    select(".cliente").innerHTML = `${ data } / ${data}`

    entregue ? 
    select(".status").innerHTML = "Entregue" : 
    select(".status").innerHTML = "Entregar";

    select(".sucessMessage").style.display = "flex";

  }else{
   
    select("errorMessage").style.display = "flex";
  }

}


select("#buscar").addEventListener('click', Buscar)
