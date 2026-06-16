import {
  FaPython,
  FaReact,
  FaLinux,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaRaspberryPi,
} from 'react-icons/fa'
import {
  SiArduino,
  SiCplusplus,
  SiC,
  SiNumpy,
  SiPandas,
  SiTailwindcss,
  SiCisco,
  SiEspressif,
} from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'
import {
  HiCpuChip,
  HiCog6Tooth,
  HiSignal,
  HiChartBar,
  HiCommandLine,
  HiWrenchScrewdriver,
} from 'react-icons/hi2'
import type { IconType } from 'react-icons'

/* =====================================================
   NAV LINKS
   ===================================================== */
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

/* =====================================================
   SOCIAL LINKS
   ===================================================== */
export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/saurabhyadav195',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/saurabhyadav86',
    icon: null as unknown as IconType, // We'll use a custom LinkedIn icon
  },
  {
    label: 'CodeWars',
    href: 'https://www.codewars.com/users/saurabhyadav195',
    icon: null as unknown as IconType,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/saurabhy___',
    icon: null as unknown as IconType,
  },
]

/* =====================================================
   EDUCATION
   ===================================================== */
export const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering (AI & ML)',
    institution: 'Lokmanya Tilak College of Engineering',
    period: '2025 – Present',
    current: true,
    topics: [
      'Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'Computer Architecture',
      'Artificial Intelligence',
      'Machine Learning Fundamentals',
      'Software Development',
      'Data Structures',
    ],
  },
  {
    id: 2,
    degree: 'Diploma in Automation and Robotics',
    field: '',
    institution: 'Shivajirao S. Jondhle Polytechnic',
    period: '2022 – 2025',
    current: false,
    topics: [
      'Internet of Things (IoT)',
      'Embedded Systems',
      'Arduino Programming',
      'ESP32 Development',
      'PLC Programming',
      'SCADA Design',
      'Industrial Automation',
      'Robotic Arm Systems',
      'Python Programming',
      '3D Printing Technologies',
    ],
  },
]

/* =====================================================
   SKILLS
   ===================================================== */
export interface Skill {
  name: string
  icon: IconType
}

export interface SkillCategory {
  title: string
  icon: IconType
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: HiCommandLine,
    skills: [
      { name: 'Python', icon: FaPython },
      { name: 'C', icon: SiC },
      { name: 'C++', icon: SiCplusplus },
      { name: 'Embedded C', icon: HiCpuChip },
      { name: 'JavaScript', icon: FaJs },
    ],
  },
  {
    title: 'AI & Data',
    icon: HiChartBar,
    skills: [
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Pandas', icon: SiPandas },
      { name: 'ML Fundamentals', icon: HiChartBar },
      { name: 'Data Analysis', icon: HiChartBar },
    ],
  },
  {
    title: 'Embedded & IoT',
    icon: HiCpuChip,
    skills: [
      { name: 'Arduino', icon: SiArduino },
      { name: 'ESP32', icon: SiEspressif },
      { name: 'Raspberry Pi', icon: FaRaspberryPi },
      { name: 'IoT Systems', icon: HiSignal },
      { name: 'Edge Computing', icon: HiCpuChip },
      { name: 'Sensor Integration', icon: HiSignal },
    ],
  },
  {
    title: 'Industrial Automation',
    icon: HiCog6Tooth,
    skills: [
      { name: 'PLC Programming', icon: HiCog6Tooth },
      { name: 'SCADA Design', icon: HiCog6Tooth },
      { name: 'Industrial Automation', icon: HiWrenchScrewdriver },
    ],
  },
  {
    title: 'Software & Tools',
    icon: HiWrenchScrewdriver,
    skills: [
      { name: 'Linux', icon: FaLinux },
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VS Code', icon: TbBrandVscode },
      { name: 'Cisco Packet Tracer', icon: SiCisco },
    ],
  },
  {
    title: 'Web Development',
    icon: FaReact,
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
    ],
  },
]

/* =====================================================
   INTERNSHIPS
   ===================================================== */
