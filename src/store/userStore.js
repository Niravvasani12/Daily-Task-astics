//* Create Mobx for State Management.

import { makeAutoObservable } from "mobx";

class UserStore {
  users = [];
  loading = false;

  // constructor is automatically created when class is created.anticon.anticon-star

  constructor() {
    makeAutoObservable(this);
    this.fetchUsers();
  }

  //* Remove API data From App.jsx and attach on below

  fetchUsers() {
    this.loading = true;
    setTimeout(() => {
      this.users = [
        {
          id: 1,
          name: "Nirav",
          email: "niravvasani12@gmail.com",
          address: "Surat Gujarat",
          date: "2025-01-10",
        },
        {
          id: 2,
          name: "Kamal bhai",
          email: "kamal123@gmail.com",
          address: "jaipur Rajasthan",
          date: "2025-01-15",
        },
        {
          id: 3,
          name: "Nikunj Bhai",
          email: "Nikunj123@gmail.com",
          address: "Ahemdabad Gujarat",
          date: "2025-01-12",
        },
        {
          id: 4,
          name: "Kiran",
          email: "kiran123@gmail.com",
          address: "Amreli Gujarat",
          date: "2025-01-08",
        },
      ];
      this.loading = false;
    }, 2000);
  }

  addUser() {
    const randNumber = Math.floor(Math.random() * 100);

    const randomLetter = Array.from({ length: 5 }, () =>
      String.fromCharCode(65 + Math.floor(Math.random() * 26)),
    ).join("");

    const today = new Date().toISOString().split("T")[0];

    this.users.push({
      id: randNumber,
      name: randomLetter,
      email: randomLetter + randNumber + "@gmail.com",
      address: randomLetter + randNumber,
      date: today,
    });
  }

  deleteUser() {}
}

export default new UserStore();
