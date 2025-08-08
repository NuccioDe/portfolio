import { Award, Briefcase, Code, Database, Github, GraduationCap, Linkedin, Mail, MapPin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ExperienceCard } from "../components/cards/ExperienceCard";
import { SkillCard } from "../components/cards/SkillCard";
import { ProjectCard } from "../components/cards/ProjectCard";
import {ContactCard} from "../components/cards/ContactCard"
import { CustomProjectCard } from "../components/cards/CustomProjectCard";
import { TypewriterAnimation } from "../components/ui/TypewriterAnimation";

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const profile = {
    name: "Nunzio Depetro",
    title: "Sviluppatore Full Stack",
    email: "nuccio99@hotmail.it",
    location: "Comiso (RG), Italy",
    github: "nucciode",
    linkedin: "nunziodepetro",
    logo:"/logo.png",
    bio: `Nato il 5 Febbraio 1999. Siciliano, domiciliato a Comiso (RG). Appassionato di tecnologia e sviluppo informatico, mi piace restare al passo con l'innovazione e arricchire quotidianamente il mio bagaglio di conoscenze.`,
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEXlSTK4r8tvA/profile-displayphoto-crop_800_800/B4DZh1nnRdH4AI-/0/1754319976453?e=1757548800&v=beta&t=fWzQSiXnzkDWPpc3opl2sSfZXUGO7p3C6dfOJiFRQaQ"
  };

  const roles = [
    "Full-Stack Developer",
    "Front-End Developer", 
    "Back-End Developer",
    "Software Engineer",
    "Database Developer",
  ];

  const skills = {
    databases: ["PostgreSQL", "MongoDB", "MySQL", "Opal", "SQL"],
    frontend: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    backend: ["Node.js", "Python", "Javascript", "Express.js", "C++", "C"],
    tools: ["Docker", "Git", "Linux", "PHP my Admin","Visual Studio"]
  };

  const education = [
    {
      degree: "Laurea in Informatica",
      institution: "Università degli Studi di Catania",
      year: "2025",
      description: "Laurea triennale in informatica, tesi progettuale: 'Deployment di un'infrastruttura DataSHIELD su cluster Kubernetes'"
    }
  ];

  const experience = [
    {
      role: "Stage - Junior Full Stack Developer",
      company: "Amastone",
      period: "Maggio 2025 - Luglio 2025",
      description: "Sviluppo di REST API e Web Application"
    }
  ];

  const customProjects = [
    {
      title: "Reminder Bot",
      description: "RemindMe nasce dall'esigenza di avere promemoria sincronizzati su più dispositivi contemporaneamente, in modo da ricevere le notifiche su tutti i dispositivi in cui è collegato l'account Telegram.",
      technologies: ["Python"],
      links: [
        { label: "Codice", url: "https://github.com/NuccioDe/ReminderBot", icon: Github, primary: true }
      ]
    }
  ];

  // Fetch repositories from GitHub API
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${profile.github}/repos?sort=updated&per_page=6`);
        if (response.ok) {
          const data = await response.json();
          setRepos(data.filter(repo => !repo.fork));
        }
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [profile.github]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50">
      {/* Navigation */}
     <nav className="fixed top-0 w-full bg-gray-700 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src={profile.logo}
                alt={`${profile.name} Logo`}
                className="w-8 h-8 rounded-full"
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-200 to-blue-400 bg-clip-text text-transparent">
                {profile.name}
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-200 hover:text-blue-400'
                  }`}
                >
                  {section === 'home' ? 'Home' : 
                   section === 'about' ? 'Carriera' :
                   section === 'skills' ? 'Competenze' :
                   section === 'projects' ? 'Progetti' : 'Contatti'}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-200 hover:text-blue-400 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-600">
              <div className="flex flex-col gap-4 pt-4">
                {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
                  <button
                    key={section}
                    onClick={() => {
                      scrollToSection(section);
                      setIsMobileMenuOpen(false); // Chiudi menu dopo il click
                    }}
                    className={`text-left capitalize font-medium transition-colors ${
                      activeSection === section ? 'text-blue-400' : 'text-gray-200 hover:text-blue-400'
                    }`}
                  >
                    {section === 'home' ? 'Home' : 
                     section === 'about' ? 'Carriera' :
                     section === 'skills' ? 'Competenze' :
                     section === 'projects' ? 'Progetti' : 'Contatti'}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-8">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 shadow-xl ring-4 ring-white"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                {profile.name}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8">
                <TypewriterAnimation 
                  texts={roles}
                  speed={100}
                  deleteSpeed={50}
                  pauseDuration={2000}
                />
              </p>
              <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {profile.bio}
              </p>
            </div>
            
            {/* Bottoni responsive - stack verticalmente su mobile, orizzontalmente su desktop */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 max-w-md sm:max-w-none mx-auto">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Mail className="h-5 w-5" />
                Contattami
              </a>
              <a
                href={`https://github.com/${profile.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
              <a
                href={`https://linkedin.com/in/${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Il resto delle sezioni rimane uguale... */}
      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Carriera</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                Formazione
              </h3>
              {education.map((edu, index) => (
                <ExperienceCard
                  key={index}
                  title={edu.degree}
                  subtitle={edu.institution}
                  period={edu.year}
                  description={edu.description}
                  icon={GraduationCap}
                />
              ))}
              {education.map((edu, index) => (
                <ExperienceCard
                  key={index}
                  title={"Diploma scientifico"}
                  subtitle={"Liceo scientifico Giosuè Carducci (Comiso, RG)"}
                  period={"2018"}
                  description={"Diploma superiore presso liceo scientifico Giosuè Carducci (Comiso, RG)"}
                  icon={GraduationCap}
                />
              ))}
            </div>
    
            
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-blue-600" />
                Esperienza
              </h3>
              {experience.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  title={exp.role}
                  subtitle={exp.company}
                  period={exp.period}
                  description={exp.description}
                  icon={Briefcase}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Competenze Tecniche</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              title="Database"
              skills={skills.databases}
              icon={Database}
              variant="databases"
            />
            <SkillCard
              title="Frontend"
              skills={skills.frontend}
              icon={Code}
              variant="frontend"
            />
            <SkillCard
              title="Backend"
              skills={skills.backend}
              icon={Briefcase}
              variant="backend"
            />
            <SkillCard
              title="Tools"
              skills={skills.tools}
              icon={Award}
              variant="tools"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">I Miei Progetti</h2>

          <div>
            {loading ? (
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <p className="mt-4 text-gray-600">Caricamento progetti...</p>
              </div>
            ) : repos.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {repos.map(repo => (
                  <ProjectCard key={repo.id} repo={repo} />
                ))}
                {customProjects.map((project, index) => (
                  <CustomProjectCard key={index} {...project} />
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-600">
                <p>Nessun progetto trovato. Assicurati di aver configurato correttamente il tuo username GitHub.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">Contatti</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ContactCard
              icon={Mail}
              title="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
              iconColor="text-blue-600"
            />
            <ContactCard
              icon={Linkedin}
              title="LinkedIn"
              value={`@${profile.linkedin}`}
              href={`https://linkedin.com/in/${profile.linkedin}`}
              iconColor="text-blue-600"
            />
            <ContactCard
              icon={Github}
              title="GitHub"
              value={`@${profile.github}`}
              href={`https://github.com/${profile.github}`}
              iconColor="text-gray-900"
              isExternal={true}
            />
            <ContactCard
              icon={MapPin}
              title="Località"
              value={profile.location}
              href={`https://maps.app.goo.gl/Zzvr5pHw1oqjLwHx7`}
              iconColor="text-red-600"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 {profile.name}. Sviluppato con React e Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;