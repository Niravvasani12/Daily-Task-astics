import { makeAutoObservable, runInAction } from "mobx";

class UserStore {
  users = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
    this.fetchUsers();
  }

  fetchUsers = () => {
    this.loading = true;

    setTimeout(async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();

        runInAction(() => {
          this.users = data.map((todo) => ({
            userId: todo.userId,
            id: todo.id,
            title: todo.title,
            completed: Boolean(todo.completed), //  BOOLEAN FIX
          }));

          this.loading = false;
        });
      } catch (error) {
        console.error("Failed To Fetch Users", error);
        runInAction(() => (this.loading = false));
      }
    }, 1500);
  };

  deleteUser = (id) => {
    this.users = this.users.filter((u) => u.id !== id);
  };

  // Add User with Auto ID
  addUser = (title, completed) => {
    const maxId = this.users.length
      ? Math.max(...this.users.map((u) => u.id))
      : 0;

    const newUser = {
      userId: 1,
      id: maxId + 1,
      title,
      completed: Boolean(completed),
    };

    // Add at LAST
    this.users = [...this.users, newUser];
  };

  toggleCompleted = (id) => {
    this.users = this.users.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t,
    );
  };

  // Edit User Title + Status
  editUser = (id, newTitle, completed) => {
    this.users = this.users.map((todo) =>
      todo.id === id
        ? { ...todo, title: newTitle, completed: Boolean(completed) }
        : todo,
    );
  };
}

export default new UserStore();
