function alertFunction (message){
    alert(message)
}
let promptElement =document.createElement("div")
document.body.append(promptElement);

function promptFunction(){
    let answer=prompt("Hey there have you attend the class?","")

    promptElement.textContent= `${answer} is your answer`
}
function confirmFunction(){
    let response = confirm("Are you confirming");
    if (response == true){
        promptElement.textContent=`You have approved the request`
    }else{
        promptElement.textContent=`You have rejected the request`
    }

}
let count=10;
function timeOutExample(){
    //count++
    promptElement.textContent=count;
    count=count-1;
    const id =setTimeout(timeOutExample, 1000);
    if(count == 0){
        clearTimeout(id);
        promptElement.textContent="your time is up...."
    }
}


function intervalFunction (){
let ourInterval=setInterval(()=> {
    promptElement.textContent = count
    count=count-1
    if  (count === 0 ){
        clearInterval(ourInterval)
        promptElement.textContent= "Your time has stopped..."
    }
},1000);
}
// //////////////////////////////////////
let eventCounter = 0
function clickEvent(){
    eventCounter++;
    console.log("You Clicked This", eventCounter)
}
let changeCounter=0
function changeEvent(){
    changeCounter++;
    console.log("You Changed This", changeCounter)
}