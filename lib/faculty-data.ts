export interface Faculty {
  id: string
  name: string
  level: string
  degree?: string
  title: string
  company?: string
  experience: string
  expertise: string[]
  image?: string
  languages?: string[]
  bio?: string
}

export const facultyData: Faculty[] = [
  // Grand Master (Level 1)
  {
    id: "vu-the-dung",
    name: "Dr. Vũ Thế Dũng",
    level: "Grand Master",
    degree: "PhD",
    title: "CEO",
    company: "Thinking School",
    experience:
      "20–25 years professional experience, 15–20 years management & corporate training, 10–15 years international exposure",
    expertise: ["Leadership Development", "Strategic Planning", "Innovation Management", "Corporate Training"],
    languages: ["Vietnamese", "English"],
    bio: "Distinguished professional with extensive academic and corporate experience, providing exceptional thought leadership and guidance.",
  },
  {
    id: "pham-quang-hung",
    name: "Master Phạm Quang Hùng",
    level: "Grand Master",
    degree: "Master",
    title: "Vice Chairman of Board of Directors",
    company: "Topenpland Company, Hung Thinh Corp",
    experience:
      "20–25 years professional experience, 15–20 years management & corporate training, 10–15 years international exposure",
    expertise: ["Real Estate Development", "Corporate Management", "Business Strategy", "Executive Leadership"],
    languages: ["Vietnamese", "English"],
    bio: "Senior business leader with deep expertise in corporate management and strategic development.",
  },

  // Master (Level 2)
  {
    id: "ta-hung-anh",
    name: "Dr. Tạ Hùng Anh",
    level: "Master",
    degree: "PhD",
    title: "Academic Director",
    company: "Thinking School",
    experience:
      "15–18 years professional experience, 8–10 years management & corporate training, 6–8 years international experience",
    expertise: ["Curriculum Development", "Academic Excellence", "Educational Innovation", "Assessment & Evaluation"],
    languages: ["Vietnamese", "English"],
    bio: "Academic leader dedicated to developing world-class educational methodologies and student success.",
  },
  {
    id: "hoang-kim-duong",
    name: "Master Hoàng Kim Dương",
    level: "Master",
    degree: "Master",
    title: "Deputy Director",
    company: "Thinking School",
    experience:
      "15–18 years professional experience, 8–10 years management & corporate training, 6–8 years international experience",
    expertise: ["Program Management", "Organizational Development", "Team Leadership", "Process Optimization"],
    languages: ["Vietnamese", "English"],
    bio: "Operations leader with proven expertise in program management and organizational excellence.",
  },
  {
    id: "cao-tuan-minh",
    name: "Master Cao Tuấn Minh",
    level: "Master",
    degree: "Master",
    title: "Senior Manager",
    company: "Salesforce Recruitment & Development",
    experience:
      "15–18 years professional experience, 8–10 years management & corporate training, 6–8 years international experience",
    expertise: ["Talent Development", "HR Strategy", "Sales Training", "Performance Management"],
    languages: ["Vietnamese", "English"],
    bio: "HR and talent development specialist with expertise in building high-performance teams.",
  },
  {
    id: "tran-quang-tuan",
    name: "Master Trần Quang Tuấn",
    level: "Master",
    degree: "Master",
    title: "Learning & Development Manager",
    company: "People & Culture Division",
    experience:
      "15–18 years professional experience, 8–10 years management & corporate training, 6–8 years international experience",
    expertise: ["Learning & Development", "Corporate Training", "Change Management", "Employee Engagement"],
    languages: ["Vietnamese", "English"],
    bio: "L&D specialist focused on transforming organizational learning and employee development.",
  },

  // Senior Trainer (Level 3)
  {
    id: "huynh-quoc-viet",
    name: "Master Huỳnh Quốc Việt",
    level: "Senior Trainer",
    degree: "Master",
    title: "IT Director",
    company: "Thinking School",
    experience:
      "10–15 years work experience, 6–8 years management, 4–7 years corporate training, 3–5 years international",
    expertise: ["IT Management", "Technical Training", "Digital Transformation", "Software Development"],
    languages: ["Vietnamese", "English"],
    bio: "Technology leader delivering high-quality technical training and digital innovation.",
  },
]

export const facultyLevels = [
  {
    title: "Grand Master (Level 1)",
    description:
      "Distinguished professionals holding PhD or Master's degree with 20–25 years of extensive professional experience, 15–20 years of management and corporate training expertise, and 10–15 years of international exposure. Fully capable of teaching in English and providing exceptional thought leadership.",
    color: "from-yellow-600 to-yellow-500",
  },
  {
    title: "Master (Level 2)",
    description:
      "Highly qualified experts with PhD or Master's degree and 15–18 years of professional experience. Possess 8–10 years of management experience, corporate training expertise, and 6–8 years of international experience. Deliver advanced knowledge and practical insights in English-language instruction.",
    color: "from-slate-600 to-slate-500",
  },
  {
    title: "Senior Trainer (Level 3)",
    description:
      "Qualified professionals holding a Master's degree with 10–15 years of work experience, including 6–8 years of management and 4–7 years of corporate training experience, plus 3–5 years in international environments. Provide high-quality English-language training combining practical expertise with proven instructional methods.",
    color: "from-stone-600 to-stone-500",
  },
]
