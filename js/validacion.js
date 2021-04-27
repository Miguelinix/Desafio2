const myForm = document.getElementById("formulario");
function Register(){
    var nombre = document.getElementById("nombre");
    var fecha = document.getElementById("fecha");
    var dui = document.getElementById("dui");
    var genero = document.getElementById("genero").value;
    var msg = document.getElementById("container-msg");
    var carnet = document.getElementById("carnet");
    var movil = document.getElementById("movil");
    var direccion = document.getElementById("direccion");

    var correo = document.getElementById("correo");
    var registrar = document.getElementById("registrar");
    if(registrar ){
        if(correo.value == "" && nombre.value == " " && fecha.value == "" && dui.value ==" " && genero.value == "" && carnet.value == " " && movil.value == " " && direccion.value ==" "){
            msg.innerHTML = "<div class='btn btn-danger'><h4>Campos no llenados</h4></div>";
        }else{
            if(!(isValidEmail(correo.value))){
                msg.innerHTML = "<div class='btn btn-danger'><h4>Correo Electronico no valido</h4></div>";
            }else{
                if(!(isValidmovil(movil.value))){
                    msg.innerHTML = "<div class='btn btn-success'><h4>Numero de Telefono no valido</h4></div>";
                }else{
                    if(!(isValidDui(dui.value))){
                        msg.innerHTML = "<div class='btn btn-success'><h4>Numero de DUI no valido</h4></div>";
                    }else{
                                          
                            msg.innerHTML = "<div class='btn btn-success'><h4>Estudiante Registrado exitosamente</h4></div>";
                        
                    }
                }
            }
         
        }
      
    }
   
}
function isValidEmail(mail) { 
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail); 
  }
  function isValidmovil(movil) { 
    return /[0-9]{8}/.test(movil); 
  }
  function isValidDui(dui){
    return /[0-9]{8}/.test(dui); 
  }
  function isValidCarnet(carnet){
    return /[0-9]{8}/.test(carnet); 
  }
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
});


