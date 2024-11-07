import { z } from "zod";

type User = {
  name: string;
  age?: number;
};

function showUser(u: User) {
  // irgendwas mit user machen
  console.log(`User '${u.name}' is '${u.age}' years old`);
}

declare function fetchUser(): unknown;

const user = fetchUser() as User; //🙀 🙀 🙀 🙀
showUser(user);
