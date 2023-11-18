import * as React from 'react'
import { createRoot } from 'react-dom'
import { Button, OverlayTrigger, Popover } from 'react-bootstrap'
import { Channel, Current, } from 'lib'
import './cmp/hello-web-component'

let curr = new Current('app', { state:'world' })
export let appChannel = new Channel()


const popover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Popover right</Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
)

const Example = () => (
    <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
        <Button variant="success">hover</Button>
    </OverlayTrigger>
)


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
                curr.reset()
                setState(curr.state)
            }}
        >reset values</button>

        <button
            className="btn btn-primary ms-2"
            onClick={() => {
                document.location.reload()
            }}
        >reload page</button>

        <Example/>
        {/* <x-search name={"hello"}></x-search> */}

        </div></div></div>

    </>
}

let root = createRoot(document.getElementById('root'))
root.render(<App />)
