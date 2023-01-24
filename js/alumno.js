console.log("///Pre-Entrega #3");

//--Creo Variables--//
let AgregaAL;
let AgregaPROG;
let DNIAL = "";
let ApellidoAL = "";
let NombreAL = "";
let DireccionAL = "";
let EmailAL = "";
let ProgramaAL = "";

//- Paso el foco al inicio del Form-//
document.getElementById("inputDNI").focus();

//--Creo Lista de los Barrios--//
let LISTAState = ["Infanteria II", "Antartida I", "Centro"];
let select_state = document.getElementById("inputSTATE");

for (oneState of LISTAState) {
  let option = document.createElement("option");
  option.innerHTML = oneState;
  select_state.appendChild(option);
}

//--Creo la Lista de los Programas--//
let LISTAProg = ["Musculacion", "Fitness", "Entrenamiento Funcional", "Zumba"];
let select_prog = document.getElementById("inputPROG");

for (oneProg of LISTAProg) {
  let option = document.createElement("option");
  option.innerHTML = oneProg;
  select_prog.appendChild(option);
}

//--Creo la Clase New_Alumno--//
class NEW_Alumno {
    constructor(DNI, Apellido, Nombre, Direccion, Email, Programa) {
  this.DNI = DNI;
  this.Apellido = Apellido;
  this.Nombre = Nombre;
  this.Direccion = Direccion;
  this.Email = Email;
  this.Programa = Programa;
  }
}

//Configuración de Sweet Alert (OK)
function POPUp_OK(Mensaje,Texto1,Tiempo){
  swal.fire({
    title: Mensaje,
    text: Texto1,
    icon: "success",
    showConfirmButton: false,
    timer: Tiempo,
  });
}

//Configuración de Sweet Alert (WARNING)
function POPUp_WARNING(Mensaje,Texto,TxtBotton,SetFocus){
  swal.fire({
    title: Mensaje,
    text: Texto,
    icon: "warning",
    confirmButtonText: TxtBotton,
  });
  document.getElementById(SetFocus).focus();
}

//- Capturo Evento de KeyUp en DNI -//
let Txt_DNI = document.getElementById("inputDNI");
Txt_DNI.addEventListener("keyup", function(event) {
  if (event.code === 'Enter' || event.code === 'NumpadEnter' || event.focus) {
      DNIAL = document.getElementById("inputDNI").value;
      //- Paso el foco -//
      document.getElementById("inputLNAME").focus();
  }
});

//- Capturo Evento de KeyUp en LNAME -//
let Txt_LName = document.getElementById("inputLNAME");
Txt_LName.addEventListener("keyup", function(event) {
  if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      ApellidoAL = document.getElementById("inputLNAME").value;
      //- Paso el foco -//
      document.getElementById("inputNAME").focus();
  }
});

//- Capturo Evento de KeyUp en NAME -//
let Txt_Name = document.getElementById("inputNAME");
Txt_Name.addEventListener("keyup", function(event) {
  if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      NombreAL = document.getElementById("inputNAME").value;
      //- Paso el foco -//
      document.getElementById("inputEMAIL").focus();
  }
});

//- Capturo Evento de KeyUp en EMAIL -//
let Txt_Email = document.getElementById("inputEMAIL");
Txt_Email.addEventListener("keyup", function(event) {
  if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      EmailAL = document.getElementById("inputEMAIL").value;
      //- Paso el foco -//
      document.getElementById("inputSTATE").focus();
  }
});

//- Capturo Evento de Change en STATE -//
let Txt_State = document.getElementById("inputSTATE");
Txt_State.addEventListener("change", function(event) {
      DireccionAL = document.getElementById("inputSTATE").value;
      //- Paso el foco -//
      document.getElementById("inputPROG").focus();
});

//- Capturo Evento de Change en PROGRAMA -//
let Txt_Prog = document.getElementById("inputPROG");
Txt_Prog.addEventListener("change", function(event) {
      ProgramaAL = document.getElementById("inputPROG").value;
      //- Paso el foco -//
      document.getElementById("alu-alta").focus();
});

//Configuración de Sweet Alert
let btnSuccess1 = document.getElementById("alu-alta");
btnSuccess1.addEventListener("click", () => {
  //Controlo que esten todos los campos llenos
  if(DNIAL.trim().length === 0){
    //- Paso el foco al inicio del Form-//
    POPUp_WARNING("Falta Ingresar DNI o Presione [ENTER]","Ej: 22222222","Aceptar","inputDNI");
  }
    else if(ApellidoAL.trim().length === 0){
    //- Paso el foco al inicio del Form-//
    POPUp_WARNING("Falta Ingresar Apellido o Presione [ENTER]","Ej: Armas","Aceptar","inputLNAME");
  }
  else if(NombreAL.trim().length === 0){
    //- Paso el foco al inicio del Form-//
    POPUp_WARNING("Falta Ingresar Nombre o Presione [ENTER]","Ej: Gabriel","Aceptar","inputNAME");
  }
  else if(EmailAL.trim().length === 0){
    //- Paso el foco al inicio del Form-//
    POPUp_WARNING("Falta Ingresar Email o Presione [ENTER]","Ej: nn@gmail.com","Aceptar","inputEMAIL");
  }
  else if(DireccionAL.trim().length === 0){
    //- Paso el foco al inicio del Form-//
    POPUp_WARNING("Falta Seleccionar Barrio o Presione [ENTER]","Ej: Antartida I","Aceptar","inputSTATE");
  }
  else if(ProgramaAL.trim().length === 0){
    //- Paso el foco al inicio del Form-//
    POPUp_WARNING("Falta Ingresar Programa o Presione [ENTER]","Ej: Musculacion","Aceptar","inputPROG");
  }
  else {
    let NEW_Alumno_Alta = new NEW_Alumno(DNIAL,ApellidoAL,NombreAL,DireccionAL,EmailAL,ProgramaAL);
    let NEW_Alumno_JSON = JSON.stringify(NEW_Alumno_Alta);
    localStorage.setItem('New_Alumno_Alta',NEW_Alumno_JSON);
    POPUp_OK("Se Agrego al Almuno",NEW_Alumno_Alta.Nombre,3000);
    }
});

//Configuración de Sweet Alert
let btnSuccess2 = document.getElementById("alu-cancelar");
btnSuccess2.addEventListener("click", () => {
  POPUp_WARNING("Se Cancelara la Carga","","Cancelar","inputDNI");
  location.reload();
});
