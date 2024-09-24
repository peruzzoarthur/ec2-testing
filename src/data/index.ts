export const navItems = [
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Testimonials', link: '#testimonials' },
    { name: 'Contact', link: '#contact' },
]

export const gridItems = [
    {
        id: 1,
        title: 'Looking forward to apply my skills and collaborate with projects. ',
        description: '',
        className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
        imgClassName: 'w-full h-full',
        titleClassName: 'justify-end',
        img: '/b1.svg',
        spareImg: '',
    },
    {
        id: 2,
        title: '6+ years working with GIS technologies and data analysis.',
        description: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
        imgClassName: '',
        titleClassName: 'justify-start',
        img: '',
        spareImg: '',
    },
    {
        id: 3,
        title: 'My tech stack',
        description: 'Working hard to improve',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
        imgClassName: '',
        titleClassName: 'justify-center',
        img: '',
        spareImg: '',
    },
    {
        id: 4,
        title: 'Environmental Engineer & MSc in Environmental Sciences',
        description: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
        imgClassName: '',
        titleClassName: 'justify-start',
        img: '/grid.svg',
        spareImg: '/b4.svg',
    },

    {
        id: 5,
        title: 'Currently building a web fullstack GIS application',
        description: '',
        className: 'md:col-span-3 md:row-span-2',
        imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
        titleClassName: 'justify-center md:justify-start lg:justify-center',
        img: '/b5.svg',
        spareImg: '/grid.svg',
    },
    {
        id: 6,
        title: 'Do you want to start a project together?',
        description: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
        imgClassName: '',
        titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
        img: '',
        spareImg: '',
    },
]

export const projects = [
    {
        id: 1,
        title: 'GIS Web Software',
        des: 'Sketch for my future GIS software using PostGIS, React and NestJS.',
        img: '/gis.png',
        iconLists: [
            '/re.svg',
            '/nest.svg',
            '/tail.svg',
            '/ts.svg',
            '/postgres.svg',
            '/prisma.svg',
        ],
        link: 'https://gis.up.railway.app/gis',
    },
    {
        id: 2,
        title: 'Cold Cup Generator',
        des: 'Simplify tennis and padel tournament management with Cold Cup Generator.',
        img: '/cold-cup.png',
        iconLists: [
            '/re.svg',
            '/nest.svg',
            '/tail.svg',
            '/ts.svg',
            '/postgres.svg',
            '/prisma.svg',
        ],
        link: 'https://coldcupgenerator.up.railway.app/',
    },
    {
        id: 3,
        title: 'MyGym App',
        des: "A simple full stack gym manager I'm building for personal usage and possible future product.",
        img: '/gym.png',
        iconLists: [
            '/re.svg',
            '/nest.svg',
            '/tail.svg',
            '/ts.svg',
            '/postgres.svg',
            '/prisma.svg',
        ],
        link: 'https://coldgym.up.railway.app/',
    },
    // {
    //     id: 4,
    //     title: 'Animated Apple Iphone 3D Website',
    //     des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    //     img: '/p4.svg',
    //     iconLists: [
    //         '/next.svg',
    //         '/tail.svg',
    //         '/ts.svg',
    //         '/three.svg',
    //         '/gsap.svg',
    //     ],
    //     link: '/ui.apple.com',
    // },
]

// export const testimonials = [
//     {
//         quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: 'Michael Johnson',
//         title: 'Director of AlphaStream Technologies',
//     },
//     {
//         quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: 'Michael Johnson',
//         title: 'Director of AlphaStream Technologies',
//     },
//     {
//         quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: 'Michael Johnson',
//         title: 'Director of AlphaStream Technologies',
//     },
//     {
//         quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: 'Michael Johnson',
//         title: 'Director of AlphaStream Technologies',
//     },
//     {
//         quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: 'Michael Johnson',
//         title: 'Director of AlphaStream Technologies',
//     },
// ]

export const companies = [
    {
        id: 1,
        name: 'cloudinary',
        img: '/cloud.svg',
        nameImg: '/cloudName.svg',
    },
    {
        id: 2,
        name: 'appwrite',
        img: '/app.svg',
        nameImg: '/appName.svg',
    },
    {
        id: 3,
        name: 'HOSTINGER',
        img: '/host.svg',
        nameImg: '/hostName.svg',
    },
    {
        id: 4,
        name: 'stream',
        img: '/s.svg',
        nameImg: '/streamName.svg',
    },
    {
        id: 5,
        name: 'docker.',
        img: '/dock.svg',
        nameImg: '/dockerName.svg',
    },
]

export const workExperience = [
    {
        id: 1,
        title: 'Frontend Engineer Intern',
        desc: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
        className: 'md:col-span-2',
        thumbnail: '/exp1.svg',
    },
    {
        id: 2,
        title: 'Mobile App Dev - JSM Tech',
        desc: 'Designed and developed mobile app for both iOS & Android platforms using React Native.',
        className: 'md:col-span-2', // change to md:col-span-2
        thumbnail: '/exp2.svg',
    },
    {
        id: 3,
        title: 'Freelance App Dev Project',
        desc: 'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
        className: 'md:col-span-2', // change to md:col-span-2
        thumbnail: '/exp3.svg',
    },
    {
        id: 4,
        title: 'Lead Frontend Developer',
        desc: 'Developed and maintained user-facing features using modern frontend technologies.',
        className: 'md:col-span-2',
        thumbnail: '/exp4.svg',
    },
]

export const socialMedia = [
    {
        id: 1,
        img: '/git.svg',
    },
    {
        id: 2,
        img: '/twit.svg',
    },
    {
        id: 3,
        img: '/link.svg',
    },
]
