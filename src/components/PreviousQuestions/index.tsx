import { Col, Row, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { removeQuestions, sortQuestions } from '../../features/faq/faqSlice';
import QuestionsList from "../QuestionsList";


type Props = {}

const PreviousQuestions = (props: Props) => {
    const dispatch = useDispatch();
    const handleRemoveQuestions = () => {
        console.log('on remove question')
        dispatch(removeQuestions())
    }
    const handleSortQuestions = () => {
        dispatch(sortQuestions());
    }

    return (
        <div>
            <Row style={{ margin: '10px 10px' }} justify='center' >
                <Col xs={24} sm={20} md={16} lg={12} xl={16}>
                    <Row justify='space-between'>
                        <Button size='large' type='primary' onClick={handleSortQuestions} >Sort Questions</Button>
                        <Button size='large' type='primary' onClick={handleRemoveQuestions}>Remove Questions</Button>
                    </Row>
                </Col>
            </Row>
            <QuestionsList />
        </div>
    )
}

export default PreviousQuestions