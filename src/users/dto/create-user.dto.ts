import { IsIn, IsNotEmpty, IsString, Matches } from "class-validator";

export const BLOOD_GROUP = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    user_name!: string;

    @IsIn(BLOOD_GROUP)
    user_blood!: string;

    @IsString()
    user_mobile!: string;

}