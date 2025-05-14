"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, FileText, Mail, MapPin, Clock } from "lucide-react"
import { useEffect } from "react"

export default function WorkshopPage() {
  // Add smooth scrolling for internal links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        e.preventDefault()
        const id = anchor.hash.substring(1)
        const element = document.getElementById(id)

        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Offset for the sticky header
            behavior: "smooth",
          })

          // Update URL without scrolling
          window.history.pushState(null, "", anchor.hash)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#3E921E] to-[#FFBF00] text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">1st Stability Workshop</h1>
          <p className="text-xl md:text-2xl mb-6">
            In conjunction with the 7th International Conference on Advances in Financial Technologies (AFT)
          </p>
          <p className="text-lg md:text-xl">7th of October 2025 • CMU, Pittsburgh, PA, USA</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="font-semibold text-[#3E921E]">STABILITY 2025</span>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-[#3E921E] transition-colors">
                About
              </a>
              <a href="#call-for-papers" className="hover:text-[#3E921E] transition-colors">
                Call for Papers
              </a>
              <a href="#dates" className="hover:text-[#3E921E] transition-colors">
                Important Dates
              </a>
              <a href="#committee" className="hover:text-[#3E921E] transition-colors">
                Committee
              </a>
              <a href="#submission" className="hover:text-[#3E921E] transition-colors">
                Submission
              </a>
              <a href="#program" className="hover:text-[#3E921E] transition-colors">
                Program
              </a>
            </div>
            <a href="https://easychair.org/conferences/?conf=stability2025">
              <Button className="bg-[#FFBF00] hover:bg-[#FFBF00]/90 text-black">Submit your Paper</Button>
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* About Section */}
        <section id="about" className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#3E921E]">About the Workshop</h2>
            <div className="max-w-3xl mx-auto">
              <p className="mb-4">
                In an era marked by rapid changes and unpredictable challenges, 
                the concept of stability stands as a
                cornerstone across diverse disciplines — 
                ranging from natural sciences and engineering to social sciences. 
                The Stability Workshop aims to serve as a premier 
                interdisciplinary platform for 
                researchers, practitioners, and policymakers to 
                explore, discuss, and innovate on the 
                multifaceted and broadly construed aspects of stability.
              </p>
              <p className="mb-4">
                In this first edition, the focus is on blockchain technologies, smart contracts and their applications, such as cryptocurrencies and decentralized finance. These technologies and applications emerged as a reaction to the Global Financial Crisis and offered hope of a more stable foundation for the world economy. And, yet, to fully realize their potential and achieve widespread adoption, much work remains to be done. We seek to break silos across competing blockchains and promote a fruitful flow of information to speed up the research and development of these emerging technologies and applications.
              </p>
            </div>
          </div>
        </section>

        {/* Call for Papers */}
        <section id="call-for-papers" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#3E921E]">Call for Papers</h2>
            <div className="max-w-3xl mx-auto">
              <p className="mb-6">
                We invite high-quality original papers on the theme of stability, with a focus on blockchains,
                cryptocurrencies and decentralized finance and economics, including but not limited to the following
                topics:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8 text-sm">
                <ul className="list-disc list-inside space-y-2">
                  <li>Stablecoins</li>
                  <li>Fiat-backed stablecoins</li>
                  <li>Crypto-backed stablecoins</li>
                  <li>Unbacked stablecoins</li>
                  <li>Stablecoin protocols</li>
                  <li>Central Bank Digital Currencies (CBDCs)</li>
                  <li>Decentralized Identity</li>
                  <li>Staking</li>
                  <li>(Automated) market making</li>
                  <li>Liquidity pools</li>
                  <li>Stable liquidity pools</li>
                  <li>Prediction markets</li>
                  <li>Tokenomics</li>
                  <li>Volatility of cryptocurrencies</li>
                </ul>
                <ul className="list-disc list-inside space-y-2">
                  <li>Stabilization of native cryptocurrencies</li>
                  <li>Stability, sustainability and security of oracles</li>
                  <li>Lending and borrowing</li>
                  <li>Real-world asset tokenization</li>
                  <li>Smart contract security</li>
                  <li>Formal specification and verification of protocols</li>
                  <li>Programming languages for smart contracts</li>
                  <li>Regulatory aspects of stablecoins</li>
                  <li>Governance and regulation of decentralized finance</li>
                  <li>Blockchain sustainability</li>
                  <li>Blockchain scalability approaches and their stability</li>
                  <li>Cryptography and privacy for social stability</li>
                  <li>Incidents of financial and economic instability</li>
                </ul>
              </div>
              <p className="mb-4">
                Submitted papers must not be simultaneously submitted to another conference or journal.
              </p>
              <p>
                All accepted papers will be published in the workshop proceedings. Depending on the number and quality
                of submissions, we may seek publication in a special issue of a journal.
              </p>
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section id="dates" className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#3E921E]">Important Dates</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="mb-4 border-l-4 border-l-[#FFBF00]">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Calendar className="h-8 w-8 text-[#3E921E]" />
                    <div>
                      <p className="font-semibold">Paper Submission Deadline</p>
                      <p className="text-muted-foreground">23rd of July 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="mb-4 border-l-4 border-l-[#FFBF00]">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Calendar className="h-8 w-8 text-[#3E921E]" />
                    <div>
                      <p className="font-semibold">Notification of Acceptance</p>
                      <p className="text-muted-foreground">7th of August 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="mb-4 border-l-4 border-l-[#FFBF00]">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Calendar className="h-8 w-8 text-[#3E921E]" />
                    <div>
                      <p className="font-semibold">Camera-Ready Submission</p>
                      <p className="text-muted-foreground">7th of September 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-[#FFBF00]">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Calendar className="h-8 w-8 text-[#3E921E]" />
                    <div>
                      <p className="font-semibold">Workshop Date</p>
                      <p className="text-muted-foreground">7th of October 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <p className="mt-6 text-sm text-center text-muted-foreground">
                All deadlines are at 23:59 AoE (Anywhere on Earth)
              </p>
            </div>
          </div>
        </section>

        {/* Program Committee */}
        <section id="committee" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#3E921E]">Program Committee</h2>
            <div className="max-w-5xl mx-auto">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#3E921E]">Workshop Chair</h3>
                <div className="grid md:grid-cols-1 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="font-semibold">Dr. Bruno Woltzemlogel Paleo</p>
                      <p className="text-sm text-muted-foreground">The Stable Order</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#3E921E]">Program Committee Members</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Dr. Javier Álvarez Cid-Fuentes</p>
                    <p className="text-sm text-muted-foreground">Rootstock</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Ohad Asor</p>
                    <p className="text-sm text-muted-foreground">Tau</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Reginaldo Beraba</p>
                    <p className="text-sm text-muted-foreground">Mysten Labs, Sui</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Ignacio Calderon de la Barça</p>
                    <p className="text-sm text-muted-foreground">Wolfram Blockchain Labs (Canada)</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Prof. Claudio Di Ciccio</p>
                    <p className="text-sm text-muted-foreground">Utrecht University (Netherlands)</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Prof. Marta Chavarría Romero</p>
                    <p className="text-sm text-muted-foreground">Universitat Pompeu Fabra (Spain)</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Dr. Hongzhou Chen</p>
                    <p className="text-sm text-muted-foreground">CKB Eco Fund</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Alexander Chepurnoy</p>
                    <p className="text-sm text-muted-foreground">Ergo</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Prof. Bernardo David</p>
                    <p className="text-sm text-muted-foreground">IT-University of Copenhagen (Denmark)</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Prof. Murdoch Jamie Gabbay</p>
                    <p className="text-sm text-muted-foreground">Heriot-Watt University and Eharo (UK)</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Prof. Matthias Güdemann</p>
                    <p className="text-sm text-muted-foreground">Munich University of Applied Sciences (Germany)</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Dr. Dmytro Kaidalov</p>
                    <p className="text-sm text-muted-foreground">Cardano</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Dr. Karl Kreder</p>
                    <p className="text-sm text-muted-foreground">Quai</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Prof. Mario Larangeira</p>
                    <p className="text-sm text-muted-foreground">Tokyo Institute of Technology (Japan)</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Prof. Kristijan Lenac</p>
                    <p className="text-sm text-muted-foreground">University of Rijeka (Croatia)</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Prof. Timer Libal</p>
                    <p className="text-sm text-muted-foreground">Enidia AI and University of Luxembourg (Luxembourg)</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Prof. Juliana de Melo Bezerra</p>
                    <p className="text-sm text-muted-foreground">
                      Brazilian Air Force's Aeronautics Institute of Technology (Brazil)
                    </p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Leon Molchanovsky</p>
                    <p className="text-sm text-muted-foreground">BGIN and HSBC (England, UK)</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Prof. Ali Nejadmalayeri</p>
                    <p className="text-sm text-muted-foreground">University of Wyoming (USA)</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Prof. Roman Oliynykov</p>
                    <p className="text-sm text-muted-foreground">
                      Cardano and V.N.Karazin Kharkiv National University (Ukraine)
                    </p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Prof. Serguei Popov</p>
                    <p className="text-sm text-muted-foreground">IOTA and University of Porto (Portugal)</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Prof. Giselle Reis</p>
                    <p className="text-sm text-muted-foreground">CMU (Qatar)</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Prof. Fahad Saleh</p>
                    <p className="text-sm text-muted-foreground">University of Florida (USA)</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Dr. Marcelo Salhab Brogliato</p>
                    <p className="text-sm text-muted-foreground">Hathor Network</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Prof. Alfred Taudes</p>
                    <p className="text-sm text-muted-foreground">
                      Vienna University of Economics and Business (Austria)
                    </p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Prof. Simon Thompson</p>
                    <p className="text-sm text-muted-foreground">
                      University of Kent (UK) and Eötvös Loránd University (Hungary)
                    </p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Dr. Mihaela Ulieru</p>
                    <p className="text-sm text-muted-foreground">
                      SingularityNET and Impact Institute for the Digital Economy (USA)
                    </p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Dr. Hernán Vanzetto</p>
                    <p className="text-sm text-muted-foreground">Informal Systems, Cosmos</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Prof. Philip Wadler</p>
                    <p className="text-sm text-muted-foreground">University of Edinburgh (Scotland, UK)</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Dr. Shai Wyborski</p>
                    <p className="text-sm text-muted-foreground">Kaspa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Paper Submission */}
        <section id="submission" className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#3E921E]">Paper Submission Instructions</h2>
            <div className="max-w-3xl mx-auto">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-[#3E921E]">Submission Guidelines</CardTitle>
                  <CardDescription>Please follow these guidelines carefully</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <FileText className="h-5 w-5 text-[#FFBF00] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Paper Format</p>
                        <p className="text-muted-foreground">
                          Papers must be submitted in PDF format. <br />
                          Ideally, papers should be prepared using LaTeX and using the LIPIcs style. <br />
                          Please contact the organizers, if you need or would like to use different tools or styles.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <FileText className="h-5 w-5 text-[#FFBF00] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Length</p>
                        <p className="text-muted-foreground">
                          Papers should be up to 20 pages in length, excluding references. <br />
                          Short papers are welcome.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <FileText className="h-5 w-5 text-[#FFBF00] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Paper Types</p>
                        <p className="text-muted-foreground">
                          The following types of papers are welcome: theoretical papers, empirical papers, system
                          descriptions, protocol descriptions, systematizations of knowledge (SoK), case studies. For
                          other types of papers, please contact the organizers.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <FileText className="h-5 w-5 text-[#FFBF00] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Submission System</p>
                        <p className="text-muted-foreground">
                          All papers must be submitted through the EasyChair conference management system.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <FileText className="h-5 w-5 text-[#FFBF00] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Originality</p>
                        <p className="text-muted-foreground">
                          Submissions must be original work and must not be under review at another venue at the time of
                          submission.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <a href="https://easychair.org/conferences/?conf=stability2025">
                  <Button className="bg-[#3E921E] hover:bg-[#3E921E]/90 text-white">Submit Your Paper</Button>
                </a>
              </div>

              <div className="mt-8 p-4 bg-[#FFBF00]/10 border border-[#FFBF00] rounded-md">
                <h3 className="font-semibold mb-2">Templates and Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://submission.dagstuhl.de/styles/download-tag/lipics/v2021.1.3/authors/zip"
                      className="text-[#3E921E] hover:underline flex items-center"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      LIPIcs Style (LaTeX)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.dagstuhl.de/en/publishing/series/details/LIPIcs"
                      className="text-[#3E921E] hover:underline flex items-center"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      LIPIcs's Author Instructions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Program */}
        <section id="program" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#3E921E]">Workshop Program</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-center mb-8 text-muted-foreground">
                The detailed program will be announced after the paper acceptance notifications. Below is the
                preliminary schedule.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#3E921E] flex items-center">
                  <Calendar className="h-5 w-5 mr-2" /> 7th of October 2025
                </h3>
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      <div className="flex p-4">
                        <div className="w-24 flex-shrink-0 flex items-center text-[#FFBF00] font-medium">
                          <Clock className="h-4 w-4 mr-1" /> 9:00-9:30
                        </div>
                        <div>
                          <p className="font-medium">Opening Remarks</p>
                          <p className="text-sm text-muted-foreground">Workshop Chairs</p>
                        </div>
                      </div>
                      <div className="flex p-4">
                        <div className="w-24 flex-shrink-0 flex items-center text-[#FFBF00] font-medium">
                          <Clock className="h-4 w-4 mr-1" /> 9:30-10:30
                        </div>
                        <div>
                          <p className="font-medium">Session 1: Talks</p>
                          <p className="text-sm text-muted-foreground">TBA</p>
                        </div>
                      </div>
                      <div className="flex p-4">
                        <div className="w-24 flex-shrink-0 flex items-center text-[#FFBF00] font-medium">
                          <Clock className="h-4 w-4 mr-1" /> 10:30-11:00
                        </div>
                        <div>
                          <p className="font-medium">Coffee Break</p>
                        </div>
                      </div>
                      <div className="flex p-4">
                        <div className="w-24 flex-shrink-0 flex items-center text-[#FFBF00] font-medium">
                          <Clock className="h-4 w-4 mr-1" /> 11:00-12:30
                        </div>
                        <div>
                          <p className="font-medium">Session 2: Talks</p>
                          <p className="text-sm text-muted-foreground">TBA</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Registration */}
        <section id="registration" className="py-12 md:py-16 bg-[#3E921E]/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#3E921E]">Registration</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Registration for the workshop is free. <br />
              To register, please email{" "}
              <a href="mailto:workshop@stability.nexus" className="text-[#3E921E] hover:underline">
                workshop@stability.nexus
              </a>
              .
            </p>
            <p className="mb-8 max-w-2xl mx-auto">
              Participation in AFT from 8th to 10th of October is optional. <br />
              To register for AFT, visit{" "}
              <a href="https://aftconf.github.io/aft25/attend.html" className="text-[#3E921E] hover:underline">
                AFT's Registration
              </a>
              .
            </p>
            <p className="mb-8 max-w-2xl mx-auto">
              If you may need a visa to attend the workshop, please contact the organizers.
            </p>
            <p className="mb-8 max-w-2xl mx-auto">
              If you would like to participate in the workshop but, for any reason, 
              you are unable or unwilling to come to CMU, USA, on the 7th of October, please contact the organizers.
            </p>
          </div>
        </section>

        {/* Venue */}
        <section id="venue" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#3E921E]">Venue</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-[#FFBF00]" /> Carnegie Mellon University
                </h3>
                <p className="mb-4">
                  5000 Forbes Ave
                  <br />
                  Pittsburgh, PA 15213
                  <br />
                  USA
                </p>
                <p className="mb-4">
                  Carnegie Mellon University is located in the Oakland neighborhood of Pittsburgh, easily accessible by
                  public transportation and within walking distance of many hotels.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden h-64 border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.4386942171403!2d-79.9459!3d40.4454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f21f58679a9f%3A0x88716b461fc4daf4!2sCarnegie%20Mellon%20University!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carnegie Mellon University Map"
                  aria-label="Map showing Carnegie Mellon University location in Pittsburgh"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-[#3E921E]">Contact Us</h2>
            <div className="max-w-md mx-auto">
              <p className="mb-6">
                For any questions regarding the workshop, <br />
                please contact the organizing committee:
              </p>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Mail className="h-5 w-5 text-[#FFBF00]" />
                    <a href="mailto:workshop@stability.nexus" className="text-[#3E921E] hover:underline">
                      workshop@stability.nexus
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Users className="h-5 w-5 text-[#FFBF00]" />
                    <a href="https://discord.gg/RYarrEN2yB" className="text-[#3E921E] hover:underline">
                      https://discord.gg/RYarrEN2yB
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#3E921E] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">STABILITY 2025</h3>
              <p className="text-sm opacity-80">
                Stability Workshop
                <br />
                7th of October 2025
                <br />
                Pittsburgh, PA, USA
              </p>
            </div>
            <div className="text-right">
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a href="#call-for-papers" className="hover:underline">
                    Call for Papers
                  </a>
                </li>
                <li>
                  <a href="#dates" className="hover:underline">
                    Important Dates
                  </a>
                </li>
                <li>
                  <a href="#submission" className="hover:underline">
                    Paper Submission
                  </a>
                </li>
                <li>
                  <a href="#program" className="hover:underline">
                    Program
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-white/20 text-center text-sm opacity-70">
            <p>© {new Date().getFullYear()} Stability Workshop. CC-BY-NC-SA.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

