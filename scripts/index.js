
const doc = document;
const canvas = doc.querySelector('#canvas')
const ctx = canvas.getContext('2d');


// drawings
//head
ctx.fillStyle = 'purple'
ctx.fillRect(400, 50, 200, 200)


//eyes
ctx.fillStyle = 'yellow'
ctx.fillRect(425, 100, 50, 50)
ctx.fillStyle = 'yellow'
ctx.fillRect(525, 100, 50, 50)

ctx.fillStyle = 'black'
ctx.fillRect(445, 120, 10, 10)
ctx.fillStyle = 'black'
ctx.fillRect(545, 120, 10, 10)


//mouth
ctx.fillStyle = 'red'
ctx.fillRect(450, 175, 100, 30)

ctx.fillStyle = 'black'
ctx.fillRect(450, 190, 100, 5)


//body
ctx.fillStyle = 'purple'
ctx.fillRect(325, 225, 350, 500)


//arms
ctx.fillStyle = 'grey'
ctx.fillRect(275, 275, 75, 250)
ctx.fillStyle = 'pink'
ctx.fillRect(275, 225, 125, 75)

ctx.fillStyle = 'grey'
ctx.fillRect(650, 275, 75, 250)
ctx.fillStyle = 'pink'
ctx.fillRect(600, 225, 125, 75)


//legs

ctx.fillStyle = 'grey'
ctx.fillRect(325, 650, 75, 250)
ctx.fillStyle = 'pink'
ctx.fillRect(325, 650, 125, 75)


ctx.fillStyle = 'grey'
ctx.fillRect(600, 650, 75, 250)
ctx.fillStyle = 'pink'
ctx.fillRect(550, 650, 125, 75)



