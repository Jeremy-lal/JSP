export class User {
  id: number;
  firstname: string;
  lastname: string;
  birthday: Date;

  username: string;
  pwd: string;

  tel: string;
  email: string;
  status: string;

  adress: {
    street: string;
    postcode: number;
    city: string;
  };

  imgUrl: string;
}
