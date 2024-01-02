let verb;
let counter = 0;
let counterEnd = 5;
const btn = document.getElementById('btnValidate');
const verbPresent = document.getElementById('verbPresent');
const verbPast = document.getElementById('verbPast');
const verbParticiple = document.getElementById('verbParticiple');
const verbTraslade = document.getElementById('verbTraslade');
document.querySelector('input').focus();

function getVerb() {
    
    fetch('./db/irregularVerbs.json')
    .then((response) => response.json())
    .then((json) => {

        let position = Math.random();
        let op = Math.random();
        
        position = position * json.length;
        op = op * 3;

        switch (Math.floor(op)) {
            case 0:
                const present = json[Math.floor(position)];
    
                verbPresent.innerHTML = 'x';
                verbPast.innerHTML = present.past;
                verbParticiple.innerHTML = present.participle;
                verbTraslade.innerHTML = present.traslade;
    
                verb = present.verb;
                break;
    
            case 1:
                const past = json[Math.floor(position)];
    
                verbPresent.innerHTML = past.verb;
                verbPast.innerHTML = 'X';
                verbParticiple.innerHTML = past.participle;
                verbTraslade.innerHTML = past.traslade;
    
                verb = past.past;
                break;
                    
            case 2: 
                const participle = json[Math.floor(position)];
    
                verbPresent.innerHTML = participle.verb;
                verbPast.innerHTML = participle.past;
                verbParticiple.innerHTML = 'X';
                verbTraslade.innerHTML = participle.traslade;
    
                verb = participle.participle;
                break;
    
            default:
                console.log('error');
                break;
        }

    })
    .catch(error => {
        console.error(error);
    });
    
}

function resetGame() {
    const divContent = document.getElementById('containerForm');
    const resetGame = document.createElement('button');
    resetGame.textContent = 'Reset';
    resetGame.classList.add('btnReset');
    
    divContent.appendChild(resetGame);

    resetGame.addEventListener('click', () => {
        location.reload(); 
    });
}

/*
function showVerb(verb){
    const divContent = document.getElementById('formValidateOptions');
    const btnShowVerb = document.createElement('button');
    btnShowVerb.style.padding = '10px 20px';

    divContent.appendChild(btnShowVerb);

    btnShowVerb.addEventListener('click', ()=> {
        alert(verb);
    });

    // validar con null
    return document.getElementById('show').innerHTML = verb;
} */


function validate(input, verb) {
    if (input.toLowerCase().trim() === verb) {
        document.getElementById('contador').innerHTML = `${++counter} / ${counterEnd}`;
        document.getElementById('contador').style = 'color: #27AE60';
        document.querySelector('input').value='';
        document.querySelector('input').focus();
        getVerb();
        document.getElementById('show').innerHTML = '-'
        document.getElementById('show').style = 'color: white';
        //showVerb(null);
    } else {
        document.getElementById('contador').style = 'color: #D98880';
        document.getElementById('show').innerHTML = verb;
        document.getElementById('show').style = 'color: #F7DC6F';
        //showVerb(verb);
    }

    if (counter === counterEnd){
        document.getElementById('formValidate').remove();
        document.getElementById('containerVerbs').remove();
        
        resetGame(verb);
    }
}
 
/*********************************/

getVerb();

btn.addEventListener('click', () => {
    const input = document.querySelector('input').value;
    validate(input, verb);
});
