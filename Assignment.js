var data=require('./Sdata.json');
var studentjson=data.Full;

class Student{
    constructor(id, firstName, lastName){
    }

    addStudent(key,id, firstName, lastName){
        let newObj = {
            ID :id, 
            FirstName: firstName, 
            LastName: lastName
        }
        if(key===0)
        {studentjson.unshift(newObj);}
        if (key===1)
        {studentjson.push(newObj);}

    }

    updateStudent(currentID, id, firstName, lastName){
        var currentObj = studentjson.find(x=>x.ID == currentID);
 
        currentObj.ID = id;
        currentObj.FirstName = firstName;
        currentObj.LastName = lastName;
    }
        
      
    

    DeleteStudent(delID){
        var delObj = studentjson.find(x=>x.ID == delID);
        return studentjson.splice(studentjson.indexOf(delObj),1);
            }
           
    ShowAllData(){
        for (const object of studentjson) {
            console.log(object);
        }
    }
}
let std = new Student();
//std.ShowAllData(); 
//std.updateStudent(2, "99", "Hamid", "Dawood");
//std.ShowAllData();
//std.addStudent(0,"101","Hamid","Dawood");
//std.ShowAllData();
//std.DeleteStudent(6);
//std.ShowAllData();














