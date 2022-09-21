import {ProfileInfoT} from "./ProfileInformation/ProfileInfo";

export interface ProfileContainerI extends ProfileInfoT {
    match: any
    meUserId: number
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
}