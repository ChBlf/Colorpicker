const sliderRed = document.getElementById("rangeRed");
const sliderGreen = document.getElementById("rangeGreen");
const sliderBlue = document.getElementById("rangeBlue");

const cir = document.getElementById('cir')
const cir2 = document.getElementById('cir2')
const pdot = document.getElementById('p-dot')
const pdot2 = document.getElementById('p-dot2')

const textBg = document.getElementById('text') 

const hexShow = document.getElementById('hex')

const colStr = document.getElementById('colorstorage')
const saveBtn = document.getElementById('save')

// saveColor divs
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');

let red = Math.round(Math.random() * 256);
let green = Math.round(Math.random() * 256);
let blue = Math.round(Math.random() * 256);

cir.style = `background-color: rgb(${red}, ${green}, ${blue});`
cir2.style = `background-color: rgba(${red}, ${green}, ${blue}, 0.1);`
pdot.style = `background-image: radial-gradient(rgba(${red}, ${green}, ${blue}, 0.5) 10%, transparent 11%);`
pdot2.style = `background-image: radial-gradient(rgba(${red}, ${green}, ${blue}, 0.5) 10%, transparent 11%);`
textBg.style = `background-color: rgba(${red}, ${green}, ${blue}, 0.3);`

sliderRed.value = red;
sliderGreen.value = green;
sliderBlue.value = blue;

hex = `rgb(${red}, ${green}, ${blue})`.split("(")[1].split(")")[0]
hex = hex.split(',')
let b = hex.map(function(x){           
    x = parseInt(x).toString(16);    
    return (x.length==1) ? "0"+x : x;
})
b = b.join("");

hexShow.value = `#${b}`
hexShow.style = `color: rgb(${red}, ${green}, ${blue}); background-color: rgba(${red}, ${green}, ${blue}, 0.3)`
if (red == 255 && green == 255 && blue == 255) {
    hexShow.style = `color: rgb(0, 0, 0);`
}

colStr.style = `background-color: rgba(${red}, ${green}, ${blue}, 0.1)`
saveBtn.style = `background-color: rgba(${red}, ${green}, ${blue}, 0.8)`

saveBtn.onclick = function() {
    let data = localStorage.getItem('col')

    if (!data) {
        localStorage.setItem('col', '[]')
    }

    const oldcol = JSON.parse(localStorage.getItem("col"))
    oldcol.push(hexShow.value)

    localStorage.setItem("col", JSON.stringify(oldcol))

    const col = JSON.parse(localStorage.getItem('col'))
    b1.style = `background-color: ${col[0]}`
    b2.style = `background-color: ${col[1]}`
    b3.style = `background-color: ${col[2]}`
}

const col = JSON.parse(localStorage.getItem('col'))

if (col) {
  b1.style = `background-color: ${col[0]}`
  b2.style = `background-color: ${col[1]}`
  b3.style = `background-color: ${col[2]}`
}


// Update the current slider value (each time you drag the slider handle)
sliderRed.oninput = function(c) {
//   output.innerHTML = this.value;
    red = this.value
    cir.style = `background-color: rgb(${red}, ${green}, ${blue});`
    cir2.style = `background-color: rgba(${red}, ${green}, ${blue}, 0.1);`
    pdot.style = `background-image: radial-gradient(rgba(${red}, ${green}, ${blue}, 0.5) 10%, transparent 11%);`
    pdot2.style = `background-image: radial-gradient(rgba(${red}, ${green}, ${blue}, 0.5) 10%, transparent 11%);`
    textBg.style = `background-color: rgba(${red}, ${green}, ${blue}, 0.3);`
    console.log(`${red}, ${green}, ${blue}`)

    hex = `rgb(${red}, ${green}, ${blue})`.split("(")[1].split(")")[0]
    hex = hex.split(',')
    let b = hex.map(function(x){           
        x = parseInt(x).toString(16);    
        return (x.length==1) ? "0"+x : x;
    })
    b = b.join("");
    hexShow.value = `#${b}`
    hexShow.style = `color: rgb(${red}, ${green}, ${blue}); background-color: rgba(${red}, ${green}, ${blue}, 0.3)`
    if (red == 255 && green == 255 && blue == 255) {
        hexShow.style = `color: rgb(0, 0, 0);`
    }

    colStr.style = `background-color: rgba(${red}, ${green}, ${blue}, 0.1)`
    saveBtn.style = `background-color: rgba(${red}, ${green}, ${blue}, 0.8)`    
}

