import * as React from 'react'
import { createRoot } from 'react-dom'
import { Channel } from './channel'
import { Last } from './last'

let last = new Last('app', { state:'world' })

export let appChannel = new Channel()


let App = () => {

    let [state, setState_] = React.useState(last.state)
    let setState = (a) => setState_(last.set('state', a))


    React.useEffect(() => {
        let psId = appChannel.on({
            'message': (data) => setState(data),
        })
        return () => appChannel.off(psId)
    }, [])


    return <>
        <div className='container'>
        <div className="row"><div className="col">
        <h1>Hello, {state}!</h1>

        <button
            className="btn btn-primary"
            onClick={() => {
                setTimeout(() => {
                    appChannel.post({
                        'message': (new Date()).toLocaleString(),
                    })
                }, 10)
            }}
            title="simulate external js call."
        >post a local time</button>

        <button
            className="btn btn-primary ms-2"
            onClick={() => {
                last.reset()
                setState(last.state)
            }}
        >reset values</button>

        <button
            className="btn btn-primary ms-2"
            onClick={() => {
                document.location.reload()
            }}
        >reload page</button>


        </div></div></div>
    </>
}

let root = createRoot(document.getElementById('root'))
root.render(<App />)
