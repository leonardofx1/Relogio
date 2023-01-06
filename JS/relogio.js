const display = document.querySelector('.display')

const getTime = () =>{
    const date= new Date
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const hour =  hours < 10 ? `0${hours}`: hours
 
    const template  = `${hour} : ${minutes} : ${seconds}`;
     display.innerText = template

    console.log(hours.length)

} 

setInterval(getTime,1000)

