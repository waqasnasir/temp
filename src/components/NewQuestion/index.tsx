import React from 'react'
import { Row, Col } from 'antd'
import QuestionForm from "../QuestionForm"
import { NewQuestionTitle } from './styled'

type Props = {}

const NewQuestion = (props: Props) => {
    return (
        <Row style={{margin: '10px 10px'}} justify='center'>
            <Col xs={24} sm={20} md={16} lg={8} xl={8}>
                <NewQuestionTitle>Create New Question</NewQuestionTitle>
                <QuestionForm />
            </Col>
        </Row>
    )
}

export default NewQuestion