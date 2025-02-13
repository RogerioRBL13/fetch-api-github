import { numberFollowers } from "../variables.js"

async function getFollowers(){
    const response = await fetch(`${numberFollowers}`)
    console.log(response);
    
    return await response.json()
}

export { getFollowers }