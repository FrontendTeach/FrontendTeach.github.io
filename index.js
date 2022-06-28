import { generateDescription } from './description.js';
import { TikTakToe } from './tik-tak-toe.js';

export class Homework {
    tikTakToeInstance;
    lastChapterTypeOpenedKey = 'lastChapterTypeOpened';

    constructor() {
        // Get the last page that was selected before refresh and restore it
        this.restoreDisplay();

        // when clicking the back button we need to hide the content and show the menu
        document.getElementById('backButton').addEventListener('click', () => {
            this.toggleDisplay({
                hideNav: false,
                type: localStorage.getItem(this.lastChapterTypeOpenedKey)
            });
        })

        document.querySelectorAll('.chapter').forEach((chapter) => {
            chapter.addEventListener('click', () => {
                this.openAssignment(chapter.id);
            })
        })
    }

    restoreDisplay = () => {
        const lastChapterTypeOpened = localStorage.getItem(this.lastChapterTypeOpenedKey);

        if (lastChapterTypeOpened) {
            this.toggleDisplay({
                hideNav: true,
                type: lastChapterTypeOpened
            });
        }
    }

    toggleDisplay = ({
        hideNav,
        type
    }) => {
        const show = document.getElementById(hideNav ? 'assignment' : 'nav');
        const hide = document.getElementById(hideNav ? 'nav' : 'assignment');

        show.classList.remove('hide');
        hide.classList.add('hide');

        if (hideNav) {
            // save what's currently on the screen to keep on refresh
            localStorage.setItem(this.lastChapterTypeOpenedKey, type);
            // show the back button
            document.getElementById('back').classList.remove('hide');
            // show description for current assignment
            document.getElementById('description').classList.remove('hide');

            // instantiate the game
            this.tikTakToeInstance = new TikTakToe(type);
        } else {
            // remove the lastChapterTypeOpened from localstorage since you're on home here
            localStorage.removeItem(this.lastChapterTypeOpenedKey);
            // hide the back button
            document.getElementById('back').classList.add('hide');
            // hide description
            document.getElementById('description').classList.add('hide');

            // Reset the TikTakToe game
            document.getElementById('assignment').innerHTML = '';

            // Set to null the current instance so it can be garbage collected.
            this.tikTakToeInstance = null;
        }

        generateDescription(localStorage.getItem(this.lastChapterTypeOpenedKey));
    }

    openAssignment = (type) => {
        this.toggleDisplay({
            hideNav: true,
            type
        });
    }
}

new Homework();