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
  var fila='<tr id='+id_row+'><td>'+cliente+'</td><td>'+sucursal+'</td><td>'+razonSocial+'</td><td>'+fletero+'</td><td>'+reparto+'</td><td>'+domicilio+'</td><td>'+localidad+'</td><td><a href="#" class="btn btn-danger" onclick="eliminar('+cant+')";>Eliminar</a><a href="#" class="btn btn-warning" onclick="('+cant+')";>Cantidad</a></td></tr>';
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
  cant++;
  sumar();
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
  sumar();
}
function cantidad(row){
    var canti=parseInt(prompt("Nueva cantidad"));
    data[row].cantidad=canti;
    data[row].total=data[row].cantidad*data[row].precio;
    var filaid=document.getElementById("row"+row);
    celda=filaid.getElementsByTagName('td');
    celda[2].innerHTML=canti;
    celda[3].innerHTML= data[row].total;
    console.log(data);
    sumar();
}
function sumar(){
    let tot=0;
    for (x of data){
       tot=tot+x.total;
    }
    document.querySelector("#total").innerHTML="Total "+tot;
}   
function save(){
    var json=JSON.stringify(data);
    $.ajax({
        type: "POST",
        url: "api.php",
        data: "json="+json,
        success:function(respo){
           location.reload();
        }
        
    });
}