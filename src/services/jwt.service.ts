import jwt from "jsonwebtoken";
import { 
    JWT_ACCESS_TIME, 
    JWT_ACCESS_SECRET, 
    JWT_REFRESH_TIME, 
    JWT_REFRESH_SECRET 
} from '../config/index.config';
import redisService from "./redis.service";

class JwtService {
  async generate(payload: { id: string, email: string }) {
    const access = jwt.sign(payload,`${JWT_ACCESS_SECRET}`,{expiresIn: `${JWT_ACCESS_TIME}`});
    const refresh = jwt.sign(payload,`${JWT_REFRESH_SECRET}`,{expiresIn: `${JWT_REFRESH_TIME}`});
    await redisService.set({
      key: payload.id,
      value: refresh,
    });
    return { access, refresh };
  }

  async verify(token: string, key: string) {
    const data =  jwt.verify(token, `${key}`);
    return data;
  }
}

export default new JwtService();