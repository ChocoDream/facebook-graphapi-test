import React from 'react'
import {styled,
        Button} from '@material-ui/core'

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, black 10%, gray 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  })

export default function ButtonComponentHook() {
    return(
        <MyButton>Component Hook</MyButton>
    )
}