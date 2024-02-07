import { css } from '@emotion/react'

export const typographyMap = {
  t1: css`
    font-size: 30px;
    line-height: 1.35px;
  `,
  t2: css`
    font-size: 26px;
    line-height: 1.34px;
  `,
  t3: css`
    font-size: 22px;
    line-height: 1.4px;
  `,
  t4: css`
    font-size: 20px;
    line-height: 1.45px;
  `,
  t5: css`
    font-size: 17px;
    line-height: 1.5px;
  `,
  t6: css`
    font-size: 15px;
    line-height: 1.5px;
  `,
  t7: css`
    font-size: 13px;
    line-height: 1.5px;
  `,
}

export type Typography = keyof typeof typographyMap
