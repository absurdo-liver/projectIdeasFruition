const tipcalculatorBUTTON = document.getElementById('tipcalculator'); 
const temperatureconverterBUTTON = document.getElementById('temperatureconverter'); 
const agecalculatorBUTTON = document.getElementById('agecalculator'); 
const dicerollsimulatorBUTTON = document.getElementById('dicerollsimulator'); 
const stopwatchBUTTON = document.getElementById('stopwatch'); 
const socialmediaselectorBUTTON = document.getElementById('socialmediaselector'); 
const realtimecharactercounterBUTTON = document.getElementById('realtimecharactercounter'); 
const randompasswordgeneratorBUTTON = document.getElementById('randompasswordgenerator'); 

tipcalculatorBUTTON.addEventListener('click',() => { redirect('tipcalculator'); });
temperatureconverterBUTTON.addEventListener('click',() => { redirect('temperatureconverter'); });
agecalculatorBUTTON.addEventListener('click',() => { redirect('agecalculator'); });
dicerollsimulatorBUTTON.addEventListener('click',() => { redirect('dicerollsimulator'); });
stopwatchBUTTON.addEventListener('click',() => { redirect('stopwatch'); });
socialmediaselectorBUTTON.addEventListener('click',() => { redirect('socialmediaselector'); });
realtimecharactercounterBUTTON.addEventListener('click',() => { redirect('realtimecharactercounter'); });
randompasswordgeneratorBUTTON.addEventListener('click',() => { redirect('randompasswordgenerator'); });


function redirect(newlocation){
  window.location = 'https://absurdo-liver.github.io/projectIdeasFruition/' + newlocation;
}
