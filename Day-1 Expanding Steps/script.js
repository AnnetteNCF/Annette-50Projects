
//We use querySelectorAll instead of querySelector because there is more than one use of .panel
//If we were just to use querySelector is would only get the fist case.
//Wht this does is that it puts all the panels into a node list that is similar to an array.
//console.log(panels) to see

const panels = document.querySelectorAll(".panel");

//You can loop through a node list just like an array.
//forEach is a high order array method
//These methods take in a function as an argument
//usually see an arrow funtion
//We want to have an event listener on each of these panels
//So that when someone clicks on it something happens
//When that click happens we are going to run a function
//that function will add the class of active when a panel is clicked
//we are using .classList which is a property that gives you a list of the classes
//then .add is a method to add a class
//but when we do this it is not removing the .active from the other panels
//which is not what we want to happen so
//we need to create another function that will remove the .active from
//all the other panels BEFORE we add the class.

panels.forEach((panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
}))

//When you have an arrow function with just one arguement you can
//you can remove the second paranthesis. The version on top has them but they are
//not necessary
//what this does is that when the user clicks on one of the panels
//it will remove that .active class from all of them and then 
//add the .active to the panel that is clicked!

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
