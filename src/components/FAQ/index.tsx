import { Divider } from 'antd';
import NewQuestion from '../NewQuestion';
import PreviousQuestions from '../PreviousQuestions';
import ToolTip from '../ToolTip';
import { PreviousQuestionsTitle } from "./styled";

type Props = {}

function FAQ({ }: Props) {
    return (
        <div>
            <NewQuestion />
            <Divider>
                <ToolTip text='Here you can find created questions and their answers'>
                <PreviousQuestionsTitle> Previously Asked Questions</PreviousQuestionsTitle>
                </ToolTip>
                
            </Divider>
            <PreviousQuestions />
        </div>
    )
}

export default FAQ