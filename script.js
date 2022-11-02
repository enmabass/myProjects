let username = 'Sebastian2445';
let posts = [
    {
        'author': 'rbb24',
        'image': 'img/covid.jpg',
        'description': 'Die Maskenpflicht in Berlin wird vorerst nicht verschärft. Der Senat verständigte sich am Dienstag nach erneuter Beratung darauf, das Tragen einer medizinischen Maske in Innenräumen lediglich zu empfehlen. Eine Pflicht ist damit nicht verbunden. Diese Empfehlung gilt für öffentlich zugängliche Innenräume, in denen sich mehrere Personen aufhalten. Das wären beispielsweise Geschäfte und Kultureinrichtungen.',
        'location': 'Berlin, Deutschland',
        'time': 'VOR 2 MINUTEN',
        'likes': 99,
        'comment': []
    },
    {
        'author': 'Tagesschau',
        'image': 'img/krank.jpg',
        'description': 'Polizei und Staatsanwaltschaft ermitteln gegen eine Ärztin aus Sachsen, die gegen Bezahlung falsche Corona-Atteste ausgestellt haben soll. In mehreren Bundesländern gab es Razzien bei Unterstützern der Ärztin oder Menschen, die für die Atteste zahlten.',
        'location': 'Bundesgerichtshof',
        'time': 'VOR 8 Stunden',
        'likes': 956,
        'comment': []
    },
    {
        'author': 'Spiegel',
        'image': 'img/Sonnenfinsternis.jpg',
        'description': 'Zur Mittagszeit ließ sich ein besonderes Spektakel am Himmel beobachten: Der Mond verdeckte einen Teil des Sonnenlichts. Besonders im Süden war die Sicht klar – an anderen Orten machten sich manche die Wolken zunutze. ',
        'location': '',
        'time': 'GESTERN',
        'likes': 3.566,
        'comment': []
    },
    {
        'author': 'WELT',
        'image': 'img/rus-ukr.jpg',
        'description': 'Zum ersten Mal seit Beginn des Ukraine-Kriegs ist Frank-Walter Steinmeier nach Kiew gereist. Er traf den ukrainischen Präsidenten Wolodymyr Selenskyj und verurteilte die „niederträchtigen Angriffe“ Russlands. Bei einem Termin außerhalb der Hauptstadt wurde Luftalarm ausgelöst.',
        'location ': 'Kiew, Ukraine',
        'time': 'VOR 2 Tagen',
        'likes': 9.678,
        'comment': []
    },
]




function render() {

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        document.getElementById('content').innerHTML += `
        <div class="postBox"">
        <div class="postTitle">
                    <span class="margin-right"><img src="img/profile.png">
                    </span>
                    <span class="font">${post['author']}<br>${post['location']}
                    </span>  
                </div>
                <img class="imgPost" src="${post['image']}">
                <div class="splitter space-between center">
                <div>
                    <img src="img/like.png" class="picIcon">
                    <img src="img/chat.png" class="picIcon">
                    <img src="img/send.png" class="picIcon">
                </div>
                <span><img src="img/save.png" class="saveIcon"></span>
            </div>
            <div class="commentSection">
            <span>Gefällt ${post['likes']} Mal<br><br></span>
            <span><b id="profileName">${post['author']} </b><span>${post['description']}<br><br></span></span>
            <span class="grey">${post['time']}<br><br></span>



            <div id="allComments${i}" class="allComments"></div>
            </div>

            <hr style="color: rgba(128, 128, 128, 0.103);">
            <input class="input" id="comment${i}" placeholder="Kommentieren ... ">
            <span class="blue  paddingLeft" id="post" onclick="pushComment(${i})">Posten</span>
            </div>
        `
    }

}


function pushComment(i) {

    let inputval = document.getElementById(`comment${i}`).value;
    if (inputval == "") {
        alert("Bitte etwas eingeben");

    }
    else {
        posts[i]["comment"].push(inputval);
        addComment(i);

    }

};

function addComment(i) {
    const post = posts[i];
    const profileName = username;

    document.getElementById(`comment${i}`).value = '';
    document.getElementById(`allComments${i}`).innerHTML += `<span class="paddingBottom"><b>${profileName}</b> ${post["comment"]}</span>`
    deleteComment(i);

}

function deleteComment(i) {
    posts[i]["comment"].splice(0, 1);
}

function filterNames() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    console.log(search)
}