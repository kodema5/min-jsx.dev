// https://blog.jim-nielsen.com/2023/html-web-components-an-example/
//
customElements.define('hello-web-component', class extends HTMLElement {

    connectedCallback() {
        let children = Array.from(this.childNodes)

        let ds = Object.assign({say: 'world'}, this.dataset)
        this.innerHTML = `
            <div class="my-element-class text-center text-uppercase">
            <span>hey, ${ds.say}</span>
            </div>
        `

        let el = this.querySelector('div')
        Array.from(children).forEach(c => el.appendChild(c.cloneNode(true)))

        this.replaceChildren(el)
    }
})