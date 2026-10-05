const todolist = "https://jsonplaceholder.typicode.com/todos";

type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const getTodoList = async (): Promise<Todo[] | undefined | null> => {
    try {
        const res = await fetch(todolist);
        const response = await res.json();
        return response;
    } catch (err) {
        console.log(err)
    }
}

(async () => {
    const response = await getTodoList();
    response?.forEach((item) => {
        console.log(item.title);
    })
})();