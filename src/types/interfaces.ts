export interface IUser {
  _id: string;
  image: {
    data: Buffer;
    contentType: String;
  };
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
  status: number;

  shipping: {
    firstName: string;
    lastName: string;
    card: string;
  };

  credit: {
    firstName: string;
    lastName: string;
    card: string;
  };
}

export interface IService {
  _id: string;
  image: {
    data: Buffer;
    contentType: String;
  };
  title: string;
  description: string;
}

export interface IJobSkill {
  _id: string;
  name: string;
  description: string;
}

export interface IJobService {
  _id: string;
  name: string;
  description: string;
}

export interface IJobDatabase {
  _id: string;
  name: string;
  description: string;
}

export interface IJobScope {
  _id: string;
  name: string;
  description: string;
}

export interface IJobPeriod {
  _id: string;
  name: string;
  minTerm: number;
  maxTerm: number;
  description: string;
}

export interface IJobExperience {
  _id: string;
  name: string;
  description: string;
}

export interface IJobBudget {
  _id: string;
  name: string;
  type: number;
  min: number;
  max: number;
}
