import usePollApplyStatus from '@/components/apply/hooks/usePollApplyStatus'
import useUser from '@/hooks/auth/useUser'
import { APPLY_STATUS } from '@/models/apply'
import { updateApplyCard } from '@/remote/apply'
import Apply from '@components/apply'
import useApplyCardMutaion from '@components/apply/hooks/useApplyCardMutaion'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ApplyPage() {
  const navigate = useNavigate()

  const [readyToPoll, setReadyToPoll] = useState(false)

  const user = useUser()
  const { id } = useParams() as { id: string }

  usePollApplyStatus({
    onSuccess: async () => {
      await updateApplyCard({
        userId: user?.uid as string,
        cardId: id,
        applyValues: {
          status: APPLY_STATUS.COMPLETE,
        },
      })
      navigate('/apply/done?success=true', {
        replace: true,
      })
    },
    onError: async () => {
      await updateApplyCard({
        userId: user?.uid as string,
        cardId: id,
        applyValues: {
          status: APPLY_STATUS.REJECT,
        },
      })
      navigate('/apply/done?success=false', {
        replace: true,
      })
    },
    enabled: readyToPoll,
  })

  const { mutate, isLoading: 카드신청중 } = useApplyCardMutaion({
    onSuccess: () => {
      setReadyToPoll(true)
    },
    onError: () => {
      //실패했을떄 => 폴링시작
      window.history.back()
    },
  })

  if (readyToPoll || 카드신청중) {
    return <div>Loading...</div>
  }

  return <Apply onSubmit={mutate} />
}
