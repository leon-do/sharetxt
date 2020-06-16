const id = window.location.search.split('?').pop().toString()
firebase.initializeApp(config.firebase)
const db = firebase.firestore();

db.collection("txt").doc(id)
.onSnapshot(function(doc) {
    $('#txtArea').val(doc.data()['text'])
});


const saveText = () => {
    const text = $('#txtArea').val();
    db.collection("txt").doc(id).set({
        text: text
    })
};

// Save text on click
$("#saveButton").on("click", saveText);

// Save text on 'Ctrl + Enter' shortcut
$("#txtArea").keyup(function(e) {
    if (e.ctrlKey && e.keyCode == 13) {
        saveText();
    }
});
