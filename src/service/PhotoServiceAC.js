export class PhotoService2 {
    constructor () {
        this.contextPath = import.meta.env.BASE_URL;
    }

    getImages () {
        return fetch(this.contextPath + 'demo/data/accademic-support.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }
}
