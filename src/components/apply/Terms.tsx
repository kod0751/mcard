import { termslist } from '@/constants/apply'
import { useCallback, useState, MouseEvent } from 'react'
import Agreement from '../shared/Agreement'
import FixedBottomButton from '../shared/FixedBottomButton'

export default function Terms({
  onNext,
}: {
  onNext: (terms: string[]) => void
}) {
  const [termsAgreemnets, setTermsAgreements] = useState(() => {
    return termslist.reduce<Record<string, boolean>>(
      (prev, term) => ({
        ...prev,
        [term.id]: false,
      }),
      {},
    )
  })

  const handleAllAgreement = useCallback(
    (_: MouseEvent<HTMLElement>, checked: boolean) => {
      setTermsAgreements((prevTerms) => {
        // 01,02
        return Object.keys(prevTerms).reduce(
          (prev, key) => ({
            ...prev,
            [key]: checked,
          }),
          {},
        )
      })
    },
    [],
  )

  const allListSuccess = Object.values(termsAgreemnets).every(
    (success) => success,
  )

  return (
    <div>
      <Agreement>
        <Agreement.Title checked={allListSuccess} onChange={handleAllAgreement}>
          약관에 모두 동의
        </Agreement.Title>
        {termslist.map(({ id, title, link }) => (
          <Agreement.Description
            key={id}
            link={link}
            checked={termsAgreemnets[id]}
            onChange={(_, checked) => {
              setTermsAgreements((prevTerms) => ({
                ...prevTerms,
                [id]: checked,
              }))
            }}
          >
            {title}
          </Agreement.Description>
        ))}
      </Agreement>
      <FixedBottomButton
        label="약관동의"
        disabled={allListSuccess === false}
        onClick={() => {
          onNext(Object.keys(termsAgreemnets))
        }}
      />
    </div>
  )
}
