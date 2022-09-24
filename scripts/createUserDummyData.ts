import User from "../db/models/user/users";
import { connect, disconnect } from "../db/config/config"
(async () => {
  connect();
  const users = [
    { email_id:"emma@gmail.com",password:"falskjfe",firstName: "Emma", lastName: "Bradley",college:"gautam budh univ" },
    { email_id:"elise@gmail.com",password:"falskjfe",firstName: "Elise", lastName: "Conner",college:"gautam budh univ" },
    { email_id:"jack@gmail.com",password:"falskjfe",firstName: "Jack", lastName: "Lawson",college:"gautam budh univ" },
    { email_id:"lawson@gmail.com",password:"falskjfe",firstName: "Oliver", lastName: "Moss",college:"gautam budh univ" },
    { email_id:"moss@gmail.com",password:"falskjfe",firstName: "Jamie", lastName: "Reid",college:"gautam budh univ" },
    { email_id:"reid@gmail.com",password:"falskjfe",firstName: "Aidan", lastName: "Bradley",college:"gautam budh univ" },
    { email_id:"bradley@gmail.com",password:"falskjfe",firstName: "Jordan", lastName: "Gallagher",college:"gautam budh univ" },
    { email_id:"erin@gmail.com",password:"falskjfe",firstName: "Erin", lastName: "Miles",college:"gautam budh univ" },
    { email_id:"william@gmail.com",password:"falskjfe",firstName: "William", lastName: "May",college:"gautam budh univ" },
    { email_id:"ehtan@gmail.com",password:"falskjfe",firstName: "Ethan", lastName: "Butler",college:"gautam budh univ" },
  ];
  try {
    for (const user of users) {
      await User.create(user);
      console.log(`Created user ${user.firstName} ${user.lastName}`);
    }
    disconnect();
  } catch (e) {
    console.error(e);
  }
})();