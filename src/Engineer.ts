import { Employee } from "./Employee";

export class Engineer extends Employee {
    constructor(
        name: string,
        id: string,
        dateOfBirth: string,
        reportsTo: string
    ) {
        super(
            name,
            id,
            dateOfBirth,
            "Engineer",
            reportsTo,
            []
        );
    }
}