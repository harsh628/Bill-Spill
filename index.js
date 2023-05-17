let prevButton = null;

const wrapper = document.getElementById("wrapp");

wrapper.addEventListener('click', (e) => {

  const isButton = e.target.nodeName === 'BUTTON'; 
  
  if (!isButton) {
    return;
  }
  
  e.target.classList.add('active'); // Add .active CSS Class

  if(prevButton !== null) {
    prevButton.classList.remove('active');  // Remove .active CSS Class
  }
  
  prevButton = e.target;

});

var da = 0;

//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = da;
document.getElementById("nop").value = da;
//creation of increment function
function increment() {
	da = da + 1;
	document.getElementById("counting").innerText = da;
    document.getElementById("nop").value = da;
}
//creation of decrement function
function decrement() {
    if(da==0)
    {
        da=0;
    }else{
        da = da - 1;
    }
	
	document.getElementById("counting").innerText = da;
    document.getElementById("nop").value = da;
}


let d = document, [BUTTON, knapp] = [
    d.querySelectorAll('[type="text"]'),
    d.querySelector('#generate-bill')]
knapp.disabled = true

for (i = 0; i < BUTTON.length; i++) {
  BUTTON[i].addEventListener('input',() => {
    let values = []
    BUTTON.forEach(v => values.push(v.value))
    knapp.disabled = values.includes('')
  })
}
var Tipp=0;

function tip()
{
  Tipp=5;
}
function tip1()
{
  Tipp=10;
}
function tip2()
{
  Tipp=15;
}
function tip3()
{
  Tipp=25;
}
function tip4()
{
  Tipp=50;
}
function tip5()
{
  Tipp=100;
}

function calculate() {

    var data=document.getElementById("bill-am").value;

    Tipp=(data*Tipp)/100;
    document.getElementById("ans").innerText = Tipp;
	document.getElementById("right-a").innerText = Number(data)+Number(Tipp);
  
}
