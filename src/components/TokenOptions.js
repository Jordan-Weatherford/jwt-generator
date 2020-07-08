import React from 'react'
import '../styles/TokenOptions.css'

const TokenOptions = props => {
    const handleInputChange = event => {
        if (!isNaN(event.target.value)) {
            console.log(123123)
            props.handleInputChange(event)
        }
    }

    return(
        <div className='TokenOptionsWrapper Wrapper Magenta'>
            <p>Options = &#123;<br/>
                <span>expiresIn : </span>
                <input name='expiration' value={props.inputs.expiration} onChange={handleInputChange} style={{'textAlign': 'center'}} />
                <span> minutes</span><br/>
                &#125;
            </p>
        </div>
    )
}

export default TokenOptions