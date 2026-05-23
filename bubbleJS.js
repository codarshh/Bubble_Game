
 let newNum = 0;
 let score = 0;
 let timerValue  = 20;


// ********  THIS CODE IS FOR MAKING BUBBLE  Number  *******

// const container = document.getElementById('bottom');        
//  for (let i = 0; i <= 87; i++) {
//     const bubble = document.createElement('div');
//         bubble.className = 'bubble';
//         bubble.textContent = Math.floor(Math.random()*10);
//         container.appendChild(bubble);
//      }


function makeBubble(){
    let clutter = "";
        for(let i = 1;i<=104;i++){ /*  133  */
            clutter+=` <div class="bubble">${Math.floor(Math.random()*10)}</div>`
        }
      document.querySelector("#bottom").innerHTML = clutter;
    }

// *****************************************************

// **********   THIS IS THE PART FOR TIMER COUNTDOWN    ************


function runTimer(){
   let timer = setInterval(function(){
        if(timerValue > 0){
            timerValue--;
            document.querySelector("#timer").textContent = timerValue;
        } else{
            
            clearInterval(timer); // kyun ki 0 hone ke bad bhi setInterval chal rha hai jisse wo extra memory use kr rha hai 
           
            document.querySelector("#bottom").innerHTML = `
                <div id="gameOver">Game Over</div>
            `;
          
            // document.querySelector("#bottom").innerHTML = " Game Over"

        }
      },1000);
    }

// **********************************************************************************

// ************ THIS IS THE PART FOR GETTING NEW HIT VALUE EVERY TIME   ***********

function getNewHit(){
    newNum = Math.floor(Math.random()*10);
    document.querySelector("#hitValue").textContent = newNum;
}

// **********************************************************************************

//  *********  THIS IS THE PART OF CODE FOR INCREASING THE VALUE OF SCORE   *********

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}



function decreaseScore(){
    score -= 10;
    document.querySelector("#scoreVal").textContent = score;
}


// Jab hum kisi element pe event listener lagate hain aur event us element pe handle nahi hota, to wo bubble up karta hai DOM hierarchy mein - parent pe jata hai, phir grandparent, aur aise hi chalta rahega jab tak <html> root element tak na pahunch jaye

document.querySelector("#bottom")
.addEventListener("click" ,function(dets){

    // console.log(dets.target.innerHTML) return string
    // console.log(Number(dets.target.innerHTML))

//  *********   THIS PART IS FOR MATCHING THE CLICKED VALUE OF BUBBLE WITH THE HIT VALUE    *********

    let clickedNum = Number(dets.target.innerHTML);
    if(clickedNum === newNum){
        increaseScore();
        makeBubble();
        getNewHit();
    } else{
        decreaseScore();
    }

})

// **********************************************************************************

getNewHit();
runTimer();
makeBubble();
