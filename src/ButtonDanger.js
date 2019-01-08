import React from 'react'
import styled from 'styled-components'
import {darken, lighten} from 'polished'
import Button from './Button'
import {get} from './constants'
import baseTheme, {colors} from './theme'
import {themeGet} from 'styled-system'


const ButtonDanger = styled(Button)`
  color: ${get('colors.red.6')}
  background-color: ${get('colors.gray.0')}
  background-image: linear-gradient(-180deg, ${get('colors.gray.0')} 0%, ${get('colors.button.bg2')} 90%);

  &:hover {
    color: ${get('colors.white')};
    background-color: ${get('colors.red.6')};
    background-image: linear-gradient(-180deg, ${get('colors.button.dangerBgImage')} 0%, ${get('colors.red.6')} 90%);
    border-color: ${get('colors.blackfade50')};
  }

  &:focus {
    box-shadow: ${get('colors.button.dangerFocusShadow')} 0px 0px 0px 0.2em;
  }

  &:active {
    color: ${get('colors.white')};
    background-color: ${get('colors.button.dangerActiveBg')};
    background-image: none;
    box-shadow: ${get('colors.blackfade15')} 0px 0.15em 0.3em inset;
    border-color: ${get('colors.blackfade50')};
  }

  &:selected {
    color: ${get('colors.white')}
    background-color: ${get('colors.button.dangerActiveBg')};
    background-image: none;
    box-shadow: ${get('colors.blackfade15')} 0px 0.15em 0.3em inset;
    border-color: ${get('colors.blackfade50')};
  }
`

export default ButtonDanger
