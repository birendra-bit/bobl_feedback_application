import React from 'react';
import { Button } from 'react-bootstrap'

const button = props =>(
<Button {...props}>{props.text}</Button>
)

export default button