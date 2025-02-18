import { baseUrl, maxEvents } from "../variables.js"

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${maxEvents}`)
    console.log(response);
    
    return await response.json()
}

export { getEvents }