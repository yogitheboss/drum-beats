var audio1=new Audio("sounds/Drum Kit_sounds_crash.mp3")
var audio2=new Audio("sounds/Drum Kit_sounds_kick-bass.mp3")
var audio3=new Audio("sounds/Drum Kit_sounds_snare.mp3")
var audio4=new Audio("sounds/Drum Kit_sounds_tom-1.mp3")
var audio5=new Audio("sounds/Drum Kit_sounds_tom-2.mp3")
var audio6=new Audio("sounds/Drum Kit_sounds_tom-3.mp3")
var audio7=new Audio("sounds/Drum Kit_sounds_tom-4.mp3")

// document.querySelector("button").addEventListener("click",handleClick)


//anonymous implementation
// document.querySelector("button").addEventListener("click",function(){
//     alert("I got clicked ")
// })
var drumCount=document.getElementsByClassName("drum").length
for(var i =0;i<drumCount;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        if(this.id==1+0){
            audio1.currentTime = 0;
            audio1.play()
        }
        else if(this.id==1+1){
            audio2.currentTime = 0;
            audio2.play()
        }
        else if(this.id==1+2){
            audio3.currentTime = 0;
            audio3.play()
        }
        else if(this.id==1+3){
            audio4.currentTime = 0;
            audio4.play()
        }
        else if(this.id==1+4){
            audio5.currentTime = 0;
            audio5.play()
        }
        else if(this.id==1+5){
            audio6.currentTime = 0;
            audio6.play()
        }
        else if(this.id==1+6){
            audio7.currentTime = 0;
            audio7.play()
        }
    })
}


document.addEventListener("keydown",function(event){
    // console.log(typeof(event.key))
    if(event.key=='w'){
        document.getElementById("1").style.transform="scale(1.2)"
        audio1.currentTime = 0;
        audio1.play()
        
    }
    
    else if(event.key=='a'){
        document.getElementById("2").style.transform="scale(1.2)"
        audio2.currentTime = 0;
        audio2.play()
    }
    else if(event.key=='s'){
        document.getElementById("3").style.transform="scale(1.2)"
        audio3.currentTime = 0;
        audio3.play()
    }
    else if(event.key=='d'){
        document.getElementById("4").style.transform="scale(1.2)"
        audio4.currentTime = 0;
        audio4.play()
    }
    else if(event.key=='j'){
        document.getElementById("5").style.transform="scale(1.2)"
        audio5.currentTime = 0;
        audio5.play()
    }
    else if(event.key=='k'){
        document.getElementById("6").style.transform="scale(1.2)"
        audio6.currentTime = 0;
        audio6.play()
    }
    else if(event.key=='l'){
        document.getElementById("7").style.transform="scale(1.2)"
        audio7.currentTime = 0;
        audio7.play()
    }
})
document.addEventListener("keyup",function(event){
    document.getElementById("1").style.transform="scale(1)"
    document.getElementById("2").style.transform="scale(1)"
    document.getElementById("3").style.transform="scale(1)"
    document.getElementById("4").style.transform="scale(1)"
    document.getElementById("5").style.transform="scale(1)"
    document.getElementById("6").style.transform="scale(1)"
    document.getElementById("7").style.transform="scale(1)"

})