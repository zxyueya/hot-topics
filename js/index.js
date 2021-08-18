// get the references to the active parts of the webpage
let dd = document.querySelector('.dynamic-content');

let link = document.querySelectorAll('.button');

let url = './partials/home.html';


fetch(url)
    .then(function(rsp){
        if (rsp.ok) {
            return rsp.text();
        }

        // handle error
        throw new Error(rsp.statusText);
    })
    .then(function (data) {
        dd.innerHTML = data;
    })
    .catch( function (err) {
        console.log(err.message);
    });


function selectContent (ev) {
    ev.preventDefault();
    if (ev.hasAttribute('href')) {
        let url = ev.target.getAttribute('href');
    }
} 

for (let i = 0; i < sizeof(link); i++) {
    link[0].onClick = selectContent;
}





