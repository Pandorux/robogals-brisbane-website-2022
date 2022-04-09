import { IAddressDetails } from "./address-details";

export interface IEvent {
    id: number;
    name: string;
    description: string;
    image: HTMLImageElement;
    eventTypeIds: number[];
    deliveryTypeIds: number[];
    isActive: boolean;
    isOneDay: boolean;
    location: IAddressDetails;
    displayDateTime: Date;
    startDateTime: Date;
    endDateTime: Date;
}