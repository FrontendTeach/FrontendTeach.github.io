export const generateDescription = (type) => {
    let description = document.getElementById('description');
    description.innerHTML = '';

    switch (type) {
        case 'html':
            description.innerHTML = `
                <p>
                    This assignment is about HTML.
                </p>
                <p>
                    You need to recreate the above layout using HTML
                </p>
                <p>
                    Research <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements" target="_blank">block</a> vs <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements" target="_blank">inline</a> elements.
                </p>
            `;
            break;
        case 'css':
            description.innerHTML = `
                <p>
                    This assignment is about CSS.
                </p>
                <p>
                    You need to recreate the above layout using CSS
                </p>
                <p>
                    Research <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" target="_blank">flexbox</a> or <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" _target="blank>grid layout</a>. You will be using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border" target="_blank">border</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius" target="_blank">border-radius</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" target="_blank">pseudo-classes</a> (:hover and :active).
                </p>
                <p> Hints: <a href="https://flexboxfroggy.com/" target="_blank">this flexbox game</a> and this <a href="https://cssgridgarden.com/" target="_blank">this grid layout game</a> might help you understand faster & have fun</p>
            `;
            break;
        case 'js1':
            description.innerHTML = `
                <p>
                    This is the first javascript assignment.
                </p>
                <p>
                    You will add the click functionality that will select x and 0 in the game (without checking for winners). Also add a reset button so you can start a new game.
                </p>
                <p>
                    You need to know what box is clicked, and transform it to X or O depending on the last selection (if last was X, now is O and vice versa). Start with X.
                </p>
                <p>
                    A box that was already clicked and has a value (X or O) should not change anymore on subsequent clicks.
                </p>
                <p>
                    You should look over <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes" target="_blank">data attributes</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click" target="_blank">click</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener" target="_blank">addEventListener</a>.
                </p>
            `;
            break;
        case 'js2':
            description.innerHTML = `
                <p>
                    This is the second javascript assignment (BONUS)
                </p>
                <p>
                    Now that you have the game working, you need to add the logic to check for winners.
                </p>
                <p>
                    This involves writing an algorithm to check for the winner. Think about how a winner can be found (horizontally, vertically, or diagonally).
                </p>
                <p>
                    After the game finishes, show an <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/alert" target="_blank">alert</a> with who won (X or O) or if it's a draw and restart the game.
                </p>
                <p>
                    Hints: Use a 3x3 matrix (two dimensional array) data structure (you can find an example <a href="https://www.geeksforgeeks.org/how-to-create-two-dimensional-array-in-javascript/" target="_blank">here</a>).
                </p>
            `;
            break;
        default:
            break;
    }
}