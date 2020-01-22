const msg = document.querySelector('#alert');

function updateMsg(t,c,bc){
    msg.innerHTML = t;
    msg.style.color = c;
    msg.style.backgroundColor = bc;
}

//book class
class Show {
    constructor(title, genre) {
        this.title = title;
        this.genre = genre;
    }
}

//ui class
class UI {
    static displayShows() {
        //insert local storage code here

        //const shows = StoredShows;

        //shows.forEach(show => UI.addShowToList(show));
    }

    static addShowToList(show) {
        const list = document.querySelector('#showList');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${show.title}</td>
            <td>${show.genre}</td>
            <td><a href="#" class="delete">X</a></td>
        `;

        //add newly create row to book list
        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector('#title').value = "";
        document.querySelector('#genre').value = "";
    }

    static deleteShow(el) {
        if(el.classList.contains('delete')) {
            //first parent is td then tr
            //we need rid of the entire tr
            el.parentElement.parentElement.remove();
        }
    }
}
//store class



//Display books once the page is loaded
document.addEventListener('DOMContentLoaded', UI.displayShows);

//adding new books
document.querySelector("#showForm").addEventListener('submit', e => {

    //prevent regular submission
    e.preventDefault();
    //grab the users input
    const title = document.querySelector('#title').value;
    const genre = document.querySelector('#genre').value;

    //check all fields are complete
    if(title === "" || genre === "") {
        //change this to a DOM el
        alert("complete all fields");
    } else {
        updateMsg('Show added', '#006400','#1FC600');
        setTimeout(() => {
            updateMsg('', '','');
        }, 2000);

        //create an new instance of show
        const show = new Show(title, genre);

        //console.log(show);

        //add show to form
        UI.addShowToList(show);
        //clear form after submission
        UI.clearFields();
    }
});

//deleting shows
document.querySelector("#showList").addEventListener('click', e => {
    UI.deleteShow(e.target);

    //const title = 

    //alert show removed
    updateMsg('Show removed', '#BF0000','#FF0000');
    setTimeout(() => {
        updateMsg('', '','');
    }, 2000);
})