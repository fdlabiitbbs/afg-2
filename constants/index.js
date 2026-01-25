import patent1 from "../assets/patent1.png";
import patent2 from "../assets/patent2.jpg";
import patent3 from "../assets/patent3.png";
import patent4 from "../assets/patent4.png";
import patent5 from "../assets/patent5.jpg";
import patent6 from "../assets/patent6.jpg";
import patent7 from "../assets/patent7.jpg";
import SamarendraPanda from "../assets/SamarendraPanda.jpg";
import VardhanMittal from "../assets/VardhanMittal.jpg";
import SidharthaSankar from "../assets/SidharthaSankar.jpg";
import RakeshNandan from "../assets/RakeshNandan.jpg";
import JangyadattaPasa from "../assets/JangyadattaPasa.jpg";
import PranavPP from "../assets/PranavPP.jpg";
import NitishKumar from "../assets/NitishKumar.jpg";
import KondareddyMourya from "../assets/KondareddyMourya.jpg";
import ChandanSethi from "../assets/ChandanSethi.jpg";
import Srikanth from "../assets/Srikanth.jpg";
import CoAxialJets from "../assets/CoAxialJets.png";
import FocusJets from "../assets/FocusJets.png";
import OptoMechSys from "../assets/OptoMechSys.png";
import ResDiseaseTransmisssion from "../assets/ResDiseaseTransmisssion.png";
import JetimpHT from "../assets/JetimpHT.jpg";
import BioInspired from "../assets/BioInspired.png";
import BluffBodies from "../assets/BluffBodies.png";
import ParticleImageVeocimetrySetup from "../assets/ParticleImageVeocimetrySetup.jpg";
import HotWireExptSetup from "../assets/HotWireExptSetup.jpg";
import WindTunnel from "../assets/WindTunnel.jpg";
import CAD_lab from "../assets/CAD_lab.jpg";
import OtherHardwares from "../assets/OtherHardwares.jpg";

export const ResearchFacilities = [
  {
    id: 1,
    title: "Subsonic Wind Tunnel",
    content:
      "A state-of-the-art wind tunnel facility is available with a test section size of 1 m × 1m and 4 m in length with a turbulence level of less than 0.5%. The wind tunnel is equipped with a gust generator and a passive grid. An active free-stream turbulence generator facility is also available. The wind tunnel can cater up to a free stream velocity of 50 m/s. The wind tunnel is equipped with various instruments to measure unsteady forces and moments.",
    image: WindTunnel,
  },
  {
    id: 2,
    title: "Time-Resolved Particle Image Velocimetry (TR-PIV)",
    content:
      "Time-Resolved Particle Image Velocimetry (TR-PIV) is an advanced experimental technique used in fluid dynamics research to measure fluid flow velocity over time. It involves the use of high-speed cameras to capture a sequence of images of tracer particles seeded in the fluid. The images are then analyzed to determine the particle displacement and velocity at various time intervals, providing a detailed insight into the fluid flow dynamics.",
    image: ParticleImageVeocimetrySetup,
  },
  {
    id: 3,
    title: "Hotwire Anemometry",
    content:
      "Hotwire anemometer is a sophisticated instrument used for measuring turbulence in fluid flows with exceptional temporal resolution. We have a dedicated four-channel fully automated Hotwire anemometer system with 3D traverse and various probes (Single wire, X wire, and Boundary layer)",
    image: HotWireExptSetup,
  },
  {
    id: 4,
    title: "Pressure Measurement System",
    content:
      "Our laboratory is equipped with various steady and unsteady pressure measurement systems to cater to various ranges of pressure measurement for subsonic and supersonic flows.",
  },
  {
    id: 5,
    title: "Infrared Camera",
    content:
      "A high-resolution Infrared camera is available to acquire two-dimensional temperature field measurements.",
  },
  {
    id: 6,
    title: "Computational Facility",
    content:
      "Multiple Dedicated computational servers with 64 and 48 cores are available to perform high-end Computational Fluid Dynamics Simulations.",
    image: CAD_lab,
  },
  {
    id: 7,
    title: "Other Hardware",
    content:
      "Various power amplifiers, analog filters, and Data acquisition systems are available for conducting customized experiments.",
    image: OtherHardwares,
  },
];

export const ResearchContent = [
  {
    id: 1,
    title: "Respiratory Disease Transmission",
    content: [
      "Our group is dedicated to advancing the understanding of respiratory disease transmission through a comprehensive approach incorporating experimental, simulation, and analytical tools. Our primary objective is to gain a comprehensive understanding of the complex and turbulent nature of respiratory disease transmission. Through our research, we aim to contribute to developing evidence-based guidelines for disease prevention and control, ultimately striving for a healthier and safer future for all.",

      "Within our research, we place a strong emphasis on evaluating the mechanisms associated with sneezing, coughing, and normal breathing, as these actions play a critical role in disease transmission. By meticulously examining these behaviors, we aim to uncover essential insights into the spread of respiratory diseases and identify effective strategies to mitigate their transmission. Furthermore, we diligently assess the efficacy of various protective equipment, including face masks and shields, in preventing the transmission of respiratory diseases. Through rigorous experimentation and analysis, we seek to determine the optimal design and usage of such protective measures.",

      "Our research also places special emphasis on the indoor environment. By investigating the dynamics of airflow and ventilation systems, we strive to identify strategies that promote optimum ventilation and minimize the risk of infection in indoor spaces.",
    ],
    image: ResDiseaseTransmisssion,
  },
  {
    id: 2,
    title: "Active Flow Control Devices",
    content: [
      "Many engineering applications like aerodynamics, electronics cooling, process industries and combustion require effective fluid utilization. Such applications demand an active flow control technique to manipulate the flow field to achieve the desired effects like turbulence enhancement and vortices. Existing flow control devices have limited scope due to their ineffectiveness in manipulating the flow field to achieve these desired effects.",

      "We proposed and demonstrated a Coaxial Synthetic Jet (CSJ) system for flow control application. By employing two piezo-electric diaphragms arranged coaxially with a 0° orientation angle, the system generates and controls flow jets to achieve the desired effect. These diaphragms can be independently operated at different amplitudes and frequencies without affecting the flow in either cavity. Moreover, the CSJ allows for adjusting phase differences between the diaphragms, ranging from 0° to 180°, providing versatile modulation capabilities. The compact design of the CSJ enables easy integration into electronic components, aerodynamics flow control, mixing, and combustion applications. With its ability to achieve different mass flux ratios, the CSJ represents a significant advancement in flow control technology.",

      "In another invention, we introduced an innovative focusing technique to enhance the strength of synthetic jets (SJs) in the far-field. SJs often suffer from reduced vortex coherence, limiting their wide applicability. This issue also affects Synthetic Jet Arrays (SJ arrays) composed of multiple adjacent actuators, where destructive interactions between opposite rotating vortices decrease coherence in the far field. The inventors propose focusing as a method to mitigate these destructive interactions in the near field, allowing vortices to evolve effectively, which results in achieving 50% enhancement in jet strength in the far field. Subsequently, constructive merging between vortices amplifies the jet strength in the far field. This novel focusing of SJs holds tremendous potential for enhancing electronic cooling, aerodynamics, and other applications.",
    ],
    image: CoAxialJets,
  },
  {
    id: 3,
    title: "Thermal Management",
    content: [
      "Thermal management is a critical aspect in various engineering applications, including electronics, automotive systems, industrial processes, and more. Efficient heat dissipation is essential to ensure optimal performance, reliability, and longevity of components. Flow control devices play a pivotal role in thermal management systems, regulating the flow of coolant or air to control temperatures effectively.",

      "We are developing novel flow control devices for thermal management, these include, Co-axial synthetic jets, synthetic jet array for steering & focusing, and flexible flaps. These devices can be tailored to make them suitable for near-field and far-field cooling applications, along with spot cooling features.",
    ],
    image: JetimpHT,
  },
  {
    id: 4,
    title: "Bio Inspired Propulsion",
    content: [
      "Bio-inspired propulsion is an innovative field that takes inspiration from nature's incredible diversity to design propulsion mechanisms for various applications. By emulating the exceptional locomotion abilities of animals and microorganisms, we aim to engineer more efficient, agile, and sustainable propulsion systems.",

      "Our group is trying to understand the propulsive performance of multiple pitching foils. Our study highlighted that side-by-side arrangement of foils in still medium results in the formation of a deflected jet. The extent of jet deflection depends on the phase difference between the airfoils' oscillations and the frequency of oscillation. At lower frequencies of oscillation for a given phase difference, the deflection angle is higher. We observed that the initially deflected jet undergoes a switching process towards the centerline position after specific periods of pitching. This occurs when the vortices from the lower airfoil completely interact with the upper airfoil. Overall, trust can be significantly enhanced by maintaining an optimum phase difference between the pitching foils.",

      "The addition of an auxiliary small foil can significantly enhance the propulsive performance of the main foil. Based on vorticity dynamics, three main flow regimes are identified, depending on the vortex structures shed by the airfoils. The auxiliary airfoil's presence significantly alters the main airfoil's hydrodynamic characteristics, leading to considerable enhancements in thrust (up to 23%) and efficiency (up to 49.2%) compared to an isolated airfoil.",

      "These results provide valuable insights into the pitching of side-by-side airfoils and the formation of deflected jets. Understanding these phenomena can have implications for engineering applications, particularly in the domain of bio-inspired propulsion systems.",
    ],
    image: BioInspired,
  },
  {
    id: 5,
    title: "Opto-Mechanical Sensors for Industrial Application",
    content: [
      "Harsh environments and high temperatures are the major factors responsible for the failure of sensors used in industrial applications, especially in process monitoring. We are engaged in the development of next-generation measurement devices for industrial applications.  These sensing devices are mainly based on Photonic Crystal fibre-based interferometers. High sensitivity, immunity to electromagnetic interference, and flexibility in design are some of the key features which make Photonic Crystal fibre-based systems suitable for a wide range of parameter sensing. Our group is currently working on developing sensors for flow rate, pressure, and temperature measurement for industrial applications ranging from large conduit pipes to micro channel flows. ",
    ],
    image: OptoMechSys,
  },
];

