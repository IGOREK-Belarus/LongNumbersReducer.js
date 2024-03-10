export function returnShortedValue(value){
    if(value >= 1000000000000000000000000000000000 && value < 1000000000000000000000000000000000000){
        let temp = Math.trunc(value / 1000000000000000000000000000000000);
        return temp + "D";
    }
    else if(value >= 1000000000000000000000000000000 && value < 1000000000000000000000000000000000){
        let temp = Math.trunc(value / 1000000000000000000000000000000);
        return temp + "N";
    }
    else if(value >= 1000000000000000000000000000 && value < 1000000000000000000000000000000){
        let temp = Math.trunc(value / 1000000000000000000000000000);
        return temp + "O";
    }
    else if(value >= 1000000000000000000000000 && value < 1000000000000000000000000000){
        let temp = Math.trunc(value / 1000000000000000000000000);
        return temp + "S";
    }
    else if(value >= 1000000000000000000000 && value < 1000000000000000000000000){
        let temp = Math.trunc(value / 1000000000000000000000);
        return temp + "s";
    }
    else if(value >= 1000000000000000000 && value < 1000000000000000000000){
        let temp = Math.trunc(value / 1000000000000000000);
        return temp + "Q";
    }
    else if(value >= 1000000000000000 && value < 1000000000000000000){
        let temp = Math.trunc(value / 1000000000000000);
        return temp + "q";
    }
    else if(value >= 1000000000000 && value < 1000000000000000){
        let temp = Math.trunc(value / 1000000000000);
        return temp + "T";
    }
    else if(value >= 1000000000 && value < 1000000000000){
        let temp = Math.trunc(value / 1000000000);
        return temp + "B";
    }
    else if(value >= 1000000 && value < 1000000000){
        let temp = Math.trunc(value / 1000000);
        return temp + "M";
    }
    else if(value >= 1000 && value < 1000000){
        let temp = Math.trunc(value / 1000);
        return temp + "K";
    }
    else if(value < 1000){
        console.log("Nothing happened. Case of " + value + " <= 1000");
        return value;
    }
    else{
        console.error("Reduction is not implemented for this number: " + value);
    }
}