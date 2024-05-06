export class AuthService {
    constructor() {}

    public async login(userid: string, password: string): Promise<boolean> {
        try {
            return false;
        }catch (error) {
            return error;
        }
    }

    public async logout(): Promise<boolean> {

        return false;
    }

    public async register(username: string, email: string, password: string)  {
        try {
            return false;
        }catch (error) {
            return error;
        }
    }
}