export const TechnologiesDeveloped = [
  {
    id: 1,
    title: "Vortex Cross-correlation Flowmeter",
    img: patent1,
    patentNo: "1763/MUM/2013 (Granted)",
    background:
      "Vortex flowmeters are extensively used in various industrial applications for fluid flow measurement. The performance of vortex flowmeters is significantly compromised by various factors inherent to industrial processes, such as flow pulsations, piping vibrations, and installation effects. These factors attract significant concern, particularly when operating under low Reynolds number flow conditions, where the vortex signal is relatively weak. Consequently, these effects impose limitations on the flowmeter's lower operating range.",
    novelty:
      "A novel dual sensor vortex cross-correlation technique is suggested and implemented to extend the lower operating range of the flowmeter. This novel dual flow rate estimation technique has demonstrated its robustness under low Reynolds number flow conditions with a remarkable turndown ratio of 1:66 as compared to 1:20 for conventional vortex flowmeters.",
  },
  {
    id: 2,
    title: "Vortex Flowmeter for Measuring a fluid flow rate",
    img: patent2,
    patentNo: "2459/MUM/2015 (Granted)",
    background:
      "Vortex flowmeters are widely employed in industrial applications to measure fluid flow. However, their performance is greatly affected by factors like flow pulsations, piping vibrations, and installation effects. Hence upstream and downstream straight pipes are required to achieve the required accuracy. However, this piping requirement is expensive and may not be feasible in industrial applications. ",
    novelty:
      "A novel contraction cone design is proposed and implemented, which makes the flowmeter insensitive to any upstream disturbances and hence doesn’t require any straight piping upstream and downstream of the flowmeter.",
  },
  {
    id: 3,
    title:
      "A System And A Method To Create And Modulate Coaxial Synthetic Jets",
    img: patent3,
    patentNo: "202131047214",
    background:
      "Many engineering applications like, aerodynamics, electronics cooling, and process industries and combustion requires effective utilization of fluids. Such applications demand an active flow control technique to manipulate the flow field to achieve the desired effects like turbulence enhancement and vortices. Existing flow control devices have limited scope due to their ineffectiveness in manipulating the flow field to achieve these desired effects. ",
    novelty:
      "We proposed and demonstrated a Coaxial Synthetic Jet (CSJ) system for flow control application. By employing two piezo-electric diaphragms arranged coaxially with a 0° orientation angle, the system generates and controls flow jets to achieve the desired effect. These diaphragms can be independently operated at different amplitudes and frequencies without affecting the flow in either cavity. Moreover, the CSJ allows for adjusting phase differences between the diaphragms, ranging from 0° to 180°, providing versatile modulation capabilities. The compact design of the CSJ enables easy integration into electronic components, aerodynamics flow control, mixing, and combustion applications. With its ability to achieve different mass flux ratios, the CSJ represents a significant advancement in flow control technology.",
  },
  {
    id: 4,
    title: "A system and method for focusing of jets",
    img: patent4,
    patentNo: "TEMP/E-1/38398/2023-KOL",
    background:
      "Many engineering applications like, aerodynamics, electronics cooling, and process industries and combustion requires effective utilization of fluids. Such applications demand an active flow control technique to manipulate the flow field to achieve the desired effects like turbulence enhancement and vortices. Existing flow control devices have limited scope due to their ineffectiveness in manipulating the flow field to achieve these desired effects.",
    novelty:
      "The present invention introduces an innovative focusing technique to enhance the strength of synthetic jets (SJs) in the far-field. SJs often suffer from reduced vortex coherence, limiting their wide applicability. This issue also affects synthetic jet arrays (SJ arrays) composed of multiple adjacent actuators, where destructive interactions between opposite rotating vortices decrease coherence in the far field. The inventors propose focusing as a method to mitigate these destructive interactions in the near field, allowing vortices to evolve effectively, which results in achieving 50% enhancement in jet strength in the far field. Subsequently, constructive merging between vortices amplifies the jet strength in the far field. This novel focusing of SJs holds tremendous potential for enhancing electronic cooling, aerodynamics, and other applications.",
  },
  {
    id: 5,
    title: "A System and a Method for Multipoint Sensing",
    img: patent5,
    patentNo: "TEMP E-1/59888/2020/KOL",
    background:
      "Detection of vibration at multiple locations has applications in industrial operations, tracking of physiological motions for health monitoring and environmental surveillance. OTDR, FBG and classical interferometry techniques have been proposed in this regard. However, the OTDR and classical interferometric techniques are limited by reduced sensitivity with length of fiber while FBGs are temperature intolerant and lack scalability. Hence, more effective and reliable sensing and detection techniques are required.",
    novelty:
      "In this invention we propose an optical multipoint sensing system made of in-line modal interferometers concatenated along a single fiber channel. Each modal interferometer acts as sensor probe to independently respond to external perturbation and produce a resultant signal comprising the frequency components of the perturbing fields. Real time detection of amplitude, frequency and instantaneous phase of mechanical vibrations/disturbance at different locations is feasible. Signal comparison analysis achieves localization of signal components about each probe.",
  },
  {
    id: 6,
    title:
      "A Model Interferometer Based System to Improve Performance of Vortex Flow meter",
    img: patent6,
    patentNo: "E-5/320/2019/KOL",
    background:
      "Optical fiber-based vibration sensors are a potential class of technology. Their market value is rapidly increasing due to their high sensitivity and the potential to design versatile probes to detect various parameters. In practical applications, the performance of such sensor probes is affected by the external field noise and low amplitude of the external field. In order to improve their real time performance in complex environments, the modulation or conditioning of their responses is a definite solution. In this regard, methods based on spatial signal processing or phase noise cancellation have been reported. However, amplification, attenuation of noise components and filtering using a single system remained elusive. ",
    novelty:
      "In the proposed invention, identical fiber modal interferometers are fabricated and combined parallelly, such that one arm acts as the sensing arm while the other acts as the reference arm. The sensing arm is exposed to an external measurand field while an equivalent field about the reference arm is applied in a controlled manner to modulate the resultant signal and achieve signal amplification, attenuation of unwanted frequencies, and enhance the signal-to-noise ratio of the output waveform. Real-time amplification, attenuation, and filtering of the dynamic optical response of sensor probes over a broad frequency range is feasible. The proposed system can be applied for conditioning the response of an optical fiber sensor deployed to detect external physical fields. ",
  },
  {
    id: 7,
    title:
      "A Rational System for Testing Resilient Modulus of Unbound Granular Materials",
    img: patent7,
    patentNo: "Patent Application Submitted",
    background:
      "Resilient Modulus (MR) of Unbound Granular Materials (UGMs) is a critical parameter in the Mechanistic-Empirical (M-E) pavement design procedure. In most countries empirical correlations are used to determine MR of unbound granular layers due to the complex, time- consuming and resource-intensive nature of Repeated Load Triaxial Tests (RLTT). Alternative set-ups such as Springbox, K-Mould and PUMA are available for determination of MR. But the confining pressure is not entirely user regulated in these set-ups as it is applied via spring or rubber. And none of the mentioned test set-ups consider the effect of subgrade stiffness on the MR of UGMs",
    novelty:
      "A simple and rational test set up has been developed for the determination of Resilient Modulus of Unbound Granular Materials (UGMs) that can simulate the elastic subgrade support during the test. Resilient Modulus Test of UGMs can be conducted without containing the specimen in rubber membranes at user regulated confining pressure. A single acting pneumatic cylinder provided at the bottom simulates the stiffness of the soil subgrade and can be varied depending on the type of soil. Specimen can be compacted and contained inside a split mould and confining stress can be applied through four pneumatic cylinders.",
  },
];

