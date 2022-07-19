import { IUser } from '../interfaces/reponses/auth-reponse.interface';

export const customResponse = (user: IUser) => {
    return {
        id: user._id,
        email: user.email,
        lastname: user.lastname,
        firstname: user.firstname,
        country: user.country,
        gender: user.gender,
        mobile: user.mobile
    }
}