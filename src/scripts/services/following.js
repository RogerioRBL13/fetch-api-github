async function getFollowings(userName){
    const response = await fetch(`https://api.github.com/users/${userName}/following`)
    return await response.json()
}

export { getFollowings }