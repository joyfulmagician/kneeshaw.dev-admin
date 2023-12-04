interface IUser {
  _id: string;
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

interface IJobSkill {
  _id: string;
  name: string;
  description: string;
}

interface IJobBudget {
  _id: string;
  name: string;
  type: string;
  min: number;
  max: number;
}
