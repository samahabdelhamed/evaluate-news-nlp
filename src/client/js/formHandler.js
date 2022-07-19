
function handleSubmit(event) {
    event.preventDefault()

    let url = document.getElementById('name').value
    if (Client.checkForName(url)) {
            fetch("http://localhost:9090/test", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ url: url })
            }).then(res => res.json())
                .then(function (data) {
                    document.getElementById('results').className = "show"
                    document.getElementById('model').innerHTML = data.model
                    document.getElementById('text').innerHTML = data.sentence_list[0].text
                    document.getElementById('score_tag').innerHTML = data.score_tag
                    document.getElementById('confidence').innerHTML = data.confidence
                    document.getElementById('subjectivity').innerHTML = data.subjectivity
                    document.getElementById('agreement').innerHTML = data.agreement
                    document.getElementById('irony').innerHTML = data.irony
                   
                   // model":"general_en","score_tag":"P","agreement":"DISAGREEMENT","subjectivity":"SUBJECTIVE","confidence":"92","irony":"NONIRONIC",sentence_list":[{"text":"Main Page","inip"
                })
    }
    else {
        alert("Please enter valid URL.");
        document.getElementById('results').className = "hidden"

    }
}

export { handleSubmit }