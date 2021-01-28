
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1
next.addEventListener('click', () => {
    currentActive++
        // console.log(currentActive)
    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    // console.log(currentActive)

    update()
})


prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

//take circles which are a node list and loop through
//them with a forEach. It takes in an arrow function. 
//For each circle, check to see if the index is less than the current
// active. If so then add the class of active onto it.
//if not then remove the class of active.
function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    // console.log(actives.length, circles.length)
    //whant to get a percentage for progress width
    //if we look in the css for out progress class,
    //we have the width at 0% and we want to change that
    //so that the line goes to the next circle
    //if we divide the lenghts and then mulitply them by
    //this will get the width as a percent.
    // console.log((actives.length / circles.length)*100)

    //progress is from the variables we created earlie
    //style??
    //width is the property that we want to change
    // progress.style.width = (actives.lenght / circles.length)*100
    //^^^does not work because we are multiplying it by a number
    // and we need to be a unit. This is how the css class works
    // width: 100; does not work instead we need width: 100%;
    // we can achieve this by concatinating a % at  the end
    // progress.style.width = (actives.length / circles.length)*
    //  100 + '%'
     //^^^this makes the line move however it does not move
     //the right amount, it goes past the circle instead of right
     // to it
     //we can fix this by subtracting 1 from the actives and the 
     //circles length which will then give us a small percentage
     // make sure to wrap the statements appropriately so that the 
     //math is right
     progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    //the prev button is already set disabled to true
    //but when we click next and then if we go back
    //we want it to go back to disabled again
    //this is for the beginning
    if(currentActive === 1) {
        prev.disabled = true
         //if the current btn is equal to the number of circles that 
         //there are then we want to set the next button to be 
         //disables because then there are no more steps to go
         //and you are done. this is for the end.
    } else if(currentActive === circles.length) {
        next.disabled = true
         //if we are not at the beginning or at the end of the 
         //progress then we do not want any of them to be disabled
         //this is because we are in the middle
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

