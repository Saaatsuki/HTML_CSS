document.addEventListener('DOMContentLoaded', () => {
    // メインディスプレイ要素と履歴表示用の要素を取得
    const display = document.querySelector('.fream h1'); // 現在の入力値を表示
    const historyDisplay = document.querySelector('.fream'); // 計算履歴を表示

    // 変数の初期化
    let currentInput = '0'; // 現在の入力値
    let memory = 0; // メモリに保存されている値
    let operator = null; // 現在の演算子
    let previousValue = null; // 直前の入力値
    let isCalculating = false; // 計算中かどうかを示すフラグ
    let history = ''; // 計算履歴を保持する

    // ディスプレイを更新するメソッド
    const updateDisplay = () => {
        // 現在の入力値と履歴を表示要素に反映
        display.textContent = currentInput;
        historyDisplay.innerHTML = `<h1>${history}</h1><h2>${currentInput}</h2>`;
    };

    // すべてリセットするメソッド
    const clearAll = () => {
        currentInput = '0'; // 現在の入力値をリセット
        operator = null; // 演算子をリセット
        previousValue = null; // 直前の値をリセット
        isCalculating = false; // 計算状態をリセット
        history = ''; // 計算履歴をリセット
    };

    // 現在の入力値だけをリセットするメソッド
    const clearEntry = () => {
        currentInput = '0';
    };

    // 現在の入力値の符号を反転するメソッド
    const toggleSign = () => {
        currentInput = (parseFloat(currentInput) * -1).toString();
    };

    // 数字ボタンを押したときの処理
    const handleNumber = (number) => {
        if (isCalculating) { // 新しい計算が始まった場合
            currentInput = number;
            isCalculating = false;
        } else if (currentInput === '0') { // 現在の入力値が0の場合
            currentInput = number;
        } else { // 既存の入力値に数字を追加
            currentInput += number;
        }
    };

    // 演算子ボタンを押したときの処理
    const handleOperator = (op) => {
        if (previousValue === null) { // 初回の演算子入力時
            previousValue = parseFloat(currentInput);
        } else if (operator) { // 既に演算が始まっている場合
            const result = calculate(previousValue, parseFloat(currentInput), operator);
            previousValue = result; // 計算結果を次の計算に使用
            history += ` ${currentInput} ${op}`; // 履歴を更新
            currentInput = result.toString();
        } else {
            history += ` ${currentInput} ${op}`;
        }
        operator = op; // 新しい演算子を設定
        isCalculating = true;
    };

    // 演算を実行するメソッド
    const calculate = (a, b, op) => {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '×': return a * b;
            case '÷': return a / b;
            default: return b; // デフォルトではそのままの値を返す
        }
    };

    // =ボタンを押したときの処理
    const handleEquals = () => {
        if (operator && previousValue !== null) { // 計算可能な状態か確認
            const result = calculate(previousValue, parseFloat(currentInput), operator);
            history += ` ${currentInput} =`; // 履歴を更新
            currentInput = result.toString(); // 計算結果を現在の入力値に設定
            operator = null; // 演算子をリセット
            previousValue = null; // 直前の値をリセット
        }
    };

    // メモリ操作ボタンの処理
    const handleMemory = (action) => {
        switch (action) {
            case 'MC': memory = 0; break; // メモリクリア
            case 'MR': currentInput = memory.toString(); break; // メモリ読み出し
            case 'M+': memory += parseFloat(currentInput); break; // メモリに加算
            case 'M-': memory -= parseFloat(currentInput); break; // メモリから減算
        }
    };

    // ボタンがクリックされたときの処理
    document.querySelectorAll('.b1').forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.textContent;

            if (!isNaN(value)) { // 数字ボタンの場合
                handleNumber(value);
            } else if (value === 'C') { // 入力リセット
                clearEntry();
            } else if (value === 'AC') { // 全体リセット
                clearAll();
            } else if (value === '+/-') { // 符号反転
                toggleSign();
            } else if (['+', '-', '×', '÷'].includes(value)) { // 演算子
                handleOperator(value);
            } else if (value === '=') { // 計算実行
                handleEquals();
            } else if (['MC', 'MR', 'M+', 'M-'].includes(value)) { // メモリ操作
                handleMemory(value);
            } else if (value === '.') { // 小数点
                if (!currentInput.includes('.')) {
                    currentInput += '.';
                }
            }

            updateDisplay(); // 表示を更新
        });
    });

    // キーボード入力の処理
    document.addEventListener('keydown', (e) => {
        const key = e.key;

        if (!isNaN(key)) { // 数字キー
            handleNumber(key);
        } else if (key === 'Backspace') { // バックスペース
            currentInput = currentInput.slice(0, -1) || '0';
        } else if (key === 'Escape') { // Escキーで全体リセット
            clearAll();
        } else if (key === 'Enter' || key === '=') { // Enterキーで計算実行
            handleEquals();
        } else if (['+', '-', '*', '/'].includes(key)) { // 演算子キー
            const opMap = { '*': '×', '/': '÷' };
            handleOperator(opMap[key] || key);
        } else if (key === '.') { // 小数点キー
            if (!currentInput.includes('.')) {
                currentInput += '.';
            }
        }

        updateDisplay(); // 表示を更新
    });

    // 初期状態でディスプレイを更新
    updateDisplay();
});
