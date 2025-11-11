// ==============================
// Facility Configuration Types & Data
// ==============================

export interface FacilityConfiguration {
  id: string
  name: string
  capacity: number
  squareFeet: number
  layout: string
  features: string[]
  perfectFor: string[]
  description: string
  image?: string
}

export const facilityConfigurations: FacilityConfiguration[] = [
  {
    id: "computer-training",
    name: "Computer Training Room Layout",
    capacity: 24,
    squareFeet: 800,
    layout: "Individual workstations with clear view to front screen",
    features: [
      "Individual student computers",
      "Projector and screen",
      "Whiteboard",
      "High-speed internet",
      "Flexible configuration",
    ],
    perfectFor: [
      "Technical training",
      "Microsoft Office courses",
      "Excel and data workshops",
      "Software-based learning",
      "Hands-on workshops",
    ],
    description:
      "Set up with individual student computers and a clear view of the front screen, this layout is ideal for hands-on workshops and software-based learning. Participants can follow along on their own computers while receiving expert instruction.",
    image: "/images/facility/computer-training.jpg", // ✅ nên đặt trong thư mục /public/images/facility
  },
  {
    id: "collaborative-meeting",
    name: "Professional Skills / Collaborative Meeting Room Layout",
    capacity: 24,
    squareFeet: 800,
    layout: "Open, flexible arrangement with tables for collaboration",
    features: [
      "Flexible table arrangements",
      "Collaborative workspace",
      "Projector and screen",
      "Whiteboard",
      "High-speed internet",
    ],
    perfectFor: [
      "Leadership development",
      "Communication skills",
      "Team-building sessions",
      "Planning meetings",
      "Professional development",
    ],
    description:
      "Designed as a flexible, professional meeting space that encourages discussion and interaction. Tables are arranged for easy collaboration and strong group dynamics, perfect for creating an engaging learning environment.",
    image: "/images/facility/collaborative-meeting.png",
  },
  {
    id: "boardroom-conference",
    name: "Conference Room / Boardroom: U-Shape Layout",
    capacity: 24,
    squareFeet: 800,
    layout: "Formal U-shape boardroom configuration",
    features: [
      "U-shape table arrangement",
      "Excellent visibility for all participants",
      "Projector and screen",
      "Whiteboard",
      "High-speed internet",
    ],
    perfectFor: [
      "Executive meetings",
      "Strategic planning sessions",
      "Client presentations",
      "Business meetings",
      "Board discussions",
    ],
    description:
      "This formal layout creates a professional boardroom environment that provides an excellent space for meetings, presentations, and face-to-face dialogue, ensuring visibility and engagement for all participants.",
    image: "/images/facility/boardroom-conference.jpg",
  },
]

// ==============================
// Facility Info Summary
// ==============================

export const facilityInfo = {
  name: "Our Professional Learning Hub in Ottawa",
  tagline:
    "As part of our Joint Venture, Thinking School Canada utilizes the bright, modern facility located in the heart of downtown Ottawa.",
  address: "130 Albert Street, Downtown Ottawa",
  description:
    "Ensuring a high-quality, stress-free experience for all our Canadian programs with professional meeting and training spaces.",
  mainRoom: {
    size: "800+ sq ft",
    capacity: "Up to 24 participants",
    features: "Fully furnished, versatile spaces with flexible layouts",
  },
  amenities: [
    "Fully equipped for hybrid or in-person sessions",
    "Projector and screen",
    "Whiteboard",
    "High-speed internet",
    "Student computers available",
    "Complimentary coffee, tea, and filtered water",
    "Optional catering available",
    "Wheelchair accessible",
    "Convenient location near Parliament Station",
    "Friendly onsite support",
  ],
  highlights: [
    "Prime Location & Support: Conveniently located at 130 Albert St. in downtown Ottawa, just steps from Parliament Station",
    "Wheelchair Accessible: Fully accessible facilities with onsite support",
    "Professional Atmosphere: Modern, fully integrated training room that removes meeting logistics stress",
    "Ideal For: Training, strategic planning days, or client presentations",
  ],
}
