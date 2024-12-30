// ページが読み込まれたら処理を開始
document.addEventListener('DOMContentLoaded', () => {
    // 表示部分の要素を取得
    const display = document.querySelector('.fream');

    // 現在の入力値を保持（初期値は'0'）
    let currentInput = '0';

    // メモリ機能の値を保持（初期値は0）
    let memory = 0;

    // 現在の演算子（+、-、×、÷など）を保持
    let operator = null;

    // 前回の値を保持（初期はnull）
    let previousValue = null;

    // 計算が進行中かどうかを管理（初期はfalse）
    let isCalculating = false;

    // ディスプレイに現在の入力値を表示する関数
    const updateDisplay = () => {
        display.textContent = currentInput;
    };

    // 全てのデータをリセットする関数
    const clearAll = () => {
        currentInput = '0';
        operator = null;
        previousValue = null;
        isCalculating = false;
    };

    // 現在の入力値だけをクリアする関数
    const clearEntry = () => {
        currentInput = '0';
    };

    // 現在の入力値の符号を切り替える関数
    const toggleSign = () => {
        currentInput = (parseFloat(currentInput) * -1).toString();
    };

    // 数字ボタンが押されたときの処理
    const handleNumber = (number) => {
        if (isCalculating) {
            // 新しい計算を開始する場合
            currentInput = number;
            isCalculating = false;
        } else if (currentInput === '0') {
            // 最初の数字を入力する場合
            currentInput = number;
        } else {
            // 既存の数字に追加する場合
            currentInput += number;
        }
    };

    // 演算子（+、-、×、÷）が押されたときの処理
    const handleOperator = (op) => {
        if (previousValue === null) {
            // 初回の演算子入力時
            previousValue = parseFloat(currentInput);
        } else if (operator) {
            // すでに演算が設定されている場合
            const result = calculate(previousValue, parseFloat(currentInput), operator);
            previousValue = result; // 計算結果を保存
            currentInput = result.toString(); // 表示を更新
        }
        operator = op; // 現在の演算子を設定
        isCalculating = true; // 次の入力を新しい値として処理する
    };

    // 2つの値を指定された演算子で計算する関数
    const calculate = (a, b, op) => {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '×': return a * b;
            case '÷': return a / b;
            default: return b; // 演算子が指定されていない場合、現在の値を返す
        }
    };

    // =ボタンが押されたときの処理
    const handleEquals = () => {
        if (operator && previousValue !== null) {
            currentInput = calculate(previousValue, parseFloat(currentInput), operator).toString();
            operator = null; // 演算子をリセット
            previousValue = null; // 前回の値をリセット
        }
    };

    // メモリ操作（MC, MR, M+, M-）を処理する関数
    const handleMemory = (action) => {
        switch (action) {
            case 'MC': memory = 0; break; // メモリをクリア
            case 'MR': currentInput = memory.toString(); break; // メモリの値を表示
            case 'M+': memory += parseFloat(currentInput); break; // メモリに現在の値を加算
            case 'M-': memory -= parseFloat(currentInput); break; // メモリから現在の値を減算
        }
    };

    // ボタンのクリックイベントを設定
    document.querySelectorAll('.b1').forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.textContent; // クリックされたボタンの値を取得

            if (!isNaN(value)) {
                // 数字ボタンの場合
                handleNumber(value);
            } else if (value === 'C') {
                clearEntry(); // 現在の入力をクリア
            } else if (value === 'AC') {
                clearAll(); // 全てをクリア
            } else if (value === '+/-') {
                toggleSign(); // 符号を切り替え
            } else if (['+', '-', '×', '÷'].includes(value)) {
                handleOperator(value); // 演算子を処理
            } else if (value === '=') {
                handleEquals(); // 結果を計算
            } else if (['MC', 'MR', 'M+', 'M-'].includes(value)) {
                handleMemory(value); // メモリ操作を処理
            } else if (value === '.') {
                if (!currentInput.includes('.')) {
                    // 小数点がまだ入力されていない場合だけ追加
                    currentInput += '.';
                }
            }

            updateDisplay(); // ディスプレイを更新
        });
    });

    // キーボード入力のイベントを設定
    document.addEventListener('keydown', (e) => {
        const key = e.key; // 押されたキーを取得

        if (!isNaN(key)) {
            // 数字キーの場合
            handleNumber(key);
        } else if (key === 'Backspace') {
            // バックスペースキーで最後の文字を削除
            currentInput = currentInput.slice(0, -1) || '0';
        } else if (key === 'Escape') {
            clearAll(); // 全てをクリア
        } else if (key === 'Enter' || key === '=') {
            handleEquals(); // 計算を実行
        } else if (['+', '-', '*', '/'].includes(key)) {
            // 演算子キーを処理
            const opMap = { '*': '×', '/': '÷' };
            handleOperator(opMap[key] || key);
        } else if (key === '.') {
            if (!currentInput.includes('.')) {
                currentInput += '.';
            }
        }

        updateDisplay(); // ディスプレイを更新
    });

    // 初期表示を更新
    updateDisplay();
});
