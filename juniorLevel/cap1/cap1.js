// Helados
function startIceShop() {
    nombre = prompt("Como te llamas?");
    usd = prompt(`Cuanto dinero tienes ${nombre}?`);
    usd = parseInt(usd);

    let run = (num)=> {
        if (num >= 0.6 && num <= 0.9){
            alert(`${nombre} puedes comprar un helado de agua. Que Cuesta $0.6.`);
            alert('Tu cambio es de $' + (num - 0.6));
        } else if (num >= 1 && num <= 1.5) {
            alert(`${nombre} puedes comprar un helado de crema. Que cuesta $1.`);
            alert('Tu cambio es de $' + (num - 1));
        } else if (num >= 1.6 && num <= 1.7){
            alert(`${nombre} puedes comprar un helado de Heladix. Que cuesta $1.6.`);
            alert('Tu cambio es de $' + (num - 1.6));
        } else if (num >= 1.7 && num <= 1.8){
            alert(`${nombre} puedes comprar un helado de Heladovich. Que cuesta $1.7.`);
            alert('Tu cambio es de $' + (num - 1.7));
        } else if (num >= 1.8 && num <= 2.9){
            alert(`${nombre} puedes comprar un helado de Helardo. Que cuesta $1.8.`);
            alert('Tu cambio es de $' + (num - 1.8));
        } else if (num >= 2.9) {
            alert(`${nombre} puedes comprar un potecito de confites o un pote de 1/4 Kg. Que cuesta $2.9.`);
            alert('Tu cambio es de $' + (num - 2.9));
        } else {
            alert(`Lo siento ${nombre} no te alcanza para nada, vuelve pronto.`);
        };
    }

    run(usd);
};