import * as React from 'react'
import { createRoot } from 'react-dom'
import { Button, OverlayTrigger, Popover } from 'react-bootstrap'
import { Channel, Current, } from 'lib'

// import { Channel } from './channel'
// import { Current } from './current'

// import { Popover, ArrowContainer } from "react-tiny-popover"
// import { usePopper } from 'react-popper';

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


// web-component supports is considered experimental
class XSearch extends HTMLElement {
    connectedCallback() {

        const linkPoint = document.createElement('link')
        linkPoint.setAttribute('rel', 'stylesheet')
        linkPoint.setAttribute('href', 'react/bootstrap.min.css')

        const mountPoint = document.createElement('div');
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.appendChild(linkPoint)
        shadowRoot.appendChild(mountPoint);

        const root = ReactDOM.createRoot(mountPoint);
        root.render(<>
            <Example></Example>
        </>)
    }
}
customElements.define('x-search', XSearch)

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

        {/* <Example/>
        <x-search name={"hello"}></x-search> */}

        </div></div></div>

    </>
}

let root = createRoot(document.getElementById('root'))
root.render(<App />)
