<!DOCTYPE html>
<html>
<body>
<meta charset="UTF-8">
    <input type="text">
    <button>
        Descubra um segredo.
    </button>    
    <script>        
        
        function sorteia(){
            return (Math.round(Math.random() * 10));
        }
        function sorteiaNumeros(quantidade) {
        var segredos = [];
        var numero = 1;

        while(numero <= quantidade) {

            var numeroAleatorio = sorteia();
            var achou = false;

            if (numeroAleatorio !== 0) {
                    for(var posicao = 0; posicao < segredos.length; posicao++) {
                        if(segredos[posicao] == numeroAleatorio){
                                achou = true;
                                break;
                        }
                    }
                    if (achou == false) {
                        segredos.push(numeroAleatorio);
                        numero++;
                    }
            }
        }
        return segredos;
        }
        
        var segredos = sorteiaNumeros(9);
        console.log(segredos);
        var input = document.querySelector("input"); // pra eu chamar a tag do HTML eu uso o querySelector e chamo o nome como string
        input.focus();
        //alert(input.value); // pra saber o número digitado na caixa(input) uso .value        
       
        function verifica () {
            var achou = false;
            for(var posicao = 0; posicao < segredos.length; posicao++) {
                if (input.value == segredos[posicao]) {
                    alert("Acertou um número do meu segredo");
                    achou = true;
                    break;
                }
            }
            if (achou == false) {
                alert("Erraste");                
            }
            input.value = "";
            input.focus();
        }     
        var button = document.querySelector("button");
        button.onclick = verifica;   

</script>
</body>
</html>
