let childOFDiv=document.querySelector("div.container").childNodes
let childArray=Array.from(childOFDiv)
for(let i=0;i<childArray.length;i++){
  if(childArray[i].nodeName==="#text"){
    childArray.splice(i,1)
  }else{
    continue
  }
}

let displayValues=document.querySelector("span.display")
let ansBtn=document.querySelector("button#ans")
let btn=document.querySelectorAll("button")
let ansSpan=document.querySelector(".Answer")
btn=Array.from(btn)
btn.splice(0,1)
for(let Button of btn){
  Button.addEventListener("click",()=>{
    if(Button.innerText==="reset"){
      displayValues.innerText =""
      ansSpan.innerText=""
    }else if(Button.innerText==="+" || Button.innerText==="-" || Button.innerText==="/" || Button.innerText==="*" || Button.innerText==="."){
      displayValues.innerText+=Button.innerText
    }else{
      displayValues.innerText+=parseInt(Button.innerText)
    }
  })
}

ansBtn.addEventListener("click",()=>{
  ansSpan.innerText=eval(displayValues.innerText)
  displayValues.innerText=""
})







