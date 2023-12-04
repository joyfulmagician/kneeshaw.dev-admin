interface IUser {
  _id: string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
  status: number;
}

interface IJobSkill {
  _id: string;
  name: string;
  description: string;
}

interface IJobService {
  _id: string;
  name: string;
  description: string;
}

interface IJobDatabase {
  _id: string;
  name: string;
  description: string;
}

interface IJobScope {
  _id: string;
  name: string;
  description: string;
}

interface IJobPeriod {
  _id: string;
  name: string;
  minTerm: number;
  maxTerm: number;
  description: string;
}

interface IJobExperience {
  _id: string;
  name: string;
  description: string;
}

interface IJobBudget {
  _id: string;
  name: string;
  type: number;
  min: number;
  max: number;
}
