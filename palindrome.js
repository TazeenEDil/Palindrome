
        function checkPalindrome(str) {
            const len = str.length;

            for (let i = 0; i < len / 2; i++) {
                if (str[i] !== str[len - 1 - i]) {
                    console.log('It is not a palindrome');
                    return false;
                }
            }

            console.log('It is a palindrome');
            return true;
        }

        // Take input of the string from the user
        const userInput = prompt('Enter a string:');

        if (userInput) {
            checkPalindrome(userInput);
        } else {
            console.log('Invalid input. Please enter a valid string.');
        }

