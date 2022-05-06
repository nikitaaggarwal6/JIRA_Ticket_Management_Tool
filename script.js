let addBtn = document.querySelector(".add-btn");
let mainCont = document.querySelector(".main-cont");
let modalCont = document.querySelector(".modal-cont");
let textarea = document.querySelector(".textarea-cont");
let addFlag = false;

addBtn.addEventListener("click", (e) => {
    addFlag = !addFlag;
    if (addFlag) {
        modalCont.style.display = "flex";
    } else {
        modalCont.style.display = "none";
    }
})

modalCont.addEventListener("keydown", (e) => {
    let key = e.key;
    if (key == "Shift") {
        createTicket();
        modalCont.style.display = "none";
        addFlag = false;
        textarea.value = "";
    }
})

function createTicket() {
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `
        <div class="ticket-color"></div>
        <div class="ticket-id"></div>
        <div class="task-area">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi soluta delectus officiis repellat nisi
            neque modi provident omnis odit illo possimus, temporibus ex dolor quas amet
        </div>
    `;
    mainCont.appendChild(ticketCont);
}