export const Conferences = [
  {
    id: 1,
    conferenceName:
      "34th National Conference on Fluid Mechanics and Fluid Power",
    info: "Numerical investigations on the vortex shedding of a circular cylinder as applicable to vortex flowmeter",
    attendees: "Vengopual A., Amit Agrawal and S. V. Prabhu",
    date: "December 10-12, 2007",
    place: "Ranchi, India",
  },
  {
    id: 2,
    conferenceName:
      "11th Asian International Conference on Fluid Machinery, Indian Institute of Technology",
    info: "Comparison of piezo-sensor and differential wall pressure sensor for vortex flowmeter application",
    attendees: "Venugopal, A., Amit Agrawal and S. V. Prabhu",
    date: "21-23 November 2011",
    place: "Chennai, India",
  },
  {
    id: 3,
    conferenceName:
      "IUTAM Symposium on Bluff Body Flows, Indian Institute of Technology",
    info: "Analysis of vortex flowmeter signal with empirical mode decomposition and autocorrelation function",
    attendees: "Venugopal, A., Amit Agrawal and S. V. Prabhu",
    date: "12-16 December 2011",
    place: "Kanpur, India",
  },
  {
    id: 4,
    conferenceName:
      "Proceedings of the Thirty Ninth National Conference on Fluid Mechanics and Fluid Power",
    info: "Experimental Investigations on Multi-hole Orifice meters under Fully Developed Flow Conditions",
    attendees: "Gajendra Kumar, Venugopal A., and S.V. Prabhu",
    date: "December 13-15, 2012",
    place: "SVNIT Surat, Gujarat, India",
  },
  {
    id: 5,
    conferenceName:
      "Towards Smarter and Greener Flow Measurement and Control, FCRI Global Conference and Exhibition",
    info: "Study on effects of wafer cone design and presence of upstream pipe bends on the performance of wafer conical flowmeter",
    attendees: "Kishore, B., Venugopal, A., and S. V. Prabhu",
    date: "18-20 January 2012",
    place: "Flow Control Research Institute, Palakkad, India",
  },
  {
    id: 6,
    conferenceName:
      "Towards Smarter and Greener Flow Measurement and Control, FCRI Global Conference and Exhibition",
    info: "Installation effects on the performance of vortex flowmeter with piezo-sensor",
    attendees: "Venugopal, A., Amit Agrawal and S. V. Prabhu",
    date: "18-20 January 2012",
    place: "Flow Control Research Institute, Palakkad, India",
  },
  {
    id: 7,
    conferenceName:
      "Towards Smarter and Greener Flow Measurement and Control, FCRI Global Conference and Exhibition",
    info: "Vortex cross correlation flowmeter",
    attendees: "Venugopal, A., Amit Agrawal and S. V. Prabhu",
    date: "18-20 January 2012",
    place: "Flow Control Research Institute, Palakkad",
  },
  {
    id: 8,
    conferenceName: "XX IMEKO World Congress",
    info: "Flow visualization studies on trapezoidal bluff for vortex flowmeter application",
    attendees: "Venugopal A., Amit Agrawal and S. V. Prabhu",
    date: "9-14 September 2012",
    place: "Busan, Republic of Korea",
  },
  {
    id: 9,
    conferenceName: "14th European Turbulence Conference",
    info: "Flow over a circular cylinder Placed Inside a Pipe",
    attendees: "Venugopal A., Amit Agrawal and S. V. Prabhu",
    date: "1-4 September 2013",
    place: "ENS Lyon France",
  },
  {
    id: 10,
    conferenceName:
      "ICFMA 2013: International Conference on Fluid Mechanics and Application",
    info: "Influence of after body shape on the performance of blunt shaped bodies as vortex shedders",
    attendees: "Lavish O., Venugopal, A., Amit Agrawal and S.V. Prabhu",
    date: "7-8 October 2013",
    place: "Paris, France",
  },
  {
    id: 11,
    conferenceName:
      "66th Annual Meeting of the American Physical Society's Division of Fluid Dynamics (DFD)",
    info: "Investigation on flow around cylinder with parallel slit in a circular pipe using flow visualization approach",
    attendees: "Venugopal, A., Lavish, O., Amit Agrawal and S. V. Prabhu",
    date: "24–26 November 2013",
    place: "Pittsburgh, United States",
  },
  {
    id: 12,
    conferenceName:
      "66th Annual Meeting of the American Physical Society's Division of Fluid Dynamics (DFD)",
    info: "Symmetric vortex shedding in the wake of circular cylinder placed inside a pipe",
    attendees: "Venugopal, A., Ordia, L., Agrawal, A., and Prabhu, S.V.",
    date: "24-26 November 2013",
    place: "Pittsburg, USA",
  },
  {
    id: 13,
    conferenceName:
      "5th International and 41th National Conference on Fluid Mechanics and Fluid Power",
    info: "Vortex Dynamics of Bluff Bodies Placed Inside a Pipe in Unsteady Laminar Regime",
    attendees: "Venugopal, A., Amit Agrawal and S. V. Prabhu",
    date: "December 2014",
    place: "IIT Kanpur, India",
  },
  {
    id: 14,
    conferenceName: "9th International Symposium on Fluid Flow Measurement",
    info: "CFD Analysis for Ultrasonic Flow Meter Accuracy Improvement in Flare Gas Applications",
    attendees:
      "Isaac Sadovnik, Jed Matson, Selvakumaran S, Venugopal A, Lei Sui",
    date: "14-17 April, 2015",
    place: "Washington DC USA",
  },
  {
    id: 15,
    conferenceName: "9th  International Symposium on Fluid Flow Measurement",
    info: "A Novel High Accuracy Delay Time Estimation Algorithm to Compute Vortex Convection Velocity",
    attendees: "Kaluri V Rangarao, Venugopal A",
    date: "14-17 April, 2015",
    place: "Washington DC USA",
  },
  {
    id: 16,
    conferenceName: "IEEE Region 10 Symposium (TENSYMP)",
    info: "gold-Fourier Kaluri method for estimating vortex shedding frequency",
    attendees: "Rangarao, Kaluri V., and Venugopal A.",
    date: "2016",
    place: "IEEE",
  },
  {
    id: 17,
    conferenceName:
      "7 th International and 45 th National Fluid Mechanics and Fluid Power Conference",
    info: "Numerical Simulation of Synthetic Jet Using OpenFOAM",
    attendees: "P. Samarendra, Gohil Trushar B., A. Venugopal",
    date: "10-12 December, 2018",
    place: "IIT Bombay, India",
  },
  {
    id: 18,
    conferenceName: "25th International Congress on Sound and Vibration",
    info: "Influence of Cross Flow on the Propagation and Steering of Acoustic Field",
    attendees: "Kushal Prasad Choudhary, V Arumuru,Y G Bhumkar",
    date: "8-12 July 2018",
    place: "Hiroshima, Japan",
  },
  {
    id: 19,
    conferenceName:
      "9th International Symposium on Fluid-Structure Interactions, Flow-Sound Interactions, Flow-Induced Vibration & Noise FIV2018: FSI2 & FIV+N",
    info: "On the Interaction of Separation Bubbles in the Near Wake of a Cylinder",
    attendees: "Bimlendu M., Sathyanarayana A, Venugopal A",
    date: "July 8-11, 2018",
    place: "Toronto, Canada",
  },
  {
    id: 20,
    conferenceName: "64th CONGRESS OF ISTAM",
    info: "Effect of Strouhal number on the flow field of Synthetic Jet",
    attendees: "P. Samarendra, Gohil Trushar B., A. Venugopal",
    date: "9-12 December, 2019",
    place: "IIT Bhubaneswar, India",
  },
  {
    id: 21,
    conferenceName:
      "In proceedings of the 26th National and 4th International ISHMT-ASTFE Heat and Mass Transfer Conference",
    info: "Impingement heat transfer enhancement by synthetic jet array",
    attendees: "Pasa, J., & Arumuru, V",
    date: "December 17-20, 2021",
    place: "IIT Madras, Chennai-600036, Tamil Nadu, India, Bengel house Inc",
  },
  {
    id: 22,
    conferenceName:
      "International Symposium on Fluids and Thermal Engineering (FLUTE-2021)",
    info: "Effect of natural and forced convection on the PCM based hybrid heat sink for cooling of electronic components",
    attendees: "R Nandan, V Arumuru, P Rath and M K Das",
    date: "22-23 July 2021",
    place: "Noida, India",
  },
  {
    id: 23,
    conferenceName:
      "Fluid Mechanics and Fluid Power (Vol. 3). FMFP 2021. Lecture Notes in Mechanical Engineering",
    info: "Effect of Velocity Ratio on Evolution of Vortices of a Coaxial jet. In: Bhattacharyya, S., Verma, S., Harikrishnan, A.R",
    attendees: "Samantaray, S.S., Arumuru, V",
    date: "2023",
    place: "Springer, Singapore",
  },
  {
    id: 24,
    conferenceName:
      "74 th Annual Meeting of the APS Division of Fluid Dynamics Abstracts (pp. H28-010)",
    info: "Evolution of Coaxial Synthetic Jet with Different Velocity Ratios",
    attendees: "Panda, S., Gohil, T., Arumuru, V. (2021)",
    date: "November 21 – 23, 2021",
    place: "Phoenix Convention Center - Phoenix, Arizona",
  },
  {
    id: 25,
    conferenceName:
      "In proceedings of the 49th National and 9th International conference on Fluid Mechanics and Fluid Power (FMFP)",
    info: "Proper orthogonal decomposition analysis of flow characterization of adjacent synthetic jets",
    attendees: "Pasa, J., Khandelwal, G., & Arumuru, V. (2021)",
    date: "December 14-16, 2022",
    place: "IIT Roorkee, Roorkee-247667, Uttarkhand, India",
  },
  {
    id: 26,
    conferenceName:
      "9th International and 49th National Conference on Fluid Mechanics and Fluid Power (FMFP)",
    info: "Experimental study of PCM and synthetic jet based hybrid heat sink with cylindrical fins for electronic cooling",
    attendees: "R Nandan, V Arumuru, P Rath, MK Das.",
    date: "December 14-1, 2022",
    place: "Roorkee, India",
  },
  {
    id: 27,
    conferenceName:
      "9 th International and 49 th National Fluid Mechanics and Fluid Power Conference",
    info: "Numerical Investigation on the Flow Behaviour of a Coaxial Synthetic Jet in a Quiescent Environment",
    attendees:
      "Samarendra Panda, Jangyadatta Pasa, Trushar B. Gohil, and Venugopal Arumuru",
    date: "14-16 December, 2022",
    place: "IIT Roorkee, India",
  },
  {
    id: 28,
    conferenceName:
      "27th National and 5th International ISHMT-ASTFE Heat and Mass Transfer Conference - IHMTC 2023",
    info: "Heat Transfer Aspect of an Independently Controlled Coaxial Synthetic Jet",
    attendees: "Chandan S, Samrendra P, Venugopal A.",
    date: "14-17 December, 2023",
    place: "IIT Patna, India",
  },
  {
    id: 29,
    conferenceName:
      "27th National and 5th International ISHMT-ASTFE Heat and Mass Transfer Conference - IHMTC 2023",
    info: "Temperature control of electronic gadgets using PCM and synthetic jet based hybrid heat sink",
    attendees: "Rakesh N, Venugopal A, Mihir D.",
    date: "14-17 December, 2023",
    place: "IIT Patna, India",
  },
  {
    id: 30,
    conferenceName:
      "27th National and 5th International ISHMT-ASTFE Heat and Mass Transfer Conference - IHMTC 2023",
    info: "A Way of Improving the Heat Removal Uniformity Using Pulsating Air Jet Impingement on a Dimpled Surface",
    attendees: "M Dnyanesh, Venugopal A, Y Harekrishna",
    date: "14-17 December, 2023",
    place: "IIT Patna, India",
  },
  {
    id: 31,
    conferenceName:
      "27 th National and 5th International ISHMT-ASTFE Heat and Mass Transfer Conference",
    info: "Photonic Crystal Fiber Interferometer for Flow Sensing and Measurement",
    attendees: "Arvind Kumar Maurya, Venugopal Arumuru, Rajan Jha",
    date: "14-17 December, 2023",
    place: "IIT Patna, India",
  },
  {
    id: 32,
    conferenceName:
      "FIV2024: FSI2 & FIV + N, the 10th International Symposium on Fluid-Structures Interaction, Fluid-Sound Interactions, Flow-Induced Vibration, and Noise",
    info: "Active Flow control of Square Cylinder Using Synthetic Jet Array",
    attendees: "Vardhan Mittal, Venugopal Arumuru",
    date: "2-5 July, 2024",
    place: "Vibrant Iguaçu Falls, Brazil",
  },
];

