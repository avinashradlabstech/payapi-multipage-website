interface PlanPoints {
    isChecked: boolean;
    point: string;
}
interface PlanDetails {
    planName: string;
    planDescription: string;
    planCurency: string;
    planAmount: string;
    planPoints: PlanPoints[];
    buttonLabel: string;
}

interface Pricing {
    heading: string;
    description?: string;
    planDetails: PlanDetails[]

}

const pricing: Pricing = {
    heading: "Pricing",
    description: "",
    planDetails: [
        {
            planName: "Free Plan",
            planDescription: 'Build and test using our core set of products with up to 100 API requests ',
            planCurency: '$',
            planAmount: '0.00',
            planPoints: [
                {
                    isChecked: true,
                    point: 'Transactions'

                },
                {
                    isChecked: true,
                    point: 'Auth'

                },
                {
                    isChecked: true,
                    point: 'Identity'

                },
                {
                    isChecked: false,
                    point: 'Investment'

                },
                {
                    isChecked: false,
                    point: 'Assets'

                },
                {
                    isChecked: false,
                    point: 'Liabilities'

                },
                {
                    isChecked: false,
                    point: 'Income'

                }
            ],
            buttonLabel: 'Request Access'
        },
        {
            planName: "Basic Plan",
            planDescription: 'Launch your project with unlimited requests and no contractual minimums ',
            planCurency: '$',
            planAmount: '249.00',
            planPoints: [
                {
                    isChecked: true,
                    point: 'Transactions'

                },
                {
                    isChecked: true,
                    point: 'Auth'

                },
                {
                    isChecked: true,
                    point: 'Identity'

                },
                {
                    isChecked: true,
                    point: 'Investment'

                },
                {
                    isChecked: true,
                    point: 'Assets'

                },
                {
                    isChecked: false,
                    point: 'Liabilities'

                },
                {
                    isChecked: false,
                    point: 'Income'

                }
            ],
            buttonLabel: 'Request Access'
        },
        {
            planName: "Premium Plan",
            planDescription: 'Get tailored solutions, volume pricing, and dedicated support for your team ',
            planCurency: '$',
            planAmount: '499.00',
            planPoints: [
                {
                    isChecked: true,
                    point: 'Transactions'

                },
                {
                    isChecked: true,
                    point: 'Auth'

                },
                {
                    isChecked: true,
                    point: 'Identity'

                },
                {
                    isChecked: true,
                    point: 'Investment'

                },
                {
                    isChecked: true,
                    point: 'Assets'

                },
                {
                    isChecked: true,
                    point: 'Liabilities'

                },
                {
                    isChecked: true,
                    point: 'Income'

                }
            ],
            buttonLabel: 'Request Access'
        },
    ]

}

export default pricing;