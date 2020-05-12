import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {get, COMMON} from './constants'
import theme from './theme'

function getBorderRadius(props) {
  if (props.square) {
    return props.size <= 24 ? '4px' : get('radii.2')(props)
  } else {
    return '50%'
  }
}

const alignRightStyles = theme => {
  return `
    right: 0;
    flex-direction: row-reverse;

    &:hover .AvatarItem {
      margin-right: 0;
      margin-left: 3px;
    }

    .AvatarItem-more {
      background: ${get('colors.gray.3')(theme)};

      &::after {
        background: ${get('colors.gray.1')(theme)};
        border-radius: ${props => getBorderRadius(props)};
      }
    }

    .AvatarItem {
      margin-right: 0;
      margin-left: -11px;
      box-shadow: 0 0 0 1px ${get('colors.white')};
    }
  `
}

const transformChildren = children => {
  return React.Children.map(children, (child, index) => {
    return (
      <>
        {React.cloneElement(child, {className: 'AvatarItem'})}
      </>
    )
  })
}

const AvatarStackWrapper = styled.span`
  display: inline-block;
  position: relative;
  min-width: ${props => (props.count === 1 ? '20px' : props.count === 2 ? '30px' : '38px')};
  height: 20px;
  ${COMMON}
`

const AvatarStackBody = styled.span`
  display: flex;
  position: absolute;
  background: white;

  &:hover {
    .AvatarItem {
      margin-right: 3px;
    }

    .AvatarItem:nth-child(n + 4) {
      display: flex;
      opacity: 1;
    }

    .AvatarItem-more {
      display: none !important;
    }
  }

  .AvatarItem {
    position: relative;
    z-index: 2;
    display: flex;
    width: 20px;
    height: 20px;
    box-sizing: content-box;
    margin-right: -11px;
    background-color: ${get('colors.white')};
    box-shadow: 0 0 0 1px ${get('colors.white')};
    border-radius: ${props => getBorderRadius(props)};
    transition: margin 0.1s ease-in-out;

    &:first-child {
      z-index: 3;
    }

    &:last-child {
      z-index: 1;
      border-right: 0;
    }

    img {
      border-radius: ${props => getBorderRadius(props)};
      width: inherit;
    }

    // Account for 4+ avatars
    &:nth-child(n + 4) {
      display: none;
      opacity: 0;
    }
  }

  .AvatarItem-more {
    z-index: 1;
    margin-right: 0;
    background: ${get('colors.gray.1')};

    &::before,
    &::after {
      position: absolute;
      display: block;
      height: 20px;
      content: '';
      border-radius: ${props => getBorderRadius(props)};
      box-shadow: 0 0 0 1px ${get('colors.white')};
    }

    &::before {
      width: 17px;
      background: ${get('colors.gray.2')};
    }

    &::after {
      width: 14px;
      background: ${get('colors.gray.3')};
    }
  }
  ${props => (props.alignRight ? alignRightStyles(props.theme) : '')}
`
const AvatarStack = ({children = [], alignRight, square, ...rest}) => {
  const count = children.length
  return (
    <AvatarStackWrapper count={count} className={count == 2 ?  'AvatarStack--two' : count > 2 ? 'AvatarStack--three-plus' : ''} {...rest}>
      <AvatarStackBody alignRight={alignRight} square={square} className="AvatarStackBody">
        {transformChildren(children)}
      </AvatarStackBody>
    </AvatarStackWrapper>
  )
}

AvatarStack.defaultProps = {
  theme,
  square: false
}

AvatarStack.propTypes = {
  ...COMMON.propTypes,
  alignRight: PropTypes.bool
}
export default AvatarStack
