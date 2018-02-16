import React from 'react';

import { ErrorMsg } from '../../styles/components'

const Message = (props) => props.msg !== '' && <ErrorMsg>{props.msg}</ErrorMsg>

export default Message