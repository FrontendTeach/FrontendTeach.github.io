const TYPES = {
    html: 'html',
    css: 'css',
    js: 'js'
};

function restoreDisplay() {
    var lastShown = localStorage.getItem('lastShown');

    if (lastShown) {
        toggleDisplay('nav', lastShown);
    }
}

function toggleDisplay(toHideSelector, toShowSelector) {
    const show = document.getElementById(toShowSelector);

    document.getElementById(toHideSelector).classList.add('hide');
    show.classList.remove('hide');

    if (toShowSelector !== 'nav') {
        localStorage.setItem('lastShown', toShowSelector);
        document.getElementById('back').classList.remove('hide');
    } else {
        localStorage.removeItem('lastShown');
        document.getElementById('back').classList.add('hide');
    }
}

function openAssignment(type) {
    toggleDisplay('nav', `${type}Assignment`)
}

function generateHTMLCells(row) {
    for (let j = 0; j < 3; j++) {
        let cell = document.createElement('span');
        cell.innerHTML = ' BOX ';

        row.appendChild(cell);
    }
}

function generateCSSCells(row, i) {
    row.classList.add('row');
    
    for (let j = 0; j < 3; j++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');

        cell.setAttribute('data-row', i);
        cell.setAttribute('data-col', j);
        row.appendChild(cell);
    }
}

function generateTikTakToeLayout(rootSelector, type) {
    let parent = document.createElement('div');
    parent.classList.add('tiktaktoe');

    for (let i = 0; i < 3; i++) {
        let row = document.createElement('div');

        if (type === TYPES.html) {
            generateHTMLCells(row);
        } else if (type === TYPES.css) {
            generateCSSCells(row, i);
        }

        parent.appendChild(row);
    }

    rootSelector.appendChild(parent);
}

function init() {
    restoreDisplay();

    generateTikTakToeLayout(document.getElementById('htmlAssignment'), TYPES.html);
    generateTikTakToeLayout(document.getElementById('cssAssignment'), TYPES.css);
}

init();