export const Journals = [
  {
    ID: 1,
    Authors: [<b>Venugopal A</b>, "Amit Agrawal", "S. V. Prabhu"],
    Title:
      "Influence of blockage and upstream disturbances on the performance of a vortex flowmeter with a trapezoidal bluff body",
    Journal: "Measurement",
    Volume_Issue_Year_Pages: ["43", "4", "2010", "603-616"],
    DOI: "https://doi.org/10.1016/j.measurement.2010.01.010",
    impactFactor: 5.6,
  },
  {
    ID: 2,
    Authors: [<b>Venugopal A</b>, "Amit Agrawal", "S. V. Prabhu"],
    Title:
      "Influence of blockage and shape of a bluff body on the performance of vortex flowmeter with wall pressure measurement",
    Journal: "Measurement",
    Volume_Issue_Year_Pages: ["44", "5", "2011", "954-964"],
    DOI: "https://doi.org/10.1016/j.measurement.2011.02.015",
    impactFactor: 5.6,
  },
  {
    ID: 3,
    Authors: [<b>Venugopal A</b>, "Amit Agrawal", "S. V. Prabhu"],
    Title: "Review on vortex flowmeter-Designer perspective",
    Journal: "Sensors and Actuators A: Physical",
    Volume_Issue_Year_Pages: ["170", "1", "2011", "8-23"],
    DOI: "https://doi.org/10.1016/j.sna.2011.05.034",
    impactFactor: 4.291,
  },
  {
    ID: 4,
    Authors: [<b>Venugopal A</b>, "Amit Agrawal", "S. V. Prabhu"],
    Title:
      "Frequency detection in vortex flowmeter for low Reynolds number using piezoelectric sensor and installation effects",
    Journal: "Sensors and Actuators A: Physical",
    Volume_Issue_Year_Pages: ["184", "", "2012", "78-85"],
    DOI: "https://doi.org/10.1016/j.sna.2012.07.004",
    impactFactor: 4.291,
  },
  {
    ID: 5,
    Authors: ["Borkar, Kishor", <b>Venugopal A</b>, "S. V. Prabhu"],
    Title:
      "Pressure measurement technique and installation effects on the performance of wafer cone design",
    Journal: "Flow Measurement and Instrumentation",
    Volume_Issue_Year_Pages: ["30", "", "2013", "52-59"],
    DOI: "https://doi.org/10.1016/j.flowmeasinst.2013.01.005",
    impactFactor: 2.42,
  },
  {
    ID: 6,
    Authors: ["Borkar, Kishor", <b>Venugopal A</b>, "S. V. Prabhu"],
    Title:
      "Study on the design and performance of a Bi-directional cone flowmeter",
    Journal: "Flow Measurement and Instrumentation",
    Volume_Issue_Year_Pages: ["34", "", "2013", "151-159"],
    DOI: "https://doi.org/10.1016/j.flowmeasinst.2013.09.005",
    impactFactor: 2.42,
  },
  {
    ID: 7,
    Authors: [<b>Venugopal A</b>, "Amit Agrawal", "S. V. Prabhu"],
    Title:
      "Performance evaluation of piezoelectric and differential pressure sensor for vortex flowmeters",
    Journal: "Measurement",
    Volume_Issue_Year_Pages: ["50", "", "2014", "10-18"],
    DOI: "https://doi.org/10.1016/j.measurement.2013.12.018",
    impactFactor: 5.6,
  },
  {
    ID: 8,
    Authors: [<b>Venugopal A</b>, "Amit Agrawal", "S. V. Prabhu"],
    Title: "Note: A Vortex cross-correlation flowmeter with improved turndown ratio",
    Journal: "Review of Scientific Instruments",
    Volume_Issue_Year_Pages: ["85", "6", "2014", "066109"],
    DOI: "https://doi.org/https://doi.org/10.1063/1.4884078",
    impactFactor: 1.843,
  },
  {
    ID: 9,
    Authors: [<b>Venugopal A</b>, "Amit Agrawal", "S. V. Prabhu"],
    Title:
      "Spanwise correlations in the wake of a circular cylinder and a normal plate Placed inside a pipe",
    Journal: "Journal of Fluids and Structures",
    Volume_Issue_Year_Pages: ["54", "", "2015", "536-547"],
    DOI: "https://doi.org/10.1016/j.jfluidstructs.2014.12.008",
    impactFactor: 3.482,
  },
  {
    ID: 10,
    Authors: ["Lavish O.", <b>Venugopal A</b>, "Amit Agrawal", "S. V. Prabhu"],
    Title: "Vortex shedding characteristics of a cylinder with a parallel slit placed in a circular pipe",
    Journal: "Journal of Visualization",
    Volume_Issue_Year_Pages: ["2017", "", "", "1-13"],
    DOI: "https://doi.org/https://doi.org/10.1007/s12650-016-0398-y",
    impactFactor: 1.974,
  },
  {
    ID: 11,
    Authors: [<b>Venugopal A</b>, "Amit Agrawal", "S. V. Prabhu"],
    Title:
      "Investigations on turbulent flow around bluff bodies placed in a circular pipe",
    Journal: "Journal of Fluids Engineering, ASME -2017",
    Volume_Issue_Year_Pages: ["139", "4", "2017", "041204"],
    DOI: "https://doi.org/10.1115/1.4035465",
    impactFactor: 1.998,
  },
  {
    ID: 12,
    Authors: ["Kapil M", <b>Venugopal A</b>, "Amit Agrawal", "S. V. Prabhu"],
    Title:
      "Improvement in the performance of the vortex flowmeter using contraction cone",
    Journal: "Measurement",
    Volume_Issue_Year_Pages: ["111", "", "2017", "316-332"],
    DOI: "https://doi.org/10.1016/j.measurement.2017.07.050",
    impactFactor: 5.6,
  },
  {
    ID: 13,
    Authors: [<b>Venugopal A</b>, "Amit Agrawal", "S. V. Prabhu"],
    Title: "Vortex Dynamics of Trapezoidal bluff body placed inside a pipe",
    Journal: "Journal of Turbulence",
    Volume_Issue_Year_Pages: ["19", "", "2018", "1-24"],
    DOI: "https://doi.org/10.1080/14685248.2017.1377345",
    impactFactor: 2.31,
  },
  {
    ID: 14,
    Authors: [<b>Venugopal A</b>, "Amit Agrawal", "S. V. Prabhu"],
    Title:
      "On the Linearity, Turndown Ratio and Shape of the Bluff Body for Vortex Flowmeter",
    Journal: "Measurement",
    Volume_Issue_Year_Pages: ["137", "", "2019", "477-483"],
    DOI: "https://doi.org/10.1016/j.measurement.2019.02.001",
    impactFactor: 5.6,
  },
  {
    ID: 15,
    Authors: [
      "Choudhary, Kushal Prasad",
      <b>Venugopal A</b>,
      "Yogesh G. Bhumkar",
    ],
    Title: "Numerical simulation of beam drift effect in ultrasonic flow-meter",
    Journal: "Measurement",
    Volume_Issue_Year_Pages: ["146", "", "2019", "705-717"],
    DOI: "https://doi.org/10.1016/j.measurement.2019.06.044",
    impactFactor: 5.6,
  },
  {
    ID: 16,
    Authors: ["Liladhar J", <b>Venugopal A</b>],
    Title:
      "Numerical Investigation on Heat Transfer and Flow Characteristics of a Confined Circular Cylinder with Slit",
    Journal: "Journal of Thermal Science and Engineering Applications: ASME",
    Volume_Issue_Year_Pages: ["2019"],
    DOI: "https://doi.org/10.1115/1.4046061",
    impactFactor: 1.879,
  },
  {
    ID: 17,
    Authors: [
      <b>Venugopal A</b>,
      "Jitendra Narayan Dash",
      "Dhrubaraj Dora",
      "Rajan Jha",
    ],
    Title: "Vortex shedding optical Flowmeter based on Photonic Crystal Fiber",
    Journal: "Scientific Reports",
    Volume_Issue_Year_Pages: ["9", "1", "2019", "8313"],
    DOI: "https://doi.org/10.1038/s41598-019-40464-2",
    impactFactor: 4.996,
  },
  {
    ID: 18,
    Authors: ["H Yadav", <b>Venugopal A</b>, "SV PRABHU", "A Agrawal"],
    Title:
      "Study on connecting tube dynamics for transient pressure measurement",
    Journal: "Sadhana",
    Volume_Issue_Year_Pages: ["45", "1", "2020"],
    DOI: "https://doi.org/10.1007/s12046-020-1310-y",
    impactFactor: 1.214,
  },
  {
    ID: 19,
    Authors: [<b>Venugopal A</b>, "A Kodam", "R Jha"],
    Title:
      "Bi-Directional Interferometric Flowmeter with Linear Sensitivity and Large Dynamic Range",
    Journal: "IEEE Transactions on Instrumentation and Measurement",
    Volume_Issue_Year_Pages: ["2020"],
    DOI: "https://doi.org/10.1109/TIM.2020.3014468",
    impactFactor: 5.332,
  },
  {
    ID: 20,
    Authors: ["Mukesh K", <b>Venugopal A</b>],
    Title:
      "Jet deflection by two side-by-side arranged hydrofoils pitching in a quiescent fluid",
    Journal: "AIP Advances",
    Volume_Issue_Year_Pages: ["10", "10", "2020", "105128"],
    DOI: "https://doi.org/10.1063/5.0026263",
    impactFactor: 1.697,
  },

  {
    ID: 21,
    Authors: [<b>Venugopal A</b>, "Amit Agrawal", "S. V. Prabhu"],
    Title:
      "Experimental investigations on flow over a circular cylinder placed in a circular pipe",
    Journal: "Physics of Fluids",
    Volume_Issue_Year_Pages: ["32", "9", "2020", "095122"],
    DOI: "https://doi.org/10.1063/5.0019725",
    impactFactor: 4.6,
  },
  {
    ID: 22,
    Authors: [<b>Venugopal A</b>, "J Pasa", "SS Samantaray"],
    Title:
      "Experimental visualization of sneezing and efficacy of face masks and shields",
    Journal: "Physics of Fluids",
    Volume_Issue_Year_Pages: ["32", "11", "2020", "115129"],
    "Featured and Most Read Article": true,
    DOI: "https://doi.org/10.1063/5.0030101",
    impactFactor: 4.6,
  },
  {
    ID: 23,
    Authors: ["H Gupta", <b>Venugopal A</b>, "R Jha"],
    Title:
      "Industrial Fluid Flow Measurement using Optical Fiber Sensors: A review",
    Journal: "IEEE Sensors",
    Volume_Issue_Year_Pages: ["2021"],
    DOI: "https://doi.org/10.1109/JSEN.2020.3045506",
    impactFactor: 4.325,
  },
  {
    ID: 24,
    Authors: ["Thummar, Dhruv", "Jaganmohan Reddy", <b>Venugopal A</b>],
    Title: "Machine Learning for Vortex Flowmeter Design",
    Journal: "IEEE Transactions on Instrumentation and Measurement",
    Volume_Issue_Year_Pages: ["2021"],
    DOI: "https://doi.org/10.1109/TIM.2021.3128692",
    impactFactor: 5.332,
  },
  {
    ID: 25,
    Authors: ["D Mirikar", "S Palanivel", <b>Venugopal A</b>],
    Title:
      "Droplet fate, efficacy of face mask, and transmission of virus-laden droplets inside a conference room",
    Journal: "Physics of Fluids",
    Volume_Issue_Year_Pages: ["33", "6", "2021", "065108"],
    DOI: "https://doi.org/10.1063/5.0054110",
    impactFactor: 4.6,
  },
  {
    ID: 26,
    Authors: [<b>Venugopal A</b>, "J Pasa", "SS Samantaray"],
    Title: "Double masking protection vs. comfort—A quantitative assessment",
    Journal: "Physics of Fluids",
    Volume_Issue_Year_Pages: ["33", "7", "2021", "077120"],
    DOI: "https://doi.org/10.1063/5.0058571",
    impactFactor: 4.6,
  },
  {
    ID: 27,
    Authors: [<b>Venugopal A</b>, "J Pasa", "SS Samantaray", "VS Varma"],
    Title:
      "Breathing, virus transmission, and social distancing—an experimental visualization study",
    Journal: "AIP Advances",
    Volume_Issue_Year_Pages: ["11", "4", "2021", "045205"],
    "Featured and Most Read Article": true,
    DOI: "https://doi.org/10.1063/5.0045582",
    impactFactor: 1.697,
  },
  {
    ID: 28,
    Authors: [
      "Nandan, Rakesh",
      <b>Venugopal A</b>,
      "Prasenjit Rath",
      "Mihir Kumar Das",
    ],
    Title:
      "Experimental study of PCM based hybrid heat sink for electronic cooling",
    Journal: "Journal of Enhanced Heat Transfer",
    Volume_Issue_Year_Pages: ["29", "3", "2022"],
    DOI: "https://doi.org/10.1615/JEnhHeatTransf.2022040469",
    impactFactor: 2.449,
  },
  {
    ID: 29,
    Authors: ["Ambolkar, Manthan", <b>Venugopal A</b>],
    Title:
      "Propulsive performance of a pitching foil in a side-by-side arrangement with auxiliary pitching foil",
    Journal: "Journal of Fluids and Structures",
    Volume_Issue_Year_Pages: ["110", "2022", "103537"],
    DOI: "https://doi.org/10.1016/j.jfluidstructs.2022.103537",
    impactFactor: 3.482,
  },
  {
    ID: 30,
    Authors: [
      "Chatterjee, Kalipada",
      <b>Venugopal A</b>,
      "Dhananjay Patil",
      "Rajan Jha",
    ],
    Title:
      "Multipoint monitoring of amplitude, frequency, and phase of vibrations using concatenated modal interferometers",
    Journal: "Scientific Reports",
    Volume_Issue_Year_Pages: ["12", "1", "2022", "1-10"],
    DOI: "https://doi.org/10.1109/JLT.2021.3051951",
    impactFactor: 4.996,
  },
  {
    ID: 31,
    Authors: ["Madapati, Nikhilesh", <b>Venugopal A</b>],
    Title: "T‐joint Micromixer Coupled with Deforming Diaphragm",
    Journal: "Chemical Engineering & Technology",
    Volume_Issue_Year_Pages: ["2022"],
    DOI: "https://doi.org/10.1002/ceat.202200036",
    impactFactor: 2.215,
  },
  {
    ID: 32,
    Authors: ["Pasa, Jangyadatta", "Samarendra Panda", <b>Venugopal A</b>],
    Title:
      "Influence of Strouhal number and phase difference on the flow behaviour of a synthetic jet array",
    Journal: "Physics of Fluids",
    Volume_Issue_Year_Pages: ["34", "6", "2022", "065118"],
    DOI: "https://doi.org/10.1063/5.0095115",
    impactFactor: 4.6,
  },
  {
    ID: 33,
    Authors: ["Panda, Samarendra", "Trushar B. Gohil", <b>Venugopal A</b>],
    Title:
      "Influence of Mass Flux Ratio on the Evolution of Coaxial Synthetic Jet",
    Journal: "Physics of Fluids",
    Volume_Issue_Year_Pages: ["34", "9", "2022", "093601"],
    DOI: "https://doi.org/10.1063/5.0101727",
    impactFactor: 4.6,
  },
  {
    ID: 34,
    Authors: ["Panda, Samarendra", "Trushar B. Gohil", <b>Venugopal A</b>],
    Title: "Evolution of Flow Structure from a Coaxial Synthetic Jet",
    Journal: "International Journal of Mechanical Sciences",
    Volume_Issue_Year_Pages: ["2022"],
    DOI: "https://doi.org/10.1016/j.ijmecsci.2022.107588",
    impactFactor: 6.772,
  },
  {
    ID: 35,
    Authors: ["Mudavath, Vishnu", <b>Venugopal A</b>],
    Title:
      "Impingement heat transfer characteristics of nozzles with inclined exits",
    Journal: "Experimental Heat Transfer",
    Volume_Issue_Year_Pages: ["2023"],
    DOI: "https://doi.org/10.1080/08916152.2023.2166162",
    impactFactor: 3.272,
  },
  {
    ID: 36,
    Authors: ["Panda, Samarendra", "Jangyadatta Pasa", <b>Venugopal A</b>],
    Title:
      "Characterisation of an Independently Controlled Coaxial Synthetic Jet",
    Journal: "Sensors and Actuators A: Physical",
    Volume_Issue_Year_Pages: ["2023"],
    DOI: "https://doi.org/10.1016/j.sna.2023.114469",
    impactFactor: 4.291,
  },
  {
    ID: 37,
    Authors: [
      <b>Venugopal A</b>,
      "Kartik Rajput",
      "Rakesh Nandan",
      "Pransenjit Rath",
      "Mihir Das",
    ],
    Title:
      "A novel synthetic jet based heat sink with PCM filled cylindrical fins for efficient electronic cooling",
    Journal: "Journal of Energy Storage",
    Volume_Issue_Year_Pages: ["58", "2023", "106376"],
    DOI: "https://doi.org/10.1016/j.est.2022.106376",
    impactFactor: 9.4,
  },
  {
    ID: 38,
    Authors: [
      "Kusuluri, Rajendra",
      "Dnyanesh Mirikar",
      "Silambarasan Palanivel",
      <b>Venugopal A</b>,
    ],
    Title:
      "Risk assessment of airborne virus transmission in an intensive care unit due to single and sequential coughing",
    Journal: "Risk Analysis",
    Volume_Issue_Year_Pages: ["2023"],
    DOI: "https://doi.org/10.1111/risa.14133",
    impactFactor: 4.302,
  },
  {
    ID: 39,
    Authors: ["Arvind Maurya", "Ritesh Kumar", <b>Venugopal A</b>, "Rajan Jha"],
    Title:
      "An all-optical system for transit time estimation in fluids using single source and detector",
    Journal: "IEEE Transactions on Instrumentation and Measurement",
    Volume_Issue_Year_Pages: ["2023"],
    DOI: "",
    impactFactor: 5.332,
  },
  {
    ID: 40,
    Authors: ["Pasa, Jangyadatta", "Samarendra Panda", <b>Venugopal A</b>],
    Title:
      "Focusing of jet from synthetic jet array using non-linear phase delay",
    Journal: "Physics of Fluids",
    Volume_Issue_Year_Pages: ["35", "5", "2023"],
    DOI: "https://doi.org/10.1063/5.0148794",
    impactFactor: 4.6,
  },
  {
    ID: 41,
    Authors: [<b>Venugopal A</b>, "Kusuluri", "Rajendra", "Dnyanesh Mirikar"],
    Title:
      "Role of Face Masks and Ventilation Rates in Mitigating Respiratory Disease Transmission in ICU",
    Journal: "Scientific Reports (Nature Publication)",
    Volume_Issue_Year_Pages: ["2023"],
    impactFactor: 4.99,
  },
  {
    ID: 42,
    Authors: ["M Dnyanesh", <b>Venugopal A</b>, "Y Harekrishna"],
    Title:
      "A numerical investigation into thermo-fluid characteristics of pulsating jet impingement on a dimpled surface",
    Journal: "Physics of Fluids",
    Volume_Issue_Year_Pages: ["2023"],
    DOI: "https://doi.org/10.1063/5.0180656",
    impactFactor: 4.6,
  },
  {
    ID: 43,
    Authors: ["N Kumar", "S Kumar", <b>Venugopal A</b>, "YG Bhumkar"],
    Title:
      "Analysis of non-uniform laminar flow past a circular cylinder on the flow and sound field evolution using direct numerical simulation approach",
    Journal: "Acta Mechanica",
    Volume_Issue_Year_Pages: ["2023"],
    DOI: "https://doi.org/10.1007/s00707-023-03735-8",
    impactFactor: 2.7,
  },
  {
    ID: 44,
    Authors: ["S Merrylin", "P Samrendra", <b>Venugopal A</b>],
    Title:
      "A Computational Study of Particle Dynamics in Synthetic Jet Flow Field",
    Journal: "Physics of Fluids",
    Volume_Issue_Year_Pages: ["2023", "35", "97128"],
    DOI: "https://doi.org/10.1063/5.0161143",
    impactFactor: 4.6,
  },
  {
    ID: 45,
    Authors: ["Vardhan Mittal", <b>Venugopal A</b>],
    Title:
      "Torque generation using synthetic jet actuators",
    Journal: "Journal of Process Mechanical Engineering",
    Volume_Issue_Year_Pages: ["2024", "8"],
    DOI: "https://doi.org/10.1177/09544089241230267",
    impactFactor: 2.4,
  },
  {
    ID: 46,
    Authors: ["Jangyadatta Pasa", "Neeruganti Venkata Shathrughnu", <b>Venugopal A</b>],
    Title:
      "Impingement Heat Transfer Enhancement by Focusing the Jet from Synthetic Jet Array",
    Journal: "International Communications in Heat and Mass Transfer",
    Volume_Issue_Year_Pages: ["152", "2024", "12"],
    DOI: "https://doi.org/10.1016/j.icheatmasstransfer.2024.107306",
    impactFactor: 7,
  },
  {
    ID: 47,
    Authors: ["Nandan R", <b>Venugopal A</b>, "Das M"],
    Title:
      "An experimental investigation into PCM-integrated heat sinks under varying duty cycles.",
    Journal: "Journal of Energy Storage",
    Volume_Issue_Year_Pages: ["97", "2024", "112905"],
    DOI: "https://doi.org/10.1016/j.est.2024.112905 ",
    impactFactor: 8.9,
  },
  {
    ID: 48,
    Authors: ["Sethi C", "Pasa J", "Panda S", <b>Venugopal A</b>],
    Title:
      "Influence of mass flux ratio and phase difference on impingement heat transfer characteristics of coaxial synthetic jet.",
    Journal: "International Journal of Heat and Mass Transfer",
    Volume_Issue_Year_Pages: ["234","126075", "2024"],
    DOI: "https://doi.org/10.1016/j.ijheatmasstransfer.2024.126075",
    impactFactor: 5,
  },
  {
    ID: 49,
    Authors: ["Kalipada Chatterjee", "Carlos Marques", <b>Venugopal A</b>, "Subrat Sahu", "Jan Nedoma", "Rajan Jha"],
    Title:
      "Integrated Interferometers' System for In-situ Real Time Optical Signal Modulation.",
    Journal: "Photonics Research",
    Volume_Issue_Year_Pages: ["2024"],
    DOI: "https://doi.org/10.1364/PRJ.527410 ",
    impactFactor: 6.6,
  },
  {
    ID: 50,
    Authors: ["Vardhan Mittal", <b>Venugopal A</b>],
    Title:
      "Control of the von Kármán vortex street with focusing and vectoring of jet using synthetic jet array",
    Journal: "Physics of Fluids ",
    Volume_Issue_Year_Pages: ["2024", "36", "103630"],
    DOI: "https://doi.org/10.1063/5.0233485",
    impactFactor: 4.10,
  },
  {
    ID: 51,
    Authors: ["Nandan Rakesh", <b>Venugopal A</b>, "Mihir Kumar Das"],
    Title:
      "Temperature control of electronic gadgets using novel heat sink",
    Journal: "International Communications in Heat and Mass Transfer",
    Volume_Issue_Year_Pages: ["159", "2024", "108101"],
    DOI: "https://doi.org/10.1016/j.icheatmasstransfer.2024.108101",
    impactFactor: 6.4,
  },
  {
    ID: 52,
    Authors: ["PP", "Pranav", "Pranay Prabha Badvelu", <b>Venugopal A</b>],
    Title:
      "Influence of amplitude and harmonic frequencies on the velocity of Faraday superwalkers.",
    Journal: "Physics of Fluids",
    Volume_Issue_Year_Pages: ["2024", "36", "12"],
    DOI: "",
  },
  {
    ID: 53,
    Authors: ["Vishnu Mudavath", <b>Venugopal A</b>],
    Title:
      "Impingement heat transfer characteristics of nozzles with inclined exits",
    Journal: "Experimental Heat Transfer",
    Volume_Issue_Year_Pages: ["2024","37","541-556"],
    DOI: "https://doi.org/10.1080/08916152.2023.2166162",
    impactFactor:2.9,
  },
  {
    ID: 54,
    Authors: ["Jangyadatta Pasa", <b>Venugopal A</b>],
    Title:
      "Phase Difference Effects on Synthetic Jet Array Flow: A Proper Orthogonal Decomposition Study",
    Journal: "Physics of Fluids",
    Volume_Issue_Year_Pages: ["2025"],
  },
];

