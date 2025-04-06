'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'

type Plan = {
    id: string
    name: string
    price: string
    description: string
    features: string[]
    recommended?: boolean
}

const plans: { monthly: Plan[]; yearly: Plan[] } = {
    monthly: [
        {
            id: 'standard',
            name: 'Standard',
            price: '$19',
            description: 'All essential features to get started.',
            features: ['10 projects', '5,000 subscribers', 'Basic analytics', 'Email support'],
        },
        {
            id: 'premium',
            name: 'Premium',
            price: '$49',
            description: 'Advanced features for growing teams.',
            recommended: true,
            features: ['Unlimited projects', '20,000 subscribers', 'Advanced analytics', 'Priority support', 'Team collaboration'],
        },
    ],
    yearly: [
        {
            id: 'standard',
            name: 'Standard',
            price: '$199',
            description: 'All essential features to get started (billed yearly).',
            features: ['10 projects', '5,000 subscribers', 'Basic analytics', 'Email support'],
        },
        {
            id: 'premium',
            name: 'Premium',
            price: '$499',
            description: 'Advanced features for growing teams (billed yearly).',
            recommended: true,
            features: ['Unlimited projects', '20,000 subscribers', 'Advanced analytics', 'Priority support', 'Team collaboration'],
        },
    ],
}

export default function OrderSummary() {
    const params = useSearchParams()
    const defaultBilling = params.get('billing') === 'yearly'
    const [isYearly, setIsYearly] = useState(defaultBilling)

    const planId = params.get('plan') || 'standard'
    const selectedPlan = useMemo(() => {
        return plans[isYearly ? 'yearly' : 'monthly'].find((plan) => plan.id === planId)
    }, [planId, isYearly])

    useEffect(() => {
        // fallback to standard if plan not found
        if (!selectedPlan) setIsYearly(false)
    }, [selectedPlan])

    if (!selectedPlan) return <div className="text-center mt-20 text-lg">Plan not found.</div>

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-muted px-4 py-10">
            <div className="w-full max-w-2xl bg-white dark:bg-background/60 backdrop-blur-lg rounded-2xl shadow-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-2">
                    Your Order <span className="text-orange-500">Summary</span>
                </h1>

                <div className="flex justify-center items-center mb-6 gap-3">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Monthly</span>
                    <Switch checked={isYearly} onCheckedChange={setIsYearly} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Yearly</span>
                </div>

                <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <div className="text-xl font-semibold text-gray-900 dark:text-white">{selectedPlan.name}</div>
                            {selectedPlan.recommended && (
                                <Badge className="bg-orange-500 text-white">Recommended</Badge>
                            )}
                        </div>
                        <div className="text-2xl font-bold text-orange-600">{selectedPlan.price}</div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{selectedPlan.description}</p>

                    <ul className="text-sm text-gray-700 dark:text-gray-200 list-disc pl-5 space-y-1">
                        {selectedPlan.features.map((f) => (
                            <li key={f}>{f}</li>
                        ))}
                    </ul>

                    <Button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white text-md">
                        Proceed to Payment
                    </Button>
                </div>

            </div>

            <div className="flex justify-between w-full max-w-2xl text-xs text-muted-foreground mt-6 px-4">
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    )
}
