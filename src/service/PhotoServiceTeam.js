export class PhotoService4 {
    constructor () {
        this.contextPath = import.meta.env.BASE_URL;
    }

    getImages () {
        return fetch(this.contextPath + 'demo/data/programming/team.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }
}
