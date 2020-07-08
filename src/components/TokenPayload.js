import React from 'react'
import '../styles/TokenPayload.css'

const TokenPayload = props => {
    return(
        <div>
            <div className='TokenPayloadWrapper Wrapper Yellow'>
                <p>Payload = &#123;</p>
                <input name='key' value={props.inputs.key} onChange={props.handleInputChange} placeholder="key" />
                <span>:</span>
                <input name='value' value={props.inputs.value} onChange={props.handleInputChange} placeholder="value" />
                <p>&#125;</p>                
            </div>
        </div>
    )
}

export default TokenPayload