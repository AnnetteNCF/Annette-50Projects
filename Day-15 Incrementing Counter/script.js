const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        //In the console, without the '+' the number shows up as a string. But with the '+' it changes to number.
        //Is this because only numbers can increment and not strings?
        const target = +counter.getAttribute('data-target')
        // console.log(typeof target, target)
        const c = +counter.innerText

        const increment = target / 200
        // console.log(increment)

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
        
    }

    //How do you know when you need to call a function?
    updateCounter()
})
