function addTask(){
    const taskList= document.getElementById("list")
    const task =document.getElementsByName("Task")[0].value;

    //create a <li>

    const list = document.createElement("li");
    list.innerHTML =`
    <span>${task}</span>
    <button class="delete-btn">Delete</button>
    `;
    
    const deletebtn=list.querySelector("button");
    deletebtn.add
    taskList.appendChild(list);


    //Erase inpur text
    document.getElementsByName("Task")[0].value="";
}

