import bcrypt from 'bcrypt';

const saltRounds:number = 10;

export default class HashManager {
    static async hash(password:string):Promise<string> {
        return await bcrypt.hash(password, saltRounds);
    }
    static async compare(password:string, hash:string):Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }
}
