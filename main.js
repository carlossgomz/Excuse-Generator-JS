let who = ['el perro', 'mi abuela','su tortuga','mi pajaro'];
let what = ['se comio','piso','aplasto','rompio']
let when = ['antes de clases','justo a tiempo','cuando la termine','durante el desayuno','mientras rezaba']

function excuseGenerator(who, what, when){
    numWho = Math.floor(Math.random() * who.length);
    numWhat = Math.floor(Math.random() * what.length);
    numWhen = Math.floor(Math.random() * when.length);
    return who[numWho]+' '+what[numWho]+ ' ' + "mi tarea" + ' ' +when[numWhen];
}

function onLoad(){
let excuse = document.getElementById('excuse');
excuse.innerHTML = excuseGenerator(who, what, when);
}

window.onload = onLoad;
