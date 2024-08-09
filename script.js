// option 02 function =====================
function makeMeGreen(){

    const mainHeading = document.getElementById('heading');
    mainHeading.classList.remove('bg-primary');
    mainHeading.style.backgroundColor = 'green';

}
// option 02 function =====================


// option 03 function =====================
const paraChange = document.getElementById('pChange');
paraChange.onclick = changrPara;

function changrPara(){

    document.getElementsByClassName('para')[0].innerHTML = 'fugit aut voluptatem voluptate est, officia, repellendus qui nisi alias earum repudiandae sunt reiciendis.';
}

// option 03.5==========
const paraColor = document.getElementById('pColor');

paraColor.onclick = function colorChange(){

    document.getElementById('paraColor').style.color = 'purple';
    document.getElementById('paraColor').style.fontSize = '22px';

}
// option 03 function =====================

// option 04 function =====================
const bodyPurple = document.getElementById('bpurple');
bodyPurple.addEventListener('click', bodyBGPurple);

function bodyBGPurple(){

    document.body.style.backgroundColor = 'purple';
}

// option 04.5 function ======
const bodyYellow = document.getElementById('bYellow');
bodyYellow.addEventListener('mouseover', function bodyYellow(){

    document.body.style.backgroundColor = 'yellow';
})


// option 4 final ======================

document.getElementById('bGoldenRod').addEventListener('click', function bodyGoldenRod(){

    document.body.style.backgroundColor = 'goldenrod';
})