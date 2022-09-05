import fetchRequest from './fetchRequest.js';

const signupSubmit = document.querySelector('#signup-submit');
const loginSubmit = document.querySelector('#login-submit');
const alerts = document.querySelector('.alerts');
const progressBar = document.querySelector('.progress-bar')
const alertSvg =
    `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
        <symbol id="info-fill" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </symbol>
        <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
    </svg>`


getProgress()

signupSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    let username = document.querySelector('#signup-username').value;
    let password = document.querySelector('#signup-password').value;
    let email = document.querySelector('#signup-email').value;
    // let sex = document.querySelectorAll('.sex');

    // for(let i = 0; i < sex.length; i++){
    //     if(sex[i].checked){
    //         sex = sex[i].value;
    //         break;
    //     }
    // }

    let data = {
            'username': username,
            'password': password,
            'email': email
            // 'sex': sex,
    }

    fetchRequest('../../core/signup.php', 'POST', data, signup)

    function signup(result) {
        if(result == 1){
            alerts.innerHTML = alertSvg;
            alerts.innerHTML +=
            `<div class="alert alert-success d-flex align-items-center" role="alert">
                <svg width="16px" height="16" class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                <div>
                    Вы успешно зарегистрированы!
                </div>
            </div>`

            alerts.style.opacity = 1;
            window.setTimeout(() => {
                alerts.style.opacity = 0;
            }, 5000);
            
        }else if(result == 2){
            alerts.innerHTML = alertSvg;
            alerts.innerHTML +=
            `<div class="alert alert-primary d-flex align-items-center" role="alert">
                <svg width="16px" height="16" class="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
                <div>
                    Заполните поля!
                </div>
            </div>`

            alerts.style.opacity = 1;
            window.setTimeout(() => {
                alerts.style.opacity = 0;
            }, 5000);
        } else{
            alerts.innerHTML = alertSvg;
            alerts.innerHTML += `
            <div class="alert alert-danger d-flex align-items-center" role="alert">
                <svg width="16px" height="16" class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                <div>
                    Что-то пошло не так. Повторите попытку позже
                </div>
            </div>
            `

            alerts.style.opacity = 1;
            window.setTimeout(() => {
                alerts.style.opacity = 0;
            }, 5000);
        }
    }
    
})


loginSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    let password = document.querySelector('#login-pass').value;
    let email = document.querySelector('#login-email').value;

    let data = {
            'password': password,
            'email': email
    }

    fetchRequest('../../core/login.php', 'POST', data, login)

    function login(result) {
        console.log(result)


        if(result == 0){
            alerts.innerHTML = alertSvg;
            alerts.innerHTML += `
            <div class="alert alert-danger d-flex align-items-center" role="alert">
                <svg width="16px" height="16" class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                <div>
                    Пользователь не найден.
                </div>
            </div>
            `
            alerts.style.opacity = 1;
            window.setTimeout(() => {
                alerts.style.opacity = 0;
            }, 5000);

        }else if(result == 2){
            alerts.innerHTML = alertSvg;
            alerts.innerHTML += `    
            <div class="alert alert-primary d-flex align-items-center" role="alert">
                <svg width="16px" height="16" class="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
                <div>
                    Заполните поля!
                </div>
            </div>
            `
            alerts.style.opacity = 1;
            window.setTimeout(() => {
                alerts.style.opacity = 0;
            }, 5000);
        } else{
            result = JSON.parse(result)

            let date = new Date;
            date.setTime(date.getTime() + (10 * 60*1000));

            let expires = "expires=" + date.toUTCString();

            document.cookie = `email=${result.email}; ${expires}; path=/;`

            alerts.innerHTML = alertSvg;
            alerts.innerHTML += `
            <div class="alert alert-success d-flex align-items-center" role="alert">
                <svg width="16px" height="16" class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                <div>
                    Успех!
                </div>
            </div>
            `

            alerts.style.opacity = 1;
            setTimeout(() => {
                alerts.style.opacity = 0;

            }, 5000);

            location.href = 'userpage.php';

        }
    }
    
})

function getProgress(){
    let password = document.querySelector('#signup-password');
    let formSignup = document.querySelector('#register');
    let result = 0;
    let checkUppercase = false;
    let checkSymbols = false;
    let checkLength = false;
    let checkNums = false;

    formSignup.addEventListener('keyup', (e) => {
        if(e.target.value.trim() == '') {
            progressBar.style.width = '0%';
        } else{
            if(e.target == password){
                if (e.target.value.length >= 8 && checkLength == false){
                    result += 25;
                    checkLength = true;
                } else if (e.target.value.length == 7 && result >= 25 && checkLength == true){
                    result -= 25;
                    checkLength = false;
                    console.log(result, checkLength)
                }

                if(/[!@#$%^&*()]/gm.test(e.target.value) && checkSymbols == false){
                    result += 25;
                    checkSymbols = true;
                    console.log(result, checkSymbols)
                } else if(!/[!@#$%^&*()]/gm.test(e.target.value) && checkSymbols == true){
                    result -= 25;
                    checkSymbols = false;
                    result = 0 ? result < 0 : result;
                    console.log(result, checkSymbols)
                }

                if(/[A-Z]/gm.test(e.target.value) && checkUppercase == false){
                    result += 25;
                    checkUppercase = true
                    console.log(result, checkUppercase)

                } else if(!/[A-Z]/gm.test(e.target.value) && checkUppercase == true){
                    result -= 25;
                    checkUppercase = false;
                    result = 0 ? result < 0 : result;
                    console.log(result, checkUppercase)
                }

                if(/[0-9]/gm.test(e.target.value) && checkNums == false){
                    result += 25;
                    checkNums = true;
                } else if(!/[0-9]/gm.test(e.target.value) && checkNums == true) {
                    result -= 25;
                    checkNums = false;
                    result = 0 ? result < 0 : result;
                    console.log(result, checkUppercase)
                }
            }

            if(result > 90){
                progressBar.style.width = '100%';
            } else if( result < 0){
                result = 0;
            } else{
                progressBar.style.width = result + '%';
            }
        }

    })

}




