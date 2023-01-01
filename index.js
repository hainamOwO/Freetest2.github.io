const time = document.getElementById("time");
const button = document.getElementById("end");
let second = 0;
let minute = 30;
let hour = 2;

//clock
let timeId = setInterval(()=>{
  second-=1;
  if (second<0){
    minute -= 1;
    second = 60;
  }
  if (minute<0){
    hour-=1;
    minute=60;
  }

  time.textContent = `0${hour}:${minute}:${second}`
},1000)


const ques = document.querySelectorAll("#num_ques");
const board = document.getElementById("finish_announcement");
let isDoing = true;
let key = "DDCBCDCCDCABACCCCDCBABBDADBBAB"
let ans = "";
let correctAns = 0;
let temp = 0;

//button end
button.onclick = function(){
  isDoing = false;
  clearInterval(timeId);
  const mark = document.getElementById("mark");
    if (ans.length===key.length || (hour===0&&second===0&&minute===0)|| isDoing === false){
      mark.textContent = `${temp}/${key.length}`;
      board.style.display = "block";
      // check incorrect
      const content = document.getElementById("content");
      const p = document.createElement('div');
      for (let i = 0;i<ans.length;i++){
        if (ans[i]!=key[i]){
          
          p.classList.add('QuesNum');
          p.classList.add('Your_choice');
          p.classList.add('Correct_answer');
          content.append(p);
          const QuesNum = document.querySelector('.QuesNum');
          const Choice = document.querySelector('.Your_choice');
          const Correct = document.querySelector('.Correct_answer');
          QuesNum.textContent = `${i}`;
          Choice.textContent = `${ans[i]}`;
          Correct.textContent = `${key[i]}`;
        }
      }
    }
    console.log(`correctAns:${temp}/50`);
}

//finish the test, press enter
window.addEventListener('keydown',event => {
  if (event.key==="Enter"&&isDoing===true){
    ans="";
    for (let i=0;i<ques.length;i++){
      ans+=ques[i].value;
    }
    ans = ans.toUpperCase();
    console.log(ans);
    
    for (let i = 0;i<ans.length;i++){
      if (ans[i]===key[i]){
        correctAns+=1;
      }
    }
    const mark = document.getElementById("mark");
    if (ans.length===key.length || (hour===0&&second===0&&minute===0)|| isDoing === false){
      mark.textContent = `${correctAns}/${key.length}`;
      // check incorrect
      const content = document.getElementById("content");
      const p = document.createElement('div');
      for (let i = 0;i<ans.length;i++){
        if (ans[i]!=key[i]){
          p.classList.add('QuesNum');
          p.classList.add('Your_choice');
          p.classList.add('Correct_answer');
          content.append(p);
          const QuesNum = document.querySelector('.QuesNum');
          const Choice = document.querySelector('.Your_choice');
          const Correct = document.querySelector('.Correct_answer');
          QuesNum.textContent = `${i}`;
          Choice.textContent = `${ans[i]}`;
          Correct.textContent = `${key[i]}`;
        }
      }
    }
    console.log(`correctAns:${correctAns}/50`);
    temp = correctAns;
  }
  correctAns = 0;
})



//draw the exit
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

context.strokeStyle = "gray";
context.lineWidth = 3;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(25,25);
context.moveTo(0,25);
context.lineTo(25,0);
context.stroke();

canvas.onclick = function(){
  board.style.display = "none";
}