const logout = document.querySelector('.logout');

logout.addEventListener('click', () => {
    let c = document.cookie;
    let date = new Date;
    date.setTime(date.getTime() - (10 * 60*1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `email=${c.email}; ${expires}; path=/;`;
    location.reload();
})