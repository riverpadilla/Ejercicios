   
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
 