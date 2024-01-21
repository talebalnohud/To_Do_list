let input = document.querySelector(".input");
let sub = document.querySelector(".add");
let task = document.querySelector(".tasks");


sub.addEventListener("click", function(){
    if(input.value !== ""){
        let para = document.createElement("p");

        para.classList.add("para");
        if(input.value !== ""){
            para.innerHTML = input.value;
        }

    let randKey = Math.round(Math.random() *  100000);

        let btn = document.createElement("button");
        btn.innerHTML="Delete";

        btn.setAttribute('id', randKey);
        para.setAttribute('id','para-'+ randKey);
        btn.setAttribute("onclick", `removeColumn(${randKey})`);

        para.appendChild(btn);
        task.appendChild(para);

        saveData(randKey)

        input.value = "";
    }
})

function removeColumn(key){
    // console.log(key);
    document.getElementById('para-'+key).remove();
    window.localStorage.removeItem("data-"+key, task.innerHTML);

}
function saveData(randKey){

    window.localStorage.setItem("data-"+randKey, document.getElementById('para-'+randKey).outerHTML);
}

function showDate(){

    let items = Object.keys(localStorage);
    for(let i = 0 ; i < items.length ; i++){
        task.innerHTML += localStorage.getItem(items[i]);
    }

}
showDate()
