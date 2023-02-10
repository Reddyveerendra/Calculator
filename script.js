const items = document.querySelectorAll('.grid-item');
var i = new Array();
function handle(n1, n2, b) {
    let ans;
    switch (b) {
        case "+":
            ans = n1 + n2;
            return ans;
        case "-":
            ans = n1 - n2;
            return ans;
        case "*":
            ans = n1 * n2;
            return ans;
        case "/":
            ans = n1 / n2;
            return ans;
        case "%":
            ans = n1 % n2;
            return ans;
        default:
            ans = n1 ** n2;
            return ans;
    }
}
function opration(i) {
    let a = i[0], b;
    for (let j = 1; j < i.length; j++) {
        if (j % 2 == 0) {
            a = handle(a, i[j], b);
            console.log(a);
        }
        else {
            b = i[j];
        }
    }
    return a;
}
function testing(e) {

    let a = e.target.innerHTML.trim();

    if (a.length > 6) {
        a = a.slice(3, a.length - 4);
    }

    console.log(parseInt(a));

    var x = document.getElementById("keyboard").innerHTML;

    if (a == "CLEAR") {
        document.getElementById("keyboard").innerHTML = "";
    }
    else if (a == "DEL") {
        document.getElementById("keyboard").innerHTML = x.slice(0, x.length - 1);
    }
    else if (a == "=") {
        i.push(parseInt(x));
        const result = opration(i);
        console.log(i);
        document.getElementById("keyboard").innerHTML = "";
        document.getElementById("result").innerHTML = i.join("") + "=" + result;
        i = [];
    }
    else if (isNaN(parseInt(a))) {
        i.push(parseInt(x));
        i.push(a);
        document.getElementById("keyboard").innerHTML = "";
        console.log(i);
    }
    else {
        document.getElementById("keyboard").innerHTML = x + a;
    }
    event.preventDefault();
}
items.forEach(item => item.addEventListener("click", testing));