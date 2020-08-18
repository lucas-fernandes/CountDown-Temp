// inputs users
const hours = document.getElementById('hours');
const minuts = document.getElementById('minuts');
const seconds = document.getElementById('seconds');

// modified the elements html
const theme = document.body;

const back = document.getElementById('back');
const spans = document.getElementById('styleTimes');

const inputs = document.getElementById('inputs');
const buttons = document.getElementById('buttons');

const copy = document.getElementById('copy');
const copyGit = document.getElementById('cg');
const copyLink = document.getElementById('cl');


// exit for users
const hoursTime = document.getElementById('hoursTime');
const minutsTime = document.getElementById('minutsTime');
const secondsTime = document.getElementById('secondsTime');

// times reduceds
var hrs = 0;
var min = 0;
var sec = 0;

// aux's
var change = 0;
var cont = 0;
var h = 0;
var m = 0;
var s = 0;

function count(){// count--

  cont = setInterval(() => {

    // Format exit for the user
    hoursTime.innerHTML = (hrs < 10 ? '0' + hrs : hrs);
    minutsTime.innerHTML = (min < 10 ? '0' + min : min);
    secondsTime.innerHTML = (sec < 10 ? '0' + sec : sec); 
  
    if(hrs === 0 && min === 0){// sec
      hoursTime.style.display = 'none';
      minutsTime.style.display = 'none';
    }else if(hrs === 0 && min > 0){// sec -> min
      hoursTime.style.display = 'none';
      minutsTime.style.display = 'inline';
    }else if(hrs > 0 && min === 0){// sec -> hrs 
      minutsTime.style.display = 'none';
      hoursTime.style.display = 'inline';
    }else{
      hoursTime.style.display = 'inline';
      minutsTime.style.display = 'inline';
    }
    

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


/**
 *   
 * buttons.addEventListener("onmouseover", () => { 
    buttons.style.display = 'block';
   }, false);

   buttons.addEventListener("onmouseout", () => {
    buttons.style.display = 'none';
  }, false); 

  buttons.onmouseover = () => {
  buttons.style.display = 'none';
  }
  buttons.onmouseout = () => {
    buttons.style.display = 'block';
  }
 * 
 * */ 




  h = parseInt(hours.value);
  m = parseInt(minuts.value);
  s = parseInt(seconds.value);
  // Check NaN
  (h === '' ? h = 0 : h);
  (m === '' ? m = 0 : m);
  (s === '' ? s = 0 : s);

  if(hoursTime.innerHTML > 0 || minutsTime.innerHTML > 0 || secondsTime.innerHTML > 0){
    hrs = parseInt(hoursTime.innerHTML);
    min = parseInt(minutsTime.innerHTML);
    sec = parseInt(secondsTime.innerHTML);


    return count();
  }else{
    // styles
    spans.style.marginTop = '20vh';
    buttons.style.marginTop = '18vh';
    //buttons.style.display = 'none';
    copy.style.display = 'none';


    hrs = parseInt(hours.value);
    min = parseInt(minuts.value);
    sec = parseInt(seconds.value);
    // Check NaN
    (hrs === '' ? hrs = 0 : hrs);
    (min === '' ? min = 0 : min);
    (sec === '' ? sec = 0 : sec);

    if(hrs > 0 || min > 0 || sec > 0){// start
      // remove inputs
      inputs.remove();

      return count();
    }else // 0 -> 0 -> 0
      return alert('Insert time!');
  }
  
}

function stop(){// 00:04:35

  return clearInterval(cont);
}

function restart(){// 00:04:35 -> start -> 00:04:35

  hoursTime.style.display = 'inline';
  minutsTime.style.display = 'inline';

  (h <= 0 
    ? h = 0

    : hoursTime.innerHTML = (h < 10 ? '0' + h : h)
  );

  (m <= 0 
    ? m = 0

    : minutsTime.innerHTML = (m < 10 ? '0' + m : m)
  );

  (s <= 0 
    ? s = 0

    : secondsTime.innerHTML = (s < 10 ? '0' + s : s)
  );

  return stop();
}

function mudaCor(){// themer styles

  if(change === 0){
    theme.style.backgroundColor = '#fff';
    theme.style.color = '#000';
    copyGit.style.color = '#000';
    copyLink.style.color = '#000';
  }else if(change === 1){
    theme.style.backgroundColor = '#000';
    theme.style.color = '#fff';
    copyGit.style.color = '#fff';
    copyGit.style.ho
    copyLink.style.color = '#fff';
  }else{
    theme.style.backgroundColor = '#f5f5f5';
    theme.style.color = '#6959cd';
    copyGit.style.color = '#6959cd';
    copyLink.style.color = '#6959cd';
    change -= 3;
  } 
  change++;

}

$(function() {//background image
  $('#image').change(function() {
    const file = $(this)[0].files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      const backgroundImage = $('body').css('backgroundImage', 'url("' + fileReader.result + '")');

      return backgroundImage;
    }
    fileReader.readAsDataURL(file);
  })
});
