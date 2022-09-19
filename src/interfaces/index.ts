export interface IClientRequest {
  name: string;
  email: any;
  password: string;
  telephone: any;
}

export interface ILogin {
  name: string;
  password: string;
}

export interface IContactClientRequest {
  name: string;
  email: string;
  telephone: number;
}
