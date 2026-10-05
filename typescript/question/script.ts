const api = "https://opentdb.com/api.php?amount=10";

type results = {
    "type": "multiple",
    "difficulty": "medium",
    "category": "History",
    "question": "In which years did the Battle of Gallipoli take place?",
    "correct_answer": "1915 - 1916",
    "incorrect_answers": [
        "1914 - 1918",
        "1914 - 1915",
        "1915 - 1918"
    ]
}

const getapi = async () => {
    try {
        const res = await fetch(api);
        const response = await res.json();
        return response;
    } catch (err) {
        console.log(err)
    }
}

