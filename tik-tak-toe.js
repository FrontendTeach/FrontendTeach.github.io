export const TYPES = {
    html: 'html',
    css: 'css',
    js1: 'js1',
    js2: 'js2',
};

export class TikTakToe {
    state = [];
    selections = {
        none: -1,
        x: 0,
        o: 1,
    };
    lastSelection = this.selections.none;

    constructor(type) {
        // generate the layout for the TIK TAK TOE game
        this.generateTikTakToeLayout(document.getElementById(`assignment`), TYPES[type]);

        if (TYPES[type] !== TYPES.html) {
            this.resetState();
        }
    }

    generateHTMLCells = (row) => {
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement('span');
            cell.innerHTML = ' BOX ';

            row.appendChild(cell);
        }
    }

    generateCSSCells = (row, i, type) => {
        row.classList.add('row');

        for (let j = 0; j < 3; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');

            cell.setAttribute('data-row', i);
            cell.setAttribute('data-col', j);
            row.appendChild(cell);

            if (type === TYPES.js1 || type === TYPES.js2) {
                cell.addEventListener('click', ev => this.handleCellClick(ev, type));
            }
        }
    }

    generateTikTakToeLayout = (rootSelector, type) => {
        // create the table entrypoint
        let parent = document.createElement('div');
        parent.classList.add('tiktaktoe');

        // add the reset button if in js assignment
        if (type === TYPES.js1 || type === TYPES.js2) {
            let reset = document.createElement('a');
            reset.href = 'javascript:void(0)';
            reset.innerHTML = 'Reset';
            reset.addEventListener('click', this.resetState);

            parent.appendChild(reset);
        }

        for (let i = 0; i < 3; i++) {
            // create the row
            let row = document.createElement('div');

            if (type === TYPES.html) {
                /* 
                * create the cells for HTML in the form of
                * BOX BOX BOX
                * BOX BOX BOX
                * BOX BOX BOX
                */
                this.generateHTMLCells(row);
            } else {
                /*
                * create the cells for CSS in the form of
                * [][][]
                * [][][]
                * [][][]
                */
                this.generateCSSCells(row, i, type);
            }

            parent.appendChild(row);
        }

        rootSelector.appendChild(parent);
    }

    resetState = () => {
        this.state = [];
        this.lastSelection = this.selections.none;

        for (let i = 0; i < 3; i++) {
            this.state[i] = [];

            for (let j = 0; j < 3; j++) {
                this.state[i][j] = this.selections.none;
                document.querySelector(`[data-row="${i}"][data-col="${j}"]`).innerHTML = '';
            }
        }
    }

    checkRow = (i) => {
        let rowHorizontal = this.state[i];
        let rowVertical = this.state[0][i];
        let firstDiagonal = this.state[0][0];
        let secondDiagonal = this.state[2][0];

        if (rowHorizontal[0] !== this.selections.none && rowHorizontal[0] === rowHorizontal[1] && rowHorizontal[1] === rowHorizontal[2]) {
            return rowHorizontal[0];
        }

        if (rowVertical !== this.selections.none && rowVertical === this.state[1][i] && rowVertical === this.state[2][i]) {
            return rowVertical;
        }

        if (firstDiagonal !== this.selections.none && firstDiagonal === this.state[1][1] && firstDiagonal === this.state[2][2]) {
            return firstDiagonal;
        }

        if (secondDiagonal !== this.selections.none && secondDiagonal === this.state[1][1] && secondDiagonal === this.state[0][2]) {
            return secondDiagonal;
        }

        return this.selections.none;
    }

    checkForWinner = () => {
        for (let i = 0; i < 3; i++) {
            let winner = this.checkRow(i);

            if (winner !== this.selections.none) {
                return winner;
            }
        }

        return false;
    }

    checkForDraw = () => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.state[i][j] === this.selections.none) {
                    return false;
                }
            }
        }

        return true;
    }

    handleCellClick = (ev, type) => {
        const row = ev.target.dataset.row;
        const col = ev.target.dataset.col;

        if (this.state[row][col] !== this.selections.none) {
            return;
        }

        if (this.lastSelection === this.selections.x) {
            this.lastSelection = this.selections.o;
        } else {
            this.lastSelection = this.selections.x;
        }

        this.state[row][col] = this.lastSelection;
        ev.target.innerHTML = this.lastSelection === this.selections.x ? 'X' : 'O';

        if (type === TYPES.js2) {
            // Async task so that the DOM is updated before the check for winner
            setTimeout(() => {
                const winner = this.checkForWinner();
                const draw = this.checkForDraw();

                if (winner !== false) {
                    alert(`${this.selections.x === winner ? 'X' : '0'} is the winner! Game will now reset !`);
                    this.resetState();

                    return;
                }

                if (draw !== false) {
                    alert('Draw! Game will now reset !');
                    this.resetState();
                }
            }, 0);
        }
    }
}