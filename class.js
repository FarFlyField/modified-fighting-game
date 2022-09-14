class Sprite{
    constructor(
        {
            position,
            imageSrc,
            scale=1,
            framesMax=1,
            offset={x:0,y:0},
            sprites
        }
    ){
        this.position=position
        this.image=new Image
        this.image.src=imageSrc
        this.scale=scale
        this.framesMax=framesMax
        this.offset=offset
        this.sprites=sprites

        this.lastKey

        this.width=50
        this.height=50
        
        this.framesCurrent = 0
        //how many we have gone through
        this.framesElapsed = 0 
        //how many frames we should hold
        this.framesHold = 10

        for(const sprite in this.sprites){
            sprites[sprite].image=new Image()
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }
        
    }

    draw(){
        c.drawImage(
            this.image,
            this.framesCurrent *(this.image.width/this.framesMax),
            0,
            this.image.width/this.framesMax,
            this.image.height,

            this.position.x-this.offset.x, 
            this.position.y-this.offset.y, 
            (this.image.width/this.framesMax)*this.scale, 
            this.image.height*this.scale
            )
    }

    animateFrames(){
        this.framesElapsed++
        if(this.framesElapsed % this.framesHold === 0){
            if(this.framesCurrent<this.framesMax-1){
                this.framesCurrent++
            }else{
                this.framesCurrent=0
            }
        }
    }
    update(){
        this.draw() 
        this.animateFrames()
    }

    switchSprite(sprite){
        switch(sprite){
        case 'sitting1':
            if(this.image!==this.sprites.sitting1.image){
                this.image=this.sprites.sitting1.image
                this.framesMax = this.sprites.sitting1.framesMax
                this.framesCurrent = 0
            }
        break
        case 'sitting2':
            if(this.image!==this.sprites.sitting2.image){
                this.image=this.sprites.sitting2.image
                this.framesMax = this.sprites.sitting2.framesMax
                this.framesCurrent = 0
            }
        break
        case 'run':
            if(this.image!==this.sprites.run.image){
                this.image=this.sprites.run.image
                this.framesMax = this.sprites.run.framesMax
                this.framesCurrent = 0
            }
        break
        case 'jump':
            if(this.image!==this.sprites.jump.image){
                this.image=this.sprites.jump.image
                this.framesMax = this.sprites.jump.framesMax
                this.framesCurrent = 0
            }
        break
        case 'licking1':
            if(this.image!==this.sprites.licking1.image){
                this.image=this.sprites.licking1.image
                this.framesMax = this.sprites.licking1.framesMax
                this.framesCurrent = 0
            }
        break
        case 'licking2':
            if(this.image!==this.sprites.licking2.image){
                this.image=this.sprites.licking2.image
                this.framesMax = this.sprites.licking2.framesMax
                this.framesCurrent = 0
            }
        break
        case 'sleep':
            if(this.image!==this.sprites.sleep.image){
                this.image=this.sprites.sleep.image
                this.framesMax = this.sprites.sleep.framesMax
                this.framesCurrent = 0
            }
        break
        case 'strech':
            if(this.image!==this.sprites.strech.image){
                this.image=this.sprites.strech.image
                this.framesMax = this.sprites.strech.framesMax
                this.framesCurrent = 0
            }
        break
        case 'walk':
            if(this.image!==this.sprites.walk.image){
                this.image=this.sprites.walk.image
                this.framesMax = this.sprites.walk.framesMax
                this.framesCurrent = 0
            }
        break
        case 'wave':
            if(this.image!==this.sprites.wave.image){
                this.image=this.sprites.wave.image
                this.framesMax = this.sprites.wave.framesMax
                this.framesCurrent = 0
            }
        break
    }
}

}


  