sliderGreen.oninput = function(c) {
    //   output.innerHTML = this.value;
    green = this.value
    cir.style = `background-color: rgb(${red}, ${green}, ${blue});`
    cir2.style = `background-color: rgba(${red}, ${green}, ${blue}, 0.1);`
    pdot.style = `background-image: radial-gradient(rgba(${red}, ${green}, ${blue}, 0.5) 10%, transparent 11%);`
    pdot2.style = `background-image: radial-gradient(rgba(${red}, ${green}, ${blue}, 0.5) 10%, transparent 11%);`
    textBg.style = `background-color: rgba(${red}, ${green}, ${blue}, 0.3);`
    console.log(`${red}, ${green}, ${blue}`)
    hex = `rgb(${red}, ${green}, ${blue})`.split("(")[1].split(")")[0]
    hex = hex.split(',')
    let b = hex.map(function(x){           
        x = parseInt(x).toString(16);    
        return (x.length==1) ? "0"+x : x;
    })
    b = b.join("");
    hexShow.value = `#${b}`
    hexShow.style = `color: rgb(${red}, ${green}, ${blue}); background-color: rgba(${red}, ${green}, ${blue}, 0.3)`
    if (red == 255 && green == 255 && blue == 255) {
        hexShow.style = `color: rgb(0, 0, 0);`
    }
    
    colStr.style = `background-color: rgba(${red}, ${green}, ${blue}, 0.1)`
    saveBtn.style = `background-color: rgba(${red}, ${green}, ${blue}, 0.8)`
}

sliderBlue.oninput = function(c) {
    //   output.innerHTML = this.value;
    blue = this.value
    cir.style = `background-color: rgb(${red}, ${green}, ${blue});`
    cir2.style = `background-color: rgba(${red}, ${green}, ${blue}, 0.1);`
    pdot.style = `background-image: radial-gradient(rgba(${red}, ${green}, ${blue}, 0.5) 10%, transparent 11%);`
    pdot2.style = `background-image: radial-gradient(rgba(${red}, ${green}, ${blue}, 0.5) 10%, transparent 11%);`
    textBg.style = `background-color: rgba(${red}, ${green}, ${blue}, 0.3);`
    console.log(`${red}, ${green}, ${blue}`)
    hex = `rgb(${red}, ${green}, ${blue})`.split("(")[1].split(")")[0]
    hex = hex.split(',')
    let b = hex.map(function(x){           
        x = parseInt(x).toString(16);    
        return (x.length==1) ? "0"+x : x;
    })
    b = b.join("");
    hexShow.value = `#${b}`
    hexShow.style = `color: rgb(${red}, ${green}, ${blue}); background-color: rgba(${red}, ${green}, ${blue}, 0.3)`
    if (red == 255 && green == 255 && blue == 255) {
        hexShow.style = `color: rgb(0, 0, 0);`
    }

    colStr.style = `background-color: rgba(${red}, ${green}, ${blue}, 0.1)`
    saveBtn.style = `background-color: rgba(${red}, ${green}, ${blue}, 0.8)`
}


hexShow.addEventListener('keydown', (k) => {
    if (hexShow.value != '' && k.key == 'Enter') {
        let pattern = /[0-9A-Fa-f]{6}/g;
        let result = hexShow.value.replace('#', '').match(pattern) ? true : false;

        if (!result) return hexShow.value = ''
        if (!hexShow.value.includes('#')) hexShow.value = "#" + hexShow.value;

        cir.style = `background-color: ${hexShow.value};`
        cir2.style = `background-color: ${hexShow.value}1F`
        pdot.style = `background-image: radial-gradient(${hexShow.value}5F 10%, transparent 11%); `
        pdot2.style = `background-image: radial-gradient(${hexShow.value}5F 10%, transparent 11%);`
        textBg.style = `background-color: ${hexShow.value}3F;`
        hexShow.style = `color: ${hexShow.value}; background-color: ${hexShow.value}3F`
        colStr.style = `background-color: ${hexShow.value}1F`
        saveBtn.style = `background-color: ${hexShow.value}8F`
        if (hexShow.value.toLowerCase() == "#ffffff") {
            hexShow.style = `color: rgb(0, 0, 0);`
        }
    } 
})