import MyInfo from '@/components/my/MyInfo'
import Button from '@/components/shared/Button'
import Spacing from '@/components/shared/Spacing'
import { auth } from '@/remote/firebase'
import useUser from '@hooks/auth/useUser'
import Flex from '@shared/Flex'
import Text from '@shared/Text'
import { signOut } from 'firebase/auth'
import { useCallback } from 'react'

export default function MyPage() {
  const user = useUser()

  const handleLogout = useCallback(() => {
    signOut(auth)
  }, [])

  return (
    <Flex direction="column" align="center">
      <Spacing size={40} />
      <MyInfo size={80} mode="upload" />

      <Spacing size={20} />
      <Text bold={true}>{user?.displayName}</Text>

      <Spacing size={20} />

      <Button onClick={handleLogout}>로그아웃</Button>
    </Flex>
  )
}
