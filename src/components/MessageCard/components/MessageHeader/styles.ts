import styled from 'styled-components'
import { themes } from 'theme-pallete'

export const HeaderBoxStyle = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const ProfileBoxStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const ProfileImageStyle = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  object-fit: cover;
`

export const ProfileNameStyle = styled.strong`
  font-family: 'RubikBold';
  font-size: 16px;
  line-height: 26px;
  color: ${themes.neutral.darkBlue};
`

export const ProfilePostedAtStyle = styled.span`
  font-family: 'RubikRegular';
  font-size: 16px;
  line-height: 26px;
  color: ${themes.neutral.grayishBlue};
`
