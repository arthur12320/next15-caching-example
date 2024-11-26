import cors from "cors";
import express from "express";

let users = [
  {
    id: 1,
    name: "Arthur",
    age: 30,
    email: "arthur@cesar.com",
    costCenterOrigin: "6.3.07.001",
    birthday: "1999-11-26",
    badge: 12345,
    nickname: "Art",
    slackId: "U7X9Y2Z1A",
    cellphone: "+55 11 98765-4321",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  {
    id: 2,
    name: "Tiago",
    age: 40,
    email: "tiago@cesar.com",
    costCenterOrigin: "6.3.07.001",
    birthday: "1999-11-27",
    badge: 67890,
    nickname: "Ti",
    slackId: "U2B4C6D8E",
    cellphone: "+55 21 91234-5678",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: 3,
    name: "João",
    age: 32,
    email: "joão@cesar.com",
    costCenterOrigin: "6.3.07.001",
    birthday: "1999-11-26",
    badge: 13579,
    nickname: "Jo",
    slackId: "U3F5G7H9J",
    cellphone: "+55 31 92468-1357",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    id: 4,
    name: "Wagner",
    age: 100,
    email: "wagner@cesar.com",
    costCenterOrigin: "6.3.07.001",
    birthday: "1999-11-26",
    badge: 24680,
    nickname: "Wag",
    slackId: "U4K6L8M0N",
    cellphone: "+55 41 93579-2468",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: 5,
    name: "Henrique",
    age: 44,
    email: "henrique@cesar.com",
    costCenterOrigin: "6.3.07.002",
    birthday: "1999-02-01",
    badge: 97531,
    nickname: "Rick",
    slackId: "U5P7Q9R1S",
    cellphone: "+55 51 94321-8765",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
];

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/users", (req, res) => {
  console.log(`${new Date().toISOString()}: /users`);

  res.send({
    requestTime: new Date().getTime(),
    data: users.map(({ id, name }) => ({ id, name })),
  });
});

app.get("/api/birthdays", (req, res) => {
  console.log(`${new Date().toISOString()}: /birthdays`);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11
  const currentDay = currentDate.getDate();

  const currentBirthday = users
    .filter((user) => {
      const [, month, day] = user.birthday.split("-").map(Number);
      return month === currentMonth && day === currentDay;
    })
    .map(({ name, email, image }) => ({ name, email, image }));

  setTimeout(() => {
    res.send({
      requestTime: new Date().getTime(),
      data: currentBirthday,
    });
  }, 2000);
});

app.get("/api/users/:id", (req, res) => {
  console.log(`${new Date().toISOString()}: /users/${req.params.id}`);

  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    res.send({
      requestTime: new Date().getTime(),
      data: user,
    });
  } else {
    res.status(404).send({
      requestTime: new Date().getTime(),
      error: "User not found",
    });
  }
});

app.get("/api/me", (req, res) => {
  console.log(`${new Date().toISOString()}: /me`);

  res.send({
    requestTime: new Date().getTime(),
    data: users.map(({ name, email, image }) => ({ name, email, image }))[0],
  });
});

app.post("/api/me", (req, res) => {
  console.log(`${new Date().toISOString()}: POST /me`);

  const updatedUser = req.body;
  if (updatedUser && typeof updatedUser === "object") {
    users[0] = { ...users[0], ...updatedUser };
    res.send({
      requestTime: new Date().getTime(),
      data: users[0],
    });
  } else {
    res.status(400).send({
      requestTime: new Date().getTime(),
      error: "Invalid user data",
    });
  }
});

app.get("/api/fullMe", (req, res) => {
  console.log(`${new Date().toISOString()}: /me`);

  setTimeout(() => {
    res.send({
      requestTime: new Date().getTime(),
      data: users[0],
    });
  }, 2000);
});

app.get("/api/version", (req, res) => {
  console.log(`${new Date().toISOString()}: /version`);

  console.log({
    version: "1.0.0",
    requestTime: new Date().toDateString(),
  });

  res.send({
    version: "1.0.0",
    requestTime: new Date().toDateString(),
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
