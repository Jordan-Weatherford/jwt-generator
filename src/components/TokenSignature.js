import React from 'react'
import '../styles/TokenSignature.css'

const TokenSignature = props => {
    return(
        <div className='TokenSignatureWrapper Wrapper Green'>
            <p>Signature =<br/>
                <span>HMACSHA256(</span><br/>
                <span>base64UrlEncode(<span className='Blue'>header</span>) + "." +</span><br/>
                <span>base64UrlEncode(<span className='Yellow'>payload</span>) + "." +</span><br/>
                <span className='Purple'>secret</span>
            </p>
        </div>
    )
}

export default TokenSignature