let toDoList = [];
let id = 0;

module.exports = {
    create: (req,res)=>{
        let newItem = req.body;
        newItem.id = id;
        id++
        toDoList.push(newItem);
        res.send(toDoList);
    },
    read: (req,res)=>{
        res.send(toDoList)
    },
    update: (req,res)=>{
        console.log(req.params.id);
        toDoList.forEach((item, index)=>{
            if(item.id === Number(req.params.id)){
                let updatedItem = Object.assign({}, item, req.body);
                toDoList.splice(index,1,updatedItem);
            }
        })
        res.send(toDoList);
    },
    delete:(req,res)=>{
        const deleteID = req.params.id
        toDoIndex = toDoList.findIndex(toDo=>toDo.id == deleteID);
        console.log(toDoList)
        console.log(toDoIndex)
        toDoList.splice(toDoIndex, 1);
        // toDoList.forEach((item, index)=>{
        //     console.log(item.id, req.params.id, index)
        //     if(item.id === Number(req.params.id)){
        //         toDoList.splice(index,1);

        //     }
        // })
        res.send(toDoList);
    }
}