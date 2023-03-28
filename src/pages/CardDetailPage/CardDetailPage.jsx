import { useParams } from  "react-router-dom"

export default function CardDetailPage() {
  const { cardId } = useParams();
  return (
    <p>Card Detail Page</p>
  )
}