type UserInfo = {
    username: string;
    email: string;
    fullName: string;
    firstName: string;
    lastName: string;
    height?: number;
    weight?: number;
    age?: number;
}

export const initialState : UserInfo = {
    username: '',
    email: '', 
    fullName: '',
    firstName: '',
    lastName: '',
}