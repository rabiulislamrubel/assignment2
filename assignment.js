//This is kilometerToMeter function

function kilometerToMeter(km){
    if(km < 0){
        return 'Please give positive value.';
    }
    else{
        return km * 1000;
    }
    
}
var ktm = kilometerToMeter(1);
console.log(ktm);

//This is budgetCalculator function

function budgetCalculator(watch,mobile,laptop){
    if (watch < 0 || mobile < 0 || laptop < 0){
        return 'Please give positive value';
    }
    else{
        var watchPrice = watch * 50;
        var mobileprice = mobile * 100;
        var laptopPrice = laptop * 500;
        return watchPrice + mobileprice + laptopPrice;
    }
}
var total = budgetCalculator(3,5,7);
console.log(total);

//This is hotelCost function

function hotelCost(days){
    if(days < 0){
        return 'Please give positive value';
    }
    else{
        if(days <= 10){
            var firstTermCost = days * 100;
            return firstTermCost;
        }
        else if(days <= 20 ){
            var sceondTermCost = 10 * 100;
            var remaining = days - 10;
            remaining = remaining * 80;
            return sceondTermCost + remaining;
        }
        else{
            var thirdTermCost1 = 10 * 100;
            var thirdTermCost2 = 10 * 80;
            var remaining = days - 20;
            remaining = remaining * 50;
            return thirdTermCost1 + thirdTermCost2 + remaining;
        }
    }
}
var totalCost = hotelCost(22);
console.log(totalCost);

//This is megaFriend length function

var arrName = ['rubelsgns','sohan','sohel','alamin','opu','kazi','hajlajdilanal'];

function megaFriend(array){
    var maxLength = array[0].length;
    for(var i =0; i < array.length; i++){
    var len = array[i].length;
        if(maxLength < len){
            maxLength = len
        }
    }
    return maxLength;
}
var maxFriendNameLength = megaFriend(arrName);
console.log(maxFriendNameLength);