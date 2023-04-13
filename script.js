$(function () {
    let entry;
    let firstValue;
    let secondValue;
    let result;
    let operatorClicked = false; 
    let typeOfOperator;

    $('.number, .coma').on('click', function() {
        if (operatorClicked === false) {
            entry = parseInt($(this).text());
            firstValue = parseInt('' + (parseInt($('.display').text())) + entry);
            $('.display').text(firstValue);
        } else {
            entry = parseInt($(this).text());
            secondValue = parseInt('' + (parseInt($('.display').text())) + entry);
            $('.display').text(secondValue);
        }
    })

    $('.reset').on('click', function() {
        $('.display').text(0);
        operatorClicked = false;
        firstValue = 0;
        secondValue = 0;
        result = 0;
    })

    $('.operator').on('click', function() {
        operatorClicked = true;
        typeOfOperator = $(this).attr('id')
        $('.display').text(0);

        if (!!result) {
            firstValue = result
        }
    })

    $('.negative').on('click', function() {
        if (operatorClicked === false) {
            if (!!firstValue && firstValue >= 0) {
                firstValue = -Math.abs(firstValue);
                $('.display').text(firstValue);
            } else if (!!firstValue && firstValue < 0) {
                firstValue = Math.abs(firstValue);
                $('.display').text(firstValue);
            }
        } else {
            if (!!secondValue && secondValue >= 0) {
                secondValue = -Math.abs(secondValue);
                $('.display').text(secondValue);
            } else if (!!secondValue && secondValue < 0) {
                secondValue = Math.abs(secondValue);
                $('.display').text(secondValue);
            }
        }
        
    })
    
    $('.equal').on('click', function() {
        switch (typeOfOperator) {
            case "+":
                result = parseInt(firstValue) + parseInt(secondValue);
                $('.display').text(result);
                break;

            case "-":
                result = parseInt(firstValue) - parseInt(secondValue);
                $('.display').text(result);
                break;

            case "x":
                result = parseInt(firstValue) * parseInt(secondValue);
                $('.display').text(result);
                break;
                
            case "%":
                result = parseInt(firstValue) / parseInt(secondValue);
                $('.display').text(result);
                break;

            default:
                console.log('End')
                break;
        }
    })
})