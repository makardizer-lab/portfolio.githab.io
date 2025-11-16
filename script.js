let score = 0;
let taskType = '';

function setType(type) {
    taskType = type;
    document.getElementById('userInput').value = '';
    document.getElementById('result').innerHTML = '';
    let example;
    switch (type) {
        case 'addition': example = '2 + 3'; break;
        case 'physics': example = '5 * 2'; break;
        case 'chemistry': example = '2 + 1'; break;
        case 'biology': example = '3 * 4'; break;
        case 'geography': example = '10 + 5'; break;
        case 'history': example = '2020 - 2000'; break;
        case 'literature': example = '5 + 2'; break;
        case 'art': example = '3 * 2'; break;
    }
    document.getElementById('userInput').placeholder = `Напр. ${example}`;
}

function checkTask() {
    const input = document.getElementById('userInput').value.trim();
    const result = document.getElementById('result');
    let correct;

    if (!input || !taskType) {
        result.innerHTML = 'Выберите тип и введите пример!';
        return;
    }

    const parts = input.split(' ');
    if (parts.length !== 3 || isNaN(parts[0]) || isNaN(parts[2])) {
        result.innerHTML = 'Формат: число пробел операция пробел число (например, 2 + 3)';
        return;
    }

    const a = parseInt(parts[0]);
    const op = parts[1];
    const b = parseInt(parts[2]);

    switch (taskType) {
        case 'addition':
            if (op !== '+') {
                result.innerHTML = 'Ожидается сложение (+)!';
                return;
            }
            correct = a + b;
            break;
        case 'physics':
            if (op !== '*') {
                result.innerHTML = 'Ожидается умножение (*), например, сила = масса * ускорение!';
                return;
            }
            correct = a * b;
            break;
        case 'chemistry':
            if (op !== '+') {
                result.innerHTML = 'Ожидается сложение (+), например, реактивы!';
                return;
            }
            correct = a + b;
            break;
        case 'biology':
            if (op !== '*') {
                result.innerHTML = 'Ожидается умножение (*), например, клетки * время!';
                return;
            }
            correct = a * b;
            break;
        case 'geography':
            if (op !== '+') {
                result.innerHTML = 'Ожидается сложение (+), например, расстояния!';
                return;
            }
            correct = a + b;
            break;
        case 'history':
            if (op !== '-') {
                result.innerHTML = 'Ожидается вычитание (-), например, годы!';
                return;
            }
            correct = a - b;
            break;
        case 'literature':
            if (op !== '+') {
                result.innerHTML = 'Ожидается сложение (+), например, главы!';
                return;
            }
            correct = a + b;
            break;
        case 'art':
            if (op !== '*') {
                result.innerHTML = 'Ожидается умножение (*), например, краски * слои!';
                return;
            }
            correct = a * b;
            break;
        default:
            result.innerHTML = 'Выберите тип задачи!';
            return;
    }

    result.innerHTML = `Правильный результат: ${correct}`;
    score += 10;
    document.getElementById('score').innerHTML = score;
}