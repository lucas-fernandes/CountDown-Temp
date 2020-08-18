// Exits for users
const hours = document.getElementById('hoursTime');
const minuts = document.getElementById('minutsTime');
const seconds = document.getElementById('secondsTime');

// modified the elements html
const back = document.getElementById('back');
const theme = document.body;

// Aux's
var cont;
var change = 0;

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
