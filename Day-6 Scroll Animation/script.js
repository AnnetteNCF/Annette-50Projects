
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)

checkBoxes()
// We need to find out where the trigger point for the 
// boxes to come in is
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        }else {
            box.classList.remove('show')
        }
    })
}