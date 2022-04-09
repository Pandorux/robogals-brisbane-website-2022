import { ITenureDetails } from "./tenure-details";
import { IContactDetails } from "./contact-details";

export interface IPartner {
    id: number;
    logoImage:HTMLIFrameElement,
    name: string;
    description: string,
    isActive: boolean,
    contacts: IContactDetails[];
    partnerships: ITenureDetails[];
}