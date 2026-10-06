"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
class Organization {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
exports.Organization = Organization;
