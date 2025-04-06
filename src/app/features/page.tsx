'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

type Plan = {
    name: string
    id: string
    price: string
    description: string
    features: string[]
    recommended?: boolean
}

const plans: {
    monthly: Plan[]
    yearly: Plan[]
} = {
    monthly: [
        {
            name: 'Standard',
            id: 'standard',
            price: '$19',
            description: 'All essential features to get started.',
            features: ['10 projects', '5,000 subscribers', 'Basic analytics', 'Email support'],
        },
        {
            name: 'Premium',
            id: 'premium',
            price: '$49',
            recommended: true,
            description: 'Advanced features for growing teams.',
            features: ['Unlimited projects', '20,000 subscribers', 'Advanced analytics', 'Priority support', 'Team collaboration'],
        },
        {
            name: 'Enterprise',
            id: 'enterprise',
            price: '$99',
            description: 'Custom solutions and dedicated support.',
            features: ['Custom integrations', 'Unlimited subscribers', 'Dedicated account manager', '24/7 Support', 'Security audit reports'],
        },
    ],
    yearly: [
        {
            name: 'Standard',
            id: 'standard',
            price: '$199',
            description: 'All essential features to get started (billed yearly).',
            features: ['10 projects', '5,000 subscribers', 'Basic analytics', 'Email support'],
        },
        {
            name: 'Premium',
            id: 'premium',
            price: '$499',
            recommended: true,
            description: 'Advanced features for growing teams (billed yearly).',
            features: ['Unlimited projects', '20,000 subscribers', 'Advanced analytics', 'Priority support', 'Team collaboration'],
        },
        {
            name: 'Enterprise',
            id: 'enterprise',
            price: '$999',
            description: 'Custom solutions and dedicated support (billed yearly).',
            features: ['Custom integrations', 'Unlimited subscribers', 'Dedicated account manager', '24/7 Support', 'Security audit reports'],
        },
    ],
}

export default function PricingSection() {
    const [isYearly, setIsYearly] = useState(false)
    const pricing = isYearly ? plans.yearly : plans.monthly
    const router = useRouter()

    const handleSelectPlan = (plan: Plan) => {
        const billingMode = isYearly ? 'yearly' : 'monthly'
        const query = new URLSearchParams({
            plan: plan.id,
            billing: billingMode,
        }).toString()

        router.push(`/order-summary?${query}`)
    }

    return (
        <section className="bg-white dark:bg-background py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                    Pricing Plans
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Choose a plan that fits your needs. Switch between monthly and yearly billing.
                </p>

                <div className="mt-6 flex justify-center">
                    <div className="flex bg-gray-100 dark:bg-gray-800 rounded-full p-1">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${!isYearly
                                    ? 'bg-orange-500 text-white'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${isYearly
                                    ? 'bg-orange-500 text-white'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
                                }`}
                        >
                            Yearly <span className="text-xs ml-1 opacity-80">(Save 60%)</span>
                        </button>
                    </div>
                </div>


            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {pricing.map((plan) => (
                    <div
                        key={plan.id}
                        className={`relative p-8 border rounded-2xl shadow-sm flex flex-col transition bg-white dark:bg-muted ${plan.recommended
                            ? 'border-orange-500 shadow-md'
                            : 'border-gray-200 dark:border-gray-700'
                            }`}
                    >
                        {plan.recommended && (
                            <Badge className="absolute top-4 right-4 bg-orange-500 text-white">Recommended</Badge>
                        )}
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
                        <p className="mt-2 text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</p>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{plan.description}</p>
                        <ul className="mt-6 space-y-3 text-sm text-gray-800 dark:text-gray-200">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-x-2">
                                    <CheckIcon className="h-5 w-5 text-orange-500" /> {feature}
                                </li>
                            ))}
                        </ul>
                        <Button
                            onClick={() => handleSelectPlan(plan)}
                            variant={plan.recommended ? 'default' : 'outline'}
                            className={`mt-6 w-full ${plan.recommended ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/10'
                                }`}
                        >
                            Get Started
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    )
}
