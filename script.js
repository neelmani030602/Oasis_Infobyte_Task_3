function convert(){
    var temperature=parseFloat(document.getElementById("temp").value);
    var from=document.getElementById("from").value;
    var to=document.getElementById("to").value;
    var resultTemp;
    var unit;
    if(from=='celsius' && to=='fahrenheit'){
        resultTemp=(temperature*9/5 +(32));
        unit="\u00B0F";
    }
    else if(from=='fahrenheit' && to=='celsius'){
        resultTemp=((temperature-32)/(9/5));
        unit="\u00B0C";
    }
    else if(from=='celsius' && to=='kelvin'){
        resultTemp=(temperature+273.15);
        unit="\u00B0K";
    }
    else if(from=='fahrenheit' && to=='kelvin'){
        resultTemp=((temperature+459.67)*5/9);
        unit="\u00B0K";
    }
    else if(from=='kelvin' && to=='celsius'){
        resultTemp=(temperature-273.15);
        unit="\u00B0C";
    }
    else if(from=='kelvin' && to=='fahrenheit'){
        resultTemp=((temperature*9/5)-459.67);
        unit="\u00B0F";
    }
    else{
        unit=""
        resultTemp=temperature;
    }
    document.getElementById("result").value=`${resultTemp.toFixed(2)} ${unit}`

}