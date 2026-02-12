//? Try Catch almost used For Handle Error
//* localStorage.setItem() data are store from Todos */
//* localStorage.getItem() data are fetch from localstoarage  */
//* localStorage.removeItem() particular data are remove from localStorage */
//* localStorage.clear()  */

//* when whole page is load
export const loadTodos = () => {
  try {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Load Error:", error);
    return [];
  }
};

//* when save The pages
export const saveTodos = (todos) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("Save Error:", error);
  }
};
