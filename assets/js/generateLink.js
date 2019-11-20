window.addEventListener("load", async () => {
    const id = window.location.search.split('?').pop()
    $('#linkParagraph').html(`${config.url}/id?${id}`)
});