 

var sum = 0;
var num, ordinal;
for (var counter = 1; counter < 4; counter++) {
    switch (counter) {
        case 1:
            ordinal = "first";
            break;
        case 2:
            ordinal = "second";
            break;
        case 3:
            ordinal = "third";
    }
    num = prompt("Enter the " + ordinal + " number:", 1);
    sum += Number(num);
}
alert("The average is " + sum / 3);