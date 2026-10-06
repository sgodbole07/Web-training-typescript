export type Designation =
    | "Engineer"
    | "Lead"
    | "Manager"
    | "Director"
    | "CEO";

export class Employee {
    name: string;
    id: string;
    dateOfBirth: string;
    designation: Designation;
    reportsTo: string | null;
    reportees: string[];

    constructor(
        name: string,
        id: string,
        dateOfBirth: string,
        designation: Designation,
        reportsTo: string | null = null,
        reportees: string[] = []
    ) {
        this.name = name;
        this.id = id;
        this.dateOfBirth = dateOfBirth;
        this.designation = designation;
        this.reportsTo = reportsTo;
        this.reportees = reportees;
    }
}