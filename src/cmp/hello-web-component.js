// https://blog.jim-nielsen.com/2023/html-web-components-an-example/
//
import { pubsub, } from 'lib'

customElements.define('hello-web-component', class extends HTMLElement {

    connectedCallback() {
        let me = this
        // get children first, innerHTML will override
        //
        let children = Array.from(me.childNodes)

        // build innerHTML
        //
        let ds = Object.assign({say: 'world'}, me.dataset)
        me.innerHTML = `
            <div data-id="root" class="my-element-class text-center text-uppercase">
            <span data-id="greeting">he, ${ds.say}</span>
            </div>
        `

        // capture sub-components
        //
        let names = {
            "[data-id=root]": null,
            "[data-id=greeting]": {
                "click": function() {
                    pubsub.post({
                        [me.dataset.onClick]: ds.say,
                    })

                }
            },
        }

        for (let[n, events] of Object.entries(names)) {
            let el = me.querySelector(n)
            if (!el) continue

            // register events
            //
            if (events) {
                for (let [e_name, e_listener] of Object.entries(events)) {
                    el.addEventListener(e_name, e_listener.bind(me))
                }
            }

            // attach to object
            // careful of collision
            //
            let name = el.dataset.id
            if (!name) continue

            if (!(name in me)) {
                me[name] = el
                continue
            }

            if (!Array.isArray(me[name])) {
                me[name] = [me[name]]
            }
            me[name].push(el)
        }


        // re-add children nodes
        //
        if (me.root) {
            Array.from(children).forEach(c => me.root.appendChild(c.cloneNode(true)))
        }
    }
})