interface clientData {
    id: number;
    name: string;
}

interface WeWorkWithData {
    header: string;
    description: string;
    buttonTxt: string;
    clientLogo: clientData[];
}

interface Features {
    id: number;
    image: string;
    heading: string;
    description: string;
}

interface Cards {
    id: string | number;
    icon: string;
    heading: string;
    description: string;
}


interface Home {
    weWorkWith: WeWorkWithData
    features: Features[],
    cards: Cards[],

}




const home: Home = {
    weWorkWith: {
        header: "Who we work with",
        description: "Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.",
        buttonTxt: "About Us",
        clientLogo: [
            { id: 1, name: "Tesla" },
            { id: 2, name: "Microsoft" },
            { id: 3, name: "Hp" },
            { id: 4, name: "Oracle" },
            { id: 5, name: "Google" },
            { id: 6, name: "Nvidia" },
        ]
    },
    features: [
        {
            id: 1,
            image: "EasyToImplement",
            heading: "Easy to implement",
            description: "Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.",

        },
        {
            id: 2,
            image: "SimpleUi",
            heading: "Simple UI & UX",
            description: "Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. ",

        }
    ],
    cards: [
        {
            id: 1,
            icon: "PersonalFinanceIcon",
            heading: "Personal Finances",
            description: "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. ",

        },
        {
            id: 2,
            icon: "BankingCoverageIcon",
            heading: "Banking & Coverage",
            description: "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.",

        },
        {
            id: 3,
            icon: "ConsumerPaymentIcon",
            heading: "Consumer Payments",
            description: "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.",

        }
    ]
}
export default home;