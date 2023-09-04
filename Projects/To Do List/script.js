const item = document.getElementById("item");
const toDoBox = document.getElementById("to-do-box");
// console.log(toDoBox.innerHTML);

item.addEventListener(
    "keyup",
    function (e) {
        // console.log(e.key);
        if (e.key == "Enter") {
            if (this.value=="") {
                alert("Please Type Something........");
            }
            else{
                addToDo(this.value);
            }
            this.value = "";
        }
    }
);

const addToDo = (value) => {

    const listItem = document.createElement("li");
    listItem.innerHTML = `
    ${value}
    <span class="material-symbols-outlined" id="delete">
    close
    </span>
    `;


    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    );

    listItem.querySelector("span").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem);
}

document.getElementById("add").addEventListener(
    "click",
    function(a){
        if (item.value=="") {
            alert("Please Type Something........");
        }
        else{
            addToDo(item.value);
        }
    }
)