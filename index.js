const containerRoom = document.querySelector('.container-room')
const estimateTime = document.querySelector('.estimate-time')
const room1 = createRoom(1,'Room 1')
const room2 = createRoom(2,'Room 2')
const room3 = createRoom(3,'Room 3') 
containerRoom.appendChild(room1)
containerRoom.appendChild(room2)
containerRoom.appendChild(room3)

// room1.childNodes[2].childNodes[0].innerHTML=`Intime : ${time1}`
// room1.childNodes[2].childNodes[1].innerHTML=`Duration : ${time1}`




function createRoom(number,name){
    const room = document.createElement('div')
    const roomName = document.createElement('h3')
    const roomImg = document.createElement('img')
    const roomInfo = document.createElement('div')
    const inTime = document.createElement('p')
    const durationTime = document.createElement('p')
    
    
    roomName.innerHTML = name
    roomImg.src="https://cdn2.iconfinder.com/data/icons/objects-23/50/1F6BD-toilet-512.png"
    inTime.innerHTML="Intime : "
    durationTime.innerHTML="Duration : "
    

    room.classList.add('room',`room-${number}`)
    roomInfo.classList.add('room-infomation')

    roomInfo.appendChild(inTime)
    roomInfo.appendChild(durationTime)    
    room.appendChild(roomName)
    room.appendChild(roomImg)
    room.appendChild(roomInfo)
    return room
}
let statusTime1=false
let statusTime2=false
let statusTime3=false
let num1 = 0
let num2 = 0
let num3 = 0

let counter = 0 

setInterval(() => {
    if(counter===0){
        counter = 1
        statusTime1= false
    }
    else{
        counter = 0
        statusTime1= true
    }
    
}, 5000);
 



setInterval(() => {
    if(statusTime1){
        num1++
        room1.childNodes[2].childNodes[1].innerHTML=`Duration : ${num1}`
        
    }
    else{
        num1=0
        room1.childNodes[2].childNodes[1].innerHTML=`Duration : ${num1}`
    }
}, 1000);

setInterval(() => {
    if(statusTime2){
        num2++
        room2.childNodes[2].childNodes[1].innerHTML=`Duration : ${num2}`
        
    }
    else{
        num2=0
        room2.childNodes[2].childNodes[1].innerHTML=`Duration : ${num2}`
    }
}, 1000);

setInterval(() => {
    if(statusTime3){
        num3++
        room3.childNodes[2].childNodes[1].innerHTML=`Duration : ${num3}`
        
    }
    else{
        num3=0
        room3.childNodes[2].childNodes[1].innerHTML=`Duration : ${num3}`
    }
}, 1000);




