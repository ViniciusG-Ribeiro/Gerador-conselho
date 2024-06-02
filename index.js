const numberAdvice = document.getElementById("idAdvice")
const htmlAdvice = document.getElementById("advice")
const adviceOrder = document.getElementById("order-button")

adviceOrder.addEventListener("click",async()=>{
    const returnAdivice = await getAdvice()
    showAdvice(returnAdivice.slip.advice,returnAdivice.slip.id)
})

async function getAdvice(){
    try{
        const url = "https://api.adviceslip.com/advice"
        const response = await fetch(url) 
        return await response.json()
    }catch(err){
        console.log(err)
    }
}

async function showAdvice(advice,id){
    try{
        htmlAdvice.innerText = advice
        numberAdvice.innerText = `advice #${id}`
    }catch(err){
        console.log(err)
    }
}