window.addEventListener("load", async () => {
    const id = window.location.pathname.split('id.html/').pop()
    const url = `sharetxt.xyz/id.html/${id}`
    $('#linkParagraph').html(url)
});