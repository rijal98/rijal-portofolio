/* =========================================================
   Muhammad Rijal Portfolio — main.js
   All content (projects, experience, certificates, skills) lives in
   the DATA object below. Edit it there; no HTML changes needed.
   ========================================================= */

const DATA = {
  email: "muhammadrijal3598@gmail.com",
  careerStart: 2020, // used to compute "years of experience"

  roles: [
    "Lecturer · Politeknik Negeri Ujung Pandang",
    "Machine Learning · Deep Learning Dev",
    "Web Development — Flask · Laravel | PHP · JavaScript",
    "Researcher",
  ],

  socials: [
    { key: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/" },
    { key: "github", label: "GitHub", url: "https://github.com/" },
    { key: "instagram", label: "Instagram", url: "https://www.instagram.com/mh.rijal" },
    { key: "medium", label: "Medium", url: "https://medium.com/@muhammadrijal98" },
    { key: "facebook", label: "Facebook", url: "https://www.facebook.com/rijal.lkks" },
  ],

  categories: [
    { id: "all", label: "All" },
    { id: "ai", label: "AI & Computer Vision" },
    { id: "web", label: "Web Applications" },
    { id: "edu", label: "Teaching" },
  ],


projects: [
  {
    cat: "ai",
    isNew: true,
    year: "2026",
    cover: "crew",
    title: "Crew Inactivity Detection — KM. Sultan Hasanuddin",
    short:
      "Real-time crew activity monitoring using YOLO11s, Raspberry Pi 5, and Hailo edge acceleration.",
    desc:
      "An AI-based monitoring system designed to detect and monitor crew activities in the engine control room of the KM. Sultan Hasanuddin training vessel. The system runs YOLO11s on a Raspberry Pi 5 with a Hailo accelerator and displays detection results through a Flask-based dashboard.",
    points: [
      "Detects three activity classes: normal, play, and sleep.",
      "Trained using a Roboflow dataset with 10 epochs and an image size of 640.",
      "Achieved an overall validation mAP50 of 0.704.",
      "Supports multiple-person detection, tracking IDs, and inactivity duration monitoring.",
      "Integrates Telegram notifications and SQLAlchemy-based alert history.",
      "Developed as part of the 2026 Applied Research program.",
    ],
    tags: [
      "YOLO11s",
      "Raspberry Pi 5",
      "Hailo",
      "Flask",
      "Telegram Bot API",
    ],
  },
  {
    cat: "ai",
    year: "2025",
    cover: "ppe",
    title: "Real-time PPE Detection with YOLOv8",
    short:
      "Real-time detection of safety helmets, safety vests, and PPE violations with model evaluation.",
    desc:
      "A computer vision system for detecting personal protective equipment (PPE) compliance using YOLOv8n. The project focuses on identifying workers, safety helmets, safety vests, and potential PPE violations, with model evaluation documented for a research manuscript.",
    points: [
      "Developed and evaluated a YOLOv8n object detection model.",
      "Uses six dataset classes: Hardhat, No Hardhat, Safety Vest, No Safety Vest, Person, and Background.",
      "Achieved a best validation mAP50 of 0.681 and an F1 score of 0.69 at a confidence threshold of 0.262.",
      "Evaluated detection performance using validation metrics.",
      "Prepared results for a journal manuscript in collaboration with fellow researchers.",
    ],
    tags: [
      "YOLOv8",
      "Python",
      "Roboflow",
      "Ultralytics",
      "Google Colab",
    ],
  },
  {
    cat: "web",
    year: "2026",
    cover: "sirita",
    title: "SIRI'TA — Thesis Title Similarity Detection",
    short:
      "A web-based system for identifying similar thesis titles using TF-IDF and cosine similarity.",
    desc:
      "A web application designed to help academic users compare thesis titles and identify potentially similar research topics. The system applies TF-IDF to represent text and cosine similarity to calculate the degree of similarity between titles, supporting preliminary academic title screening.",
    points: [
      "Accepts thesis titles as input for similarity checking.",
      "Uses TF-IDF to transform text into numerical feature vectors.",
      "Applies cosine similarity to compare title similarity scores.",
      "Displays similarity results to help users review related titles.",
      "Designed to support academic administration and research topic exploration.",
    ],
    tags: [
      "Laravel",
      "Python",
      "TF-IDF",
      "Cosine Similarity",
      "NLP",
    ],
  },
  {
    cat: "web",
    year: "2023",
    cover: "sirita",
    title: "Laboratory Equipment Monitoring System",
    short:
      "A digital system for managing laboratory equipment, inventory, asset conditions, and maintenance records.",
    desc:
      "A web-based information system designed to support laboratory equipment administration and monitoring. It centralizes equipment records, asset locations, condition information, and maintenance history to improve inventory management and support laboratory operations.",
    points: [
      "Manages laboratory equipment inventory and asset information.",
      "Records equipment conditions, locations, and availability.",
      "Supports equipment status tracking and maintenance documentation.",
      "Provides structured equipment data for monitoring and reporting.",
      "Helps laboratory staff organize asset information and maintenance activities.",
    ],
    tags: [
      "Web Development",
      "Database Management",
      "Information Systems",
      "Dashboard",
    ],
  },
  {
    cat: "web",
    year: "2023",
    cover: "img:sispend.webp",
    title: "SiSPeND Diklat COP — AMI AIPI Makassar",
    short:
      "A web-based training portal for participant registration, authentication, and announcements.",
    desc:
      "A web portal developed to support COP training activities at AMI AIPI Makassar. The application provides information about training programs and enables participants to register, log in, and access announcements published by the organizer.",
    points: [
      "Provides public pages for program information and announcements.",
      "Supports participant registration and login.",
      "Centralizes training-related information for participants.",
      "Developed to support digital administration of training activities.",
    ],
    tags: [
      "Web Development",
      "Information System",
      "Authentication",
      "Database",
    ],
  },
  {
    cat: "ai",
    isNew: true,
    year: "2024",
    cover: "ppe",
    title: "Smart Farming & IoT Monitoring",
    short:
      "An IoT-based agricultural monitoring concept for collecting environmental data and supporting smarter farm management.",
    desc:
      "A smart agriculture project exploring the integration of Internet of Things technology and digital monitoring to support agricultural activities. The system is designed to collect environmental measurements, present monitoring data through a digital interface, and provide information that can assist agricultural decision-making.",
    points: [
      "Explores sensor-based monitoring of agricultural environmental conditions.",
      "Supports the collection and visualization of sensor data.",
      "Can provide historical records for observing environmental changes.",
      "Designed for potential integration with alerts and automated device control.",
      "Aims to support data-informed farming and efficient resource management.",
    ],
    tags: [
      "IoT",
      "Smart Agriculture",
      "Python",
      "Sensor Monitoring",
      "Web Development",
    ],
  },
  {
    cat: "ai",
    isNew: true,
    year: "2026",
    cover: "ppe",
    title: "Rice Leaf Disease Detection",
    short:
      "An AI-based computer vision project for identifying rice leaf diseases from digital images.",
    desc:
      "A computer vision project exploring deep learning techniques to identify visual patterns associated with rice leaf diseases. The system is intended to analyze leaf images and present model predictions that may help users recognize potential plant health issues at an early stage.",
    points: [
      "Analyzes rice leaf images using computer vision techniques.",
      "Explores deep learning models for disease detection or classification.",
      "Presents prediction results to support preliminary plant health screening.",
      "Can be extended into a web application for easier access to detection results.",
      "Aims to explore practical AI applications in agricultural technology.",
    ],
    tags: [
      "Python",
      "Deep Learning",
      "Computer Vision",
      "Image Processing",
      "YOLO / CNN",
    ],
  },
  {
    cat: "web",
    isNew: true,
    year: "2021",
    cover: "ppe",
    title: "Digital Correspondence & Archive System",
    short:
      "A web-based application for organizing incoming and outgoing letters and managing digital archives.",
    desc:
      "An information system concept for digitizing correspondence administration and document archiving. The system is designed to centralize letter records, organize document metadata, and simplify document retrieval to support more efficient administrative workflows.",
    points: [
      "Organizes incoming and outgoing correspondence records.",
      "Supports document categorization and metadata management.",
      "Provides document search and retrieval capabilities.",
      "Can include digital file storage and correspondence status tracking.",
      "Designed to improve document organization and administrative efficiency.",
    ],
    tags: [
      "Web Development",
      "Information Systems",
      "Database",
      "Digital Archives",
    ],
  },
  {
    cat: "web",
    year: "2019",
    cover: "img:spk-padi.webp",
    title: "Decision Support System for Superior Rice Seed Selection",
    short:
      "A decision support system for ranking rice seed varieties using the Multifactor Evaluation Process (MFEP) method.",
    desc:
      "A web-based decision support system developed to assist in selecting superior rice seed varieties at the Agricultural Extension Center of Mattiro Sompe, Pinrang Regency. The system applies the Multifactor Evaluation Process (MFEP) method to calculate weighted scores and rank available alternatives.",
    points: [
      "Manages selection criteria, sub-criteria, and rice seed alternatives.",
      "Calculates weighted scores using the MFEP method.",
      "Ranks seed varieties according to their evaluation results.",
      "Supports a more structured and transparent selection process.",
    ],
    tags: [
      "Decision Support System",
      "MFEP",
      "Web Application",
      "Agriculture",
    ],
  },
  {
    cat: "edu",
    isNew: true,
    year: "2026",
    cover: "edu",
    title: "Teaching Materials & Course Modules",
    short:
      "Programming modules, multimedia learning resources, web-based presentations, and assessment materials.",
    desc:
      "A collection of teaching resources developed to support learning in the D4 Multimedia and Network Engineering program. The materials combine fundamental concepts, practical programming exercises, multimedia resources, and assessment activities to help students build technical knowledge and problem-solving skills.",
    points: [
      "C++ modules covering programming fundamentals and loops.",
      "Introductory SFML materials for computer graphics learning.",
      "Computer fundamentals and introductory information technology materials.",
      "HTML and CSS presentation materials for web programming.",
      "Programming algorithms assessment materials and curriculum learning outcomes (CPL).",
    ],
    tags: [
      "C++",
      "SFML",
      "HTML",
      "CSS",
      "Programming",
      "Curriculum Development",
    ],
  },
],


 
experience: [
  {
    logo: "img:pnupweb.webp",
    role: "Lecturer",
    org: "Politeknik Negeri Ujung Pandang",
    date: "Present",
    place:
      "Department of Informatics and Computer Engineering · D4 Multimedia and Network Engineering · Makassar",
    points: [
      "Teach programming, programming algorithms, multimedia workshops, Internet of Things (IoT), and UI/UX design.",
      "Conduct applied research in machine learning, deep learning, and computer vision, including AI-based detection systems on edge devices.",
      "Develop teaching materials, course modules, and practical learning resources.",
      "Contribute to curriculum development and the refinement of graduate learning outcomes (CPL).",
      "Collaborate with fellow lecturers on research publications and applied technology projects.",
    ],
  },
  {
    logo: "img:pipmks.webp",
    role: "Research Collaboration",
    org: "Politeknik Ilmu Pelayaran Makassar",
    date: "Since Jan 2023",
    place: "Makassar, South Sulawesi, Indonesia",
    points: [
      "Collaborate on research and technology-related activities in higher education.",
      "Contribute to the development of web-based applications and information systems.",
      "Support digital solutions for training programs and institutional activities.",
    ],
  },
  {
    logo: "img:umku.webp",
    role: "Lecturer",
    org: "Muhammadiyah University KU",
    date: "2024",
    place: "Makassar, South Sulawesi, Indonesia",
    points: [
      "Deliver teaching activities in information technology and related subjects.",
      "Guide students in developing programming knowledge and practical technical skills.",
      "Prepare learning materials and support technology-based learning activities.",
    ],
  },
  {
    logo: "img:aipi.webp",
    role: "Lecturer",
    org: "AIPI Maritime Academy of Indonesia",
    date: "Since Jan 2021",
    place: "Makassar, South Sulawesi, Indonesia",
    points: [
      "Support teaching and learning activities related to information technology.",
      "Develop instructional materials and practical learning resources.",
      "Support the use of digital tools in academic activities.",
    ],
  },
  {
    logo: "img:aipi.webp",
    role: "ICT / UPT Staff",
    org: "AIPI Maritime Academy of Indonesia",
    date: "Since Jan 2021",
    place: "Makassar, South Sulawesi, Indonesia",
    points: [
      "Develop and maintain institutional websites, web applications, and information systems.",
      "Support ICT operations, system maintenance, and institutional technology services.",
      "Develop SiSPeND Diklat COP, a web-based training portal with participant registration, login, and announcements.",
      "Provide technical support for digital services and information systems.",
    ],
  },
  {
    logo: "img:pelindo.webp",
    role: "Web Developer Intern — BIRO IT",
    org: "PT Pelindo IV (Persero)",
    date: "Oct – Dec 2020",
    place: "Makassar, South Sulawesi, Indonesia",
    points: [
      "Completed a three-month internship in the BIRO IT, focusing on web development.",
      "Gained practical experience in website development, application maintenance, and information technology operations.",
      "Applied programming skills to support web development activities in a professional environment.",
    ],
  },
],



research: [
  {
    kind: "Applied Research",
    year: 2026,
    title:
      "Crew Inactivity Detection System for the Engine Control Room of a Training Vessel",
    desc:
      "YOLO11s on a Raspberry Pi 5 with Hailo accelerator detects normal, playing, and sleeping crew activities, integrated with a web dashboard and Telegram alerts. Progress report and results seminar manuscript completed.",
    tags: ["YOLO11s", "Edge AI", "Computer Vision"],
  },
  {
    kind: "Journal Article",
    year: 2026,
    title:
      "Real-Time Safety Helmet and Vest Compliance Detection Using YOLOv8 with Web-Based Monitoring and Telegram Alerts",
    desc:
      "A real-time PPE compliance detection system using YOLOv8, web-based monitoring, and Telegram notifications. Published in the Journal of Electrical Engineering and Informatics, 4(1), 58–67.",
    tags: ["YOLOv8", "Computer Vision", "Occupational Safety"],
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=id&user=zkvs4tUAAAAJ&citation_for_view=zkvs4tUAAAAJ:WF5omc3nYNoC",
  },
  {
    kind: "Journal Article",
    year: 2024,
    title:
      "Deteksi Citra Daun untuk Klasifikasi Penyakit Padi menggunakan Pendekatan Deep Learning dengan Model CNN",
    desc:
      "Research on rice leaf image analysis and disease classification using a Convolutional Neural Network (CNN). Published in Jurnal Teknologi Terpadu, 10(1), 56–62.",
    tags: ["Deep Learning", "CNN", "Image Classification"],
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=id&user=zkvs4tUAAAAJ&citation_for_view=zkvs4tUAAAAJ:u5HHmVD_uO8C",
  },
  {
    kind: "Conference Paper",
    year: 2025,
    title:
      "Fake News Detection in Indonesian Language Using a Deep Learning Approach with Indo-BERT",
    desc:
      "Investigates the use of IndoBERT and deep learning for detecting fake news in Indonesian-language text. Published in the Proceedings of the International Conference on Social Sciences and Education, pages 106–113.",
    tags: ["NLP", "IndoBERT", "Deep Learning"],
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=id&user=zkvs4tUAAAAJ&citation_for_view=zkvs4tUAAAAJ:UeHWp8X0CEIC",
  },
  {
    kind: "Community Service",
    year: 2025,
    title:
      "Sosialisasi Teknologi Artificial Intelligence untuk Mendukung Proses Pembelajaran di Madrasah Madani Alauddin",
    desc:
      "A community engagement initiative introducing Artificial Intelligence technologies to support teaching and learning activities. Published in JBIMA: Jurnal Pengabdian kepada Masyarakat, 2(3), 87–93.",
    tags: ["Artificial Intelligence", "Education", "Community Service"],
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=id&user=zkvs4tUAAAAJ&citation_for_view=zkvs4tUAAAAJ:IjCSPb-OGe4C",
  },
  {
    kind: "Conference Paper",
    year: 2024,
    title:
      "The Effectiveness of MARPOL Annex V Implementation on Ferry Ships in Parepare Harbor",
    desc:
      "Examines the effectiveness of MARPOL Annex V implementation on ferry vessels operating at Parepare Harbor. Published in the 3rd International Conference and Maritime Development (ICMaD 2024), pages 51–60.",
    tags: ["Environmental Research", "Regulatory Compliance", "Conference"],
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=id&user=zkvs4tUAAAAJ&citation_for_view=zkvs4tUAAAAJ:d1gkVwhDpl0C",
  },
  {
    kind: "Conference Paper",
    year: 2026,
    title:
      "The Construction of Digital Citizenship Meaning among Informatics Students as Aspiring Technology Professionals",
    desc:
      "Explores how informatics students construct the meaning of digital citizenship as future technology professionals. Listed in the Proceedings of the International Conference on Social Sciences and Education.",
    tags: ["Digital Citizenship", "Informatics Education", "Social Sciences"],
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=id&user=zkvs4tUAAAAJ&citation_for_view=zkvs4tUAAAAJ:_FxGoFyzp5QC",
  },
  {
    kind: "Journal Article",
    year: 2026,
    title:
      "Analisis Pengaruh Variasi ISO dan Waktu Pemotretan terhadap Kualitas Citra Kamera DSLR pada Kondisi Cahaya Alami Tropis",
    desc:
      "Analyzes the effects of ISO variation and exposure timing on DSLR image quality under tropical natural-light conditions. Published in Jurnal Vokasi Sains dan Teknologi, 5(2), 200–209.",
    tags: ["Image Processing", "Digital Photography", "Image Quality"],
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=id&user=zkvs4tUAAAAJ&citation_for_view=zkvs4tUAAAAJ:YsMSGLbcyi4C",
  },
  {
    kind: "Journal Article",
    year: 2026,
    title:
      "Application of Automatic Detection of Personal Protective Equipment (PPE) for Loading and Unloading Workers at PT. Pelindo TPK Makassar",
    desc:
      "Presents the application of automated PPE detection to support occupational safety monitoring for loading and unloading workers. Published in Maritime Park: Journal of Maritime Technology and Society, pages 8–18.",
    tags: ["Computer Vision", "PPE Detection", "YOLO"],
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=id&user=zkvs4tUAAAAJ&citation_for_view=zkvs4tUAAAAJ:Y0pCki6q_DkC",
  },
  {
    kind: "Book",
    year: 2025,
    title: "Pengantar Teknologi Informasi",
    desc:
      "A collaborative book covering foundational concepts and applications of information technology. Published by PT. Sonpedia Publishing Indonesia.",
    tags: ["Information Technology", "Book", "Education"],
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=id&user=zkvs4tUAAAAJ&citation_for_view=zkvs4tUAAAAJ:2osOgNQ5qMEC",
  },
  {
    kind: "Patent",
    year: 2025,
    title:
      "APPEDetect-TPK: Automatic Personal Protective Equipment Detection - Terminal Peti Kemas",
    desc:
      "An intellectual property registration related to an automatic personal protective equipment detection system for container terminal operations. Listed as Indonesian patent record EC002,025,092,028.",
    tags: ["Patent", "Artificial Intelligence", "PPE Detection"],
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=id&user=zkvs4tUAAAAJ&citation_for_view=zkvs4tUAAAAJ:9yKSN-GCB0IC",
  },
  {
    kind: "Book",
    year: 2025,
    title: "Pengantar Machine Learning",
    desc:
      "A collaborative book introducing fundamental concepts and methods in machine learning. Published by CV Sakura Digital Nusantara.",
    tags: ["Machine Learning", "Artificial Intelligence", "Book"],
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=id&user=zkvs4tUAAAAJ&citation_for_view=zkvs4tUAAAAJ:Tyk-4Ss8FVUC",
  },
  {
    kind: "Patent",
    year: 2024,
    title: "ARLThal: Arabic-Latin Transliteration Tool",
    desc:
      "An intellectual property registration for a tool that supports transliteration between Arabic and Latin scripts. Listed as Indonesian patent record EC00,202,407,991.",
    tags: ["Patent", "Natural Language Processing", "Transliteration"],
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=id&user=zkvs4tUAAAAJ&citation_for_view=zkvs4tUAAAAJ:u-x6o8ySG0sC",
  },
],


  certs: [
    { logo: "dicoding.webp", title: "Memulai Pemrograman dengan Python", issuer: "Dicoding", date: "September 2021", id: "1OP8LJ15VZQK", url: "https://www.dicoding.com/certificates/1OP8LJ15VZQK" },
    { logo: "dicoding.webp", title: "Machine Learning", issuer: "Dicoding", date: "September 2021", id: "1OP8LJ15VZQK", url: "https://www.dicoding.com/certificates/1OP8LJ15VZQK" },
    { logo: "dicoding.webp", title: "Belajar Fundamental Deep Learning", issuer: "Dicoding", date: "September 2021", id: "1OP8LJ15VZQK", url: "https://www.dicoding.com/certificates/1OP8LJ15VZQK" },
    { logo: "dicoding.webp", title: "Cloud dan Gen AI di AWS", issuer: "Dicoding", date: "September 2021", id: "1OP8LJ15VZQK", url: "https://www.dicoding.com/certificates/1OP8LJ15VZQK" },
    { logo: "dicoding.webp", title: "Belajar Dasar Visualisasi Data", issuer: "Dicoding", date: "September 2021", id: "1OP8LJ15VZQK", url: "https://www.dicoding.com/certificates/1OP8LJ15VZQK" },
    { logo: "dicoding.webp", title: "Python Programming", issuer: "Dicoding", date: "September 2021", id: "1OP8LJ15VZQK", url: "https://www.dicoding.com/certificates/1OP8LJ15VZQK" },
    { logo: "dqlab.webp", title: "Python Fundamental for Data Science", issuer: "DQLab", date: "September 2021", id: "DQLABINTP1POFGHO", url: "https://academy.dqlab.id/certificate/pdf/DQLABINTP1POFGHO" },
    { logo: "dqlab.webp", title: "Introduction to Data Science with Python", issuer: "DQLab", date: "September 2021", id: "DQLABINTP1MWGVKA", url: "https://academy.dqlab.id/certificate/pdf/DQLABINTP1MWGVKA" },
    { logo: "sololearn.webp", title: "PHP Course", issuer: "Sololearn", date: "September 2021", id: "1059-890261", url: "https://www.sololearn.com/Certificate/1059-890261/pdf/" },
    { logo: "sololearn.webp", title: "HTML", issuer: "Sololearn", date: "June 2016", id: "1014-890261", url: "https://www.sololearn.com/Certificate/1014-890261/pdf/" },
  ],

  skills: [
    { group: "AI & Data", items: ["Python", "YOLOv8 / YOLO11", "Computer Vision", "Roboflow", "Ultralytics", "NLP · TF-IDF", "Edge AI · Hailo"] },
    { group: "Web & Backend", items: ["Laravel", "PHP", "Flask", "JavaScript", "HTML5", "CSS", "SQLAlchemy", "Google Apps Script"] },
    { group: "Hardware & Other", items: ["Raspberry Pi 5", "Telegram Bot API", "C++", "SFML", "Google Colab", "Academic Documents (OOXML)"] },
  ],
};

/* ---------- icons ---------- */
const SOC = {"linkedin": "<path d=\"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z\"/>", "instagram": "<path d=\"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z\"/>", "github": "<path d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"/>", "medium": "<path d=\"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z\"/>", "facebook": "<path d=\"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z\"/>"};
const IC = {
  pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  cap: '<path d="M22 9 12 4 2 9l10 5 10-5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>',
  spark: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  web: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 14l-2 2 2 2M16 14l2 2-2 2"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z"/><path d="M20 17v4H6.5A2.5 2.5 0 0 1 4 18.5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  ext: '<path d="M7 17 17 7M8 7h9v9"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
};
const svg = (name, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${extra}>${IC[name]}</svg>`;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ---------- project covers (custom SVG) ---------- */
const COVERS = {
  crew: () => `<svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Crew detection illustration">
    <defs><linearGradient id="gc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b1b33"/><stop offset="1" stop-color="#06101f"/></linearGradient>
    <pattern id="pc" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0v32" fill="none" stroke="#1e3a5f" stroke-width=".6"/></pattern></defs>
    <rect width="640" height="400" fill="url(#gc)"/><rect width="640" height="400" fill="url(#pc)"/>
    <rect x="0" y="300" width="640" height="100" fill="#0a2038"/>
    <g fill="#16324f"><rect x="40" y="70" width="150" height="90" rx="6"/><rect x="450" y="60" width="150" height="100" rx="6"/></g>
    <g fill="#244d78"><rect x="50" y="80" width="130" height="8"/><rect x="50" y="96" width="90" height="6"/><rect x="460" y="72" width="130" height="8"/><rect x="460" y="88" width="100" height="6"/></g>
    <g><circle cx="165" cy="200" r="24" fill="#27507c"/><rect x="132" y="226" width="66" height="84" rx="22" fill="#27507c"/></g>
    <g><circle cx="320" cy="215" r="24" fill="#27507c"/><path d="M280 330v-60q0-26 40-26t40 26v60z" fill="#27507c"/></g>
    <g><circle cx="480" cy="195" r="24" fill="#27507c"/><rect x="448" y="221" width="64" height="90" rx="22" fill="#27507c"/></g>
    <g font-family="monospace" font-size="15" font-weight="700">
      <rect x="120" y="165" width="90" height="155" fill="none" stroke="#2dd4bf" stroke-width="3" rx="4"/><rect x="120" y="143" width="92" height="22" fill="#2dd4bf"/><text x="127" y="159" fill="#04201c">normal</text>
      <rect x="268" y="180" width="104" height="160" fill="none" stroke="#fbbf24" stroke-width="3" rx="4"/><rect x="268" y="156" width="122" height="24" fill="#fbbf24"/><text x="275" y="173" fill="#2a1a00">sleep · 14s</text>
      <rect x="436" y="160" width="86" height="158" fill="none" stroke="#38bdf8" stroke-width="3" rx="4"/><rect x="436" y="138" width="70" height="22" fill="#38bdf8"/><text x="443" y="154" fill="#03202e">play</text>
    </g>
    <circle cx="610" cy="30" r="6" fill="#ef4444"><animate attributeName="opacity" values="1;.2;1" dur="1.6s" repeatCount="indefinite"/></circle><text x="560" y="35" fill="#cbd5e1" font-family="monospace" font-size="13" text-anchor="end">LIVE</text>
  </svg>`,
  ppe: () => `<svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PPE detection illustration">
    <defs><linearGradient id="gp" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1a2230"/><stop offset="1" stop-color="#0c1018"/></linearGradient></defs>
    <rect width="640" height="400" fill="url(#gp)"/>
    <g stroke="#2a3446" stroke-width="1"><path d="M0 300H640M0 330H640M0 360H640"/></g>
    <g><circle cx="230" cy="130" r="34" fill="#3a465c"/><path d="M180 135a50 46 0 0 1 100 0z" fill="#fbbf24"/><rect x="172" y="132" width="116" height="8" rx="4" fill="#d99a0b"/><path d="M180 330v-120q0-34 50-34t50 34v120z" fill="#3a465c"/><path d="M200 190l30 22 30-22v130h-60z" fill="#f97316"/><path d="M212 200v120M248 200v120" stroke="#e2e8f0" stroke-width="5" opacity=".85"/></g>
    <g><circle cx="430" cy="140" r="34" fill="#3a465c"/><path d="M380 340v-120q0-34 50-34t50 34v120z" fill="#3a465c"/></g>
    <g font-family="monospace" font-size="14" font-weight="700">
      <rect x="186" y="86" width="90" height="62" fill="none" stroke="#2dd4bf" stroke-width="3" rx="3"/><rect x="186" y="64" width="86" height="22" fill="#2dd4bf"/><text x="192" y="80" fill="#04201c">Hardhat</text>
      <rect x="182" y="176" width="100" height="150" fill="none" stroke="#2dd4bf" stroke-width="3" rx="3"/><rect x="182" y="154" width="120" height="22" fill="#2dd4bf"/><text x="188" y="170" fill="#04201c">Safety Vest</text>
      <rect x="386" y="98" width="88" height="86" fill="none" stroke="#f43f5e" stroke-width="3" rx="3"/><rect x="386" y="76" width="118" height="22" fill="#f43f5e"/><text x="392" y="92" fill="#fff">No Hardhat</text>
      <rect x="376" y="190" width="108" height="154" fill="none" stroke="#f43f5e" stroke-width="3" rx="3"/><rect x="376" y="168" width="136" height="22" fill="#f43f5e"/><text x="382" y="184" fill="#fff">No Safety Vest</text>
    </g></svg>`,
  sirita: () => `<svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Document similarity illustration">
    <defs><linearGradient id="gs" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2e1065"/><stop offset="1" stop-color="#0f172a"/></linearGradient></defs>
    <rect width="640" height="400" fill="url(#gs)"/>
    <g><rect x="70" y="70" width="210" height="260" rx="14" fill="#fff" opacity=".96"/><rect x="360" y="70" width="210" height="260" rx="14" fill="#fff" opacity=".96"/></g>
    <g fill="#cbd5e1"><rect x="92" y="100" width="130" height="10" rx="5"/><rect x="92" y="170" width="166" height="8" rx="4"/><rect x="92" y="196" width="150" height="8" rx="4"/><rect x="92" y="248" width="120" height="8" rx="4"/>
    <rect x="382" y="100" width="150" height="10" rx="5"/><rect x="382" y="170" width="156" height="8" rx="4"/><rect x="382" y="196" width="130" height="8" rx="4"/><rect x="382" y="248" width="140" height="8" rx="4"/></g>
    <g fill="#8b5cf6"><rect x="92" y="130" width="150" height="8" rx="4"/><rect x="92" y="148" width="108" height="8" rx="4"/><rect x="92" y="222" width="140" height="8" rx="4"/>
    <rect x="382" y="130" width="140" height="8" rx="4"/><rect x="382" y="148" width="120" height="8" rx="4"/><rect x="382" y="222" width="110" height="8" rx="4"/></g>
    <path d="M280 200h80" stroke="#2dd4bf" stroke-width="3" stroke-dasharray="6 6"><animate attributeName="stroke-dashoffset" from="24" to="0" dur="1.2s" repeatCount="indefinite"/></path>
    <circle cx="320" cy="200" r="34" fill="#0f172a" stroke="#2dd4bf" stroke-width="3"/><text x="320" y="206" text-anchor="middle" font-family="monospace" font-size="16" font-weight="700" fill="#2dd4bf">cos θ</text>
  </svg>`,
  edu: () => `<svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="C++ code illustration">
    <defs><linearGradient id="ge" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#064e3b"/><stop offset="1" stop-color="#0b1120"/></linearGradient></defs>
    <rect width="640" height="400" fill="url(#ge)"/>
    <rect x="80" y="60" width="480" height="280" rx="16" fill="#0b1120" stroke="#1f2a44"/>
    <circle cx="106" cy="86" r="6" fill="#f43f5e"/><circle cx="126" cy="86" r="6" fill="#fbbf24"/><circle cx="146" cy="86" r="6" fill="#22c55e"/>
    <g font-family="monospace" font-size="17">
      <text x="110" y="136" fill="#c084fc">#include</text><text x="196" y="136" fill="#fbbf24">&lt;iostream&gt;</text>
      <text x="110" y="176" fill="#38bdf8">for</text><text x="146" y="176" fill="#e2e8f0">(int i = 0; i &lt; 5; i++) {</text>
      <text x="140" y="206" fill="#e2e8f0">std::cout &lt;&lt;</text><text x="270" y="206" fill="#86efac">"Hello, TMJ!"</text><text x="388" y="206" fill="#e2e8f0">;</text>
      <text x="110" y="236" fill="#e2e8f0">}</text>
      <text x="110" y="286" fill="#64748b">// loops · SFML · graphics</text>
    </g><rect x="110" y="298" width="10" height="20" fill="#2dd4bf"><animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/></rect>
  </svg>`,
};
const coverHTML = (c, alt) => c.startsWith("img:") ? `<img src="assets/img/${c.slice(4)}" alt="${esc(alt)}" loading="lazy" />` : COVERS[c]();

/* ---------- render ---------- */
function renderSocials() {
  const html = DATA.socials.map((s) => `<a class="icon-btn" href="${s.url}" target="_blank" rel="noopener" aria-label="${s.label}" title="${s.label}"><svg viewBox="0 0 24 24" fill="currentColor">${SOC[s.key] || ""}</svg></a>`).join("");
  $$("[data-socials]").forEach((el) => (el.innerHTML = html));
}
function renderIcons() {
  $$("[data-ic]").forEach((el) => {
    const n = el.dataset.ic;
    el.innerHTML = el.classList.contains("ico") ? svg(n) : svg(n, 'style="width:20px;height:20px;color:var(--accent);flex:none;margin-top:3px"') + el.innerHTML;
  });
}
function renderProjects() {
  $("#filters").innerHTML = DATA.categories.map((c, i) => `<button class="chip ${i === 0 ? "on" : ""}" data-cat="${c.id}" role="tab">${c.label}</button>`).join("");
  $("#projectGrid").innerHTML = DATA.projects.map((p, i) => `
    <button class="card project reveal" data-cat="${p.cat}" data-i="${i}" style="--d:${(i % 3) * 0.08}s" aria-label="Project details: ${esc(p.title)}">
      <div class="cover">${coverHTML(p.cover, p.title)}</div>
      <div class="body">
        <div class="meta"><span>${p.year}</span>${p.isNew ? '<span class="pill-new">New</span>' : ""}</div>
        <h3>${p.title}</h3>
        <p>${p.short}</p>
        <div class="tags">${p.tags.slice(0, 3).map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <span class="more">View details ${svg("arrow")}</span>
      </div>
    </button>`).join("");
}
function renderExperience() {
  $("#timeline").innerHTML = DATA.experience.map((e, i) => `
    <article class="card t-item reveal ${e.now ? "now" : ""}" style="--d:${i * 0.08}s">
      ${e.logo.startsWith("img:") ? `<div class="t-logo"><img src="assets/img/${e.logo.slice(4)}" alt="${esc(e.org)}" loading="lazy" /></div>` : `<div class="t-logo mono-logo">${e.logo}</div>`}
      <div>
        <div class="t-top"><div><h3>${e.role}</h3><div class="t-org">${e.org}</div></div><span class="t-date ${e.now ? "live" : ""}">${e.now ? "● " : ""}${e.date}</span></div>
        <div class="t-place">${e.place}</div>
        <ul>${e.points.map((p) => `<li>${p}</li>`).join("")}</ul>
      </div>
    </article>`).join("");
}
function renderResearch() {
  $("#researchGrid").innerHTML = DATA.research.map((r, i) => `
    <article class="card paper reveal" style="--d:${i * 0.08}s">
      <span class="kind">${r.kind}</span><h3>${r.title}</h3><p>${r.desc}</p>
      <div class="status">${r.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
    </article>`).join("");
}
function renderCerts() {
  $("#certGrid").innerHTML = DATA.certs.map((c, i) => `
    <article class="card cert reveal" style="--d:${(i % 3) * 0.08}s">
      <div class="logo"><span><img src="assets/img/${c.logo}" alt="${c.issuer}" loading="lazy" /></span></div>
      <h3>${c.title}</h3>
      <div class="sub"><span>${c.issuer} · ${c.date}</span><span>ID ${c.id}</span></div>
      <a href="${c.url}" target="_blank" rel="noopener">View credential ${svg("ext")}</a>
    </article>`).join("");
}
function renderSkills() {
  $("#skillGrid").innerHTML = DATA.skills.map((g, i) => `
    <div class="card skill-group reveal" style="--d:${i * 0.08}s"><h3>${g.group}</h3>
      <div class="skill-list">${g.items.map((s) => `<span class="skill">${s}</span>`).join("")}</div></div>`).join("");
}

/* ---------- modal ---------- */
const modal = $("#modal"), modalBox = $("#modalBox");
let lastFocus = null;
function openModal(i) {
  const p = DATA.projects[i];
  lastFocus = document.activeElement;
  modalBox.innerHTML = `
    <button class="icon-btn modal-close" aria-label="Close">${svg("x")}</button>
    <div class="cover">${coverHTML(p.cover, p.title)}</div>
    <div class="modal-body">
      <div class="mono" style="font-size:12.5px;color:var(--accent)">${p.year} · ${DATA.categories.find((c) => c.id === p.cat).label}</div>
      <h3 id="mTitle">${p.title}</h3>
      <p>${p.desc}</p>
      <ul>${p.points.map((x) => `<li>${x}</li>`).join("")}</ul>
      <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      ${p.links ? `<div class="modal-links">${p.links.map((l) => `<a class="btn btn-ghost" href="${l.url}" target="_blank" rel="noopener">${l.label} ${svg("ext")}</a>`).join("")}</div>` : ""}
    </div>`;
  modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $(".modal-close", modalBox).focus();
  $(".modal-close", modalBox).onclick = closeModal;
}
function closeModal() {
  modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("open")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "Tab") { // keep focus inside the dialog
    const f = $$("a[href], button", modalBox); if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ---------- init ---------- */
renderSocials(); renderIcons(); renderProjects(); renderExperience(); renderResearch(); renderCerts(); renderSkills();
$("#year").textContent = new Date().getFullYear();

$("#projectGrid").addEventListener("click", (e) => {
  const card = e.target.closest(".project"); if (card) openModal(+card.dataset.i);
});
$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest(".chip"); if (!b) return;
  $$(".chip").forEach((c) => c.classList.toggle("on", c === b));
  $$(".project").forEach((p) => p.classList.toggle("hide", b.dataset.cat !== "all" && p.dataset.cat !== b.dataset.cat));
});

/* theme */
$("#themeBtn").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
  document.querySelector('meta[name="theme-color"]').content = next === "dark" ? "#070b14" : "#f6f8fc";
});

/* mobile menu */
const navLinks = $("#navLinks"), menuBtn = $("#menuBtn");
menuBtn.addEventListener("click", (e) => { e.stopPropagation(); const o = navLinks.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", o); });
navLinks.addEventListener("click", () => { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); });
document.addEventListener("click", (e) => { if (!e.target.closest(".nav")) navLinks.classList.remove("open"); });

/* typing effect */
(function typer() {
  const el = $("#typed"); let r = 0, c = 0, del = false;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = DATA.roles[0]; return; }
  (function tick() {
    const word = DATA.roles[r];
    el.textContent = word.slice(0, c);
    if (!del && c === word.length) { del = true; return setTimeout(tick, 1800); }
    if (del && c === 0) { del = false; r = (r + 1) % DATA.roles.length; }
    c += del ? -1 : 1;
    setTimeout(tick, del ? 28 : 55);
  })();
})();

/* scroll: progress, to-top, scroll-spy */
const progress = $("#progress"), toTop = $("#toTop");
const sections = $$("main section[id]"), links = $$(".nav-links a");
function onScroll() {
  const h = document.documentElement;
  progress.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
  toTop.classList.toggle("show", h.scrollTop > 700);
  let cur = sections[0].id;
  sections.forEach((s) => { if (s.getBoundingClientRect().top < innerHeight * 0.4) cur = s.id; });
  links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
}
addEventListener("scroll", onScroll, { passive: true }); onScroll();
toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

/* reveal on scroll */
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
$$(".reveal").forEach((el) => io.observe(el));

/* count-up numbers */
const targets = { years: new Date().getFullYear() - DATA.careerStart, projects: DATA.projects.length, certs: DATA.certs.length, map: 0.704 };
const so = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return; so.disconnect();
  $$("[data-count]").forEach((b) => {
    const to = targets[b.dataset.count], dec = +(b.dataset.decimals || 0), suf = b.dataset.suffix || "", t0 = performance.now();
    (function step(t) {
      const k = Math.min((t - t0) / 1400, 1), v = to * (1 - Math.pow(1 - k, 3));
      b.textContent = v.toFixed(dec) + (k === 1 ? suf : "");
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  });
}), { threshold: 0.4 });
so.observe($("#stats"));

/* card spotlight + cursor glow + tilt */
document.addEventListener("pointermove", (e) => {
  const g = $("#cursorGlow"); g.style.opacity = 1; g.style.transform = `translate(${e.clientX - 210}px, ${e.clientY - 210}px)`;
  const card = e.target.closest(".card"); if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty("--mx", e.clientX - r.left + "px"); card.style.setProperty("--my", e.clientY - r.top + "px");
});
if (matchMedia("(hover:hover) and (pointer:fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  $("#projectGrid").addEventListener("pointermove", (e) => {
    const c = e.target.closest(".project"); if (!c) return;
    const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    c.style.transform = `perspective(900px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-4px)`;
  });
  $("#projectGrid").addEventListener("pointerout", (e) => { const c = e.target.closest(".project"); if (c && !c.contains(e.relatedTarget)) c.style.transform = ""; });
}

/* copy email */
const toast = $("#toast");
$("#copyMail").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(DATA.email); toast.textContent = "Email copied to clipboard ✓"; }
  catch (e) { toast.textContent = DATA.email; }
  toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2200);
});
