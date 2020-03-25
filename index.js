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
                results.forEach((EMPLOYEE,index)=>{
                    console.log(`ID: ${EMPLOYEE.ID} : ${EMPLOYEE.FIRST_NAME}, ${EMPLOYEE.FIRST_NAME}| ${EMPLOYEE.ROLE_ID} |${EMPLOYEE.MANAGER_ID}`);
                })
            } connection.destroy();
        })
    }

});