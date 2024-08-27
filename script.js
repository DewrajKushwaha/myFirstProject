


    var screen = document.querySelector('#screen');
    var btn = document.querySelectorAll('button');


    for (item of btn) {
        item.addEventListener('click', (e) => {
            btntext = e.target.innerText;
            try {
                if (btntext == 'AC') {
                    screen.value = '';
                }
                else if (btntext == '=') {
                    screen.value = eval(screen.value);
                }
                else if (btntext == 'X') {
                    screen.value += '*';
                }
                else if (btntext == 'sin') {
                    screen.value = Math.sin(screen.value);
                }
                else if (btntext == 'cos') {
                    screen.value = Math.cos(screen.value);
                }
                else if (btntext == 'tan') {
                    screen.value = Math.tan(screen.value);
                }
                else if (btntext == 'pi') {
                    // screen.value=`${Math.PI}`;
                    screen.value *= 3.14;
                }
                else if (btntext == '^2') {
                    screen.value = Math.pow(screen.value, 2);
                }
                else if (btntext == '√') {
                    screen.value = Math.sqrt(screen.value, 2);
                }
                else if (btntext == 'x!') {
                    fact()
                }
                else if (btntext == 'log') {
                    screen.value = Math.log(screen.value);
                }
                else if (btntext == 'e') {
                    screen.value = 2.7182;
                }
                else if (btntext == 'CE') {
                    backspc()
                }
                else {

                    screen.value += btntext;
                }
            } catch (e) {

                screen.value = 'Are Bhai ye kiya kar rhe ho';
            }
        })

    }
    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }
    function fact() {
        let i;
        let no = 1;
        let num = screen.value;
        for (i = num; i > 1; i--) {
            no *= i;
        }
        screen.value = no;
    }
