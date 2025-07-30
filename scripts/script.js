
let checkBtn=document.getElementById("check-btn");
let result=document.getElementById("result");
let textInput=document.getElementById("text-input");
checkBtn.addEventListener("click",()=>{
    if(textInput.value===""){
        alert("Please input a value");
    }
 let wordToCheck=textInput.value.replace(/[^a-zA-Z0-9]/g, "")            
  .trim()
  .toLowerCase();
    let isPalindrome = true;
  for (let i = 0; i < wordToCheck.length / 2; i++) {
    if (wordToCheck[i] !== wordToCheck[wordToCheck.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
 
 if(isPalindrome){
   result.innerText=(textInput.value+" is a palindrome.");
 }
 else{
   result.innerText=(textInput.value+" is not a palindrome.");
 }
})