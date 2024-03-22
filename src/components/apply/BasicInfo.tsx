import {
  creditScoreOption,
  payDateOption,
  salaryOption,
} from '@/constants/apply'
import { ApplyValues } from '@/models/apply'
import { ChangeEvent, useCallback, useState } from 'react'
import FixedBottomButton from '../shared/FixedBottomButton'
import Select from '../shared/Select'

type InfoValues = Pick<ApplyValues, 'salary' | 'creditScore' | 'payDate'>

export default function BasicInfo({
  onNext,
}: {
  onNext: (infoValues: InfoValues) => void
}) {
  const [infoValues, setInfoValues] = useState({
    salary: '',
    creditScore: '',
    payDate: '',
  })

  const handleInfoChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setInfoValues((preValues) => ({
      ...preValues,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const allInfoSelect = Object.values(infoValues).every((value) => value)

  return (
    <div>
      <Select
        name="salary"
        label="연소득"
        options={salaryOption}
        placeholder={salaryOption[0].label}
        value={infoValues.salary}
        onChange={handleInfoChange}
      />
      <Select
        name="creditScore"
        label="신용점수"
        options={creditScoreOption}
        placeholder={creditScoreOption[0].label}
        value={infoValues.creditScore}
        onChange={handleInfoChange}
      />
      <Select
        name="payDate"
        label="결제일"
        options={payDateOption}
        placeholder={payDateOption[0].label}
        value={infoValues.payDate}
        onChange={handleInfoChange}
      />

      <FixedBottomButton
        label="다음"
        onClick={() => {
          onNext(infoValues)
        }}
        disabled={allInfoSelect === false}
      />
    </div>
  )
}
