const id = window.location.search.split('?').pop().toString()
firebase.initializeApp(config.firebase)
const db = firebase.firestore();

db.collection("txt").doc(id)
.onSnapshot(function(doc) {
    $('#txtArea').val(doc.data()['text'])
});


$('#saveButton').click(() => {
    const text = $('#txtArea').val();
    db.collection("txt").doc(id).set({
        text: text
    })
});
