const getUserInfo = (name) => {
    let username = name.toLowerCase.trim();
    const URL = `http://api.github.com/users/${username}`;
    return fetch(URL)
        .then((response) => response.json());
}

export default getUserInfo;