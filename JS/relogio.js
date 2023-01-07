const display = document.querySelector('.display')
const container = document.querySelector('.container')
const img = document.querySelector('.img')



console.log(container.style)
const showTime = (template) => {
    display.innerText = template
}
const checkTime = hour => {
    if(hour > 5  && hour < 12 ) {
     showImage('day')
    }else if(hour >= 12 && hour <= 18 ){
        showImage('evening')
    }else {
        showImage('night')
    }
}

const showImage = time => {
    img.setAttribute('src',`/img/${time}.jpg`)
}

const formattedText = (time) => {
    const formatted = time.map(time =>  time < 10 ? `0${time} ` :  time )
    const [hour, minute, second] = formatted
    const templateString =  `${hour}:${minute}:${second}`

     showTime(templateString)
     checkTime(hour)
}

const getTime = () =>{
    const date= new Date
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const arrTime = [hours,minutes,seconds]

    formattedText(arrTime)
} 

setInterval(getTime,1000)

