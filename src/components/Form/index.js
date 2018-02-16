import React from 'react';

import { ContainerItem, Input } from '../../styles/components'

const Form = (props) => (
    <ContainerItem>
        <form onSubmit={props.onSubmit}>
            <Input
                type="text"
                value={props.text}
                onChange={props.onChange}
                placeholder="Enter Characters then hit Count"
            />
            <button type="submit" className="btn btn--primary btn--inside uppercase">Count</button>
        </form>
    </ContainerItem>
)

export default Form