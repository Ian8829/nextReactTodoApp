// export const addTodo = (list, item) => {
//   list.push(item);
//   return list;
// };

export const addTodo = (list, item) => [...list, item];

export const generateId = () => Math.floor(Math.random() * 100000);