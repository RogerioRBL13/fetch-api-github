const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                            <div class="data">
                                                <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                                <p>${user.bio ?? 'Não possui bio cadstrada 😥'}</p><br>
                                                <i class="fa-solid fa-users"></i>
                                                <p><strong>Seguidores: </strong>${user.followersNumber}  - <strong>Seguindo: </strong> ${user.followingsNumber} <p>
                                                
                                            </div>
                                      </div>`
        
        let eventsItens = '';
        user.events.forEach(eve => eventsItens += `<li><a href="${eve.repo.url}" target="_blank">${eve.repo.name}</a> <p>- ${eve.payload.repository_id ? eve.payload.commits[0].message : "Sem mensagens de commits."}</p></li>`)
                              
            if(user.events.length > 0){
                this.userProfile.innerHTML += `<div class="section events">
                                                 <h2>Eventos</h2>
                                                 <ul>${eventsItens}</ul>
                                                </div>`        
                                      }        
        console.log(eventsItens);
        

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a> 
            <div>🍴${repo.forks_count}  ⭐${repo.stargazers_count}   👀${repo.watchers_count}   👨‍🏫${repo.language ? repo.language : "-"}</div></li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`        
        }        
    },
    
    
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }