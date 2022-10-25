const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia","cinnabar"];

let renderButton = () => {
    let content ='';
    for (index=0; index < colorList.length; index++){
        let color = colorList[index];
        content +=`
        <button class="color-button ${color}" onclick="changeColor('${color}')"></button>
        `;
    }
    document.getElementById('colorContainer').innerHTML = content;
}
let changeColor = (color) => {
    document.getElementById('house').className = `house ${color}`;  
}
renderButton();
