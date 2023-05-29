let data = window.document.getElementById('dia');
let mes = window.document.getElementById('mes');
let ano = window.document.getElementById('ano');

function formatoTempo(tempo) {
  return tempo < 10? `0${tempo}` : tempo;
};

let days = document.getElementById('days');
let time = document.getElementById('time');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');


function countDown() {
  let d = String(data.value);
  let m = String(mes.value);
  let a = String(ano.value);
  let Aniversario = `${d} ${m} ${a}`;
  let dataAniversario = new Date(Aniversario);
  const hoje = new Date();

  const segTotal = (dataAniversario - hoje) / 1000;
  
  const finalDays = Math.floor(segTotal / 60 / 60 / 24);
  const finalTime = Math.floor(segTotal / 60 / 60) % 24;
  const finalMinutes = Math.floor(segTotal / 60) % 60;
  const finalSeconds = Math.floor(segTotal) % 60;

  days.innerHTML = finalDays;
  time.innerHTML = formatoTempo(finalTime);
  minutes.innerHTML = formatoTempo(finalMinutes);
  seconds.innerHTML = formatoTempo(finalSeconds);
  setInterval(countDown, 1000);
};