import * as React from 'react'
import { createRoot } from 'react-dom'
import { Channel, Current, } from 'lib'
import './cmp/hello-web-component'
import { Tooltip } from 'react-tooltip'

let curr = new Current('app', { state:'world' })
export let appChannel = new Channel()


let App = () => {

    let [state, setState_] = React.useState(curr.state)
    let setState = (a) => setState_(curr.set('state', a))


    React.useEffect(() => {
        let psId = appChannel.on({
            'message': (data) => setState(data),
        })
        return () => appChannel.off(psId)
    }, [])


    return <>
        <div className='container'>

        <div className="row"><div className="col">
        <hello-web-component data-say="foo">
            <b>welcome</b>
        </hello-web-component>
        </div></div>

        <div className="row"><div className="col">
        <h1>Hello, {state}!</h1>

        <button
            data-tooltip-id="my-tooltip"
            data-tooltip-content="updates the message with local time"
            data-tooltip-place="bottom"

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
            data-tooltip-id="my-tooltip"
            data-tooltip-content="reset message"
            data-tooltip-place="bottom"

            className="btn btn-primary ms-2"
            onClick={() => {
                curr.reset()
                setState(curr.state)
            }}
        >reset values</button>

        <button
            data-tooltip-id="my-tooltip"
            data-tooltip-content="reload page with last message"

            className="btn btn-primary ms-2"
            onClick={() => {
                document.location.reload()
            }}
        >reload page</button>


        </div></div></div>
        <Tooltip id="my-tooltip" />
    </>
}

let root = createRoot(document.getElementById('root'))
root.render(<App />)
