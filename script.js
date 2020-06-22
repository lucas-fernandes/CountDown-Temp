// inputs users
const hours = document.getElementById('hours');
const minuts = document.getElementById('minuts');
const seconds = document.getElementById('seconds');

// exit for users
const hoursTime = document.getElementById('hoursTime');
const minutsTime = document.getElementById('minutsTime');
const secondsTime = document.getElementById('secondsTime');

// times reduceds
var hrs = 0;
var min = 0;
var sec = 0;

// aux's
var cont = 0;
var h = 0;
var m = 0;
var s = 0;


function count(){// count--

  cont = setInterval(() => {

    // Exit for the user
    hoursTime.innerHTML = (hrs < 10 ? '0' + hrs : hrs);
    minutsTime.innerHTML = (min < 10 ? '0' + min : min);
    secondsTime.innerHTML = (sec < 10 ? '0' + sec : sec);   

    // Rules
      if(sec > 0){// sec
        sec -= 1;
      }else if(sec === 0 && min > 0){// min
        sec = 59;
        min -= 1;
      }else if(sec === 0 && min === 0 && hrs > 0){// hrs
        sec = 59;
        min = 59;
        hrs -= 1;
      }else if(sec === 0 && min === 0 && hrs === 0){
        restart();
      
        var alert = setTimeout(async () => {
          await location.reload();
        }, 5000)
    
        return alert;
      }

  }, 1000);
  
}

 function start(){// start ...

  h = hours.value;
  m = minuts.value;
  s = seconds.value;

  if(hoursTime.innerHTML > 0 || minutsTime.innerHTML > 0 || secondsTime.innerHTML > 0){
    hrs = parseInt(hoursTime.innerHTML);
    min = parseInt(minutsTime.innerHTML);
    sec = parseInt(secondsTime.innerHTML);


    return count();
  }else{

    hrs = parseInt(hours.value);
    min = parseInt(minuts.value);
    sec = parseInt(seconds.value);

    // Check NaN
    (hrs === '' ? hrs = 0 : hrs);
    (min === '' ? min = 0 : min);
    (sec === '' ? sec = 0 : sec);

    if(hrs > 0 || min > 0 || sec > 0){// start
      // remove inputs
      hours.remove();
      minuts.remove();
      seconds.remove();

      return count();
    }else // 0 -> 0 -> 0
      return alert('Insert time!');
  }
  
}

function stop(){// 00:04:35

  return clearInterval(cont);
}

function restart(){// 00:04:35 -> start -> 00:04:35

  (h === '' ? h = 0 : h);
  (m === '' ? m = 0 : m);
  (s === '' ? s = 0 : s);

  hoursTime.innerHTML = (h < 10 ? '0' + h : h);
  minutsTime.innerHTML = (m < 10 ? '0' + m : m);
  secondsTime.innerHTML = (s < 10 ? '0' + s : s);

  return stop();
}
