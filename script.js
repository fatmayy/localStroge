// burada localstroge ile counter'a eşit olan değeri aldık (key,value)
let counter=localStorage.getItem('counter')? Number(localStorage.getItem('counter')):0

//burada html sayfasındaki id2lere DOM etiketi ile eriştik
let counterdom=document.querySelector("#counter")
let incdom=document.querySelector("#increase")
let decdom=document.querySelector("#decrease")
counterdom.innerHTML=counter
//burada event ekledik butonlara click için
incdom.addEventListener("click",clickEvent)
decdom.addEventListener("click",clickEvent)

//burada fonksiyonun içine
function clickEvent(){
    this.id=="increase"? counter+=1 : counter -=1
    localStorage.setItem('counter',counter)
    counterdom.innerHTML=counter
}