export const sponsoredProjects = [
  {
    id: 1,
    Project_Name:
      "Design and Development of Steering and Focusing Synthetic Jet Array",
    Funding_Agency: "CRG, DST",
    Funding_Amount: "INR 43.2 lakhs",
  },
  {
    id: 2,
    Project_Name:
      "Indigenous Development of a novel low-cost Solar PV panel self-cleaning device",
    Funding_Agency: "DST (Department of Science and Technology)",
    Funding_Amount: "INR 42.5 lakhs",
  },
  {
    id: 3,
    Project_Name:
      "Fiber Reinforced cotton & polyester photonics fabrics with thermal comfort and illumination functionality",
    Funding_Agency: "Ministry of Textile",
    Funding_Amount: "INR 72 lakhs",
  },
  {
    id: 4,
    Project_Name:
      "Indigenous Development of Controlled Interferometry Based High Temperature Industrial Flow Measurement device",
    Funding_Agency: "Device Development Program, DST",
    Funding_Amount: "INR 79 lakhs",
  },
  {
    id: 5,
    Project_Name: "Centre for Wing Design",
    Funding_Agency: "FIST, DST",
    Funding_Amount: "INR 265 lakhs",
  },
  {
    id: 6,
    Project_Name:
      "Design and Development of Hybrid 'PCM-Synthetic Jet' based Heat Sink for Electronic Cooling",
    Funding_Agency: "DST",
    Funding_Amount: "INR 38 lakhs",
    Status: "Completed",
  },
  {
    id: 7,
    Project_Name: "Design and Development of Jet Pumps",
    Funding_Agency: "Aeronautical Development Agency",
    Funding_Amount: "INR 13 lakhs",
    Status: "Completed",
  },
  {
    id: 8,
    Project_Name: "Design & Development of Synthetic Jet",
    Funding_Agency: "SERB: ECR",
    Funding_Amount: "INR 32.1 lakhs",
    Status: "Completed",
  },
  {
    id: 9,
    Project_Name: "Design of Multipath Ultrasonic flow meter",
    Funding_Agency: "IIT Bhubaneswar",
    Funding_Amount: "INR 10 lakhs",
    Status: "Completed",
  },
];

