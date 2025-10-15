function find_edit() {
    const surnameNod = document.getElementById('surname')
    surnameNod.innerHTML = "<b>Khudadian</b>"

    const nameNod = document.getElementById('name')
    nameNod.innerHTML= "<b>Elina</b>"
}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click", find_edit)

