import { FaGithub } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import ExperienceCell from "./ExperienceCell";
import StyledLink from "./StyledLink";

function App() {
    return (
        <div className="mx-auto bg-slate-900">
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0 bg-slate-900">
                <div className="lg:flex lg:justify-between lg:gap-4 bg-slate-900">
                    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:py-24">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-200 pb-3 sm:text-5xl lg:pb-4">
                            Samuel May
                        </h1>
                        <h2 className="text-slate-200 text-lg font-medium tracking-tight pb-4 sm:text-xl lg:pb-5">
                            Machine Learning {"\u2022"} Data Science {"\u2022"}{" "}
                            Full-Stack Development
                        </h2>
                        <p className="text-gray-400">
                            Ex-particle physicist and ex-quantitative finance
                            professional, now applying data science, machine
                            learning, and full-stack web development to complex
                            problems.
                        </p>
                        <ul className="ml-1 mt-8 flex items-center">
                            <li className="mr-8 shrink-0 text-3xl">
                                <FaGithub />
                            </li>
                            <li className="mr-8 shrink-0 text-3xl">
                                <FaGoogleScholar />
                            </li>
                            <li className="mr-8 shrink-0 text-3xl">
                                <FaLinkedin />
                            </li>
                        </ul>
                    </header>
                    <main className="pt-24 lg:w-[52%] lg:py-24">
                        <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                            <div className="mb-4">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                                    About
                                </h2>
                            </div>
                            <div className="text-gray-400">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Sapiente architecto vero
                                    veniam nihil, quas unde voluptatem, harum,
                                    magni quo corrupti est error ullam
                                    reiciendis incidunt explicabo? Culpa non
                                    corporis ex! Deserunt eligendi veniam
                                    inventore quod? A praesentium quo
                                    laboriosam! Quia, illo sapiente. Omnis quod
                                    illum, amet voluptatum fuga optio temporibus
                                    sequi culpa? Molestias iusto, dolorem
                                    distinctio et sunt autem obcaecati. A fugit
                                    dolor asperiores quod facere inventore in
                                    harum nulla neque, sit unde dolores ex
                                    corporis reprehenderit excepturi! Provident,
                                    tenetur eum? Error ex esse exercitationem
                                    praesentium corrupti mollitia iusto tempore.
                                </p>
                            </div>
                        </section>
                        <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                            <div className="mb-4">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                                    Experience
                                </h2>
                            </div>
                            <ExperienceCell
                                date="2022 - 2024"
                                title="Quantitative Developer"
                                company="London Stock Exchange Group (LSEG)"
                                description={[
                                    <p>
                                        Researcher and developer in the
                                        quantitative modeling team for the LSEG
                                        Yield Book, responsible for maintaining
                                        and enhancing the libraries containing
                                        its underlying quantitative finance
                                        models and analytics.
                                    </p>,
                                    <p>
                                        <span className="inline">
                                            Designed and implemented a boosted
                                            regression tree model to forecast
                                            hourly wind and solar power
                                            generation in the UK, resulting in
                                            the company placing 7th out of 66
                                            teams in the forecasting track of
                                            the{" "}
                                        </span>
                                        <StyledLink
                                            link="https://ieee-dataport.org/competitions/hybrid-energy-forecasting-and-trading-competition"
                                            text="2024 IEEE Hybrid Energy Forecasting and Trading Competition"
                                        />
                                        .
                                    </p>,
                                ]}
                                tags={[
                                    <p>C</p>,
                                    <p>C++</p>,
                                    <p>Python</p>,
                                    <p className="font-mono">xgboost</p>,
                                    <p className="font-mono">valgrind</p>,
                                    <p className="font-mono">gdb</p>,
                                ]}
                            />
                            <ExperienceCell
                                date="2021 - 2022"
                                title="Postdoctoral Researcher"
                                company="Boston University"
                                description={[
                                    <p>
                                        Built and integrated boosted decision
                                        tree models in a search for new physics
                                        (flavor-changing neutral currents,
                                        FCNCs), resulting in the tightest
                                        statistical limits ever placed (at the
                                        time) on the rate of FCNCs.
                                        <ul className="list-disc pl-6 py-1">
                                            <li>
                                                Publication:{" "}
                                                <StyledLink
                                                    link="https://inspirehep.net/literature/2111572"
                                                    text="Phys. Rev. Lett. 129 (2022) 3"
                                                />
                                                <span className="text-xs font-semibold text-slate-500 px-1 align-text-top">
                                                    [51 citations]
                                                </span>
                                            </li>
                                            <li>
                                                Conference Talk:{" "}
                                                <StyledLink
                                                    link="https://inspirehep.net/literature/1859748"
                                                    text="ICHEP 2020"
                                                />
                                            </li>
                                            <li>
                                                Conference Talk:{" "}
                                                <StyledLink
                                                    link="https://arxiv.org/abs/2206.01519"
                                                    text="Moriond 2022"
                                                />
                                            </li>
                                        </ul>
                                    </p>,
                                    <p>
                                        Co-led development of a suite of Higgs
                                        boson analysis tools (
                                        <StyledLink
                                            link="https://github.com/sam-may/HiggsDNA"
                                            text="HiggsDNA"
                                        />
                                        ), migrating legacy C++ code to Python,
                                        resulting in usage by 20+ physicists
                                        across multiple publications
                                    </p>,
                                    <p>
                                        Designed and led development of a Python
                                        library (
                                        <StyledLink
                                            link="https://github.com/AutoDQM/AutoDQM_ML"
                                            text="AutoDQM_ML"
                                        />
                                        ) utilizing principle component
                                        analysis, deep autoencoders, and
                                        statistical methods for anomaly
                                        detection in data from the CMS detector.
                                        <ul className="list-disc pl-6 py-1">
                                            <li>
                                                Publication:{" "}
                                                <StyledLink
                                                    link="https://inspirehep.net/literature/2871917"
                                                    text="Anomaly Detection for Automated Data Quality Monitoring in the CMS Detector"
                                                />
                                                <span className="text-xs font-semibold text-slate-500 px-1 align-text-top">
                                                    [Submitted to{" "}
                                                    <span className="italic">
                                                        Computing and Software
                                                        for Big Science
                                                    </span>
                                                    ]
                                                </span>
                                            </li>
                                        </ul>
                                    </p>,
                                ]}
                                tags={[
                                    <p>Python</p>,
                                    <p>C++</p>,
                                    <p className="font-mono">tensorflow</p>,
                                    <p className="font-mono">xgboost</p>,
                                ]}
                            />
                            <ExperienceCell
                                date="2016 - 2020"
                                title="Graduate Student Researcher"
                                company="University of California, San Diego"
                                description={[
                                    <p>
                                        For my Ph.D. thesis, I developed deep
                                        neural networks (LSTMs) to improve a
                                        measurement of the interaction between
                                        the Higgs boson and top quark.
                                        <ul className="list-disc pl-6 py-1">
                                            <li>
                                                Publication:{" "}
                                                <StyledLink
                                                    link="https://inspirehep.net/literature/1787821"
                                                    text="Phys. Rev. Lett. 125 (2020) 6"
                                                />
                                                <span className="text-xs font-semibold text-slate-500 px-1 align-text-top">
                                                    [216 citations]
                                                </span>
                                            </li>
                                        </ul>
                                    </p>,
                                    <p>
                                        Presented talk (ICNFP 2020) on ML
                                        applications in particle physics within
                                        the CMS experiment at the Large Hadron
                                        Collider.
                                        <ul className="list-disc pl-6 py-1">
                                            <li>
                                                Proceedings:{" "}
                                                <StyledLink
                                                    link="https://www.worldscientific.com/doi/10.1142/S0217751X22400206"
                                                    text="Machine Learning in CMS"
                                                />
                                            </li>
                                        </ul>
                                    </p>,
                                    <p>
                                        Built parallelized ETL data pipelines
                                        for processing petabytes of particle
                                        collision data on a distributed cluster
                                        of thousands of CPUs.
                                    </p>,
                                    <p>
                                        Awarded{" "}
                                        <StyledLink
                                            link="https://physics.ucsd.edu/fellowships-and-awards/ticho"
                                            text="Harold K. Ticho Fellowship"
                                        />
                                        .
                                    </p>,
                                ]}
                                tags={[
                                    <p>Python</p>,
                                    <p>C++</p>,
                                    <p className="font-mono">tensorflow</p>,
                                ]}
                            />
                            <ExperienceCell
                                date="2015 - 2016"
                                title="Undergraduate Researcher"
                                company="University of California, Los Angeles"
                                description={[
                                    <p>
                                        Performed research on deconvolution
                                        ("unfolding") methods used in high
                                        energy physics and their implications in
                                        searches for new physics.
                                        <ul className="list-disc pl-6 py-1">
                                            <li>
                                                Publication:{" "}
                                                <StyledLink
                                                    link="https://arxiv.org/abs/1607.07038"
                                                    text="Should unfolded histograms be used to test hypotheses?"
                                                />
                                                <span className="text-xs font-semibold text-slate-500 px-1 align-text-top">
                                                    [6 citations]
                                                </span>
                                            </li>
                                        </ul>
                                    </p>,
                                ]}
                                tags={[<p>C++</p>, <p>Python</p>]}
                            />
                        </section>
                        <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                            <div className="mb-4">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                                    Projects
                                </h2>
                            </div>
                            <div className="text-gray-400">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Sapiente architecto vero
                                    veniam nihil, quas unde voluptatem, harum,
                                    magni quo corrupti est error ullam
                                    reiciendis incidunt explicabo? Culpa non
                                    corporis ex! Deserunt eligendi veniam
                                    inventore quod? A praesentium quo
                                    laboriosam! Quia, illo sapiente. Omnis quod
                                    illum, amet voluptatum fuga optio temporibus
                                    sequi culpa? Molestias iusto, dolorem
                                    distinctio et sunt autem obcaecati. A fugit
                                    dolor asperiores quod facere inventore in
                                    harum nulla neque, sit unde dolores ex
                                    corporis reprehenderit excepturi! Provident,
                                    tenetur eum? Error ex esse exercitationem
                                    praesentium corrupti mollitia iusto tempore.
                                </p>
                            </div>
                        </section>
                        <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                            <div className="mb-4">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                                    Writing
                                </h2>
                            </div>
                            <div className="text-gray-400">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Sapiente architecto vero
                                    veniam nihil, quas unde voluptatem, harum,
                                    magni quo corrupti est error ullam
                                    reiciendis incidunt explicabo? Culpa non
                                    corporis ex! Deserunt eligendi veniam
                                    inventore quod? A praesentium quo
                                    laboriosam! Quia, illo sapiente. Omnis quod
                                    illum, amet voluptatum fuga optio temporibus
                                    sequi culpa? Molestias iusto, dolorem
                                    distinctio et sunt autem obcaecati. A fugit
                                    dolor asperiores quod facere inventore in
                                    harum nulla neque, sit unde dolores ex
                                    corporis reprehenderit excepturi! Provident,
                                    tenetur eum? Error ex esse exercitationem
                                    praesentium corrupti mollitia iusto tempore.
                                </p>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default App;
