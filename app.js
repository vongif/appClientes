let boton=document.getElementById('agregar');
let guardar=document.getElementById('guardar');
let lista=document.getElementById("lista");
let data=[];
boton.addEventListener("click",agregar);
guardar.addEventListener("click",save);
let cant=0;

function agregar(){
    let cliente =document.querySelector('#cliente').value;
    let sucursal = parseFloat(document.querySelector('#sucursal').value);
    let razonSocial = document.querySelector('#razonSocial').value
    let fletero = parseFloat(document.querySelector('#fletero').value)
    let reparto= parseFloat(document.querySelector('#reparto').value)
    let domicilio= document.querySelector('#domicilio').value
    let localidad= document.querySelector('#localidad').value
        
    //agrega elementos al arreglo
    data.push(
        {"cliente":cliente,"sucursal":sucursal,"reazonSocial":razonSocial,"fletero":fletero,"reparto":reparto,"domicilio":domicilio,"localidad":localidad}
    );
   
   //convertir el arreglo a json
  // console.log(JSON.stringify(data));
  var id_row='row'+cant;
  var fila='<tr id='+id_row+'><td>'+cliente+'</td><td>'+sucursal+'</td><td>'+razonSocial+'</td><td>'+fletero+'</td><td>'+reparto+'</td><td>'+domicilio+'</td><td>'+localidad+'</td><td><a href="#" class="btn btn-danger" onclick="eliminar('+cant+')";>Eliminar</a><a href="#" class="btn btn-danger" onclick="cantidad('+cant+')";>Cantidad</a></td></tr>';
  //agregar fila a la tabla
  $("#lista").append(fila);
  $("#cliente").val('');
  $("#sucursal").val('');
  $("#razonSocial").val('');
  $("#fletero").val('');
  $("#reparto").val('');
  $("#domicilio").val('');
  $("#localidad").val('');
  $("#cliente").focus();
  
}
function eliminar(row){
    //remueve la fila de la tabla html
    $("#row"+row).remove();
   //remover el elmento del arreglo
   //data.splice(row,1);
   //buscar el id a eliminar
   var i=0;
   var pos=-1;
   for (x of data){
       console.log(x.id);
       if (x.id==row){
           pos=i;
       }
       i++;
   }
   data.splice(pos,1);
  
}
function cantidad(row){
    var cli=parseInt(prompt("Cliente"));
    var suc=parseInt(prompt("Sucursal"));
    var raz=parseInt(prompt("Razon Social"));
    var flet=parseInt(prompt("Fletero"));
    var rep=parseInt(prompt("Reparto"));
    var domic=parseInt(prompt("Domicilio"));
    var locali=parseInt(prompt("Localidad"));
    
    data[row].cliente=cli
    data[row].sucursal=suc
    data[row].razonSocial=raz
    data[row].fletero=flet
    data[row].reparto=rep
    data[row].domicilio=domic
    data[row].localidad=locali
 
    var filaid=document.getElementById("row"+row);
    celda=filaid.getElementsByTagName('td');
    celda[0].innerHTML=cli;
    celda[1].innerHTML=suc;
    celda[2].innerHTML=raz;
    celda[3].innerHTML=flet;
    celda[4].innerHTML=rep;
    celda[5].innerHTML=domic;
    celda[6].innerHTML=locali;

    console.log(data);  
}

  
function save(){
    var json=JSON.stringify(data);
    $.ajax({
        type: "POST",
        url: "api.php",
        data: "json="+json,
        success:function(respo){
           console.log(resp)
           // location.reload();
        }
        
    });
}


const listado = document.querySelector('#listado')

fetch ('/clientes.json')

    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((cliente) => {
            const tr = document.createElement('tr')
            tr.innerHTML = `
                <td>${cliente.cliente}</td>
                <td>${cliente.sucursal}</td>
                <td>${cliente.razonSocial}</td>
                <td>${cliente.fletero}</td>
                <td>${cliente.reparto}</td>
                <td>${cliente.domicilio}</td>
                <td>${cliente.localidad}</td>
                
            `
   
            listado.append(tr)
        })
    })

    
        