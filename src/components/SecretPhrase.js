import React from 'react'
import '../styles/SecretPhrase.css'

const SecretPhrase = props => {
    return(
        <div className='SecretPhraseWrapper Wrapper Purple'>
            <p>Secret =<br/>
                <input name="secret" value={props.secret} placeholder='secret phrase' onChange={props.handleInputChange} />
            </p>
        </div>
    )
}

export default SecretPhrase