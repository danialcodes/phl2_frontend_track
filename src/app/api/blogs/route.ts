import { NextResponse } from "next/server"
export const blogs = [
      {
        "id": "1",
        "title": "The Rise of Quantum Computing",
        "description": "Dive into the fascinating world of quantum computing, where traditional binary bits make way for qubits, unlocking unprecedented computational power. Explore the potential applications, challenges, and the race among tech giants to achieve quantum supremacy.",
        "publish_date": "2025-03-01",
        "author_name": "Mezbaul Abedin Persian",
        "blog_image": "https://www.insights.onegiantleap.com/content/images/2023/10/Content-Hub-Blog---The-rise-of-quantum-computing.png",
        "total_likes": "1200"
      },
      {
        "id": "2",
        "title": "Augmented Reality: Bridging the Digital and Physical Worlds",
        "description": "Discover the transformative impact of augmented reality (AR) on various industries, from gaming and education to healthcare and manufacturing. Uncover the latest AR technologies, groundbreaking applications, and the future possibilities of this immersive tech.",
        "publish_date": "2025-03-02",
        "author_name": "Mir Hussain",
        "blog_image": "https://media.licdn.com/dms/image/D4D12AQHvTniQX6OVlQ/article-cover_image-shrink_720_1280/0/1670407089131?e=2147483647&v=beta&t=p_20uM0MxufGmxjzczZz4HxCp9BbhLADoQmsWR4KD1I",
        "total_likes": "950"
      },
      {
        "id": "3",
        "title": "The Blockchain Revolution: Beyond Cryptocurrencies",
        "description": "Explore the underlying technology of cryptocurrencies – blockchain – and its potential to revolutionize industries beyond finance. Delve into smart contracts, decentralized applications (DApps), and the growing adoption of blockchain in various sectors.",
        "publish_date": "2025-03-03",
        "author_name": "Fahim Ahammed Firoz",
        "blog_image": "https://media.licdn.com/dms/image/D5612AQGeP6XjXfJCVA/article-cover_image-shrink_720_1280/0/1697003227988?e=2147483647&v=beta&t=_uW0A4JGrQK-AAT171YP-jMwxxRLWcDBM4rAZsHJfhI",
        "total_likes": "800"
      },
      {
        "id": "4",
        "title": "5G and the Future of Connectivity",
        "description": "Uncover the promises and possibilities that 5G technology brings to the world. From lightning-fast internet speeds to enabling the Internet of Things (IoT), this blog explores the impact of 5G on communication, entertainment, and the connected future.",
        "publish_date": "2025-03-04",
        "author_name": "Mizanur Rahman",
        "blog_image": "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/10/23/67197.jpg",
        "total_likes": "1100"
      },
      {
        "id": "5",
        "title": "Artificial Intelligence: Shaping Tomorrow's World",
        "description": "Dive deep into the realm of artificial intelligence (AI) and its transformative influence on industries, society, and our daily lives. Explore machine learning, natural language processing, and the ethical considerations surrounding AI development.",
        "publish_date": "2025-03-05",
        "author_name": "Samin Israr Ravi",
        "blog_image": "https://cdn.bulbapp.io/frontend/images/c503fc5c-bebd-4985-8400-3b5b3259405e/1",
        "total_likes": "1350"
      },
      {
        "id": "6",
        "title": "Cybersecurity in the Digital Age",
        "description": "Navigate the evolving landscape of cybersecurity and the critical role it plays in safeguarding digital assets. From advanced threat detection to ethical hacking, this blog examines the strategies and technologies shaping the future of online security.",
        "publish_date": "2025-03-06",
        "author_name": "Mehedi Imun Anik",
        "blog_image": "https://startnearshoring.com/wp-content/uploads/2023/07/The_Growing_Importance_of_Cybersecurity.jpg",
        "total_likes": "950"
      },
      {
        "id": "129d",
        "$ACTION_ID_7f88b308d2174f77a7b33d8ad83e49a0b254e51ebe": "",
        "title": "gerger",
        "author_name": "thgrsthg",
        "publish_date": "2025-02-05",
        "total_likes": "3342",
        "blog_image": "https://sex.com",
        "description": "gsergertg"
      },
      {
        "id": "a997",
        "$ACTION_ID_7f88b308d2174f77a7b33d8ad83e49a0b254e51ebe": "",
        "title": "hrfgdhfdh",
        "author_name": "htrhtrh",
        "publish_date": "",
        "total_likes": "34252345",
        "blog_image": "https://sex.com",
        "description": "2345t3252"
      }
    ]
export const GET = async () => {
  return NextResponse.json(blogs)
}

export const POST = async (req: Request) => {
    const data = await req.json()
    blogs.push({ ...data, id: String(data.length + 1) })

    
  return new NextResponse(JSON.stringify(data), {
    status: 201,
    headers:{
        "Content-Type":"application/json"
    }
  })
}