import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion, addQuestionAsync, selectLoading, updateQuestion } from '../../features/faq/faqSlice';
import { AppDispatch } from '../../store';

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
    const dispatch = useDispatch<AppDispatch>();
    const [form] = Form.useForm();
    const isLoading = useSelector(selectLoading);

    const onFinish = (values: any) => {
        const { question, answer, delay } = values;
        const addQuestionAction = delay ? addQuestionAsync:addQuestion;
        faq ? dispatch(updateQuestion({ id: faq.id, answer, question })) : dispatch(addQuestionAction({ question, answer }));
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
                <Checkbox>Add Delay</Checkbox>
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
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }} loading={isLoading}>
                        Add Question
                    </Button>
                </Form.Item>
            }
        </Form>
    )
}

export default QuestionForm