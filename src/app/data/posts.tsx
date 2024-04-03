// app/index.page.tsx

import styles from './Home.module.css'; // Adjust the path if necessary

const posts = [
  {
    id: 1,
    title: 'Hello Wor...I Mean Everyone!',
    description: `This is me, a Computer Science student proficient in Java, Python, C++, and NextJS, deeply committed to mastering the intricacies of embedded systems and web development. I'm driven by a fervent passion for crafting innovative solutions that seamlessly blend the digital and physical domains, leveraging my expertise to engineer projects that redefine technological boundaries and elevate human interaction with our ever-evolving world.`,
    imageUrl: '/images/memeable.jpg', // Ensure the image is placed in the public/images directory
  },
  {
    id: 2,
    title: 'Purpose - OJT/Practicum',
    description: `I am honored to hold the position of intern computer scientist at Studio Pinya, a prestigious comic publishing company. In this role, I spearhead the development and maintenance of the back-end infrastructure, leveraging my expertise in MongoDB and Prisma to design and implement efficient data management solutions. My responsibilities extend to ensuring the reliability and scalability of our systems, empowering our team to focus on crafting captivating stories while I handle the technological backbone that supports their creativity`,
    imageUrl: '/images/ojt.jpg',
  },
  {
    id: 3,
    title: 'Partner Industry -Studio Pinya',
    description: ` At Studio Pinya, despite the pure focus on art, there exists an unwavering commitment to innovation and the integration of cutting-edge technology to propel our business into the future. Recognizing the transformative power of computer technology and artificial intelligence, Studio Pinya is dedicated to leveraging these tools to enhance every aspect of our operations, from content creation to audience engagement. As a forward-thinking comic publishing company, we strive to harness the potential of AI algorithms to analyze market trends, personalize reader experiences, and streamline production workflows. With a vision to revolutionize storytelling in the digital age, Studio Pinya embraces the intersection of creativity and technology, pioneering new frontiers in the world of comics through our relentless pursuit of innovation.`,
    imageUrl: '/images/pinyaaa.jpg',
  },
  {
    id: 4,
    title: 'Saint Columban College',
    description: `Known to be one of the most leading institutions in Pagadian City, Saint Columban College, in its pursuit of academic excellence and character formation, has taken on the spotlight of producing globally-competitive graduates since its founding. As an institution since 1957, SCC offers the complete educational package from kindergarten to graduate school. Withstanding every challenge and adversities for 64 years and counting; SCC became not just an institution but a home to many SCCians. `,
    imageUrl: '/images/sicolumban.jpg',
  },
  {
    id: 5,
    title: 'Department - Computer Science',
    description: `Embark on a comprehensive course in Advanced Computer Science Applications in SCC CCS Department. This immersive program delved deep into the symbiotic relationship between computer science and the arts, equipping me with specialized knowledge and skills tailored to the unique demands of industries like publishing and entertainment. Through hands-on projects and rigorous coursework, it hones our proficiency in cutting-edge technologies such as machine learning, data analytics, and cloud computing, gaining invaluable insights into their application within creative domains. `,
    imageUrl: '/images/ccs.jpg',
  },
];
 
export default posts;