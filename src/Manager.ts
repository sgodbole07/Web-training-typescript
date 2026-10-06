import { Employee } from "./Employee";

export class Manager extends Employee {
    constructor(
        name: string,
        id: string,
        dateOfBirth: string,
        reportsTo: string,
        reportees: string[] = []
    ) {
        super(
            name,
            id,
            dateOfBirth,
            "Manager",
            reportsTo,
            reportees
        );
    }
}