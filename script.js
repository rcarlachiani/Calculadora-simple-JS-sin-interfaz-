$(function () {
    // Variables
    const calculatorScreen = $('.display');
    let firstValueEntry = [];
    let secondValueEntry = [];
    let firstValueToCalculate = 0;
    let secondValueToCalculate = 0;
    let result = 0;
    let operatorClicked = false; 
    let firstIsNegative = false;
    let secondIsNegative = false;
    let typeOfOperator;

    // Function that formats the decimals results 
    const formatNumber = (number) => {
        let decimalString = number.toString().split('.')[1];
        
        if (decimalString && decimalString.length > 3) {
        // Limit to 9 decimal places
          let limitedNumber = parseFloat(number.toFixed(3));
          return limitedNumber;
        } else {
          return number;
        }
    }

    // Function that handles the reset or the result action
    const resetOrResult = (operation) => {
        if (operation === 'reset') {
            operatorClicked = false;
            firstIsNegative = false;
            secondIsNegative = false;
            firstValueToCalculate = 0;
            secondValueToCalculate = 0;
            firstValueEntry = [];
            secondValueEntry = [];
            result = 0;
        } else {
            operatorClicked = false;
            firstValueToCalculate = result;
            firstValueEntry = [];
            firstValueEntry.push(result)
            secondValueToCalculate = 0;
            secondValueEntry = [];
        }
    }

    // Function that manages the entries of the first & second values and the comma
    const addValues = (entry, value, id) => {
        if (id === ',') {
            if (value.length === 0) {
                value.push('0');
            }
            if (!value.includes(',')) {
                value.push(',');
            }
        } else {
            value.push(entry.replace(/\s/g, ''));
        }
        calculatorScreen.text(value.join(''));
      }      
      
      
    // Function that manages the result cases depending on the operator
    const calculateAndDisplayResult = (operator, firstValue, secondValue) => {
        let switchResult;
    
        switch (operator) {
            case "+":
                switchResult = firstValue + secondValue;
                break;
    
            case "-":
                switchResult = firstValue - secondValue;
                break;
    
            case "x":
                switchResult = firstValue * secondValue;
                break;
                    
            case "/":
                switchResult = firstValue / secondValue;
                break;
    
            default:
                console.log('End')
                return;
        }
        
        result = switchResult;
        calculatorScreen.text(formatNumber(switchResult).toString().replace('.' , ','));
        resetOrResult('result');
    }

    // OnClick functions and actions
    $('.number, .comma').on('click', function() {
        if (result !== 0 && operatorClicked === false) {
            resetOrResult('reset');
        }

        if (operatorClicked === false) {
            addValues($(this).text(), firstValueEntry, $(this).attr('id'))
        } else {
            addValues($(this).text(), secondValueEntry, $(this).attr('id'))
        }
    })

    $('.reset').on('click', function() {
        calculatorScreen.text(0);
        resetOrResult('reset');
    })

    $('.operator').on('click', function() {
        operatorClicked = true;
        typeOfOperator = $(this).attr('id')
        firstValueToCalculate = parseFloat(calculatorScreen.text().replace(',', '.'));
    })

    $('.negative').on('click', function() {
        if (firstValueEntry.length !== 0 && firstIsNegative === false) {
            firstIsNegative = true;
            let firstNegative = Number(-Math.abs(firstValueEntry.join('').replace(',', '.')))
            calculatorScreen.text(formatNumber(firstNegative).toString().replace('.', ','));
        } else if (firstIsNegative === true) {
            firstIsNegative = false;
            let firstPositive = Number(Math.abs(firstValueEntry.join('').replace(',', '.')))
            calculatorScreen.text(formatNumber(firstPositive).toString().replace('.', ','));
        }
        
        if (secondValueEntry.length !== 0 && secondIsNegative === false) {
            secondIsNegative = true;
            let secondNegative = Number(-Math.abs(secondValueEntry.join('').replace(',', '.')))
            calculatorScreen.text(formatNumber(secondNegative).toString().replace('.', ','));
        } else if (secondIsNegative === true) {
            secondIsNegative = false;
            let secondPositive = Number(Math.abs(secondValueEntry.join('').replace(',', '.')))
            calculatorScreen.text(formatNumber(secondPositive).toString().replace('.', ','));
        }
    })
      
    $('.equal').on('click', function() {
        secondValueToCalculate = parseFloat(calculatorScreen.text().replace(',', '.'));
    
        calculateAndDisplayResult(typeOfOperator, firstValueToCalculate, secondValueToCalculate);
    });

    // Clock algorithm
    const getDateTime = () => {
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