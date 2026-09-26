import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";
import {
  Search,
  MapPin,
  Bell,
  Menu,
  X,
  ChevronRight,
  Star,
  ShieldCheck,
  Clock3,
  Users,
  Wallet,
  HandHeart,
  Home,
  Wrench,
  Sparkles,
  Truck,
  Droplets,
  Baby,
  Zap,
  Leaf,
  CalendarDays,
  CheckCircle2,
  ArrowRight,
  Plus,
  BriefcaseBusiness,
  MessageCircle,
  UserRound,
  LayoutDashboard,
  LogOut,
  Phone,
  Filter,
  SlidersHorizontal,
} from "lucide-react";
import "./styles.css";

const services = [
  {
    id: 1,
    name: "Home Cleaning",
    icon: Sparkles,
    category: "Household",
    price: "₹299+",
    rating: 4.9,
    jobs: 1240,
  },
  {
    id: 2,
    name: "Plumbing",
    icon: Droplets,
    category: "Repairs",
    price: "₹249+",
    rating: 4.8,
    jobs: 860,
  },
  {
    id: 3,
    name: "Electrician",
    icon: Zap,
    category: "Repairs",
    price: "₹199+",
    rating: 4.8,
    jobs: 730,
  },
  {
    id: 4,
    name: "Gardening",
    icon: Leaf,
    category: "Community",
    price: "₹299+",
    rating: 4.7,
    jobs: 410,
  },
  {
    id: 5,
    name: "Elder Care",
    icon: HandHeart,
    category: "Care",
    price: "₹399+",
    rating: 4.9,
    jobs: 320,
  },
  {
    id: 6,
    name: "Child Care",
    icon: Baby,
    category: "Care",
    price: "₹449+",
    rating: 4.8,
    jobs: 270,
  },
  {
    id: 7,
    name: "Moving Help",
    icon: Truck,
    category: "Household",
    price: "₹599+",
    rating: 4.7,
    jobs: 190,
  },
  {
    id: 8,
    name: "Appliance Repair",
    icon: Wrench,
    category: "Repairs",
    price: "₹249+",
    rating: 4.8,
    jobs: 540,
  },
];

