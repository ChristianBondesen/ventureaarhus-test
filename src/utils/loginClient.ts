export interface INetworkClient {
  getAsync(uri: string): any;
  postAsync(uri: string, username: string, password: string): any;
}

const okResponse = [200, 201, 202, 203];

class LoginClient implements INetworkClient {
  async getAsync(uri: string) {
    const response = await fetch(uri);

    try {
      if (okResponse.some((i) => i === response.status)) {
        return await response.json();
      }
    } catch (error) {
      throw error;
    }
  }

  async postAsync(uri: string, username: string, password: string) {
    try {
      return await fetch(uri, {
        body: JSON.stringify({
          email: username,
          password,
        }),
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      });
    } catch (error) {
      throw error;
    }
  }
}

const loginClient = new LoginClient();
export default loginClient;
