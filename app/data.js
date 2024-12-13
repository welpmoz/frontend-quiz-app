const basePath = 'https://quizz-api-2dcq.onrender.com';

export async function fetchQuizzes() {
    try {
        const response = await fetch(`${basePath}/quizzes`);
        return await response.json();
    } catch (error) {
        console.error('Fetch Error:', error);
        throw new Error('Failed to fetch quizzes data.');
    }
}

export async function fetchQuiz(quizName) {
    try {
        const response = await fetch(`${basePath}/quizzes/${quizName}`);
        const data = await response.json();
        if (response.status >= 400 && response.status < 500) {
            throw new Error(data);
        }
        return data;
    } catch (error) {
        console.error('Fetch Error:', error);
        throw new Error(`Failed to fetch quiz for ${quizName}`);
    }
}

export async function submitAnswer(quizTitle, questionNumber, answer) {
    try {
        const response = await fetch(`${basePath}/answer`, {
            method: 'POST',
            headers: {
                Accept: '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'User-Agent': 'EchoapiRuntime/1.1.0',
                Connection: 'keep-alive',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'title_quiz': quizTitle,
                'number_question': questionNumber,
                'option_marked': answer,
            }),
        });
        const data = await response.json();
        if (response.status >= 400 && response.status < 500) {
            throw new Error(data);
        }
        return data;
    } catch (error) {
        console.log('Submit Error:', error);
        throw new Error(`Failed to submit answer`);
    }
}