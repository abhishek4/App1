/**
 * User Details
 */
export class UserDetails {
    
    user_id: string;
    name: string;
    email_id: string;
    password: string;
    re_password: string;
    
    constructor() {
        
    }

    DoesPasswordMatch() : boolean {
        if(this.password === this.re_password) {
            return true;
        }
        return false;
    }
}