//punto número 1: Crear la estructura de datos mediante arreglos y objetos.
let radiologia = [
    {
        "HORA": "11:00",
        "ESPECIALISTA": "IGNACIO SCHULZ",
        "PACIENTE": "FRANCISCA ROJAS",
        "RUT": "9878782-1",
        "PREVISION": "FONASA"
      },
      {
        "HORA": "11:30",
        "ESPECIALISTA": "FEDERICO SUBERCASEAUX",
        "PACIENTE": "PAMELA ESTRADA",
        "RUT": "15345241-3",
        "PREVISION": "ISAPRE"
      },
      {
        "HORA": "15:00",
        "ESPECIALISTA": "FERNANDO WURTHZ",
        "PACIENTE": "ARMANDO LUNA",
        "RUT": "16445345-9",
        "PREVISION": "ISAPRE"
      },
      {
        "HORA": "15:30",
        "ESPECIALISTA": "ANA MARIA GODOY",
        "PACIENTE": "MANUEL GODOY",
        "RUT": "17666419-0",
        "PREVISION": "FONASA"
      },
      {
        "HORA": "16:00",
        "ESPECIALISTA": "PATRICIA SUAZO",
        "PACIENTE": "RAMON ULLOA",
        "RUT": "14989389-K",
        "PREVISION": "FONASA"
      }
  ]
  let traumatologia = [
    
        {
          "HORA": "8:00",
          "ESPECIALISTA": "MARIA PAZ ALTUZARRA",
          "PACIENTE": "PAULA SANCHEZ",
          "RUT": "15554774-5",
          "PREVISION": "FONASA"
        },
        {
          "HORA": "10:00",
          "ESPECIALISTA": "RAUL ARAYA",
          "PACIENTE": "ANGÉLICA NAVAS",
          "RUT": "15444147-9",
          "PREVISION": "ISAPRE"
        },
        {
          "HORA": "10:30",
          "ESPECIALISTA": "MARIA ARRIAGADA",
          "PACIENTE": "ANA KLAPP",
          "RUT": "17879423-9",
          "PREVISION": "ISAPRE"
        },
        {
          "HORA": "11:00",
          "ESPECIALISTA": "ALEJANDRO BADILLA",
          "PACIENTE": "FELIPE MARDONES",
          "RUT": "1547423-6",
          "PREVISION": "ISAPRE"
        },
        {
          "HORA": "11:30",
          "ESPECIALISTA": "CECILIA BUDNIK",
          "PACIENTE": "DIEGO MARRE",
          "RUT": "16554741-K",
          "PREVISION": "FONASA"
        },
        {
          "HORA": "12:00",
          "ESPECIALISTA": "ARTURO CAVAGNARO",
          "PACIENTE": "CECILIA MENDEZ",
          "RUT": "9747535-8",
          "PREVISION": "ISAPRE"
        },
        {
          "HORA": "12:30",
          "ESPECIALISTA": "ANDRES KANACRI",
          "PACIENTE": "MARCIAL SUAZO",
          "RUT": "11254785-5",
          "PREVISION": "ISAPRE"
        } 
    ]

    let dental =[
            {
              "HORA": "8:30",
              "ESPECIALISTA": "ANDREA ZUÑIGA",
              "PACIENTE": "MARCELA RETAMAL",
              "RUT": "11123425-6",
              "PREVISION": "ISAPRE"
            },
            {
              "HORA": "11:00",
              "ESPECIALISTA": "MARIA PIA ZAÑARTU",
              "PACIENTE": "ANGEL MUÑOZ",
              "RUT": "9878789-2",
              "PREVISION": "ISAPRE"
            },
            {
              "HORA": "11:30",
              "ESPECIALISTA": "SCARLETT WITTING",
              "PACIENTE": "MARIO KAST",
              "RUT": "7998789-5",
              "PREVISION": "FONASA"
            },
            {
              "HORA": "13:00",
              "ESPECIALISTA": "FRANCISCO VON TEUBER",
              "PACIENTE": "KARIN FERNANDEZ",
              "RUT": "18887662-K",
              "PREVISION": "FONASA"
            },
            {
              "HORA": "13:30",
              "ESPECIALISTA": "EDUARDO VIÑUELA",
              "PACIENTE": "HUGO SANCHEZ",
              "RUT": "17665461-4",
              "PREVISION": "FONASA"
            },
            {
              "HORA": "14:00",
              "ESPECIALISTA": "RAQUEL VILLASECA",
              "PACIENTE": "ANA SEPULVEDA",
              "RUT": "14441281-0",
              "PREVISION": "ISAPRE"
            }

    ]
//Punto Nùmero 2: Mostrar por pantalla la cantidad de consultas por cada listado.
document.write(`<p class="titulos"> Punto 2:  Mostrar por pantalla la cantidad de consultas por cada listado. </p>`);
document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length} </p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p> `);
document.write(`<p class="titulos"> Punto 3: Mostrar por pantalla la primera  atención de cada listado . </p>`);
//Punto Número 3: Mostrar por pantalla la primera y última atención de cada listado, desplegando el rut del paciente junto con la previsión
//Primer paciente
document.write(`<p>Primer paciente Radiología: ${radiologia[0].PACIENTE} - ${radiologia[0].PREVISION}-${radiologia[0].RUT}</p>`)
document.write(`<p>Primer paciente Traumatología: ${traumatologia[0].PACIENTE} - ${traumatologia[0].PREVISION}-${traumatologia[0].RUT}</p>`)
document.write(`<p>Primer paciente Dental: ${dental[0].PACIENTE} - ${dental[0].PREVISION}-${dental[0].RUT}</p>`)
document.write(`<p class="titulos"> Punto 3: Mostrar por pantalla la última atención de cada listado . </p>`);
//Ultimo paciente
document.write(`<p>Ùltimo paciente radiologia: ${radiologia[radiologia.length - 1].PACIENTE}- ${radiologia[radiologia.length - 1].PREVISION}-${radiologia[radiologia.length - 1].RUT} </p>`)
document.write(`<p>Ùltimo paciente traumatologia: ${traumatologia[traumatologia.length - 1].PACIENTE}- ${traumatologia[traumatologia.length - 1].PREVISION}-${traumatologia[traumatologia.length - 1].RUT}</p> `)
document.write(`<p>Ùltimo paciente dental: ${dental[dental.length - 1].PACIENTE}- ${dental[dental.length - 1].PREVISION}-${dental[dental.length - 1].RUT}</p> `)

//document.write(`<p>Ùltimo paciente traumatologia: ${traumatologia[traumatologia.length - 1].PACIENTE}- ${traumatologia[traumatologia.length - 1].PREVISION}-${traumatologia[traumatologia.length - 1].RUT} </p>`)