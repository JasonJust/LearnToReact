import styled from 'styled-components'

export const HomeWrapper = styled.div`
    font-size: 50px;
    color: orange;

    .banner {
      background: #61dafb;
      
      li {
        color: #ffffff;
      
          &.active {
            color: orange;
          }
          
          &:hover {
            color: gray;
            cursor: pointer;
          }
          
          &:after {
            content: '  JasonJust.';
          }
      }
    }
`

export const TitleWrapper = styled.h2`
    text-decoration: underline;
    color: ${props => props.theme.themeColor};
    font-size: ${props => props.theme.fontSize};
`
