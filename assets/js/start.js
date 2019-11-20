// start button
const randomId = Math.ceil(Math.random() * 9999)

// create link for button
$('#startButton').attr('href', `${config.url}/id?${randomId}`)