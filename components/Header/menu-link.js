import styled from 'styled-components'
import * as theme from 'theme'

const Link = styled.a`
  transition: color ${theme.timings.color};
  will-change: color;

  @media (min-width: 800px) {
    display: none;
  }

  &:hover {
    color: ${theme.colors.text.green};
  }
`

const Image = styled.img`
  width: 30px;
  height: 30px;
`

export default () => (
  <Link href="/">
    <svg width="30px" height="30px" viewBox="0 0 30 30">
      <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
        <rect x="5" y="7" width="20" height="2"></rect>
        <rect x="5" y="14" width="20" height="2"></rect>
        <rect x="5" y="21" width="20" height="2"></rect>
      </g>
    </svg>
  </Link>
)