const workers = [
  {
    name: "Ravi Kumar",
    role: "Plumbing & Repairs",
    rating: 4.9,
    jobs: 186,
    distance: "1.2 km",
    initials: "RK",
    verified: true,
  },
  {
    name: "Neha Sharma",
    role: "Home Cleaning",
    rating: 4.9,
    jobs: 214,
    distance: "1.8 km",
    initials: "NS",
    verified: true,
  },
  {
    name: "Amit Verma",
    role: "Electrician",
    rating: 4.8,
    jobs: 143,
    distance: "2.4 km",
    initials: "AV",
    verified: true,
  },
  {
    name: "Pooja Devi",
    role: "Elder Care",
    rating: 5.0,
    jobs: 98,
    distance: "3.1 km",
    initials: "PD",
    verified: true,
  },
];

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/workers" element={<WorkersPage />} />
          <Route path="/post-job" element={<PostJobPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="brand">
          <span className="brand-mark">
            <Users size={21} />
          </span>
          <span>
            Co<span>Gig</span>
          </span>
        </NavLink>
        <nav className={open ? "nav-links mobile-open" : "nav-links"}>
          <NavLink to="/services" onClick={() => setOpen(false)}>
            Find Services
          </NavLink>
          <NavLink to="/workers" onClick={() => setOpen(false)}>
            Workers
          </NavLink>
          <NavLink to="/post-job" onClick={() => setOpen(false)}>
            Post a Job
          </NavLink>
          <NavLink to="/dashboard" onClick={() => setOpen(false)}>
            Dashboard
          </NavLink>
        </nav>
        <div className="nav-actions">
          <button className="icon-btn notification">
            <Bell size={19} />
            <i />
          </button>
          <NavLink to="/login" className="login-btn">
            Sign In
          </NavLink>
          <button className="menu-btn" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

function HomePage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="pulse" /> Community-powered local services
            </div>
            <h1>
              Get help from <em>trusted people</em> around you.
            </h1>
            <p>
              Book reliable household and community services while creating fair
              earning opportunities for local workers.
            </p>
            <div className="search-card">
              <div className="search-field">
                <Search size={20} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="What service do you need?"
                />
              </div>
              <div className="location-field">
                <MapPin size={19} />
                <span>Dehradun</span>
              </div>
              <button
                onClick={() => navigate("/services")}
                className="primary-btn"
              >
                Search
              </button>
            </div>
            <div className="hero-trust">
              <span>
                <ShieldCheck size={17} /> Verified workers
              </span>
              <span>
                <Wallet size={17} /> Fair pricing
              </span>
              <span>
                <Users size={17} /> Cooperative model
              </span>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-card main-stat">
              <div className="stat-icon">
                <Users />
              </div>
              <div>
                <strong>2,480+</strong>
                <span>local workers</span>
              </div>
            </div>
            <div className="community-orb">
              <Users size={94} />
              <div className="orb-ring r1" />
              <div className="orb-ring r2" />
            </div>
            <div className="hero-card earning-stat">
              <div className="mini-avatar">RK</div>
              <div>
                <strong>₹18,650</strong>
                <span>avg. monthly earning</span>
              </div>
              <CheckCircle2 size={20} />
            </div>
            <div className="floating-chip chip-a">
              <Star fill="currentColor" size={15} /> 4.9 community rating
            </div>
            <div className="floating-chip chip-b">
              <CheckCircle2 size={15} /> 12,400 jobs completed
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Popular services"
            subtitle="Everyday help, one trusted community."
            action="View all"
            to="/services"
          />
          <div className="service-grid">
            {services.slice(0, 6).map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <SectionHeading
            title="How CoGig works"
            subtitle="Simple for customers. Fair for workers."
          />
          <div className="steps">
            {[
              [
                "01",
                "Post or find a service",
                "Tell us what you need or browse nearby workers.",
                "Search",
              ],
              [
                "02",
                "Choose a local worker",
                "Compare ratings, skills, price and availability.",
                "Compare",
              ],
              [
                "03",
                "Get it done safely",
                "Chat, complete the job and pay securely.",
                "Complete",
              ],
            ].map(([n, t, d, c], i) => (
              <div className="step" key={n}>
                <span className="step-no">{n}</span>
                <div className="step-icon">
                  {i === 0 ? (
                    <Search />
                  ) : i === 1 ? (
                    <UserRound />
                  ) : (
                    <CheckCircle2 />
                  )}
                </div>
                <h3>{t}</h3>
                <p>{d}</p>
                <span className="step-tag">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Trusted workers near you"
            subtitle="Verified local professionals and community members."
            action="Meet workers"
            to="/workers"
          />
          <div className="worker-grid">
            {workers.map((w) => (
              <WorkerCard key={w.name} worker={w} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta">
          <div>
            <div className="eyebrow light">For local service providers</div>
            <h2>Turn your skills into a fair, flexible livelihood.</h2>
            <p>
              Join the cooperative network, keep more of what you earn, and
              build a reputation in your community.
            </p>
          </div>
          <button onClick={() => navigate("/post-job")} className="light-btn">
            Join as a worker <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({ title, subtitle, action, to }) {
  return (
    <div className="section-heading">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      {action && (
        <NavLink to={to} className="text-link">
          {action}
          <ChevronRight size={17} />
        </NavLink>
      )}
    </div>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <NavLink to="/services" className="service-card">
      <div className="service-icon">
        <Icon size={24} />
      </div>
      <div className="service-info">
        <h3>{service.name}</h3>
        <span>{service.category}</span>
        <div>
          <b>{service.price}</b>
          <small>
            <Star size={13} fill="currentColor" /> {service.rating}
          </small>
        </div>
      </div>
      <ChevronRight className="service-arrow" size={18} />
    </NavLink>
  );
}

function WorkerCard({ worker }) {
  return (
    <div className="worker-card">
      <div className="worker-top">
        <div className="avatar">{worker.initials}</div>
        <div className="worker-meta">
          <h3>
            {worker.name} {worker.verified && <ShieldCheck size={15} />}
          </h3>
          <p>{worker.role}</p>
        </div>
        <button className="icon-btn">
          <MessageCircle size={18} />
        </button>
      </div>
      <div className="worker-details">
        <span>
          <Star fill="currentColor" size={14} /> {worker.rating}
        </span>
        <span>{worker.jobs} jobs</span>
        <span>
          <MapPin size={14} /> {worker.distance}
        </span>
      </div>
      <button className="outline-btn">View profile</button>
    </div>
  );
}

function ServicesPage() {
  const [category, setCategory] = useState("All");
  const cats = ["All", "Household", "Repairs", "Care", "Community"];
  const filtered =
    category === "All"
      ? services
      : services.filter((s) => s.category === category);
  return (
    <main className="page">
      <div className="container">
        <div className="page-head">
          <div>
            <div className="eyebrow">Marketplace</div>
            <h1>Find a service</h1>
            <p>Local skills for everyday household and community needs.</p>
          </div>
          <button className="outline-btn">
            <Filter size={17} /> Filters
          </button>
        </div>
        <div className="wide-search">
          <Search />
          <input placeholder="Search for cleaning, plumbing, care..." />
          <MapPin />
          <span>Dehradun</span>
          <button className="primary-btn">Search</button>
        </div>
        <div className="category-tabs">
          {cats.map((c) => (
            <button
              className={category === c ? "active" : ""}
              onClick={() => setCategory(c)}
              key={c}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="service-grid large">
          {filtered.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </main>
  );
}

function WorkersPage() {
  return (
    <main className="page">
      <div className="container">
        <div className="page-head">
          <div>
            <div className="eyebrow">Community network</div>
            <h1>Local workers</h1>
            <p>Meet verified people offering skills in your neighbourhood.</p>
          </div>
          <button className="outline-btn">
            <SlidersHorizontal size={17} /> Sort & filter
          </button>
        </div>
        <div className="worker-list">
          {[...workers, ...workers].map((w, i) => (
            <WorkerCard key={i} worker={w} />
          ))}
        </div>
      </div>
    </main>
  );
}

function PostJobPage() {
  const [posted, setPosted] = useState(false);
  if (posted)
    return (
      <main className="page">
        <div className="container centered">
          <div className="success-icon">
            <CheckCircle2 />
          </div>
          <h1>Job posted successfully</h1>
          <p>Your request is now visible to suitable workers in your area.</p>
          <NavLink className="primary-btn" to="/dashboard">
            Go to dashboard
          </NavLink>
        </div>
      </main>
    );
  return (
    <main className="page">
      <div className="container form-wrap">
        <div className="page-head">
          <div>
            <div className="eyebrow">Request help</div>
            <h1>Post a new job</h1>
            <p>Describe what you need and let nearby workers send offers.</p>
          </div>
        </div>
        <div className="form-card">
          <div className="form-grid">
            <label>
              Service category
              <select>
                <option>Home Cleaning</option>
                <option>Plumbing</option>
                <option>Electrician</option>
                <option>Gardening</option>
                <option>Elder Care</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              Job title
              <input placeholder="e.g. Fix leaking kitchen tap" />
            </label>
            <label className="full">
              Describe the work
              <textarea
                rows="5"
                placeholder="Add useful details, preferred time, materials, etc."
              />
            </label>
            <label>
              Preferred date
              <input type="date" />
            </label>
            <label>
              Estimated budget
              <input placeholder="₹500 - ₹1,000" />
            </label>
            <label className="full">
              Location
              <div className="input-with-icon">
                <MapPin />
                <input placeholder="Enter your locality" />
              </div>
            </label>
          </div>
          <div className="form-footer">
            <span>
              <ShieldCheck size={17} /> Your contact details stay private until
              you accept a worker.
            </span>
            <button onClick={() => setPosted(true)} className="primary-btn">
              Post job <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function DashboardPage() {
  return (
    <main className="page">
      <div className="container">
        <div className="dashboard-head">
          <div>
            <div className="eyebrow">My space</div>
            <h1>Good morning,InnoVentures</h1>
            <p>Here’s what’s happening with your services.</p>
          </div>
          <NavLink to="/post-job" className="primary-btn">
            <Plus size={18} /> Post a job
          </NavLink>
        </div>
        <div className="dashboard-stats">
          <Stat icon={BriefcaseBusiness} label="Active jobs" value="3" />
          <Stat icon={Clock3} label="Upcoming" value="2" />
          <Stat icon={Wallet} label="Total spent" value="₹4,860" />
          <Stat icon={Star} label="My rating" value="4.9" />
        </div>
        <div className="dash-grid">
          <div className="panel">
            <div className="panel-title">
              <h2>Recent jobs</h2>
              <span>View all</span>
            </div>
            {[
              "Kitchen plumbing repair",
              "Weekly home cleaning",
              "Garden maintenance",
            ].map((x, i) => (
              <div className="job-row" key={x}>
                <div className="job-icon">
                  {i === 0 ? <Droplets /> : i === 1 ? <Sparkles /> : <Leaf />}
                </div>
                <div>
                  <h3>{x}</h3>
                  <p>{i === 0 ? "Today · 4:00 PM" : "Scheduled · This week"}</p>
                </div>
                <b className={i === 0 ? "status pending" : "status"}>
                  {i === 0 ? "Awaiting offer" : "Confirmed"}
                </b>
              </div>
            ))}
          </div>
          <div className="panel cooperative">
            <div className="panel-title">
              <h2>Cooperative impact</h2>
              <Users size={19} />
            </div>
            <div className="impact-number">
              ₹1.8L <span>earned by local workers</span>
            </div>
            <div className="progress">
              <i style={{ width: "74%" }} />
            </div>
            <p>
              74% of your service spend stays within the local worker network.
            </p>
            <div className="impact-pills">
              <span>
                <Users /> 12 workers supported
              </span>
              <span>
                <HandHeart /> 18 jobs completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
function Stat({ icon: Icon, label, value }) {
  return (
    <div className="dash-stat">
      <Icon />
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function LoginPage() {
  return (
    <main className="page login-page">
      <div className="login-card">
        <div className="brand centered-brand">
          <span className="brand-mark">
            <Users size={21} />
          </span>
          <span>
            Co<span>Gig</span>
          </span>
        </div>
        <h1>Welcome back</h1>
        <p>Sign in to manage your services and jobs.</p>
        <label>
          Mobile number
          <input placeholder="+91 98765 xxxxx" />
        </label>
        <button className="primary-btn full-btn">
          Continue <ArrowRight size={17} />
        </button>
        <div className="divider">
          <span>or</span>
        </div>
        <button className="google-btn">Continue with Google</button>
        <small>
          By continuing, you agree to CoGig’s Terms and Privacy Policy.
        </small>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <NavLink to="/" className="brand">
            <span className="brand-mark">
              <Users size={19} />
            </span>
            <span>
              Co<span>Gig</span>
            </span>
          </NavLink>
          <p>Cooperative gig services for stronger local communities.</p>
        </div>
        <div>
          <b>Platform</b>
          <NavLink to="/services">Find services</NavLink>
          <NavLink to="/workers">Workers</NavLink>
          <NavLink to="/post-job">Post a job</NavLink>
        </div>
        <div>
          <b>Community</b>
          <span>How it works</span>
          <span>Worker guidelines</span>
          <span>Safety centre</span>
        </div>
        <div>
          <b>Support</b>
          <span>
            <Phone size={14} /> 1800-COGIG
          </span>
          <span>
            <MessageCircle size={14} /> Help centre
          </span>
        </div>
      </div>
      <div className="container footer-bottom">
        © 2026 CoGig Cooperative Services{" "}
        <span>Built for local communities</span>
      </div>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
