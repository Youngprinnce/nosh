import { createClient } from "redis";
import { SetRedis } from '../interfaces/utils.interface';

class RedisService {
  client: any;
  constructor() {
    this.client = createClient();
  }

  async set({ key, value }: SetRedis) {
    await this.client.connect();
    await this.client.set(`${key}`, `${value}`);
    await this.client.disconnect();
  }

  async get(key: string) {
    await this.client.connect();
    const result = await this.client.get(key);
    await this.client.disconnect();
    return result;
  }
}

export default new RedisService();