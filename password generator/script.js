function change(){
  let uselength=parseInt(document.getElementById("length").value)
  if (uselength < 8 || uselength > 32) {
    alert("Password length must be between 8 and 32 characters.");
    return;
  }
let uselowercase=document.getElementById("lowercase").checked
 let useuppercase=document.getElementById("uppercase").checked
 let usesymbols=document.getElementById("symbols").checked
 let usenumber=document.getElementById("numbers").checked
 let output=document.getElementById("password")
  lowerchars="abcdefghijklmnoqrstuvwxyz"
  upperchars="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  symbols="!@#$^&*()_+=|><~?/\ "
  numbers="0123456789"
  
   let charset=""
   let password=""
 
  if(uselowercase)charset+=lowerchars
  if(useuppercase)charset+=upperchars
  if(usesymbols)charset+=symbols
  if(usenumber)charset+=numbers
 
  
for(i=0;i<uselength;i++){
  let randomindex=Math.floor(Math.random()*charset.length);
  password += charset[randomindex]
 
}
output.textContent="Password :  "+password
  
}