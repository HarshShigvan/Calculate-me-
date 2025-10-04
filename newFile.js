let buttons = document.querySelectorAll('.button');
let string = "";
let memory = 0;

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string).toString();
                document.querySelector('input').value = string;
            } catch {
                document.querySelector('input').value = "Error";
                string = "";
            }
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'M+') {
            memory += parseFloat(string) || 0;
        }
        else if (e.target.innerHTML == 'M-') {
            memory -= parseFloat(string) || 0;
        }
        else if (e.target.innerHTML == '%') {
            string = (parseFloat(string) / 100).toString();
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    });
});
