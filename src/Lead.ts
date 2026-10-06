import { Employee } from "./Employee";

export class Lead extends Employee {
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
            "Lead",
            reportsTo,
            reportees
        );
    }
}