export const internships = [
  {
    id: 1,
    title: 'PLC and SCADA Software Intern',
    company: 'Wohlstand Training & Consultancy',
    period: 'June 2024 – July 2024',
    responsibilities: [
      'Developed PLC ladder logic programs.',
      'Learned industrial control system design.',
      'Built SCADA interfaces for monitoring and automation.',
      'Worked with industrial automation concepts.',
    ],
  },
  {
    id: 2,
    title: 'Cyber Smart AI Prime Internship',
    company: 'NIIT Foundation',
    period: 'April 2026',
    responsibilities: [
      'Studied AI fundamentals and applications.',
      'Learned computer networking architecture.',
      'Designed network topologies using Cisco Packet Tracer.',
      'Explored cybersecurity awareness and digital infrastructure.',
    ],
  },
]

/* =====================================================
   PROJECTS
   ===================================================== */
export const projects = [
  {
    id: 1,
    title: 'Intelligent Color Sorting Robotic Arm System',
    category: 'Robotics | Embedded Systems | Automation',
    description:
      'Designed and developed an autonomous robotic arm-based color sorting system capable of detecting, classifying, and sorting objects based on color. The system integrates an ESP32 microcontroller, Arduino-based control system, TCS3200 color sensor, infrared object detection, servo-driven robotic arm, conveyor automation, and real-time communication architecture.',
    features: [
      'Autonomous object detection',
      'Real-time color recognition',
      'Multi-axis robotic arm control',
      'Automated pick-and-place operation',
      'Dynamic menu-driven control interface',
      'Position recording and playback system',
      'Communication between multiple controllers',
      'Smooth servo motion algorithms',
    ],
    technologies: ['Arduino', 'ESP32', 'Embedded C', 'Robotics', 'Sensors', 'Automation'],
    color: '#06b6d4',
  },
  {
    id: 2,
    title: 'Umeed – Food Donation Platform',
    category: 'Web Application | Social Impact',
    description:
      'A web-based platform connecting food donors with NGOs and individuals in need. The platform helps reduce food wastage by enabling efficient donation management and distribution.',
    features: [
      'Donor registration',
      'Food availability listing',
      'Request management',
      'NGO coordination',
      'Responsive web interface',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Database Systems'],
    color: '#8b5cf6',
  },
  {
    id: 3,
    title: 'Autonomous Edge IoT System',
    category: 'Edge Computing | Cybersecurity | IoT',
    description:
      'An intelligent edge-computing platform built using Raspberry Pi for industrial sensor monitoring and cybersecurity analysis. The system combines real-time sensor data processing, local edge analytics, and honeypot-based threat detection to improve security and operational visibility in industrial environments.',
    features: [
      'Industrial sensor monitoring',
      'Edge data processing',
      'Local analytics engine',
      'Honeypot deployment',
      'Cyber threat logging',
      'Resource-efficient architecture',
    ],
    technologies: ['Raspberry Pi', 'Python', 'Linux', 'IoT', 'Edge Computing', 'Cybersecurity'],
    color: '#10b981',
  },
]

/* =====================================================
   ACHIEVEMENTS
   ===================================================== */
export const achievements = [
  {
    id: 1,
    title: 'Diploma in Automation and Robotics',
    description: 'Completed with strong proficiency in industrial automation, embedded systems, and IoT development.',
    icon: '🎓',
  },
  {
    id: 2,
    title: 'PLC and SCADA Internship',
    description: 'Successfully completed hands-on training in PLC programming and SCADA interface design.',
    icon: '🏭',
  },
  {
    id: 3,
    title: 'Cyber Smart AI Prime Internship',
    description: 'Completed comprehensive training in AI fundamentals, networking, and cybersecurity.',
    icon: '🛡️',
  },
  {
    id: 4,
    title: 'Continuous Learning in AI, Robotics & IoT',
    description: 'Actively expanding expertise through self-directed projects and research in emerging technologies.',
    icon: '🚀',
  },
]
