export class ProductService {
    constructor () {
        this.contextPath = import.meta.env.BASE_URL;
    }

    getProductsSmall () {
        return fetch(this.contextPath + 'demo/data/products-small.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }

    getProductsSmall2 () {
        return fetch(this.contextPath + 'demo/data/products-small2.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }

    getProductsSmall3 () {
        return fetch(this.contextPath + 'demo/data/products-small3.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }

    getProductsWP1 () {
        return fetch(this.contextPath + 'demo/data/web-projects.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }

    getProductsWP2 () {
        return fetch(this.contextPath + 'demo/data/web-projects2.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }

      getProductsUniversity1 () {
        return fetch(this.contextPath + 'demo/data/university/university1.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }

    getProductsUniversity2 () {
        return fetch(this.contextPath + 'demo/data/university/university2.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }

    getProductsUniversity3 () {
        return fetch(this.contextPath + 'demo/data/university/university3.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }

    getProductsSchool () {
        return fetch(this.contextPath + 'demo/data/products-school.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }

    getProductsSchool2 () {
        return fetch(this.contextPath + 'demo/data/products-school2.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }

    getProductsProgramming () {
        return fetch(this.contextPath + 'demo/data/products-programming.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }

    getProductsOthers () {
        return fetch(this.contextPath + 'demo/data/products-others.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }

    getProducts () {
        return fetch(this.contextPath + 'demo/data/products.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }

    getProductsMixed () {
        return fetch(this.contextPath + 'demo/data/products-mixed.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }

    getProductsWithOrdersSmall () {
        return fetch(this.contextPath + 'demo/data/products-orders-small.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }

    getProductsWithOrdersLarge () {
        return fetch(this.contextPath + 'demo/data/products-orders.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }
}
