import { INetworkClient } from './loginClient';

const okResponse = [200, 201, 202, 203];

class OccurrencesClient implements INetworkClient {
  async getAsync(uri: string) {
    try {
      return await fetch(uri);
    } catch (error) {
      throw error;
    }
  }

  async postAsync(uri: string) {
    try {
      const req: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: '',
      };
      return await fetch(uri, req);
    } catch (error) {
      throw error;
    }
  }
}

const occurrencesClient = new OccurrencesClient();
export default occurrencesClient;
