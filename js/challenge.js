document.addEventListener("DOMContentLoaded",()=> {
    console.log('Page is loaded');
const count = document.getElementById("counter")

let counter = 0

let timer = setInterval(()=> { 
    counter ++;
    count.textContent = counter;
}, 1000);


const decrease = ()=> {
    counter --;
    count.textContent = counter;
    console.log("decrease:", counter)
}

const minus = document.querySelector('#minus')
minus.addEventListener('click', decrease);

const increase = ()=> {
    counter ++;
    count.textContent = counter;
    console.log("increase:", counter)
}
const plus = document.querySelector('#plus')
plus.addEventListener('click', increase);



const likes = document.querySelector('.likes')
const likesData = {}
likes.addEventListener('click', touch)

function touch() {
    console.log('Like cliked')
    if (likes[counter]) {
        likes[counter]++;
      }  else {
                likes[counter] = 1;
             }
       console.log(likesData)   
            }
       
       let isPaused = false;
       const pauseButton = document.querySelector('#pause');

       pauseButton.addEventListener('click', () => {
    if (!isPaused) {
        clearInterval(timer);
        plus.disabled = true;
        minus.disabled = true;
        likes.disabled = true;
        pauseButton.textContent = "resume";
        isPaused = true;
    } else {
        timer = setInterval(() => {
            counter++;
            count.textContent = counter;
        }, 1000);

        plus.disabled = false;
        minus.disabled = false;
        likes.disabled = false;
    
        pauseButton.textContent = "pause";
        isPaused = false;
        
}
       })
       
       const leaveComment = (event) => {
           event.preventDefault();
           console.log('submitted');
           const userInput = event.target.querySelector('#comment-input');
           const pTag = document.createElement('p');
           pTag.textContent = userInput.value;
           commentContainer.append(pTag);
           userInput.value = '';

           const commentForm = document.querySelector('#comment-form'); 
           const commentContainer = document.querySelector('#list');     
           commentForm.addEventListener('submit', leaveComment);
       }
   });