/*--------Modal do fim da inscrição--------*/



 const button = document.querySelector("button")
 const modal = document.querySelector("dialog")
 const btnClose = document.querySelector("dialog div")

 button.onclick = function(){
    modal.show()
 }

 btnClose.onclick = function(){
    modal.close()
 }