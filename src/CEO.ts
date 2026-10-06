import { Employee } from "./Employee";

export class CEO extends Employee {
    constructor(
        name: string,
        id: string,
        dateOfBirth: string,
        reportees: string[] = []
    ) {
        super(
            name,
            id,
            dateOfBirth,
            "CEO",
            null,
            reportees
        );
    }
}