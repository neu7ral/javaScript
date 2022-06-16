const container = document.querySelector(".container");
let number = 0;
function createKey (name,model,price){
    number++;
    img = "<img class='imgKey' src='/juniorLevel/cap6/key.png'>";
    name = `<h2>Name: ${name}</h2>`;
    model = `<h3>Model: ${model}</h3>`;
    price = `<h4>Price: $${price}</h4>`;
    return[img,name,model,price];
};
const changeHidden = (numero)=>{
    document.querySelector(".keyData").value = numero;
}
let frag = document.createDocumentFragment();
for(let i = 1; i <= 20; i++){
    let modelR = parseInt(Math.random()*1000);
    let priceR = parseInt(Math.random()*10+30);
    let key = createKey(`Key ${i}`,`${modelR}`,`${priceR}`);
    let div = document.createElement("div");
    div.addEventListener("click",()=>{changeHidden(modelR)});
    div.tabIndex = i;
    div.classList.add(`container-item`,`item-${i}`);
    div.innerHTML = key[0] + key[1] + key[2] + key[3];
    frag.appendChild(div);
};
container.appendChild(frag);
