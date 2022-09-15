import { useDispatch, useSelector } from 'react-redux';
import { CustomAlert, CustomPanel, PanelContent, PanelHeader } from "./styled";
import { removeQuestion, selectFaqs } from '../../features/faq/faqSlice';
import { Collapse, Row, Col, Button } from 'antd';
import { useState } from 'react';
import QuestionForm from '../QuestionForm';

type Props = {}

const QuestionsList = (props: Props) => {
    const [questionId, setQuestionId] = useState<number>();
    const [activePanelKey, setActivePanel] =  useState<string| string[]>('')
    const dispatch = useDispatch();
    const faqs = useSelector(selectFaqs);
    const genExtra = (id: number) => (
        <>
            {
                questionId !== id ? <Button type="dashed" style={{ margin: "0px 10px" }} onClick={event => {
                    // If you don't want click extra trigger collapse, you can prevent this:
                    event.stopPropagation();
                    setQuestionId(id);
                    setActivePanel(`${id}`)
                }}>
                    Edit
                </Button> : null
            }
            <Button type="dashed" onClick={event => {
                // If you don't want click extra trigger collapse, you can prevent this:
                event.stopPropagation();
                dispatch(removeQuestion(id))
            }} >
                Delete
            </Button>
        </>

    );
    return (
        <Row style={{ margin: '10px 10px' }} justify={'center'}>
            <Col xs={24} sm={20} md={16} lg={12} xl={16}>
                {
                    faqs.length === 0 && <CustomAlert message="No questions yet. :-(" type="error" />
                }
                <Collapse accordion activeKey={activePanelKey} onChange={(key) => setActivePanel(key)} >
                    {
                        faqs.map(f =>
                            <CustomPanel header={<PanelHeader>{f.question}</PanelHeader>} key={f.id} extra={genExtra(f.id)}>
                                <PanelContent>{f.answer}</PanelContent>
                                {f.id === questionId && (
                                    <Row justify='center'>
                                        <Col xs={24} sm={20} md={16} lg={12} xl={16}>
                                            <QuestionForm faq={f} onDone={() => setQuestionId(-1)} />
                                        </Col>
                                    </Row>
                                )
                                }

                            </CustomPanel>)
                    }
                </Collapse>
            </Col>
        </Row>
    )
}

export default QuestionsList