 console.log("Welcome to Dev's Dev tools");
        function operations() {
            let a = parseFloat(document.getElementById('firstNum').value);
            let b = parseFloat(document.getElementById('secondNum').value);
            let c = document.getElementById('options');
            let result = document.getElementById('myResult');


            if (c.value === '+') {
                const res1 = a + b;
                result.textContent = parseFloat(res1);
            }
            else if (c.value === '-') {
                const res2 = a - b;
                result.textContent = parseFloat(res2);
            }
            else if (c.value === '*') {
                const res3 = a * b;
                result.textContent = parseFloat(res3);
            }
            else if (c.value === '/') {
                const res4 = a / b;
                result.textContent = parseFloat(res4);
            }
            else {
                result.textContent = "Invalid response";

            }
        };


        document.getElementById('mySubmit').addEventListener('click', operations);