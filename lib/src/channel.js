export class Channel {
    listeners = {}
    anonId = 0

    _on(id, fn) {
        let id_ = id.split('.')[1]
            ? ''
            : ('.' + String(++this.anonId))
        id = id + id_
        this.listeners[id] = fn
        return id
    }

    on(ls) {
        return Object
            .entries(ls)
            .map(([id, fn]) => this._on(id,fn))
    }

    _off(id) {
        return (id in this.listeners)
            && (delete this.listeners[id])
    }

    off(ids) {
        return ids.map( id => this._off(id))
    }

    _post(id, data) {
        return Object.entries(this.listeners)
            .filter( ([k,_]) => k.split('.')[0]===id)
            .map( ([_,f]) => f)
            .filter(Boolean)
            .map( async (f) => f(data))
            .length
    }

    post(msgs) {
        return Object
            .entries(msgs)
            .map( ([id,data]) => this._post(id, data))
            .reduce( (s, n) => s+n, 0)
    }
}
