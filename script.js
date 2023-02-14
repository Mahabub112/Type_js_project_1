let type = document.querySelector(".type")
let typeText = type.innerHTML
let typearr = typeText.split("");
type.innerHTML = " ";
let count = 0;

function typejs(){
    if(count < typeText.length){
        type.innerHTML += typeText.charAt(count);
        count++
        typearr = typeText.split("");
    }else{
        typearr.pop();
        type.innerHTML = typearr.join("");
        if(typearr.length == 0 ){
            count = 0;
        }
    }
}

setInterval(()=>{
    typejs();
}, 300);