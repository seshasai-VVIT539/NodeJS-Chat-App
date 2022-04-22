const socket = io()

socket.on('countUpdated', (count) => {
    console.log('Count has been updated!', count);
})

document.querySelector('#increment').addEventListener('click', () => {
    console.log('button clicled');
    socket.emit('increment')
})