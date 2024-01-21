let input = document.querySelector(".input");
let sub = document.querySelector(".add");
let task = document.querySelector(".tasks");


sub.addEventListener("click",function(){
    if (input.value !== ""){
        
        let randkey = Math.round(Math.random() * 100000);
        
        let para = document.createElement("p");
        para.classList.add("para");
        para.setAttribute("id",`para-${randkey}`)
        para.innerHTML = input.value;
        
        let btn = document.createElement("button");
        btn.setAttribute("id", randkey)
        btn.setAttribute("onclick",`removeData(${randkey})`)
        btn.innerHTML="Delete";
        
        para.appendChild(btn);
        task.appendChild(para);
        
        
        
        saveData(randkey)
        input.value = "";
    }
})
window.addEventListener("keypress", function(e){
    console.log(e.key)
    if (e.key === "Enter"){
        sub.click();
    }
})

function saveData(key){
    localStorage.setItem(`id-${key}`,document.querySelector(`#para-${key}`).outerHTML)
}

function removeData(key){
    document.getElementById(`para-${key}`).remove();
    window.localStorage.removeItem("id-"+key, task.innerHTML);
}

function showData(){
    let keys = Object.keys(localStorage);
    for(let i = 0 ; i < keys.length ; i++){
        task.innerHTML += localStorage.getItem(keys[i]);
    }
}
showData()
