interface KeyPoints1 {
    heading: string;
    description: string;
}
interface KeyPoints2 {
    heading: string;
    description: string;
}
interface Stats {
    title: string;
    count: string;
}

interface image {
    imageName: string;
    imageAlt: string;
    imageUrl: string;
}

interface About {
    heading: string;
    description?: string;
    keypoints1: KeyPoints1[]
    keypoints2: KeyPoints2[]
    stats: Stats[],
    image: image

}

const about: About = {
    heading: "We empower innovators by delivering access to the financial system",
    description: "",
    keypoints1: [
        {
            heading: "Our Vision",
            description: 'Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. ',

        },
        {
            heading: "Our Business",
            description: 'At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. ',

        },

    ],
    keypoints2: [
        {
            heading: "Our Business",
            description: 'We strongly believe there\'s always an opportunity to learn from each other outside of day-to-day work, whether it\'s company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.',

        },
        {
            heading: "The People",
            description: 'We\'re all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.',

        },

    ],
    image: {
        imageName: 'image-team-members.jpg',
        imageAlt: 'team Memebr',
        imageUrl: '/img/about'
    },
    stats: [
        {
            title: 'Team Members',
            count: '300+'
        },
        {
            title: 'Offices in the US',
            count: '3'
        },
        {
            title: 'Transactions analyzed',
            count: '10M+'
        },
    ]

}

export default about;