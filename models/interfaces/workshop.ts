export interface IWorkshop {
    id: number;
    primaryOrganiserId: number;
    schoolId: number;
    primaryContactId: number;
    volunteerIds: number[];
    workshopTypeId: number;
    workshopStatus: string; // TODO: Might to turn this into its own collection
    primaryGirlsNo: number;
    secondaryGirlsNo: number;
    primaryBoysNo: number;
    secondaryBoysNo: number;
    primaryGenderFluidNo: number;
    secondaryGenderFluidNo: number;
    otherNo: number;
}