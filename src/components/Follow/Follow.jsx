// import React, { useState } from "react";
// import "./Follow.css";
// import { motion, AnimatePresence } from "framer-motion";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook, faTwitterSquare, faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// // Define the ingredients
// const socialMediaPlatforms = [
//     { icon: faFacebook, label: "Facebook" },
//     { icon: faTwitterSquare, label: "Twitter" },
//     { icon: faInstagram, label: "Instagram" },
//     { icon: faWhatsapp, label: "WhatsApp" },
//     { icon: "💬", label: "WhatsApp" },
//     { icon: "📌", label: "Pinterest" },
//     { icon: "🔗", label: "LinkedIn" },
//     { icon: "🎵", label: "TikTok" } // New social media entry
// ];

// // Initialize initialTabs with the first four ingredients
// const initialTabs = socialMediaPlatforms.slice(0, 4); // Now taking the first four

// const Follow = () => {
//     const [tabs, setTabs] = useState(initialTabs);
//     const [selectedTab, setSelectedTab] = useState(tabs[0]);

//     return (
//         <div className="wrapper1"> {/* New wrapper for centering */}
//             <div className="app-container">
//                 <nav className="nav-container">
//                     <h3>Follow Us on</h3>
//                     <ul className="tabs-list">
//                         {tabs.map((item) => (
//                             <li
//                                 key={item.label}
//                                 className={`tab-item ${item === selectedTab ? "selected" : ""}`}
//                                 onClick={() => setSelectedTab(item)}
//                             >
//                                 <span>
//                                     <FontAwesomeIcon icon={item.icon} /> {item.label}
//                                 </span>
//                                 {item === selectedTab && (
//                                     <motion.div className="tab-underline" layoutId="underline" />
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                 </nav>
//                 <main className="content-container">
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             className="content-motion"
//                             key={selectedTab ? selectedTab.label : "empty"}
//                             initial={{ y: 10, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             exit={{ y: -10, opacity: 0 }}
//                             transition={{ duration: 0.2 }}
//                         >
//                             <div className="content-layout">
//                                 <div className="icon-container">
//                                     <div className="icon">{selectedTab.icon}</div>
//                                 </div>
//                                 <div className="text-container">
//                                     <h2>Follow us on</h2>
//                                     <h3>{selectedTab.label}</h3>
//                                     <div className="follow-button-container">
//                                         <button className="follow-button">Follow</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </AnimatePresence>
//                 </main>
//             </div>
//         </div>
//     );
// }

// export default Follow;



import React, { useState } from "react";
import "./Follow.css";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faWhatsapp, faPinterest, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons'; // Ensure correct imports

// Define the social media platforms with proper icon imports
const socialMediaPlatforms = [
    { icon: faFacebook, label: "Facebook" },
    { icon: faTwitter, label: "Twitter" },
    { icon: faInstagram, label: "Instagram" },
    { icon: faYoutube, label: "YouTube" },
    { icon: faWhatsapp, label: "WhatsApp" },
    { icon: faPinterest, label: "Pinterest" },
    { icon: faLinkedin, label: "LinkedIn" },
    { icon: faTiktok, label: "TikTok" } // New social media entry
];

// Initialize initialTabs with the first four platforms
const initialTabs = socialMediaPlatforms.slice(0, 4); // Now taking the first four

const Follow = () => {
    const [tabs, setTabs] = useState(initialTabs);
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <div className="wrapper1">
            <div className="app-container">
                <nav className="nav-container">
                    <h3>Follow Us on</h3>
                    <ul className="tabs-list">
                        {tabs.map((item) => (
                            <li
                                key={item.label}
                                className={`tab-item ${item === selectedTab ? "selected" : ""}`}
                                onClick={() => setSelectedTab(item)}
                            >
                                <span>
                                    <FontAwesomeIcon icon={item.icon} /> {item.label} {/* Render icon properly */}
                                </span>
                                {item === selectedTab && (
                                    <motion.div className="tab-underline" layoutId="underline" />
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <main className="content-container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            className="content-motion"
                            key={selectedTab ? selectedTab.label : "empty"}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="content-layout">
                                <div className="icon-container">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={selectedTab.icon} /> {/* Render selected icon */}
                                    </div>
                                </div>
                                <div className="text-container">
                                    <h2>Follow us on</h2>
                                    <h3>{selectedTab.label}</h3>
                                    <div className="follow-button-container">
                                        <button className="follow-button">Follow</button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}

export default Follow;
