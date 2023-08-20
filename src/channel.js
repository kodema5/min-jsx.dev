export class Channel {
    listeners = {}
    anonId = 0

    on(id, fn) {
        let id_ = id.split('.')[1]
            ? ''
            : ('.' + String(++this.anonId))
        id = id + id_
        this.listeners[id] = fn
        return id
    }

    off(id) {
        return (id in this.listeners)
            && (delete this.listeners[id])
    }

    post(id, data) {
        return Object.entries(this.listeners)
            .filter( ([k,_]) => k.split('.')[0]===id)
            .map( ([_,f]) => f)
            .filter(Boolean)
            .map( async (f) => f(data))
            .length
    }
}
