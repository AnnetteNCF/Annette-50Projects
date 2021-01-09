
// when we click on a panel we want it to become active.
// When another panel is clicked the one that was clicked on before
// it goes back to be non-active.

// 1st create a variable so that you can access the HTML classes.
// Does this need ; ?
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // console.log('I was clicked!');
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
