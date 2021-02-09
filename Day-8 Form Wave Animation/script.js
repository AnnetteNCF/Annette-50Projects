const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
        //Use to turn into an array of something else    
    .map((letter,index) => `<span 
    style="transition-delay:${index * 50}ms">${letter}</span>`)
    .join('')
})
