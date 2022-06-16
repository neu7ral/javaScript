function calculator() {
    let oper = prompt("Que operacion quieres hacer 1: Sumar, 2: Restar, 3:Multiplicar  o 4: Dividir");
    
    
    let convInt = (num)=> {
        let int = parseInt(num);
        return int
    };
    
    let reqNum1 = convInt(prompt("Ingresa el primer numero."));
    let reqNum2 = convInt(prompt("Ingresa el segundo numero."));
    
    if (oper == 1) {
        resultado = sum(reqNum1, reqNum2);
        alert(resultado);
    } else if (oper == 2) {
        resultado = res(reqNum1, reqNum2);
        alert(resultado);
    } else if (oper == 3) {
        resultado = mul(reqNum1, reqNum2);
        alert(resultado);
    } else if (oper == 4) {
        resultado = div(reqNum1, reqNum2);
        alert(resultado);
    } else {
        alert("No se encontro esa operacion.")
    };

    function sum(num1, num2) {
        let sum = num1 + num2;
        return sum;
    };
    function res(num1, num2) {
        let res = num1 - num2;
        return res;
    };
    function mul(num1, num2) {
        let mul = num1 * num2;
        return mul;
    };
    function div(num1, num2) {
        let div = num1 / num2;
        return mul;
    };
};

function homelessParty(){
    let free = false;
    
    function validarCliente(time) {
        let edad = prompt("Cual es tu edad?");
        if (edad >= 18) {
            if (hour >= 23 && hour < 07 && !free) {
                alert("Puedes pasar gratis.");
                free = true;
            } else if (hour <= 23) {
                alert("Lo siento aun no empieza la fiesta.");
            } else {
                alert(`Son las ${hour}:${min} puedes pasar, pero tienes que pagar.`);
            }
        } else {
            alert("Ve a tu casa a dormir nene.")
        };
    };

    let hourDiv = new Date();
    let hour = hourDiv.getHours();
    let min = hourDiv.getMinutes();

    validarCliente(hour);
};

function salon (){
    let cantidad = prompt("Cuantos alumnos asistieron?");
    let alumnosTotales = [];

    for(i = 0; i < cantidad; i++) {
        alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0];
    };
    
    function asistencia(nombre, p) {
        let precesia = prompt(nombre);

        if (precesia == "p" || precesia == "P") {
            alumnosTotales[p][1]++;
        }
    }

    for (i = 0; i < 30; i++) {
        for(alumno in alumnosTotales) {
            asistencia(alumnosTotales[alumno][0],alumno);
        }
    }
    for (alumno in alumnosTotales) {
        let resultado = `${alumnosTotales[alumno][0]}: <br>
        ______Asistencias: ${alumnosTotales[alumno][1]} <br>
        ______Ausencias: ${30 - alumnosTotales[alumno][1]}
        `;
        if (30 - alumnosTotales[alumno][1] > 18) {
            resultado+= "Reprobado por inasistencia.<br><br>";
        } else {
            resultado+="<br><br>"
        };
        alert(resultado);
    };
};
