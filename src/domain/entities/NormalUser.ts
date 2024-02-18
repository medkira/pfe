import { UserProps, UserType } from "./User";

export type NormalUserProps = UserProps & {
    gender: boolean;
    age: number;
    address: string;
    zone: string;
    jobTitle: string;
    link: string;
    image: string;
    salary: number;
    socialStatus: string;
    parent: boolean;
};

export class NormalUser {
    public readonly role: typeof UserType.NORMAL;
    public readonly id: string;
    public readonly name: string;
    public readonly username: string;
    public readonly email: string;
    public readonly phoneNumber: string;
    public readonly password: string;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;
    public readonly isEmailVerified: boolean;


    public readonly gender: boolean;
    public readonly age: number;
    public readonly zone: string;
    public readonly address: string;
    public readonly jobTitle: string;
    public readonly link: string;
    public readonly image: string;
    public readonly salary: number;
    public readonly socialStatus: string;
    public readonly parent: boolean;

    constructor(props: NormalUserProps) {
        this.role = UserType.NORMAL;
        this.id = props.id;
        this.name = props.name;
        this.username = props.username;
        this.email = props.email;
        this.phoneNumber = props.phoneNumber;
        this.password = props.password;
        this.createdAt = props.createdAt;
        this.updatedAt = props.updatedAt;
        this.isEmailVerified = props.isEmailVerified;
        // Initialize additional properties
        this.gender = props.gender;
        this.age = props.age;
        this.zone = props.zone;
        this.address = props.address;
        this.jobTitle = props.jobTitle;
        this.link = props.link;
        this.image = props.image;
        this.salary = props.salary;
        this.socialStatus = props.socialStatus;
        this.parent = props.parent;
    }
}
