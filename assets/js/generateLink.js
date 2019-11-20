window.addEventListener("load", async () => {
    if (window.location.pathname.includes("/id.html")) {
        const link = `http://${config.token}`
        const channelId = config.channelId[99]
        $('#linkParagraph').html(`sharetxt.xyz/share/${channelId}`)
    }
});