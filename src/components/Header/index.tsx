import React from 'react'
import {Typography} from 'antd'
import { StyledHeader } from "./styled";
const { Title, Paragraph, Text, Link } = Typography;

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      FAQ
      </StyledHeader>
  )
}

export default Header