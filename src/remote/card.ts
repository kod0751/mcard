import { COLLECTIONS } from '@/constants'
import { Card } from '@/models/card'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  QuerySnapshot,
  startAfter,
} from 'firebase/firestore'
import { store } from './firebase'

// pageParam 지금 보이고있는 맨 마지막요소
// 전체 카드리스트 가져오기
export default async function getCards(pageParam?: QuerySnapshot<Card>) {
  const cardQuery =
    pageParam == null
      ? await query(collection(store, COLLECTIONS.CARD), limit(10))
      : await query(
          collection(store, COLLECTIONS.CARD),
          startAfter(pageParam),
          limit(10),
        )

  const cardSnapshot = await getDocs(cardQuery)

  const lastVisible = cardSnapshot.docs[cardSnapshot.docs.length - 1]

  const items = cardSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Card),
  }))

  return { items, lastVisible }
}

export async function getCard(id: string) {
  const snapshot = await getDoc(doc(store, COLLECTIONS.CARD, id))

  return {
    id,
    ...(snapshot.data() as Card),
  }
}
