const tipcalculatorBUTTON = document.getElementById('tipcalculator'); 
const temperatureconverterBUTTON = document.getElementById('temperatureconverter'); 
const agecalculatorBUTTON = document.getElementById('agecalculator'); 
const recipebookappBUTTON = document.getElementById('recipebookapp'); 
const dicerollsimulatorBUTTON = document.getElementById('dicerollsimulator'); 
const rockpaperscissorsBUTTON = document.getElementById('rockpaperscissors'); 
const stopwatchBUTTON = document.getElementById('stopwatch'); 
const weightconverterBUTTON = document.getElementById('weightconverter'); 
const stepprogressbarBUTTON = document.getElementById('stepprogressbar'); 
const socialmediaselectorBUTTON = document.getElementById('socialmediaselector'); 
const realtimecharactercounterBUTTON = document.getElementById('realtimecharactercounter'); 
const randompasswordgeneratorBUTTON = document.getElementById('randompasswordgenerator'); 

tipcalculatorBUTTON.addEventListener('click',() => { redirect('tipcalculator'); });
temperatureconverterBUTTON.addEventListener('click',() => { redirect('temperatureconverter'); });
agecalculatorBUTTON.addEventListener('click',() => { redirect('agecalculator'); });
recipebookappBUTTON.addEventListener('click',() => { redirect('recipebookapp'); });
dicerollsimulatorBUTTON.addEventListener('click',() => { redirect('dicerollsimulator'); });
rockpaperscissorsBUTTON.addEventListener('click',() => { redirect('rockpaperscissors'); });
stopwatchBUTTON.addEventListener('click',() => { redirect('stopwatch'); });
weightconverterBUTTON.addEventListener('click',() => { redirect('weightconverter'); });
stepprogressbarBUTTON.addEventListener('click',() => { redirect('stepprogressbar'); });
socialmediaselectorBUTTON.addEventListener('click',() => { redirect('socialmediaselector'); });
realtimecharactercounterBUTTON.addEventListener('click',() => { redirect('realtimecharactercounter'); });
randompasswordgeneratorBUTTON.addEventListener('click',() => { redirect('randompasswordgenerator'); });


function redirect(newlocation){
  window.location = 'https://absurdo-liver.github.io/projectIdeasFruition/' + newlocation;
}
