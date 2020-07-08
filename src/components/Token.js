import React from 'react'
import '../styles/Token.css'

const Token = props => {
    const [tokenHeader, tokenPayload, tokenSignature] = props.token.split('.')

    return(
        <div className='TokenWrapper'>
            <h1>Token = <br/>
                <span className='Blue'>{tokenHeader}</span>.<br/>
                <span className='Yellow'>{tokenPayload}</span>.<br/>
                <span className='Green'>{tokenSignature}</span>
            </h1>
        </div>
    )
}

export default Token