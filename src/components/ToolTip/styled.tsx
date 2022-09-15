import styled, { css } from "styled-components";

interface ToolTipContentProps {
  position: string
}
export const ToolTipContent = styled.div<ToolTipContentProps>`
    background-color: #555555;
    color: #ffffff;
    visibility: hidden;
    position: absolute;
    text-align: center;
    padding: 5px;
    border-radius: 6px;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
   
    ${props => {
    let styles = ``;
    switch (props.position) {
      case 'right':
        styles = `
          top: -5px;
          left: 125%;
          ::after {
            content: '';
            position: absolute;
            top: 50%;
            right: 100%;
            margin-top: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent #555 transparent transparent;
          }`;
        break;
      case 'bottom':
        styles = `
            top: 100%;
            left: 50%;
            margin-left: -60px;
            ::after {
              content: '';
              position: absolute;
              bottom: 100%;
              left: 50%;
              margin-left: -5px;
              border-width: 11px;
              border-style: solid;
              border-color: transparent transparent #555 transparent;
            }
          `
        break;
      case 'top':
        styles = `
          bottom: 100%;
          left: 50%;
          margin-left: -60px;
            ::after {
              content: '';
              position: absolute;
              top: 100%;
              left: 50%;
              margin-left: -5px;
              border-width: 5px;
              border-style: solid;
              border-color: #555 transparent transparent transparent;
            }
          `
        break;
      case 'left':
        styles = `
            top: -5px;
            bottom: auto;
            right: 100%;
              ::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 100%;
                margin-top: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: transparent transparent transparent #555;
              }
          `
        break;
      default:
        styles = `
            top: 100%;
            left: 50%;
            margin-left: -60px;
            ::after {
              content: '';
              position: absolute;
              bottom: 100%;
              left: 50%;
              margin-left: -5px;
              border-width: 11px;
              border-style: solid;
              border-color: transparent transparent #555 transparent;
            }
          `
        break;
    }
    return css`${styles}`;
  }}`

export const ToolTipWrapper = styled.div`
    position: relative;
    display: inline-block;
    &:hover ${ToolTipContent} {
    visibility: visible ;
    opacity: 1;
    }
`; 