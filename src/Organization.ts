import { Employee } from "./Employee";

export class Organization {

    employees: Employee[];

    constructor() {

        this.employees = [];

    }

    addEmployee(employee: Employee): void {

        console.log("Employee add function called");

        this.validateEmployee(employee);

        const existingEmployee = this.employees.find(
            (existingEmployee) => existingEmployee.id === employee.id
        );

        if (existingEmployee) {
            throw new Error("Employee with this ID already exists");
        }

        if (employee.designation === "CEO") {

            const existingCEO = this.employees.find(
                (existingEmployee) => existingEmployee.designation === "CEO"
            );

            if (existingCEO) {
                throw new Error("Organization can have only one CEO");
            }
        }

        this.validateReportingRelationship(employee);

        this.employees.push(employee);

        this.updateReportees();

        console.log("Employee added successfully");
    }

    getEmployeeById(id: string): Employee | undefined {

        return this.employees.find(employee => employee.id === id);

    }

    getAllEmployees(): Employee[] {

        return this.employees;

    }

    validateEmployee(employee: Employee): void {

        if (employee.name.trim() === "") {
            throw new Error("Employee name cannot be empty");
        }

        if (employee.id.trim() === "") {
            throw new Error("Employee ID cannot be empty");
        }

        if (employee.dateOfBirth.trim() === "") {
            throw new Error("Date of birth cannot be empty");
        }

        const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

        if (!datePattern.test(employee.dateOfBirth)) {
            throw new Error("Date of birth must be in mm/dd/yyyy format");
        }

        const [month, day, year] = employee.dateOfBirth.split("/");

        const date = new Date(
            Number(year),
            Number(month) - 1,
            Number(day)
        );

        if (
            date.getFullYear() !== Number(year) ||
            date.getMonth() !== Number(month) - 1 ||
            date.getDate() !== Number(day)
        ) {
            throw new Error("Invalid date of birth");
        }

        if (employee.designation === "CEO" && employee.reportsTo !== null) {
            throw new Error("CEO cannot report to anyone");
        }

        if (employee.designation !== "CEO" && employee.reportsTo === null) {
            throw new Error("Employee must have a reporting employee");
        }
    }

    validateReportingRelationship(employee: Employee): void {

        if (employee.designation === "CEO") {
            return;
        }

        const reportingEmployee = this.employees.find(
            existingEmployee => existingEmployee.id === employee.reportsTo
        );

        if (!reportingEmployee) {
            throw new Error("Reporting employee does not exist");
        }

        if (
            employee.designation === "Engineer" &&
            reportingEmployee.designation !== "Lead"
        ) {
            throw new Error("Engineer must report to a Lead");
        }

        if (
            employee.designation === "Lead" &&
            reportingEmployee.designation !== "Manager"
        ) {
            throw new Error("Lead must report to a Manager");
        }

        if (
            employee.designation === "Manager" &&
            reportingEmployee.designation !== "Director"
        ) {
            throw new Error("Manager must report to a Director");
        }

        if (
            employee.designation === "Director" &&
            reportingEmployee.designation !== "CEO"
        ) {
            throw new Error("Director must report to a CEO");
        }
    }

    updateReportees(): void {

        for (const employee of this.employees) {
            employee.reportees = [];
        }

        for (const employee of this.employees) {

            if (employee.reportsTo !== null) {

                const reportingEmployee = this.getEmployeeById(
                    employee.reportsTo
                );

                if (reportingEmployee) {
                    reportingEmployee.reportees.push(employee.id);
                }
            }
        }
    }

    updateEmployee(id: string, updatedEmployee: Employee): void {

        const employee = this.getEmployeeById(id);

        if (!employee) {
            throw new Error("Employee not found");
        }

        if (updatedEmployee.id !== id) {
            throw new Error("Employee ID cannot be changed");
        }

        this.validateEmployee(updatedEmployee);

        this.validateReportingRelationship(updatedEmployee);

        const index = this.employees.findIndex(
            employee => employee.id === id
        );

        this.employees[index] = updatedEmployee;

        this.updateReportees();

        console.log("Employee updated successfully");
    }

    deleteEmployee(id: string): void {

        const employee = this.getEmployeeById(id);

        if (!employee) {
            throw new Error("Employee not found");
        }

        if (employee.reportees.length > 0) {
            throw new Error("Cannot delete employee who has reportees");
        }

        const index = this.employees.findIndex(
            employee => employee.id === id
        );

        this.employees.splice(index, 1);

        this.updateReportees();

        console.log("Employee deleted successfully");
    }
}