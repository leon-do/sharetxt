// start button
const randomId = Math.ceil(Math.random() * 9999)

// create link for button
$('#startButton').attr('href', `https://${config.url}/id?${randomId}`)