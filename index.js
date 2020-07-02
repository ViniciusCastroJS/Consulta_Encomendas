

const select = e => document.querySelector(e);

function Buscar(){

  let user_numero = select("#consulta").value
  
  let options = { method: 'GET', mode: 'no-cors', cache: 'default'};
  let url = "http://localhost:3000/encomendas"
  let obj = {}
  
  let encomendaAPI = async function (){ 
    let encomenda = await fetch(url);
    let dados = await encomenda.json();
    const [ ...encomendas ] = dados;
    obj.encomendas = encomendas;

    let Index = obj.encomendas.findIndex(elem => elem.numero == user_numero);
    
  if(Index !== -1){
    const {cliente, valor, data, entregue} = obj.encomendas[Index];

    let dia = data.slice(8,10)
    let mes = data.slice(5,7)
    let ano = data.slice(0,4)
    let valorReal = valor.toFixed(2).toString().replace('.', ',')

    select(".valor").innerHTML = `R$${valorReal}`
    select(".cliente").innerHTML = `${ cliente.id } - ${cliente.nome}`
    select(".data").innerHTML = `${dia}/${mes}/${ano}`
    
    entregue ? 
      select(".status").innerHTML = "Entregue" : select(".status").innerHTML = "Entregar";
    
      select(".cliente").style.display = 'flex';
      select(".valor").style.display = 'flex';
      select(".data").style.display = 'flex';
      select(".status").style.display = 'flex';
    
  }else{
    select(".errorMessage").style.display = 'flex';
    select(".errorMessage2").style.display = 'flex';
  }
  }();


  select(".cliente").style.display = 'none';
  select(".valor").style.display = 'none';
  select(".data").style.display = 'none';
  select(".status").style.display = 'none';
  select(".errorMessage").style.display = 'none';
  select(".errorMessage2").style.display = 'none';
}


select("#buscar").addEventListener('click', Buscar)
