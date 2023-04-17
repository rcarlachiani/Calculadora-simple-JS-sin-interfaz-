$(function () {

    function getDateTime() {
        var now = new Date(); 
        var year = now.getFullYear();
        var month = now.getMonth()+1; 
        var day = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds(); 

        if (month.toString().length == 1) {
            month = '0' + month;
        } else if (day.toString().length == 1) {
            day = '0' + day;
        } else if (hour.toString().length == 1) {
            hour = '0' + hour;
        } else if (minute.toString().length == 1) {
            minute = '0' + minute;
        } else if (second.toString().length == 1) {
            second = '0' + second;
        }   
        
        let dateTime = day + '/' + month + '/' + year + ', ' + hour + ':' + minute + ':' + second;   
        return dateTime;
    }

    setInterval(function() {
        currentTime = getDateTime();
        $('.date').text(currentTime)
    }, 1000);

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