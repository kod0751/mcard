import { userAtom } from '@/atoms/user'
import { useRecoilValue } from 'recoil'

export default function useUser() {
  return useRecoilValue(userAtom)
}
