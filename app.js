let userScore = 0;
let compScore = 0;
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let all = document.querySelectorAll('.optn');

function game(arg){
  let options = ['rock', 'paper', 'scissors'];
  let compChoise = Math.floor(Math.random() * ((options.length) - 0)) + 0;
  if (arg==options[compChoise]){
    log.innerHTML=('User: '+ arg +' Comp: '+ options[compChoise]);
    userScore +=1;
    compScore +=1;
  }
  else if (arg=='rock'&&options[compChoise]=='paper'){
    log.innerHTML=('User: '+ arg +' Comp: '+ options[compChoise]);
    compScore +=1;
  }
  else if (arg=='rock'&&options[compChoise]=='scissors'){
    log.innerHTML=('User: '+ arg +' Comp: '+ options[compChoise]);
    userScore +=1;
  }
  else if (arg=='paper'&&options[compChoise]=='scissors'){
    log.innerHTML=('User: '+ arg +' Comp: '+ options[compChoise]);
    compScore +=1;
  }
  else if (arg=='paper'&&options[compChoise]=='rock'){
    log.innerHTML=('User: '+ arg +' Comp: '+ options[compChoise]);
    userScore +=1;
  }
  else if (arg=='scissors'&&options[compChoise]=='rock'){
    log.innerHTML=('User: '+ arg +' Comp: '+ options[compChoise]);
    compScore +=1;
  }
  else if (arg=='scissors'&&options[compChoise]=='paper'){
    log.innerHTML=('User: '+ arg +' Comp: '+ options[compChoise]);
    userScore +=1;
  }
  document.getElementById('user').innerHTML = userScore;
  document.getElementById('comp').innerHTML = compScore;
  return console.log('HEHEHEHEH '+options[compChoise]);
}
window.addEventListener('click', function(event){
  if(event.target.id=='rock'){
     //console.log('This is rock');
     game(event.target.id);
   }
   else if(event.target.id=='paper'){
      //console.log('This is paper');
      game(event.target.id);
    }
    else if(event.target.id=='scissors'){
      //console.log('This is scissors');
      game(event.target.id);
    }
    else{
      console.log('NOTHING REALLY HAPPENS')
    }
  });
