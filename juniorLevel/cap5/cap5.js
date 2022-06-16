let materias = () => {
const materias  = {
    Matematicas: [90, 5, 4, "Matematicas"],
    Fisica: [75, 8, 1, "Fisica"],
    Filosofia: [64, 6, 2, "Filosofia"],
    Geografia: [79, 9, 3, "Geografia"]
};

const aprobo = () => {
    for(materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2]

        console.log(materias[materia][3]);
        if(asistencias >= 90) {
            console.log("%cAsistencias completas.","color:green");
        } else {
            console.log("%cNo cumples con las asistencias.","color:red");

        };
        if(promedio >= 6 ){
            console.log("%cPromedio aprobatorio","color:green");
        } else {
            console.log("%cPromedio reprobatorio","color:red");
        };
        if(trabajos >= 3){
            console.log("%cTrabajos suficientes para aprobar","color:green");
        } else {
            console.log("%cTrabajos insuficientes para aprobar.","color:red");
        }
    };
};
aprobo();
};

const organizacion = () => {
    let tiempos = {
        casa: "30 min cosas de casa.",
        tabajoTeo: "100 min trabajo practico.",
        estudiar: "100 min de estudio.",
        break: "Tienes 10 min de descanso.",
        trabajoPra: "Te toca trabajar 240 min."};
    for(let i = 0; i < 14; i++){
        if (i == 0) {
            console.groupCollapsed("Semana 1")
        }
            console.group(`Dia ${i+1}`);
        for(let act in tiempos){
            console.log(tiempos[act]);
        };
            console.groupEnd();
        if (i == 6) {
            console.groupEnd();
            console.groupCollapsed("Semana 2")
        };
    };
};