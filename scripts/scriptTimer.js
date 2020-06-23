// Exits for users
const hours = document.getElementById('hoursTime');
const minuts = document.getElementById('minutsTime');
const seconds = document.getElementById('secondsTime');

// Aux's
var cont;

// Times reduces
var hrs = 0;
var min = 0;
var sec = 0;

function count(){

  cont =  setInterval(() => {
    
    // Exit for the user
    hours.innerHTML = (hrs < 10 ? '0' + hrs : hrs);
    minuts.innerHTML = (min < 10 ? '0' + min : min);
    seconds.innerHTML= (sec < 10 ? '0' + sec : sec);

    if(hrs === 0 && min === 0){
      hours.style.display = 'none';
      minuts.style.display = 'none';
    }else if(hrs === 0 && min > 0){
      hours.style.display = 'none';
      minuts.style.display = 'inline';
    }else if(hrs > 0 && min === 0){
      hours.style.display = 'inline';
      minuts.style.display = 'none';
    } 

    sec+= 1;
    if(sec === 60){
      sec = 0;
      min+= 1;
      if(min === 60){
        min = 0;
        hrs+= 1;
        if(hrs === 24){
          hrs = 0;
          alert('End time!');
          location.reload();
        }
      }
    }

  }, 1000);

}

function start(){

  if(hours.innerHTML > 0 || minuts.innerHTML > 0 ||seconds.innerHTML > 0){
    hrs = parseInt(hours.innerHTML);
    min = parseInt(minuts.innerHTML);
    sec = parseInt(seconds.innerHTML);

    return count();
  }else{
    return count();
  }
}

function stop(){
  clearInterval(cont);
}
