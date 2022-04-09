import { ITenureDetails } from "./tenure-details";

export interface IVolunteer {
    id: number;
    firstName: string;
    lastName: string;
    isCurrentExec: boolean;
    isPastExec: boolean;
    tenures: ITenureDetails[];
    eventsAttended: number[]; // TODO: Might to change this to IEvent
}