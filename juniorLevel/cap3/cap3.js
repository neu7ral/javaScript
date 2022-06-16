//Crea tu mascota como un objeto de js
function objectPet() {
class animal {
    constructor(especie,owner,nombre,edad,color){
        this.especie = especie;
        this.owner = owner; 
        this.name = nombre;
        this.edad = edad;
        this.color = color;
        this.info = `Hola ${this.owner}, Tu ${this.especie} se llama ${this.name} tiene ${this.edad} años y es de color ${this.color}.`;
    }
    verInfo(){
        alert(this.info);
    }
}

class coportamiento extends animal {
    constructor(especie,owner,nombre,edad,color){
        super(especie,owner,nombre,edad,color)
        this.comp = null;
    }
    //set setCompor(comportamiento){}
}

let espP = prompt("Cual es la especie de tu mascota?");
let namP = prompt(`Como se llama tu ${espP}?`);
let ownerP = prompt(`Quien es dueño de ${namP}`);
let edaP = prompt(`Cuantos años tiene ${namP}?`);
let colP = prompt(`De que color es ${namP}?`);

const creation = new animal(espP,ownerP,namP,edaP,colP);

creation.verInfo();
};
//Compra un celular
function objectPhone(){
    class phones {
        constructor(model,color,peso,rDP,rDC,ram){
            this.model = model;
            this.color = color;
            this.peso = peso;
            this.rDP = rDP;
            this.rDC = rDC;
            this.ram = ram;
            this.encendido = false;
        }
        powerButton(){
            if (this.encendido == false){
                alert("Encendiendo...");
                alert("Hola soy tu nuevo celular.");
                this.encendido = true;
            } else {
                alert("Apagando...");
                alert("Pantalla en negro");
                this.encendido = false;
            }
        }

        reboot(){
            if(this.encendido == true){
                alert("Reiniciando");
            } else {
                alert("Apagando..");
            }
        }

        takePhoto(){
            alert(`Foto tomada por una resolucion de ${this.rDC}.`);
        }
        takeVideo(){
            alert(`Recording in ${this.rDC}.`);
        }
        showInfo(){
            return`
            Model: ${this.model}
            Color: ${this.color}
            Peso: ${this.peso}
            Resolucion de Pantalla: ${this.rDP}
            Resolucion de Camara: ${this.rDC}
            Ram: ${this.ram}
            `
        }
    };

    class phonesHighRange extends phones{
        constructor(model,color,peso,rDP,rDC,ram,rDCS){
            super(model,color,peso,rDP,rDC,ram);
            this.rDCS = rDCS;
        }
        slowMotion(){
            alert("Slow Motion Recording...")
        }
        
        facialRecognition(){
            alert("Scan Face...")   
        }
        infoHighRange(){
            return this.showInfo() + `
            Resolucion de camara secundaria: ${this.rDCS}
            `
        }
    }

    motorola8 = new phones("Motorola 8","Negro","150gr","1920x1080","40Mpx","8GB");
    samsung31A = new phones("Samsung 31A","Negro","175gr","1920x1080","38Mpx","8GB");
    xiaomi3S = new phones("Xiaomi 3S","Negro","145gr","1920x1080","50Mpx","6GB");
    iphone13 = new phonesHighRange("iPhone 13","Negro","203gr","2340x1080","12px","4GB","12px");
    samsungS22Ultra = new phonesHighRange("Samsung S22 Ultra","Negro","228","3080x1440","108px","12GB","12px");

    let phonesInStock = ["Motorola 8", "Samsung 31A", "Xiaomi 3S", "iPhone 13", "Samsung S22 Ultra"];

    alert(`Hola bienvenido a TecnoPolis, contamos con estos smartphones en stock ${phonesInStock[0]}, ${phonesInStock[1]}, ${phonesInStock[2]}, ${phonesInStock[3]}, ${phonesInStock[4]}.`);

    let phoneElection = prompt("Cual te gustaria comprar?");

    elect(phoneElection);

    function elect(string) {
        if (string == "Motorola 8" || string == "motorola 8") {
            alert(motorola8.showInfo());
            return motorola8;
        } else if (string == "Samsung 31A" || string == "samsung 31A") {
            alert(samsung31A.showInfo());
            return samsung31A;
        } else if (string == "Xiaomi 3S" || string == "xiaomi 3S") {
            alert(xiaomi3S.showInfo());
            return xiaomi3S;
        } else if (string == "iPhone 13" || string == "iphone 13") {
            alert(iphone13.showInfo());
            return iphone13;
        } else if (string == "Samsung S22 Ultra" || string == "samsung s22 ultra") {
            alert(samsungS22Ultra.showInfo());
            return samsungS22Ultra;
        } else {
            alert("Lo sentimos no tenemos ese modelo.");
        }
    };
};
//apps for your new phone
function apps(){
    class app{
        constructor(name,descargas,puntuacion,peso){
            this.name = name;
            this.downloads = descargas;
            this.reviews = puntuacion;
            this.weight = peso;
            this.install = false;
            this.statusApp = false;
        };
        Install(){
            if(this.install == false){
                this.install = true;
                alert(`${this.name} installed...`);
            }
        }
        Uninstall(){
            if (this.install == true){
                this.install = false;
                alert(`Unistall ${this.name}...`);
            }
        }
        openApp(){
            if(this.statusApp == false && this.install == true){
                this.statusApp = true;
                alert(`${this.name} opening...`);
            }
        }
        closeApp(){
            if(this.statusApp == true){
                this.statusApp = false;
                alert(`${this.name} has close.`);
            }
        }
        showInfoApp(){
            return`
            Name: ${this.name}
            Downloads: ${this.downloads}
            Reviews: ${this.reviews}
            Size: ${this.weight}
            `
        }
    };

    instagram = new app("Instagram","13M","4.5⭐","30 MB");
    tiktiok = new app("TikTok","25M","4.4⭐","250 MB");

    alert(instagram.Install());
    alert(instagram.openApp());
    alert(instagram.closeApp());
};