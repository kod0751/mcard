import { useAlertContext } from '@/contexts/AlertContext'
import { ApplyValues } from '@/models/apply'
import { applyCard } from '@/remote/apply'
import { useMutation } from 'react-query'

interface useApplyCardMutationProps {
  onSuccess: () => void
  onError: () => void
}

export default function useApplyCardMutaion({
  onSuccess,
  onError,
}: useApplyCardMutationProps) {
  const { open } = useAlertContext()

  return useMutation((applyValues: ApplyValues) => applyCard(applyValues), {
    onSuccess: () => {
      onSuccess()
    },
    onError: () => {
      open({
        title: '카드를 신청하지 못했습니다. 나중에 다시 시도해주세요',
        onButtonClick: () => {
          onError()
        },
      })
    },
  })
}