import { Organization } from "./Organization";
import { CEO } from "./CEO";
import { Director } from "./Director";
import { Manager } from "./Manager";
import { Lead } from "./Lead";
import { Engineer } from "./Engineer";

const organization = new Organization();




console.log("\n--- Adding Employees ---");


const ceo = new CEO(
    "John",
    "C001",
    "01/01/1970"
);

organization.addEmployee(ceo);


const director = new Director(
    "David",
    "D001",
    "02/02/1975",
    "C001"
);

organization.addEmployee(director);


const manager = new Manager(
    "Mike",
    "M001",
    "03/03/1980",
    "D001"
);

organization.addEmployee(manager);


const lead = new Lead(
    "Amit",
    "L001",
    "04/04/1985",
    "M001"
);

organization.addEmployee(lead);


const engineer = new Engineer(
    "Rahul",
    "E001",
    "05/05/1995",
    "L001"
);

organization.addEmployee(engineer);




console.log("\n--- All Employees ---");

console.log(
    organization.getAllEmployees()
);



console.log("\n--- Get Employee E001 ---");

console.log(
    organization.getEmployeeById("E001")
);



console.log("\n--- Lead L001 ---");

console.log(
    organization.getEmployeeById("L001")
);



console.log("\n--- Updating Engineer E001 ---");

const updatedEngineer = new Engineer(
    "Rahul Updated",
    "E001",
    "06/06/1996",
    "L001"
);

organization.updateEmployee(
    "E001",
    updatedEngineer
);

console.log(
    organization.getEmployeeById("E001")
);




console.log("\n--- Trying to Delete Lead L001 ---");

try {

    organization.deleteEmployee("L001");

} catch (error) {

    console.log(
        "Error:",
        (error as Error).message
    );
}




console.log("\n--- Deleting Engineer E001 ---");

organization.deleteEmployee("E001");




console.log("\n--- Deleting Lead L001 ---");

organization.deleteEmployee("L001");




console.log("\n--- Final Employees ---");

console.log(
    organization.getAllEmployees()
);