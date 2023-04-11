$(function () {
    // let value1 = ;
    // let operator = ;
    // let value2  = parseInt();

    $('button').on('click', function() {
        if ($(this).attr('id') !== "ac" && $(this).attr('id') !== "+/-" && $(this).attr('id') !== "%" && $(this).attr('id') !== "+" && $(this).attr('id') !== "x" && $(this).attr('id') !== "-" && $(this).attr('id') !== "+" && $(this).attr('id') !== "=") {
            if ($('.result').text() !== '0') {
                let clickedValue = $(this).text()
                let updatedScreen = $('.result').text() + clickedValue
                $('.result').text(updatedScreen)
            } else {
                $('.result').text($(this).text())
            }
        } else if ($(this).attr('id') == "ac") {
            $('.result').text(0)
        }

    })
    
    // switch (entrada2) {
    //     case "+":
    //         let resultado = entrada + entrada3
    //         alert (resultado);
    //         break;

    //     case "-":
    //         let resultado2 = entrada - entrada3
    //         alert (resultado2);
    //         break;

    //     case "*":
    //         let resultado3 = entrada * entrada3
    //         alert (resultado3);
    //         break;

    //     case "/":
    //         let resultado4 = entrada / entrada3
    //         alert (resultado4);
    //         break;

    //     default:
    //         alert ("Suerte")
    //         break;
    // }
})

