export default class FetchRequest {
  url;

  method;

  body;

  headers;

  constructor({
    url = '',
    method = 'GET',
    body,
    headers = {
      'Content-type': 'application/json; charset=UTF-8',
    },
  } = {}) {
    this.url = url;
    this.method = method;
    this.body = body;
    this.headers = headers;
  }

  async call() {
    const options = {
      method: this.method,
      body:
        this.method === 'GET' ? undefined : JSON.stringify(this.body),
      headers: this.method === 'POST' ? this.headers : undefined,
    };

    try {
      const response = await fetch(this.url, options);
      if (response.status === 201) return null;
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
