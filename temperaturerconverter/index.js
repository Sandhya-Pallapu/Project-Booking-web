let textbox=document.getElementById("textbox")
let tocelsius=document.getElementById("tocelsius")
let tofarheniheit=document.getElementById("tofarhenheit")
let mybtn=document.getElementById("mybtn")
let content=document.getElementById("content")
function convert(){
  if(tocelsius.checked){
    let temp=Number(textbox.value) ;
    let converter=5/9*(temp-32)
    content.textContent="The Temperature is  " +converter.toFixed(2)+ "°C"
  }
  else if(tofarheniheit.checked){
     let temp=Number(textbox.value) ;
     let converter=(temp*9/5)+32
     content.textContent= "The Temperature is "+  converter.toFixed(2)+ "°F"
    }

     else{
      content.textContent="please select a conversion type"
     }
  }
