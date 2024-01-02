let verb;

const btn = document.querySelector('#btn-verb');

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

                console.log(`x`);
                console.log(`${present.past}`);
                console.log(`${present.participle}`);
                console.log(`${present.traslade}`);

                verb = present.verb;

                break;
            case 1:

                const past = json[Math.floor(position)];

                console.log(`${past.verb}`);
                console.log(`x`);
                console.log(`${past.participle}`);
                console.log(`${past.traslade}`);

                verb = past.past;

                break;
            case 2:

                const participle = json[Math.floor(position)];

                console.log(`${participle.verb}`);
                console.log(`${participle.past}`);
                console.log(`x`);
                console.log(`${participle.traslade}`);

                verb = participle.participle;

                break;
            default:
                console.log('Error');
                break;
        }

    })
    .catch(error => {
        console.error(error);
    });

}

function validate(input, verb){
    if (input.toLowerCase().trim() === verb) {
        console.log(true);
        getVerb()
    } else {
        console.log(false);
    }
}

getVerb();

btn.addEventListener('click',() => {
    const input = document.querySelector('#input-verb').value;
    validate(input, verb)
})