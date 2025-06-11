 function capitalizeWords(str) {
            return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        }

        function countPrimes(arr){
            function isPrime(n){
                if(n<2) return false;
                for (let i = 2;  i <= Math.sqrt(n); i++){
                    if(n % i===0) return false;
                }
                return true ;               
            }
            return arr.filter(isPrime).length;
        }

        function countWords(str){
            const words=str.toLowerCase().match(/\b\w+\b/g);
            const count ={};
            if(words){
                words.forEach(word =>{count[word]=(count[word]||0)+1;});
            }
            return count;
        }

        function factorial(n){
            if(n<0) return undefined;
            if(n<2) return 1;
            return n*factorial(n-1);
        }

        function fibonacci(n) {
            if (n < 0) return undefined;
            const fib = [0, 1];
            for (let i = 2; i <= n; i++) {
                fib[i] = fib[i - 1] + fib[i - 2];
            }
            return fib[n];
        }
       function runTask1() {
            const input = document.getElementById('input1').value;
            document.getElementById('result1').textContent = capitalizeWords(input);
        }

        function runTask2() {
            const input = document.getElementById('input2').value;
            const numbers = input.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
            document.getElementById('result2').textContent = countPrimes(numbers);
        }

        function runTask3() {
            const input = document.getElementById('input3').value;
            const result = countWords(input);
            document.getElementById('result3').textContent = JSON.stringify(result);
        }

        function runTask4() {
            const input = parseInt(document.getElementById('input4').value);
            const result = factorial(input);
            document.getElementById('result4').textContent = result !== undefined ? result : "Invalid";
        }

        function runTask5() {
            const input = parseInt(document.getElementById('input5').value);
            const result = fibonacci(input);
            document.getElementById('result5').textContent = result !== undefined ? result : "Invalid";
        }