import { IAddressDetails } from "./address-details";
import { IContactDetails } from "./contact-details";

export interface ISchool {
    id: number;
    name: string;
    schoolTypeId: number;
    contacts: IContactDetails[];
    location: IAddressDetails[];
}