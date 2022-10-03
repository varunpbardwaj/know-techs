export {};
import { assert, Equals } from "tsafe";
import { Employee as EMP } from "../solutions/02-Optional_Props.solution";

//Make the prop optional to fix issue in line:22,
interface Employee {
  empID: number;
  firstName: string;
  lastName: string;
  address_1: string;
  address_2: string;
  phno: number;
}

const Employee_1: Employee = {
  empID: 12345,
  firstName: "Varun",
  lastName: "Bardwaj",
  address_1: "Random address 1",
  address_2: "Random address 2",
  phno: 1234567890,
};

const Employee_2: Employee = {
  empID: 54321,
  firstName: "Varun",
  lastName: "Bardwaj",
  address_1: "Random address 1",
  phno: 9876543210,
};

assert<Equals<Employee, EMP>>();
