$(function () {
    // Variables
    let entry;
    let firstValueEntry = [];
    let secondValueEntry = [];
    let firstValueToCalculate;
    let secondValueToCalculate;
    let result;
    let operatorClicked = false; 
    let typeOfOperator;

    // Calculator algorithm
    $('.number, .comma').on('click', function() {
        if (operatorClicked === false) {
            entry = $(this).text();
            firstValueEntry.push(entry.replace(/\s/g, ''))
            $('.display').text((firstValueEntry.join('')));
        } else {
            entry = $(this).text();
            secondValueEntry.push(entry.replace(/\s/g, ''));
            $('.display').text((secondValueEntry.join('')));
        }
    })

    $('.reset').on('click', function() {
        $('.display').text(0);
        operatorClicked = false;
        firstValueToCalculate = 0;
        secondValueToCalculate = 0;
        firstValueEntry = [];
        secondValueEntry = [];
        result = 0;
    })

    $('.operator').on('click', function() {
        operatorClicked = true;
        typeOfOperator = $(this).attr('id')
        firstValueToCalculate = parseFloat($('.display').text().replace(',', '.'));

        $('.display').text(0);

        if (!!result) {
            firstValueToCalculate = result
        }
    })

    $('.negative').on('click', function() {
        if (operatorClicked === false) {
            firstValueEntry.unshift('-')
            $('.display').text((firstValueEntry.join('')));
        } else {
            secondValueEntry.unshift('-')
            $('.display').text((secondValueEntry.join('')));
        }
        
    })
    
    $('.equal').on('click', function() {
        secondValueToCalculate = parseFloat($('.display').text().replace(',', '.'));

        switch (typeOfOperator) {
            case "+":
                result = firstValueToCalculate + secondValueToCalculate;
                $('.display').text(result.toString().replace('.' , ','));
                break;

            case "-":
                result = firstValueToCalculate - secondValueToCalculate;
                $('.display').text(result.toString().replace('.' , ','));
                break;

            case "x":
                result = firstValueToCalculate * secondValueToCalculate;
                $('.display').text(result.toString().replace('.' , ','));
                break;
                
            case "/":
                result = firstValueToCalculate / secondValueToCalculate;
                $('.display').text(result.toString().replace('.' , ','));
                break;

            default:
                console.log('End')
                break;
        }
    })

    // Clock algorithm
    function getDateTime () {
        let now = new Date(); 
        let month = now.getMonth()+1;
        let day = now.getDate();
        let dayName = now.getDay();
        let hour = now.getHours();
        let minute = now.getMinutes();
        let second = now.getSeconds(); 

        if (month.toString().length == 1) {
            month = '0' + month;
        } 
        
        if (day.toString().length == 1) {
            day = '0' + day;
        } 
        
        if (hour.toString().length == 1) {
            hour = '0' + hour;
        }

        if (minute.toString().length == 1) {
            minute = '0' + minute;
        } 
        
        if (second.toString().length == 1) {
            second = '0' + second;
        }

        switch (dayName) {
            case 1:
                dayName = 'Mon'
                break;
            case 2:
                dayName = 'Tues'
                break;
            case 3:
                dayName = 'Wed'
                break;
            case 4:
                dayName = 'Thur'
                break;
            case 5:
                dayName = 'Fri'
                break;
            case 6:
                dayName = 'Sat'
                break;
            default:
                dayName = 'Sun'
                break; 
        }

        switch (month) {
            case '01':
                month = 'jan.'
                break;
            case '02':
                month = 'feb.'
                break;
            case '03':
                month = 'mar.'
                break;
            case '04':
                month = 'apr.'
                break;
            case '05':
                month = 'may'
                break;
            case '06':
                month = 'jun.'
                break;
            case '07':
                month = 'jul.'
                break;
            case '08':
                month = 'aug.'
                break;
            case '09':
                month = 'sept.'
                break;
            case '10':
                month = 'oct.'
                break;
            case '11':
                month = 'nov.'
                break;
            default:
                month = 'dec.'
                break; 
        }
        
        return (dayName + ' ' + day + ' ' + month + ' ' + hour + ':' + minute + ':' + second);
    }

    setInterval (function () {
        $('.date').text(getDateTime())
    }, 1000);
})