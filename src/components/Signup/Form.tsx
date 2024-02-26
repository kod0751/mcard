import { css } from '@emotion/react'
import FixedBottomButton from '@shared/FixedBottomButton'
import Flex from '@shared/Flex'
import TextField from '@shared/TextField'
import Spacing from '../shared/Spacing'

export default function Form() {
  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField label="이메일" placeholder="1234@gamile.com" />
      <Spacing size={16} />
      <TextField label="패스워드" type="password" />
      <Spacing size={16} />
      <TextField label="패스워드 재확인" type="password" />
      <Spacing size={16} />
      <TextField label="이름" placeholder="1234" />

      <FixedBottomButton label="회원가입" disabled={true} onClick={() => {}} />
    </Flex>
  )
}

const formContainerStyles = css`
  padding: 24px;
`
