const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followersNumber: '',
    followingsNumber: '',
    events: [],
    repositories: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followersNumber = gitHubUser.followers
        this.followingsNumber = gitHubUser.following
    },
    setEvents(events){
        this.events = events
    },
    setRepositories(repositories){
        this.repositories = repositories
    }
}

export { user }