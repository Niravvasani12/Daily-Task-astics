import { makeAutoObservable, runInAction } from "mobx";
import { loadTodos, saveTodos } from "../utils/localStorage";

class TodoStore {
  // Store all data in PArticular array.
  todos = [];
  loading = true;

  searchText = "";
  filterStatus = null;

  addModalOpen = false;
  editModalOpen = false;
  editingTodo = null;

  constructor() {
    makeAutoObservable(this);
    this.hydrate();
  }

  hydrate = () => {
    this.loading = true;

    setTimeout(() => {
      runInAction(() => {
        this.todos = loadTodos();
        this.loading = false;
      });
    }, 500);
  };

  persist = () => {
    saveTodos(this.todos);
  };

  // Searching

  setSearchText = (text) => {
    this.searchText = text;
  };

  setFilterStatus = (status) => {
    this.filterStatus = status;
  };

  //
  openAddModal = () => (this.addModalOpen = true);
  closeAddModal = () => (this.addModalOpen = false);

  //** Open Box Add new TODO model */
  openEditModal = (todo) => {
    this.editingTodo = todo;
    this.editModalOpen = true;
  };

  //** Close Box Add new TODO model */
  closeEditModal = () => {
    this.editModalOpen = false;
    this.editingTodo = null;
  };

  addTodo = (title, password, completed) => {
    const maxId = this.todos.length
      ? Math.max(...this.todos.map((u) => u.id))
      : 0;

    //* Add user
    const newTodo = {
      id: maxId + 1,
      title,
      password,
      completed: Boolean(completed),
    };

    this.todos = [...this.todos, newTodo];
    this.persist();
  };

  //Delte reorder

  deleteTodo = (id) => {
    const updated = this.todos.filter((t) => t.id !== id);

    // Reassign IDs in ascending order
    this.todos = updated.map((todo, index) => ({
      ...todo,
      id: index + 1,
    }));

    this.persist();
  };

  // ? Task Is Completed or not that Toggle
  // toggleCompleted = (id) => {
  //   this.todos = this.todos.map((t) =>
  //     t.id === id ? { ...t, completed: !t.completed } : t,
  //   );
  //   this.persist();
  // };

  //*  Edit Id title , Possword , compoleted

  editTodo = (id, title, password, completed) => {
    this.todos = this.todos.map((t) =>
      t.id === id ? { ...t, title, password, completed } : t,
    );
    this.persist();
  };

  //**automatic id is sorted when data id removed */

  //? get filteredTodos() means this is a computed value.
  get filteredTodos() {
    return this.todos.filter((todo) => {
      const matchesTitle = todo.title
        .toLowerCase()
        .includes(this.searchText.toLowerCase());

      const matchesStatus =
        this.filterStatus === null
          ? true
          : todo.completed === this.filterStatus;

      return matchesTitle && matchesStatus;
    });
  }
}

export default new TodoStore();
