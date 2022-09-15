import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { addQuestion, addQuestionAsync, updateQuestion } from '../../features/faq/faqSlice';

type Props = {
    faq?: {
        question: string,
        id: number,
        answer: string
    },
    onDone?: () => void
}

const QuestionForm = (props: Props) => {
    const { faq, onDone } = props;
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        const { question, answer, delay } = values;
        const addQ = delay ? addQuestionAsync:addQuestion;
        // faq ? dispatch(updateQuestion({ id: faq.id, answer, question })) : dispatch(addQ({ question, answer }));
        dispatch(addQuestion({ question, answer }));
        onDone && onDone();
        form.resetFields();
    };
    return (
        <Form name="question" onFinish={onFinish} size={'large'} form={form} initialValues={{ ...faq }}>
            <Form.Item name="question" rules={[{ required: true, message: 'Please input your question!' }]} >
                <Input placeholder='Question' />
            </Form.Item>
            <Form.Item name='answer' rules={[{ required: true, message: 'Please input your answer!' }]}>
                <Input.TextArea placeholder='Answer' />
            </Form.Item>
            <Form.Item name="delay" valuePropName="checked" >
                <Checkbox></Checkbox>
            </Form.Item>
            {
                faq ? <Form.Item >
                    <Button style={{ marginRight: '20px' }} onClick={onDone}>
                        Cancel
                    </Button>
                    <Button htmlType="submit" type="primary">
                        Update
                    </Button>
                </Form.Item> : <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Add Question
                    </Button>
                </Form.Item>
            }
        </Form>
    )
}

export default QuestionForm