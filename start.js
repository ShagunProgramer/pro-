 class Start {

constructor(){

this.button=createButton("Start")
this.button.position(750,500)
this.button.style('background','pink')


}

show(){





}

display(){

this.button.mousePressed(()=>{
    this.button.hide()
    

    h1.visible=false
    jack.visible=false
    shira.visible=false
    
})

}
}