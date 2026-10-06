import { Employee } from "./Employee";

export class Director extends Employee {
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
            "Director",
            reportsTo,
            reportees
        );
    }
}