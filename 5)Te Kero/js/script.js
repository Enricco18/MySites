var op=1;
function slide(a){
    op +=a;
    var principal = document.querySelector("#um");
    var secundario = document.querySelector("#dois");
    var terceiro = document.querySelector("#tres");
    var quarto = document.querySelector("#quatro")
    console.log(op);
    if(op>0 && op<5){
        switch(op){
            case 1:       
                principal.classList.add("principal");
                principal.classList.remove("secundario");
                principal.classList.remove("terceiro");
                secundario.classList.remove("principal");
                secundario.classList.add("secundario");
                quarto.classList.remove("principal");
                quarto.classList.add("terceiro");

                /*
                secundario.classList.remove("principal terceiro");
                terceiro.classList.remove("principal terceiro");
                quarto.classList.remove("principal secundario");
                secundario.classList.add("secundario");
                terceiro.classList.add("secundario");
                quarto.classList.add("terceiro");
                */
            break;
            case 2:       
                principal.classList.remove("principal");
                principal.classList.add("secundario");
                secundario.classList.add("principal");
                secundario.classList.remove("secundario");
                terceiro.classList.add("secundario");
                terceiro.classList.remove("principal");
            break;
            case 3:       
                secundario.classList.remove("principal");
                secundario.classList.add("secundario");
                terceiro.classList.add("principal");
                terceiro.classList.remove("secundario");
                quarto.classList.add("terceiro");
                quarto.classList.remove("principal");
                principal.classList.remove('terceiro');
            break;

            case 4:
                terceiro.classList.remove('principal');
                terceiro.classList.add("secundario");
                principal.classList.add('terceiro');
                quarto.classList.remove("terceiro");
                quarto.classList.add("principal");
        }
    }else{
        op =1;       
        principal.classList.add("principal");
        principal.classList.remove("secundario");
        principal.classList.remove("terceiro");
        quarto.classList.remove("principal");
        quarto.classList.add("terceiro");
    }

}

function maisum(){
    op+=1;
    console.log(op);
}