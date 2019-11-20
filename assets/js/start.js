// start button
const randomId = Math.floor(Math.random() * 10000)

// create link for button
$('#startButton').attr('href', `https://sharetxt.xyz/id.html?${randomId}`)