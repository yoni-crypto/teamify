import { Suspense } from 'react'
import OrderSummaryContent from '@/components/OrderSummaryContent'

export default function OrderSummaryPage() {
  return (
    <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
      <OrderSummaryContent />
    </Suspense>
  )
}
