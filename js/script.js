let operation="";
let newNum="";
let isOptTaken=false;
let input = [];

function process(n1, n2, opt){
    let re;
    console.log(n1, n2, opt);
    switch (opt) {
        case "+": re=n1+n2;
            break;
        case "-": re=n1-n2;
            break;
        case "X": re=n1*n2;
            break;
        case "/": re=n1/n2;
            break;
    }
    console.log(re);
    return re;
}


document.getElementById("buttons").addEventListener('click', function(event){

    let output = document.getElementById("outputText");

    const clickedId = event.target.id;
    if(clickedId=='clear') {input=[]; output.innerText=""; newNum="";}
    else if(clickedId=='plus'){
        if(newNum) input.push(newNum);
        if(input.length>=3){
            let ans=process(parseFloat(input[0]), parseFloat(input[2]), input[1]);
            input[0]=ans;
            output.innerText = ans;
            newNum="";input.pop();
        }
        else input.push("+");
        operation="+", isOptTaken=true;
        console.log(input);
    }
    else if(clickedId=='minus'){
        if(newNum) input.push(newNum);
        input.push("-");
        operation="-", isOptTaken=true;
    }
    else if(clickedId=='multiply'){
        if(newNum) input.push(newNum);
        input.push("X");
        operation="X", isOptTaken=true;
    }
    else if(clickedId=='division'){
        if(newNum) input.push(newNum);
        input.push("/");
        operation="/", isOptTaken=true;
    }
    else if(clickedId=='equal'){
        if(newNum) input.push(newNum);
        console.log(input);
        let len=input.length;
        if(len>=3){
            let ans=process(parseFloat(input[0]), parseFloat(input[2]), input[1]);
            input[0]=ans;
            output.innerText = ans;
        }
        newNum="";
    }
    else if(output.innerText.length<6){
        if(isOptTaken) {newNum=output.innerText=""; isOptTaken=false;}
        switch (clickedId) {
            case 'one': newNum+="1";
                break;
            case 'two': newNum+="2";
                break;
            case 'three':newNum+="3";
                break;
            case 'four':newNum+="4";
                break;
            case 'five':newNum+="5";
                break;
            case 'six':newNum+="6";
                break;
            case 'seven':newNum+="7";
                break;
            case 'eight':newNum+="8";
                break;
            case 'nine':newNum+="9";
                break;
            case 'zero':{
                if(newNum) newNum+="0";
            }
                break;
        }
        output.innerText=newNum;
    }
})