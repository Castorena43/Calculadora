$(document).ready(function(){
    $('.num').click(function Agregar(){
            var numero1 = $('.entrada').val();
            var nuevonum = numero1 + $(this).html();
            $('.entrada').val(nuevonum);
        
    })
    $('.limpiar').click(function(){
        $('.entrada').val('');
    })
    var op;
    var num1;
    var num2;
    var resul;
    $('.op').click(function(){
        op = $(this).html();
        num1 = $('.entrada').val();
        
        $('.entrada').val('');
        // console.log(op);
    })
    $('.igual').click(function(){
        num2 = $('.entrada').val();
        resul;
        switch(op){
            case 'X':
                resul = parseFloat(num1) * parseFloat(num2);
                $('.entrada').val(resul);
                break;
            case '-':
                resul = parseFloat(num1) - parseFloat(num2);
                $('.entrada').val(resul);
                break;
            case '/':
                resul = parseFloat(num1) / parseFloat(num2);
                $('.entrada').val(resul);
                break;
            case '+':
                resul = parseFloat(num1) + parseFloat(num2);
                $('.entrada').val(resul);
                break;
        }
    })

    

})
