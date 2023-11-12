export let Current = globalThis.Current = class Current {

    constructor(id, value = {}) {
        let me = this
        me.id = id
        me.initialValues = {...value}

        me.values = JSON.parse(sessionStorage.getItem(me.id))
        if (!me.values || Object.keys(me.values).length===0) {
            me.values = {...(me.initialValues)}
        }


        me.reset = () => {
            me.values = {...(me.initialValues)}
        }


        me.set = (prop, value) => {
            if (prop==='values') {
                Object.assign(me.values, {...value})
            } else {
                me.values[prop] = value
            }
            return value
        }


        addEventListener('beforeunload',() => {
            sessionStorage.setItem(
                me.id,
                JSON.stringify(this.values)
            )
        })


        return new Proxy(me, {
            set(obj, prop, value) {
                obj.set(prop, value)
            },
            get(obj, prop) {
                return prop==='values' ? obj.values
                    : obj.values.hasOwnProperty(prop) ? obj.values[prop]
                    : Reflect.get(...arguments)
            },
            has(obj, prop) {
                return prop in obj.values
            },
            delete(obj, prop) {
                return obj.values[prop]
            }
        })
    }
}
