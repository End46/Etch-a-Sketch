const contenedor = document.querySelector('#contenedor');

for(i=0;i<256;i++){
    const cuadricula = document.createElement("div");
    cuadricula.classList.add("cuadricula");
    contenedor.appendChild(cuadricula);
    cuadricula.addEventListener("mouseenter",()=>{
        let red = Math.floor(Math.random()*254)+1;
        let green = Math.floor(Math.random()*254)+1;
        let blue = Math.floor(Math.random()*254)+1;
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