export const consultancyProjects = [
  {
    id: 1,
    Project_Name:
      "Fitness Monitoring System and Pro diagnostics of LURO BURNER – Paradeep Phosphate Limited",
    Funding_Agency: "Paradeep Phosphate Limited",
    Funding_Amount: "INR 14.2 lakhs",
  },
  {
    id: 2,
    Project_Name: "Design Review for Multi-variable Industrial Sensor",
    Funding_Agency: "Honeywell Technology Solutions Lab Pvt. Ltd",
    Funding_Amount: "INR 5.1 Lakhs",
    Status: "Completed",
  },
  {
    id: 3,
    Project_Name: "Design of Miniature Ultrasonic Sensor",
    Funding_Agency: "General Electric",
    Funding_Amount: "INR 2.95 Lakhs",
    Status: "Completed",
  },
  {
    id: 4,
    Project_Name: "Design of Coriolis Mass Flowmeter",
    Funding_Agency: "Honeywell Technology Solutions Lab Pvt. Ltd",
    Funding_Amount: "INR 13 Lakhs",
    Status: "Completed",
  },
  {
    id: 5,
    Project_Name: "Design and Development of Flow Measurement Solution",
    Funding_Agency: "Honeywell Technology Solutions Lab Pvt. Ltd",
    Funding_Amount: "INR 21.5 Lakhs",
    Status: "Completed",
  },
];

