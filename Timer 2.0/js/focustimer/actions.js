import state from "./state.js"
import * as el from './elements.js'
import * as sounds from './sounds.js'
import * as timer from './timer.js'


export function toggleRunning(){
state.isRunning = document.documentElement.classList.toggle('running')
timer.countDown()

}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function plusFive(){
    if((el.minutes.textContent) <= 115){
        let minutes = Number(el.minutes.textContent) + 5
    el.minutes.textContent = minutes
    }
    
}

export function minusFive(){
    if( Number(el.minutes.textContent) >= 5){
       let minutes = Number(el.minutes.textContent) - 5
    el.minutes.textContent = minutes 
    }
    
}

export function musicTree(){
    state.musicTree = document.documentElement.classList.toggle('tree')
   
    if(state.musicTree){
        sounds.tree.play()
    }
    else{sounds.tree.pause()}
    
}

export function musicRain(){
    state.musicRain = document.documentElement.classList.toggle('rain')
    if(state.musicRain){
        sounds.rain.play()
    }
    else{sounds.rain.pause()}

}
export function musicCoffee(){
    state.musicCoffee = document.documentElement.classList.toggle('coffee')
    if(state.musicCoffee){
        sounds.coffee.play()
    }
    else{sounds.coffee.pause()}

}
export function musicFire(){
    state.musicFire = document.documentElement.classList.toggle('fire')
    if(state.musicFire){
        sounds.fire.play()
    }
    else{sounds.fire.pause()}

}