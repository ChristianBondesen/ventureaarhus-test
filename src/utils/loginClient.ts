export interface INetworkClient {
  getAsync(uri: string): any;
  postAsync(uri: string, obj: object): any;
}

const okResponse = [200, 201, 202, 203];

class LoginClient implements INetworkClient {
  async getAsync(uri: string) {
    try {
      return await fetch(uri);
    } catch (error) {
      throw error;
    }
  }

  async postAsync(uri: string, obj: object) {
    try {
      const req = {
        body: JSON.stringify(obj),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      return await fetch(uri, req);
    } catch (error) {
      throw error;
    }
  }
}

const loginClient = new LoginClient();
export default loginClient;
