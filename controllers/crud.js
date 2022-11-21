const conexion = require('../database/db');

exports.save = (req,res)=>{
    const cliente = req.body.cliente;
    const sucursal = req.body.sucursal;
    const razonsocial = req.body.razonsocial;
    const fletero = req.body.fletero;
    const reparto = req.body.reparto;
    const domicilio = req.body.domicilio;
    const localidad = req.body.localidad;
    const partido = req.body.partido;
   conexion.query('INSERT INTO clientes SET ?',{cliente:cliente, sucursal:sucursal, razonsocial:razonsocial, fletero:fletero, reparto:reparto, domicilio:domicilio, localidad:localidad, partido:partido},(error,results)=>{
     if(error){
        console.log(error);
     }else{ 
        res.redirect('/');
     }
   } )
}

exports.update = (req,res)=>{
    const id = req.body.id;
    const cliente = req.body.cliente;
    const sucursal = req.body.sucursal;
    const razonsocial = req.body.razonsocial;
    const fletero = req.body.fletero;
    const reparto = req.body.reparto;
    const domicilio = req.body.domicilio;
    const localidad = req.body.localidad;
    const partido = req.body.partido;
   conexion.query('UPDATE clientes SET ? WHERE id = ?', [{cliente:cliente, sucursal:sucursal, razonsocial:razonsocial, fletero:fletero, reparto:reparto, domicilio:domicilio, localidad:localidad, partido:partido}, id],(error,results)=>{
      if(error){
         console.log(error);
      }else{
         res.redirect('/');
      }
   })
} 

