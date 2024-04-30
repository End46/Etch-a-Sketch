const contenedor = document.querySelector('#contenedor');
const boton = document.querySelector('#boton');
let tamañoInicial = 16;
let band = true;

function cuadricula(cuadrosPorLado){
    tamañoInicial=cuadrosPorLado;
    let ancho = cuadrosPorLado*41.5;/*se multiplica la cantidad de lados por el tamaño de estos*/
    let alto = cuadrosPorLado*40;
    let basis = 100/cuadrosPorLado;
    contenedor.style.width=`${ancho}px`;
    contenedor.style.height=`${alto}px`;
    for(i=0;i<cuadrosPorLado*cuadrosPorLado;i++){
        if(band){
            boton.addEventListener('click',()=>{
                cambiarTamaño();
            })
            band = false;
        }
        const cuadricula = document.createElement("div");
        cuadricula.classList.add("cuadricula");
        cuadricula.style.flexBasis = `${basis}%`
        contenedor.appendChild(cuadricula);
        cuadricula.addEventListener("mouseenter",()=>{
            let red = Math.floor(Math.random()*255);
            let green = Math.floor(Math.random()*255);
            let blue = Math.floor(Math.random()*255);
            cuadricula.style.backgroundColor=`rgb(${red},${green},${blue})`;
        })
        cuadricula.addEventListener("mouseleave",(seleccionado)=>{
                let objetivo = seleccionado.target;
                switch(objetivo.id){
                    case 'rastro1': 
                        cuadricula.removeAttribute("id","rastro1");
                        cuadricula.setAttribute("id","rastro2");
                        break;
                    case 'rastro2':
                        cuadricula.removeAttribute("id","rastro2");
                        cuadricula.setAttribute("id","rastro3");
                        break;
                    case 'rastro3':
                        cuadricula.removeAttribute("id","rastro3");
                        cuadricula.setAttribute("id","rastro4");
                        break;
                    case 'rastro4':
                        cuadricula.removeAttribute("id","rastro4");
                        cuadricula.setAttribute("id","rastro5");
                        break;
                    case 'rastro5':
                        cuadricula.removeAttribute("id","rastro5");
                        cuadricula.setAttribute("id","rastro6");
                        break;
                    case 'rastro6':
                        cuadricula.removeAttribute("id","rastro6");
                        cuadricula.setAttribute("id","rastro7");
                        break;
                    case 'rastro7':
                        cuadricula.removeAttribute("id","rastro7");
                        cuadricula.setAttribute("id","rastro8");
                        break;
                    case 'rastro8':
                        cuadricula.removeAttribute("id","rastro8");
                        cuadricula.setAttribute("id","rastro9");
                        break;
                    case 'rastro9':
                        cuadricula.removeAttribute("id","rastro9");
                        cuadricula.setAttribute("id","rastro10");
                        break;
                    case 'rastro10':
                        break;
                    default:
                        cuadricula.setAttribute("id","rastro1");
                        break;
                }
        })
    }
}
function cambiarTamaño(){
    let cuadrados;
    do{
        cuadrados = prompt('Introduzca cantidad de cuadrados por lado(menos de 100)');
        cuadrados = Number(cuadrados);
        if(cuadrados>100){
            alert('Por Favor introduzca menos de 100');
        }
    }while(cuadrados>100);
    for(i=0;i<tamañoInicial*tamañoInicial;i++){
        const cuadricula = document.querySelector('.cuadricula');
        contenedor.removeChild(cuadricula);
    }
    cuadricula(cuadrados);
}

cuadricula(tamañoInicial);

