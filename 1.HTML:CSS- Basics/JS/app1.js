let todo = [];
let req=prompt("Please enter the request");
console.log(req);
while(true)
{
    if(req=="quit")
    {
        console.log("Quiting app");
        break;
    }

    if(req == "list")
    {
        console.log("--------------------------");
        for(let i=0;i<todo.length;i++)
        {
            console.log(i,todo[i]);
        }
        console.log("--------------------------");
    }

    else if(req == "add")
    {
        let task=prompt("Please enter the task which you want to add");
                 todo.push(task);
                 console.log("Task added successfully.");
    }
    else if(req == "delete")
    {
        let index=prompt("Please,Enter the index which you want to delete.");
                  todo.splice(index,1);
                  console.log("Deleted Successfully");
    }

    req=prompt("Please enter the request");

}