export const Education = [
  {
    id: 1,
    degree:
      "Ph.D., Thermal & Fluids, Indian Institute of Technology Bombay, India (2014)",
  },
  {
    id: 2,
    degree:
      "M.Tech, Energy Science, Indian Institute of Technology Bombay, India (2008)",
  },
  {
    id: 3,
    degree:
      "B.E, Mechanical, National Institute of Technology Raipur, India (2006)",
  },
];

export const Awards = [
  {
    id: 1,
    award: "SERB International Research Experience (SIRE) Fellowship - 2022",
  },
  {
    id: 2,
    award:
      "Directors Commendation for Outstanding Research 2020-21 IIT Bhubaneswar",
  },
  {
    id: 3,
    award: "INAE Young Engineer Award – 2019",
  },
  {
    id: 4,
    award: "INAE Young Associate - 2019",
  },
  {
    id: 5,
    award:
      "Distinguished Teaching Award Overall Best Performance 2018-19, IIT Bhubaneswar",
  },
  {
    id: 6,
    award: "Teaching Excellence Award: 2017-18, IIT Bhubaneswar",
  },
  {
    id: 7,
    award: "IIT Bombay Excellence in Thesis Work Award -2015",
  },
  {
    id: 8,
    award: "American Physical Society /DFD Travel Grant – 2013",
  },
  {
    id: 9,
    award:
      "Department of Science and Technology & CSIR India, Travel Grant (2013)",
  },
  {
    id: 10,
    award:
      "Forbes Marshall Fellowship 2006-2008, IIT Bombay (Postgraduate Studies)",
  },
  {
    id: 11,
    award:
      "Merit-Based Scholarship from S.E.C. Railway, India (2003, 2004 & 2005) for graduate Studies",
  },
];

