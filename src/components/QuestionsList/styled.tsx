import { Alert, Collapse } from "antd";
import styled from "styled-components";
const { Panel } = Collapse;
export const CustomAlert = styled(Alert)`
text-align: center;
font-size: 20px;
font-weight: 500;
`;
export const CustomPanel = styled(Panel)`
    &&& .ant-collapse-header {
        align-items: center ;
    }
    &&& .ant-typography{
         margin: 0;
    }
`

export const PanelHeader = styled.div`
    font-size: 20px;
    font-weight: 500;
`;
export const PanelContent = styled.div`
    font-size: 18px;
    font-weight: 400;
    padding: 10px;
    margin-bottom: 20px;
`;
export const QuestionFormContainer = styled.div`
    font-size: 20px;
    font-weight: 500;
`