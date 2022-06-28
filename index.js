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
        document.getElementById('back').classList.add('hide');
    }
}

function openAssignment(type) {
    toggleDisplay('nav', `${type}Assignment`)
}

function generateTikTakToeLayout(rootSelector) {
    let parent = document.createElement('div');
    parent.classList.add('tiktaktoe');

    for (let i = 0; i < 3; i ++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < 3; j ++) {
            let cell = document.createElement('span');
            cell.classList.add('cell');
            cell.innerHTML = ' BOX ';

            cell.setAttribute('data-row', i);
            cell.setAttribute('data-col', j);
            row.appendChild(cell);
        }

        parent.appendChild(row);
    }

    rootSelector.appendChild(parent);
}

function init() {
    restoreDisplay();

    generateTikTakToeLayout(document.getElementById('htmlAssignment'));
}

init();