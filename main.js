   
    function ejercicio1(){
        let n1 = document.getElementById("numero1").value;
        let n2 = document.getElementById("numero2").value;
        n1=n1-0;
        n2=n2-0;
        let resultado="No Result";

        if(n1>n2){
            resultado="Número 1 mayor que Número 2";
        }   
        document.getElementById('lbResultado').innerHTML = resultado;
    }

    function ejercicio2(){
        let n1 = document.getElementById("numero1").value;
        let n2 = document.getElementById("numero2").value;
        n1=n1-0;
        n2=n2-0;
        let resultado="";

        if(n1==n2){
            resultado="Número 1 igual a Número 2";
        } else{
            resultado="Número 1 diferente a Número 2";
        }
        document.getElementById('lbResultado').innerHTML = resultado;
    }

    function ejercicio3(){
        let n1 = document.getElementById("numero1").value;
        let n2 = document.getElementById("numero2").value;
        n1=n1-0;
        n2=n2-0;
        let resultado=""
        
        if(n1>n2){
            resultado="Número 1 mayor que Número 2";
        }else if(n2>n1){
            resultado="Número 2 mayor que Número 1";
        }else if(n1==n2){
            resultado="Número 1 igual a Número 2";
        }
        document.getElementById('lbResultado').innerHTML = resultado;
    }

    function ejercicio4(){
        let n1 = document.getElementById("numero1").value;
        let n2 = document.getElementById("numero2").value;
        let n3 = document.getElementById("numero3").value;
        n1=n1-0;
        n2=n2-0;
        n3=n3-0;
        let resultado=""

        if((n1<n2)&&(n1<n3)){
            resultado="Número 1 es el menor";
        }else if((n2<n1)&&(n2<n3)){
            resultado="Número 2 es el menor";
        }else if((n3<n1)&&(n3<n2)){
            resultado="Número 3 es el menor";
        }
        document.getElementById('lbResultado').innerHTML = resultado;
    }

    function ejercicio5(){
        let nombre1 = document.getElementById("nombre1").value;
        let edad1 = document.getElementById("edad1").value;
        let altura1 = document.getElementById("altura1").value;
        edad1=edad1-0;
        altura1=altura1-0;

        let nombre2 = document.getElementById("nombre2").value;
        let edad2 = document.getElementById("edad2").value;
        let altura2 = document.getElementById("altura2").value;
        edad2=edad2-0;
        altura2=altura2-0;

        let persona1={
            nombre:nombre1,
            edad:edad1,
            altura:altura1
        }


        let persona2={
            nombre:nombre2,
            edad:edad2,
            altura:altura2
        }

        let resultado1=""
        let resultado2=""


        if(persona1.altura>persona2.altura){
            resultado1="La persona de mayor altura es " + persona1.nombre;
        }else{
            resultado1="La persona de mayor altura es " + persona2.nombre;
        }

        if(persona1.edad>persona2.edad){
            resultado2="La persona de mayor edad es " + persona1.nombre;
        }else{
            resultado2="La persona de mayor edad es " + persona2.nombre;
        }

        document.getElementById('lbResultado1').innerHTML = resultado1;
        document.getElementById('lbResultado2').innerHTML = resultado2;
    }

    function ejercicio6(){
        let nombre = document.getElementById("nombre").value;
        let edad = document.getElementById("edad").value;
        let altura = document.getElementById("altura").value;
        let vision = document.getElementById("vision").value;
        edad=edad-0;
        altura=altura-0;
        vision=vision-0;


        let persona={
            nombre:nombre,
            edad:edad,
            altura:altura,
            vision:vision
        }

        let resultado=""


        if((persona.edad>=18)&&(persona.altura>150)&&(persona.vision>=8)){
            resultado = persona.nombre + " está capacitado/a para conducir.";
        }else{
            resultado = persona.nombre + " NO está capacitado/a para conducir.";
        }

        document.getElementById('lbResultado').innerHTML = resultado;
    }
 
    function ejercicio7(){

        let nombre = document.getElementById("nombre").value;
        let paseVIP = document.getElementById("paseVIP").value;
        let dinero = document.getElementById("dinero").value;
        let entrada = document.getElementById("entrada").value;
        let usarEntrada = document.getElementById("usarEntrada").value;
        let comprarEntrada = document.getElementById("comprarEntrada").value;

        let persona={
            nombre:nombre,
            paseVIP:paseVIP,
            dinero:dinero,
            entrada:entrada
        }

        let resultado="No Result";

        if((persona.nombre=="Rivelino")||(persona.paseVIP=="true")){
            resultado = "Bienvenido/a " + persona.nombre;
            console.log("check 1")
        }else{
            if(entrada=="true"){
                console.log("check 2")
                if(usarEntrada=="true"){
                    resultado = "Bienvenido/a " + persona.nombre;
                    console.log("check 3")
                }
            }else{
                console.log("check 4")
                if(comprarEntrada=="true"){
                    if(persona.dinero>=1000){
                        resultado = "Venta realizada. Bienvenido/a " + persona.nombre;
                        console.log("check 5")
                    }else{
                        resultado = "Dinero Insuficiente. Venta NO realizada";
                        console.log("check 6")
                    }
                }else{
                    resultado = "Lamentamos que no quiera ingresar. Hasta pronto";
                    console.log("check 7")
                }

            }
        }

        console.log(resultado);
        document.getElementById('lbResultado').innerHTML = resultado;
    }

    function ejercicio8(){
        // let numeroIncognita=5;
        // let numeroIngresado=document.getElementById("numeroIngresado").value;
        let i=0;

        console.log(i=i++);
    }

    function ejercicio9(){
        let edad = document.getElementById("edad").value;
        edad=edad/1;

        let resultado="No Result";
       
        if((edad>=0)&&(edad<=12)){
            resultado="Esta persona es un INFANTE";
        }
        if((edad>=13)&&(edad<=18)){
            resultado="Esta persona es un ADOLECENTE";
        }
        if((edad>=19)&&(edad<=45)){
            resultado="Esta persona es un MAYOR JOVEN";
        }
        if((edad>45)&&(edad<=100)){
            resultado="Esta persona es un ANCIANO";
        }
        if(edad>100){
            resultado="En realidad tiene esa Edad?";
        }

        document.getElementById('lbResultado').innerHTML = resultado;
    }

    function ejercicio10(){
        let jugador1 = document.getElementById("jugador1").value;
        let jugador2 = document.getElementById("jugador2").value;
        let juego=["PIEDRA", "PAPEL", "TIJERA"]


        jugador1=jugador1.toUpperCase();
        jugador2=jugador2.toUpperCase();

        document.getElementById("jugador1").value = jugador1;
        document.getElementById("jugador2").value = jugador2;

        let resultado=""

        if ((jugador1==jugador2)&&(jugador1!=undefined)){
            resultado="Jugadores Empatados";
        } else if((jugador1=="PIEDRA")&&(jugador2=="PAPEL")){
            resultado="Ganador Jugador 2";
        }else if((jugador1=="PIEDRA")&&(jugador2=="TIJERAS")){
            resultado="Ganador Jugador 1";
        }else if((jugador1=="PAPEL")&&(jugador2=="PIEDRA")){
            resultado="Ganador Jugador 1";
        }else if((jugador1=="PAPEL")&&(jugador2=="TIJERAS")){
            resultado="Ganador Jugador 2";
        }else if((jugador1=="TIJERAS")&&(jugador2=="PIEDRA")){
            resultado="Ganador Jugador 2";
        }else if((jugador1=="TIJERAS")&&(jugador2=="PAPEL")){
            resultado="Ganador Jugador 1";
        }

        document.getElementById('lbResultado').innerHTML = resultado;
    }

    function ejercicio11(){
        let colorSeleccionado = document.getElementById("colorSeleccionado").value;

        switch (colorSeleccionado.toUpperCase()){
            case "BLANCO":
                resultado="Falta de color";
                break;
            case "NEGRO":
                resultado="Falta de color";
                break;
            case "VERDE":
                resultado="El color de la naturaleza";
                break;
            case "AZUL":
                resultado="El color del agua";
                break;
                case "AMARILLO":
                    resultado="El color del sol";
                    break;
            case "ROJO":
                resultado="El color del fuego";
                break;
            case "MARRON":
                resultado="El color de la tierra";
                break;
            default:
            resultado="Excelente elección, no lo teníamos pensado.";
        }

        document.getElementById('lbResultado').innerHTML = resultado;
    }

    function ejercicio12(){
        let n1 = document.getElementById("numero1").value;
        let n2 = document.getElementById("numero2").value;
        let operacion =  document.getElementById("operacion").value;

        n1=n1/1;
        n2=n2/1;

        let resultado="";

        switch (operacion) {
            case "1":
                resultado = n1+n2;
                break;
            case "2":
                resultado=n1-n2;
                break;

            case "3":
                resultado=n1*n2;
                break;

            case "5":
                if((n2)!=0){
                    resultado=n1/n2;
                }else{
                    resultado="ERROR";
                }
                break;
        }

        document.getElementById('lbResultado').innerHTML = resultado;
        
    }


    function ejercicio13(comando){
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let id = document.getElementById("id").value;
        let edad = document.getElementById("edad").value;
        let estatura = document.getElementById("estatura").value;
        let fechaExp = document.getElementById("fechaExp").value;

        if(comando=="Imprimir"){
            let resultado;
            resultado = "Nombre :" + nombre;
            resultado = resultado + "<br>" + "Apellido :" + apellido;
            resultado = resultado + "<br>" + "Número ID :" + id;
            resultado = resultado + "<br>" + "Edad :" + edad;
            resultado = resultado + "<br>" + "Estatura :" + estatura;
            resultado = resultado + "<br>" + "Fecha Expiración :" + fechaExp;

            document.getElementById('lbResultado').innerHTML = resultado;
        }

        if(comando=="Aceptar"){

            let dni={
                    id:id,
                    nombre:nombre,
                    apellido:apellido,
                    fechaExp:fechaExp,
                    edad,edad,
                    estatura:estatura
                }
                console.table(dni);
        }

        if(comando=="Rechazar"){

            resultado="Vuelva a intentarlo en 1 mes."
            document.getElementById('lbResultado').innerHTML = resultado;
        }

    }