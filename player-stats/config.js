var urls = {
    search(name){
        var url1 = `http://cricapi.com/api/playerFinder?apikey=KG02BpFSr0XY3iwe2iIQYisa8vw1&name=${name}`
        return url1;
    },
    playerstats(pid){
        var url2 = `https://cricapi.com/api/playerStats?apikey=KG02BpFSr0XY3iwe2iIQYisa8vw1&pid=${pid}`;
        return url2;
    }
}