<!DOCTYPE html>
<html>
<body>
<meta charset="UTF-8">
    <input type="text">
    <button>
        Descubra um sabor favorito meu
    </button>    
    <script>        
        var pizzas = ["Portuguesa", "Mussarela", "Atum", "Margherita" ];
        var input = document.querySelector("input"); // pra eu chamar a tag do HTML eu uso o querySelector e chamo o nome como string
        input.focus();
        //alert(input.value); // pra saber o número digitado na caixa(input) uso .value        
       
        function verifica () {

            var achou = false;

            for(var posicao = 0; posicao < pizzas.length; posicao++) {
                if (input.value == pizzas[posicao]) {
                    alert("Acertou uma pizza preferida minha");
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
