import React from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse
type Props = {
    question: string,
    answer: string
}

const Question = (props: Props) => {
    const {question, answer} = props;
    return (
        <Collapse
            defaultActiveKey={['1']}
            // onChange={onChange}
            expandIconPosition={'start'}
        >
            <Panel header={question} key="1">
                <div>{answer}</div>
            </Panel>
        </Collapse>
    )
}

export default Question;