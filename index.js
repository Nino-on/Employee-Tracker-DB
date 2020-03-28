const mysql=require("mysql");
const inquire=require("inquirer");
const console_table=require("console.table");

const connection=mysql.createConnection({
    host:"localhost",
    port:8889,
    user:"root",
    password:"root",
    database:"EMPLOYEE_TRACKER_DB"
});

connection.connect(function(err){
    if(err) {
        console.log(err);
    } else {

        connection.query(`SELECT * FROM EMPLOYEE_TRACKER_DB.EMPLOYEE;`,function(error,results) {
            if(error) {
                console.log(error);
            } else {
              console.log("Welcome to the Employee tracker Datatbase") 
                startQuestions();
            }
        })
    }

});
console.table([
    {
        Employee_ID: 0 ,FIRST_NAME: "Raul",LAST_NAME: "Nino",Role_ID: 24, Manager_ID:1
    }
]);
//Start with options
function startQuestions(){
    inquirer.prompt ([{
        type:"list",
        name:"option",
        message:"What woudl like to do?",
        choices:["Add a Department, Role or Employee?","View Department, Roles, or Employee?","Update Employee Role?"]
    }]).then((answer)=>{
        if (answer.Welcome === "addInfo") {
            addInformation();
            }
    })
}
//





/*results.forEach((EMPLOYEE,index)=>{
    console.log(`ID: ${EMPLOYEE.ID} : ${EMPLOYEE.FIRST_NAME}, ${EMPLOYEE.LAST_NAME}| ${EMPLOYEE.ROLE_ID} |${EMPLOYEE.MANAGER_ID}`);
})*/