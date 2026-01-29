//* Create Mobx for State Management.

import { makeAutoObservable, runInAction } from "mobx";

class UserStore {
  users = [];
  loading = false;

  // constructor is automatically created when class is created.anticon.anticon-star

  constructor() {
    makeAutoObservable(this);
    this.fetchUsers();
  }

  //* Remove API data From App.jsx and attach on below

  fetchUsers = () => {
    //? When Start or Fetch User Then Loader Show

    this.loading = true;

    setTimeout(async () => {
      // this.users = [
      //   //* key show How many column are addeed in our table
      //   // ? 1. filterDropdown is used to Search the data of record
      //   // ? 2. DeletedOutlined is used to delete the data from record
      //   // ? 3. EditedOutlined is used to Edit the data from record
      //   // ? 4. const today = new Date().toISOString().split("T")[0]; is used TO sort data by its date

      //   {
      //     id: 1,
      //     name: "Nirav",
      //     email: "niravvasani12@gmail.com",
      //     address: "Surat  Gujarat",
      //     date: "2025-01-10",
      //   },
      //   {
      //     id: 2,
      //     name: "Kamal bhai",
      //     email: "kamal123@gmail.com",
      //     address: "jaipur Rajasthan",
      //     date: "2025-01-15",
      //   },
      //   {
      //     id: 3,
      //     name: "Nikunj Bhai",
      //     email: "Nikunj123@gmail.com",
      //     address: "Ahemdabad Gujaat",
      //     date: "2025-01-12",
      //   },
      //   {
      //     id: 4,
      //     name: "Kiran",
      //     email: "kiran123@gmail.com",
      //     address: "Amreli Gujarat",
      //     date: "2025-01-08",
      //   },
      // ];

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();

        runInAction(() => {
          this.users = data.map((todos) => ({
            userId: todos.userId,
            id: todos.id,
            title: todos.title,
            completed: todos.completed ? "true" : "false",
          }));
          this.loading = false;
        });
      } catch (error) {
        console.error("Failed To Fetch Users", error);
        runInAction(() => {
          this.loading = false;
        });
      }
      this.loading = false;
    }, 5000);
  };

  //? Add User In our add demo

  // addUser() {
  //   const randNumber = Math.floor(Math.random() * 100);

  //   const randomLetter = Array.from({ length: 5 }, () =>
  //     String.fromCharCode(65 + Math.floor(Math.random() * 26)),
  //   ).join("");

  //   const today = new Date().toISOString().split("T")[0];

  //   this.users.push({
  //     id: randNumber,
  //     name: randomLetter,
  //     email: randomLetter + randNumber + "@gmail.com",
  //     address: randomLetter + randNumber,
  //     date: today,
  //   });
  // }

  //? reomve User In our add demo

  deleteUser = (id) => {
    this.users = this.users.filter((u) => u.id !== id);
  };
}

export default new UserStore();

//* https://jsonplaceholder.typicode.com/todos
