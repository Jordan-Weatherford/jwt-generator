import React from 'react'
import '../styles/TokenHeader.css'

const TokenHeader = props => {
    return(
        <div className='TokenHeaderWrapper Wrapper Blue'>
            <p>Header = &#123;<br/>
                <span>"alg" : "HS256"</span><br/>
                <span>"type" : "jwt"</span><br/>&#125;                
            </p>

        </div>
    )
}

export default TokenHeader