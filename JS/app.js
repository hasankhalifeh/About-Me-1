/* eslint-disable no-constant-condition */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable no-redeclare */
/* eslint-disable eqeqeq */
'use strict';
var counter=0;



var userName = prompt('Hello and Welcome! I Would like to know your name');
//console.log('userName=', userName);
alert('Hey ' + userName);

var Question = prompt('Do you think I like Sodas (Pepsi,Sprite)? ');
//console.log('question=', Question);
var Question = Question.toLowerCase();
//console.log(Question);

if (Question == 'yes' || Question == 'y') {
  //console.log('Your answer is correct');

  alert('Your answer is correct');
  counter++;
} else if (Question == 'no' || Question == 'n') {
  //console.log('Your answer is wrong!');
  alert('Your answer is wrong');
}


var driving = prompt('Do you think I like driving?');
//console.log('driving=', driving);
var driving = driving.toLowerCase();
//console.log(driving);

if (driving == 'No' || driving == 'n') {
  //console.log('You are right');
  alert('You are right');
  counter++;
} else if
  (driving == 'yes' || driving == 'y') {
  //console.log('You are wrong');
  alert('You are wrong');

}


var Song = prompt('Can you guess if I am a fan of english songs?');
//console.log('song=', Song);

var Song = Song.toLowerCase();
//console.log(driving);


if (Song == 'yes' || Song == 'y') {
  //console.log('You are wrong !');
  alert('You are wrong');
} else if (Song == 'no' || Song == 'n') {
  //console.log('You are correct');
  alert('You are correct');
  counter++;
}


var Cooking = prompt('Can you guess if I love cooking?');
//console.log('cooking=', Cooking);
var Cooking = Cooking.toLowerCase();
//console.log(Cooking);


if (Cooking == 'yes' || Cooking == 'y') {
  // console.log('You are right !');
  alert('You are right');
  counter++;
} else if (Cooking == 'no' || Cooking == 'n') {
  //console.log('You are wrong');
  alert('You are wrong');
}


var enemy = prompt('Do you think I am a fan of enemy?');
console.log('enemy=', enemy);

var enemy = enemy.toLowerCase();
console.log(enemy);

if (enemy == 'yes' || enemy == 'y') {
  //  console.log('You are wrong !');
  alert('You are wrong');
} else (enemy == 'no' || enemy == 'n')
{
  // console.log('You are correct');
  alert('You are correct');
  counter++;
}


alert('Thank you ' + userName + ' for playing this game with me and hope you enjoy my website!');

alert('Lets play one more game which is guessing ');

var month = prompt('Can you guess in what month i was born?');
console.log('month=', month);

for (var i=0 ; i<=2; i++)
{ console.log(month);
  if(month=='10'){
    console.log('You are correct');
    alert('you are correct');
    counter++;
    break;
  }else if (month>'10'){
    alert('Too Low')
    prompt('Try Again');
  } else if (month<'10'){
    alert('Too High')
    prompt('Try Again');
  }

}

var car= prompt ('Guess what is my dream car ?')
console.log('car=',car);

for(var i=0; i<=4; i++)
{
  console.log(car);
  if(car=='audi'){
    console.log('Yupp i love it!')
    alert('Yuppp how did you know')
    counter++;
    break;
  }else {
    alert('Nop not this one do not give up , try again')
    prompt('Nop not this one do not give up , try again');
  }
}


alert('Your Score is ' +counter );












