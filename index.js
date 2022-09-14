const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width=720
canvas.height=512

c.fillRect(0,0,canvas.width,canvas.height)

const cat = new Sprite({
    position:{
        x:220,
        y:100
    },
    color: 'blue',
    offset:{
        x:0,
        y:0
    },
    imageSrc:'img/sitting1.png',
    framesMax:4,
    scale:8,
    offset:{
        x:0,
        y:0
    },
    sprites: {
        sitting1:{
            imageSrc: 'img/sitting1.png',
            framesMax: 4, 
        },
        sitting2:{
            imageSrc: 'img/sitting2.png',
            framesMax: 4, 
        },
        run:{
            imageSrc: 'img/run.png',
            framesMax: 8, 
        },
        jump:{
            imageSrc: 'img/jump.png',
            framesMax: 7, 
        },
        licking1:{
            imageSrc: 'img/licking1.png',
            framesMax: 4, 
        },
        licking2:{
            imageSrc: 'img/licking2.png',
            framesMax: 4, 
        },
        sleep:{
            imageSrc: 'img/sleep.png',
            framesMax: 4, 
        },
        strech:{
            imageSrc: 'img/strech.png',
            framesMax: 8, 
        },
        walk:{
            imageSrc: 'img/walk.png',
            framesMax: 8, 
        },
        wave:{
            imageSrc: 'img/wave.png',
            framesMax: 6, 
        }
    },

})
const keys = {
    q: {
        pressed: false
    },
    w: {
        pressed: false
    },
    e:{
        pressed: false
    },
    r:{
        pressed: false
    },
    t:{
        pressed: false
    },
    y:{
        pressed: false
    },
    u:{
        pressed: false
    },
    i:{
        pressed: false
    },
    o:{
        pressed: false
    },
    p:{
        pressed: false
    }
}

function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle='pink'
    c.fillRect(0,0, canvas.width, canvas.height)
    
    cat.update()
    
    let myAudio = document.querySelector('#audio')
    myAudio.play()

    if(keys.q.pressed && cat.lastKey=='q'){
        cat.switchSprite('sitting1')
    }
    if(keys.w.pressed && cat.lastKey=='w'){
        cat.switchSprite('sitting2')
    }
    if(keys.e.pressed && cat.lastKey=='e'){
        cat.switchSprite('run')
    }
    if(keys.r.pressed && cat.lastKey=='r'){
        cat.switchSprite('jump')
    }
    if(keys.t.pressed && cat.lastKey=='t'){
        cat.switchSprite('licking1')
    }
    if(keys.y.pressed && cat.lastKey=='y'){
        cat.switchSprite('licking2')
    }
    if(keys.u.pressed && cat.lastKey=='u'){
        cat.switchSprite('sleep')
    }
    if(keys.i.pressed && cat.lastKey=='i'){
        cat.switchSprite('strech')
    }
    if(keys.o.pressed && cat.lastKey=='o'){
        cat.switchSprite('walk')
    }
    if(keys.p.pressed && cat.lastKey=='p'){
        cat.switchSprite('wave')
    }
}

animate()

window.addEventListener('keydown', (event) => {
    console.log(event.key)
    switch(event.key){
        case 'q':
        keys.q.pressed=true
        cat.lastKey='q'
        break
    }
    switch(event.key){
        case 'w':
        keys.w.pressed=true
        cat.lastKey='w'
        break
    }
    switch(event.key){
        case 'e':
        keys.e.pressed=true
        cat.lastKey='e'
        break
    }   
    switch(event.key){
        case 'r':
        keys.r.pressed=true
        cat.lastKey='r'
        break
    }
    switch(event.key){
        case 't':
        keys.t.pressed=true
        cat.lastKey='t'
        break
    } 
    switch(event.key){
        case 'y':
        keys.y.pressed=true
        cat.lastKey='y'
        break
    }
    switch(event.key){
        case 'u':
        keys.u.pressed=true
        cat.lastKey='u'
        break
    }
    switch(event.key){
        case 'i':
        keys.i.pressed=true
        cat.lastKey='i'
        break
    }
    switch(event.key){
        case 'o':
        keys.o.pressed=true
        cat.lastKey='o'
        break
    }
    switch(event.key){
        case 'p':
        keys.p.pressed=true
        cat.lastKey='p'
        break
    }
})

window.addEventListener('keyup', (event) => {
    console.log(event.key)
    switch(event.key){
        case 'q':
            keys.q.pressed=false
            break
        case 'w':
            keys.w.pressed=false
            break
        case 'e':
            keys.e.pressed=false
            break
        case 'r':
            keys.r.pressed=false
            break
        case 't':
            keys.t.pressed=false
            break
        case 'y':
            keys.y.pressed=false
            break
        case 'u':
            keys.u.pressed=false
            break
        case 'i':
            keys.i.pressed=false
            break
        case 'o':
            keys.o.pressed=false
            break
        case 'p':
            keys.p.pressed=false
            break
    }
})