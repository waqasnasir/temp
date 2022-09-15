import { ToolTipContent, ToolTipWrapper } from './styled';
import './styled.tsx'

type Props = {
  children: React.ReactNode,
  text: string
}

const ToolTip = (props: Props) => {
  const { children, text } = props;
  return (
    <ToolTipWrapper>
      {children}
      <ToolTipContent position='bottom'>
        {text}
      </ToolTipContent>
    </ToolTipWrapper>
  )
}

export default ToolTip