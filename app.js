const { json } = require('express');
const express = require('express');
const app = express();



app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use('/', require('./router'));

app.listen(3000, ()=>{
    console.log('SERVER corriendo en http://localhost:3000');

});

<<<<<<< HEAD
=======
    function myFunction() {
        // Declare variables 
        var input, filter, table, tr, td, i, j, visible;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("listado");
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          visible = false;
          /* Obtenemos todas las celdas de la fila, no sólo la primera */
          td = tr[i].getElementsByTagName("td");
          for (j = 0; j < td.length; j++) {
            if (td[j] && td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
              visible = true;
            }
          }
          if (visible === true) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      myFunction()


>>>>>>> 308df789ddd5ac444b858332c31f357a8212af9f
