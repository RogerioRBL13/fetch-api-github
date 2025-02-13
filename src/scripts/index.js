import { getUser } from './services/user.js'
import { getRepositories } from './services/repositories.js'
import { getFollowers } from './services/followers.js'
import { getFollowings } from './services/following.js'
import { getEvents } from './services/events.js'

import { user } from './objects/user.js'
import { screen } from './objects/screen.js'

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13
    
    if(isEnterKeyPressed){
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}

async function getUserData(userName){

   const userResponse = await getUser(userName)
   console.log(await userResponse); 
   

    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }

    const userFollower = await getFollowers(userName) 
    user.setInfo(userFollower)

    const userFollowings = await getFollowings(userName)
    user.setInfo(userFollowings);

    const userEvents = await getEvents(userName)
    user.setInfo(userResponse)
    user.setEvents(userEvents)
    
    const repositoriesResponse = await getRepositories(userName)
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    
    screen.renderUser(user)
}