export const StudentNames = [
  {
    id: 1,
    name: "Sidhartha Sankar Samantaray",
    degree: "Ph.D.",
    description:
      "Mr. Sidharth S S is trying to understand dynamics of a pulsating coaxial jet with emphasis on impingement application. He is using Hotwire anemometer, Particle image velocimetry and Infrared thermography to obtain flow field and temperature information to understand the physics of this configuration.",
    image: SidharthaSankar,
  },
  {
    id: 2,
    name: "Jangyadatta Pasa",
    degree: "Ph.D.",
    description:
      "Mr. Jangyadatta Pasa has recently submitted his thesis on “Investigations on Steering and Focusing of Jet from Synthetic Jet Array” He proposed and demonstrated a new focusing phenomenon with synthetic jet array and analyzed the flow field numerically. He also characterized the jet using hotwire anemometer and Infrared thermography.",
    image: JangyadattaPasa,
  },
  {
    id: 3,
    name: "Rakesh Nandan",
    degree: "Ph.D.",
    description:
      "Mr. Rakesh N is working on the design and development of hybrid heat sink by combining the active and passive cooling systems for thermal management of electronic devices. His research work is mainly focused on integrating Synthetic jet into the phase change material based heat sink to make it compact, effective and efficient.",
    image: RakeshNandan,
  },
  {
    id: 4,
    name: "Nitish Kumar",
    degree: "Ph.D.",
    description:
      "Mr. Nitish is working on compact and efficient active flow control devises for thermal management and aerodynamics flow control.",
    image: NitishKumar,
  },
    {
    id: 5,
    name: "Manapalli Srikanth",
    degree: "Ph.D.",
    description:
      "Mr Srikanth's research investigates the physics of pulsed coaxial jets and their unsteady flow structures. He analyzes jet interaction, vortex dynamics, and mixing enhancement under pulsed operation. These insights support application in combustion.",
    image: Srikanth,
  },
  {
    id: 6,
    name: "Chandan Sethi",
    degree: "M. Tech",
    description:
      "Mr. Chandan S is exploring the potential of coaxial synthetic jets for thermal management of electronics using experimental tools like hotwire anemometer and infrared thermography.",
    image: ChandanSethi,
  },
  {
    id: 7,
    name: "Pranav P P",
    degree: "M. Tech",
    description:
      "Mr. Pranav P P area of research is hydrodynamic instability, He is developing an experimental facility to quantify these instabilities and use them effectively for various engineering application.",
    image: PranavPP,
  },
  {
    id: 8,
    name: "Vardhan Mittal",
    degree: "B. Tech",
    description:
      "Mr. Vardhan M is working on synthetic jet-based flow control devices for boundary layer transition control and flow separation mitigation to improve aerodynamics performance of airfoils.",
    image: VardhanMittal,
  },
  {
    id: 9,
    name: "Kondareddy Mourya",
    degree: "B.Tech",
    description:
      "Mr. Konareddy M is exploring the possibility of thin foil flexible structures for flow control and thermal management using numerical and experimental tools.",
    image: KondareddyMourya,
  },
];

export const AlumniNames = [
  {
    id: 1,
    name: "Samarendra Panda",
    degree: "Ph.D.",
    description:
      "Dr. Samarendra Panda, recently defended his thesis on novel coaxial synthetic jet. He developed a novel coaxial synthetic jet (CSJ) actuator having independent actuation facility is developed. The flow field is analysed in a quiescent environment numerically and experimentally with hot-wire anemometry. He has one patent application along with five international journals. At present he is a Post Doc fellow at IIT Bombay.",
    image: SamarendraPanda,
  },
];

export const CorousalImages = [
  {
    id: 1,
    image: CoAxialJets,
  },
  {
    id: 2,
    image: FocusJets,
  },
  {
    id: 3,
    image: OptoMechSys,
  },
  {
    id: 4,
    image: ResDiseaseTransmisssion,
  },
  {
    id: 5,
    image: BluffBodies,
  },
  {
    id: 6,
    image: JetimpHT,
  },
];

export const NewsFeed = [
  {
    id: 1,
    title:
      "Congratulations to Vardhan Mittal for securing a Ph.D. position at Purdue University, USA.",
    date: "August 8, 2021",
  },
  {
    id: 2,
    title:
      "Congratulations to Varun Jaganath for securing a Ph.D. position at Texas A & M University, USA.",
    date: "August 1, 2021",
  },
  {
    id: 3,
    title:
      "Congratulations to Vardhan Mittal for receiving the B. K. De Memorial Award and the Dinesh Memorial Award for the Most Innovative B. Tech Project of IIT Bhubaneswar",
    date: "August 1, 2021",
  },
  {
    id: 4,
    title:
      "Congratulations to Dr. Jangyadatta Pasa for securing a postdoctoral position at Harbin Institute of Technology",
    date: "August 1, 2021",
  },
  {
    id: 5,
    title:
      "Dr. Venugopal Arumuru has been selected as a Technical Committee Member of IMEKO (International Measurements Confederation).",
    date: "August 1, 2021",
  },
  {
    id: 6,
    title:
      "Dr. Venugopal Arumuru delivered a keynote talk during the 11th International and 51st National Conference on Fluid Mechanics and Fluid Power, Dec 2024.",
    date: "August 1, 2021",
  },
];
