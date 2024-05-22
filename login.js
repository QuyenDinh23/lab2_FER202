let accounts = JSON.parse(localStorage.getItem("accounts")) || [
    {
        id: 1,
        fullname: "Dinh Manh Quyen",
        username: "abcxyz",
        password: "1234",
    },
];
localStorage.setItem("accounts", JSON.stringify(accounts));
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const mess = document.querySelector(".mess");
const checkAccountExist = (arr = accounts) => {
    const usernameValue = username.value;
    const passwordValue = password.value;
    for (let i = 0; i < arr.length; i++) {
        if (
            usernameValue === arr[i].username &&
            passwordValue === arr[i].password
        ) {
            return true;
        }
    }
    return false;
};

const login = (arr = accounts) => {
    mess.innerHTML = "";
    if (checkAccountExist()) {
        window.location.href = "home.html";
    } else {
        mess.innerHTML = "Wrong username or password";
    }
};

const register = () => {
    window.location.href = "register.html";
};



//Xử lí thêm 1 tài khoản

const register_fullname = document.querySelector("#register_fullname");
const register_username = document.querySelector("#register_username");
const register_password = document.querySelector("#register_password");
const register_repeat_password = document.querySelector("#register_repeat_password");

const createAccount = (account) => {
    accounts.push(account);
    localStorage.setItem("accounts", JSON.stringify(accounts));
}
const checkUserNameExist = (arr = accounts) => {
    const usernameValue = register_username.value;
    for (let i = 0; i < arr.length; i++) {
        if (usernameValue === arr[i].username) {
            return true;
        }
    }
    return false;
}
const saveAccount = () => {
    const fullname = register_fullname.value;
    const username = register_username.value;
    const password = register_password.value;
    const repeatPassword = register_repeat_password.value;
    if (password !== repeatPassword) {
        alert("The password you entered is not the same");
    } else if(checkUserNameExist()) {
        alert("Username already exists");
    } else {
        const account = {
            id: accounts.length + 1,
            fullname: fullname,
            username: username,
            password: password
        }
        createAccount(account);
        alert("Register successfully");
        window.location.href = "login.html";
    }
}
