const insert = document.getElementById('insert')




//window is the top level object in the browser
//remember that 'e' is for event
window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class="key">
        ${event.key === ' ' ? 'Space': event.key}
        <small>event.key</small>
    </div>
    <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
    </div>
    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>
    `
})