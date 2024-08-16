import './App.css';
import TACRequestTab from './TACRequestTab';
import { TACProvider } from './TACGenerate';
import HostDeploy from './components/host/deploy.js';
import Public from './components/public/index.js';
import HostCandidate from './components/host/candidate.js';
import HostElection from './components/host/election.js';
import Voter from './components/voter/index.js';
import HostTac from './components/host/tac.js';


function App() {
    // const [abi, setABI] = useState(null);
    // const [bytecode, setBytecode] = useState(null);
    // const [deployedAddress, setDeployedAddress] = useState("");
    // const [contractReader, setContractReader] = useState(null);
    // const [contractWriter, setContractWriter] = useState(null);

    // const [electionTime, setElectionTime] = useState(null);
    // const [electionStatus, setElectionStatus] = useState(null);

    // const [candidateName, setCandidateName] = useState("");
    // const [candidateId, setCandidateId] = useState("");
    // const [candidates, setCandidates] = useState([]);

    // const [tac_host, setTAC_host] = useState([]);
    // const [tac_voter, setTAC_voter] = useState(null);
    // const [tacStatus, setTAC_Status] = useState(null);
    // const [tacList, setTAC_list] = useState([]);

    // const [weeks, setWeeks] = useState("");
    // const [days, setDays] = useState("");
    // const [hours, setHours] = useState("");
    // const [minutes, setMinutes] = useState("");
    // const [seconds, setSeconds] = useState("");
    // const [loading, setLoading] = useState(false);
    // const [errorMessage, setErrorMessage] = useState("");
    // const [successMessage, setSuccessMessage] = useState("");

    // const [show_days, setShowDays] = useState(null);
    // const [show_hours, setShowHours] = useState(null);
    // const [show_minutes, setShowMins] = useState(null);
    // const [show_seconds, setShowSecs] = useState(null);

    // const contract_abi = abi;
    // const contract_bytecode = bytecode;
    const activeTab = 'tac-request';
    
    // // // Fetch abi, bytecode & deployed contract address (if available)
    // useEffect(() => {
    //     async function fetchAbiAndBytecode() {
    //         try {
    //             const abiResponse = await fetch('/contractABI.json');
    //             const abiFile = await abiResponse.json();
    //             setABI(abiFile.abi);
        
    //             const bytecodeResponse = await fetch('/contractBytecode.json');
    //             const bytecodeFile = await bytecodeResponse.json();
    //             setBytecode(bytecodeFile.bytecode);
    
    //         } catch (error) {
    //             console.error('Error fetching JSON files:', error);
    //         }
    //     }

    // //     // Retrieve the deployed address from local storage when the component mounts
    //     const savedAddress = sessionStorage.getItem('deployedAddress');
    //     if (savedAddress) { setDeployedAddress(savedAddress); }

    //     fetchAbiAndBytecode();
    // }, []);

    // // Load contract
    // useEffect(() => {
    //     async function loadContract() {
    //         if (typeof window.ethereum !== 'undefined') {
    //             try {
    //                 const provider = new ethers.BrowserProvider(window.ethereum);
    //                 const signer = await provider.getSigner();
    
    //                 const contractInstanceReader = new ethers.Contract(deployedAddress, contract_abi, provider);
    //                 setContractReader(contractInstanceReader);
    
    //                 const contractInstanceWriter = new ethers.Contract(deployedAddress, contract_abi, signer);
    //                 setContractWriter(contractInstanceWriter);
    
    //             } catch (err) {
    //                 console.error("Error loading contract:", err);
    //             }
    //         } else {
    //             console.error("Ethereum wallet not found");
    //           }
    //       }
    //       if(deployedAddress) { loadContract(); }
    //   }, [deployedAddress, contract_abi]);

    // // Fetch Candidate(s), election status, time & TAC(s)
    // useEffect(() => {
    //     async function fetchCandidates() {
    //         if (contractReader) {
    //             try {
    //                 setLoading(true);
    //                 const candidatesData = await contractReader.getCandidates();
    //                 setCandidates(candidatesData);
    //             } catch (error) {
    //                 console.error("Error fetching candidates:", error);
    //                 setErrorMessage("Error fetching candidates. Please try again later.");
    //             } finally {
    //                 setLoading(false);
    //             }
    //         }
    //     }

    //     async function fetchTAC() {
    //         if (contractReader) {
    //             try {
    //                 setLoading(true);
    //                 const tacData = await contractReader.getTAC();
    //                 setTAC_list(tacData);
    //             } catch (error) {
    //                 console.error("Error fetching TAC", error);
    //                 setErrorMessage("Error fetching TAC from blockchain database.");
    //             } finally {
    //                 setLoading(false);
    //             }
    //         }
    //     }

    //     async function fetchElectionTime() {
    //         if (contractReader) {
    //             try {
    //                 const timeRemaining = await contractReader.getElection_time();
    //                 setElectionTime(timeRemaining.toString());
    //             } catch (error) {
    //                 console.error("Error fetching election time:", error);
    //                 setErrorMessage("The Election has not started yet.");
    //                 setElectionTime("0");
    //             }
    //         }
    //     }

    //     async function fetchElectionStatus() {
    //         if (contractReader) {
    //             try {
    //                 const status = await contractReader.getElection_status();
    //                 setElectionStatus(status ? "Ongoing" : "Ended");
    //             } catch (error) {
    //                 console.error("Error fetching election status:", error);
    //                 setErrorMessage("Error fetching election status. Please try again later.");
    //             }
    //         }
    //     }

    //     fetchElectionStatus();
    //     fetchElectionTime();
    //     fetchCandidates();
    //     fetchTAC();
    // }, [contractReader]);

    // Update election time with local variable
    // useEffect(() => {
    //     // if(electionTime != null) {
    //         var electionTime_ = electionTime;

    //         const updateTime = setInterval(() => {
    //             electionTime_--;
    //             if(electionTime_ >= 0) 
    //                 {
    //                     var seconds = electionTime_;
    //                     var days = Math.floor(seconds / (24 * 3600));
    //                     seconds %= (24 * 3600);
    //                     var hours = Math.floor(seconds / 3600);
    //                     seconds %= 3600;
    //                     var minutes = Math.floor(seconds / 60);
    //                     seconds %= 60;

    //                     setShowDays(days);
    //                     setShowHours(hours);
    //                     setShowMins(minutes);
    //                     setShowSecs(seconds);
    //                 }
    //         }, 1000);

    //         if(electionTime === 0) setElectionStatus("Ended");
    //         return () => clearInterval(updateTime);
    //     // }
    // }, [electionTime]);

    // Function to handle contract deployment
    // const deployContract = async () => {
    //     try {
    //         // Connect to the Ethereum network via a provider (e.g., MetaMask)
    //         const provider = new ethers.BrowserProvider(window.ethereum);
    //         const signer = await provider.getSigner();

    //         // Get the contract factory using the contract's ABI and bytecode
    //         const DVS_v1 = new ethers.ContractFactory(
    //             contract_abi,
    //             contract_bytecode, 
    //             signer
    //         );

    //         // Deploy the contract (no need to use deployed() in ethers.js v6.x)
    //         const contractDeploy = await DVS_v1.deploy();

    //         // Wait for the transaction to be mined
    //         await contractDeploy.waitForDeployment();

    //         // Set the deployed contract address to state
    //         const address = contractDeploy.target;
    //         setDeployedAddress(address);
    //         sessionStorage.setItem('deployedAddress', address);
        
    //     console.log("Contract deployed to address:", address);
    //     } catch (error) {
    //         console.error("Error deploying contract:", error);
    //         }
    // };

    // async function fetchElectionTime() {
    //   if (contractReader) {
    //       try {
    //           const timeRemaining = await contractReader.getElection_time();
    //           setElectionTime(timeRemaining.toString());
    //       } catch (error) {
    //           console.error("Error fetching election time:", error);
    //           setErrorMessage("The Election has not started yet.");
    //           setElectionTime("0");
    //       }
    //   }
    // }

//   async function fetchElectionStatus() {
//       if (contractReader) {
//           try {
//               const status = await contractReader.getElection_status();
//               setElectionStatus(status ? "Ongoing" : "Ended");
//           } catch (error) {
//               console.error("Error fetching election status:", error);
//               setErrorMessage("Error fetching election status. Please try again later.");
//           }
//       }
//   }

    // const handleAddCandidate = async () => {
    //     if (contractWriter) {
    //         try {
    //             setLoading(true);
    //             const id = parseInt(candidateId, 10);
    //             if (isNaN(id)) {
    //                 setErrorMessage("Invalid candidate ID. Please enter a valid number.");
    //                 setLoading(false);
    //                 return;
    //             }
    //             const tx = await contractWriter.addCandidate(candidateName, id);
    //             await tx.wait(); 
    //             console.log("Candidate added successfully");
    //             setSuccessMessage("Candidate added successfully!");
    //             const updatedCandidates = await contractReader.getCandidates();
    //             setCandidates(updatedCandidates);
    //             setErrorMessage("");
    //         } catch (error) {
    //             console.error("Error adding candidate:", error);
    //             if(electionStatus === "Ongoing") setErrorMessage("Adding candidate is prohibited when election has started.")
    //             else setErrorMessage("Candidate already exists.");
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    // };

    // const handleRemoveCandidate = async (id) => {
    //     if (contractWriter) {
    //         try {
    //             setLoading(true);
    //             const tx = await contractWriter.removeCandidate(id);
    //             await tx.wait(); 
    //             console.log("Candidate removed successfully");
    //             setSuccessMessage("Candidate removed successfully!");
    //             const updatedCandidates = await contractReader.getCandidates();
    //             setCandidates(updatedCandidates);
    //             setErrorMessage("");
    //         } catch (error) {
    //             console.error("Error removing candidate:", error);
    //             setErrorMessage("Removing candidate is prohibited when election has started.");
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    // };

    // const handleStartElection = async () => {
    //     if (contractWriter) {
    //         try {
    //             setLoading(true);
    //             if (candidates.length < 2) {
    //                 setErrorMessage("At least 2 candidates are needed for the election to start.");
    //                 setLoading(false);
    //                 return;
    //             }
    //             const tx = await contractWriter.startElection(
    //                 parseInt(weeks) || 0,
    //                 parseInt(days) || 0,
    //                 parseInt(hours) || 0,
    //                 parseInt(minutes) || 0,
    //                 parseInt(seconds) || 0
    //             );
    //             await tx.wait();
    //             setSuccessMessage("Election started successfully!");
    //             setErrorMessage(""); // Clear the error message on success
    //             // fetchElectionTime();
    //             fetchElectionStatus();

    //         } catch (error) {
    //             console.error("Error starting election:", error);
    //             setErrorMessage("Error starting election. Please try again.");
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    // };

    // const handleResetElection = async () => {
    //     if (contractWriter) {
    //         try {
    //             setLoading(true);
    
    //             // Send the transaction and wait for it to be mined
    //             const tx = await contractWriter.resetElection();
    //             await tx.wait();  // Wait for the transaction to be mined
    
    //             console.log("Election Reset!");
    //             setSuccessMessage("Election has been reset!");
    
    //             // Fetch updated candidates after the transaction is confirmed
    //             const updatedCandidates = await contractReader.getCandidates();
    //             setCandidates(updatedCandidates);
    //             const updatedTAC = await contractReader.getTAC();
    //             setTAC_list(updatedTAC);
    //             setElectionTime("0");
    //             setElectionStatus("Ended");
    
    //             setErrorMessage("");
    //         } catch (error) {
    //             console.error("Error resetting election:", error);
    //             setErrorMessage("Error resetting election. Please try again.");
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    // };

    // const handleSetTAC = async () => {
    //     if(contractWriter) {
    //         try {
    //             setLoading(true);
    //             const tx = await contractWriter.setTAC([tac_host]);
    //             await tx.wait();
    //             console.log("TAC inserted into blockchain database!");
    //             setSuccessMessage("TAC successfully inserted into blockchain database!");
    //             const updatedTAC = await contractReader.getTAC();
    //             setTAC_list(updatedTAC);
    //             setErrorMessage("");
    //         } catch (error) {
    //             console.error("Error setting up TAC: ", error);
    //             setErrorMessage("Error setting up TAC");
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    // };

    // const handleVerifyTAC = async () => {
    //     if(contractReader) {
    //         try {
    //             setLoading(true);
    //             const tx = await contractWriter.updateTAC(tac_voter);
    //             await tx.wait();
    //             const status = await contractReader.verifyTAC();
    //             console.log("TAC verified.");
    //             setTAC_Status(status ? "TAC verified!" : "Invalid!");
    //         } catch (error) {
    //             console.error("Invalid TAC", error);
    //             setErrorMessage("Invalid TAC!");
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    // };

    // const handleVote = async (index) => {
    //     if(contractWriter) {
    //         try {
    //             setLoading(true);
    //             const tx = await contractWriter.vote(index);
    //             await tx.wait();
    //             console.log("voted successfully");
    //             setSuccessMessage("voted successfully!");
    //             const updatedCandidates = await contractReader.getCandidates();
    //             setCandidates(updatedCandidates);
    //             setErrorMessage("");
    //         } catch (error) {
    //             console.error("Error voting: ", error);
    //             setErrorMessage("You have already voted!");
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    // };

    // const handleRemoveTAC = async (tac) => {
    //     if (contractWriter) {
    //         try {
    //             setLoading(true);
    //             const tx = await contractWriter.removeTAC(tac);
    //             await tx.wait(); 
    //             console.log("TAC removed successfully");
    //             const updatedTAC = await contractReader.getTAC();
    //             setTAC_list(updatedTAC);
    //             setErrorMessage("");
    //         } catch (error) {
    //             console.error("Error removing TAC:", error);
    //             setErrorMessage("Error removing TAC. Please try again.");
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    // };

    // const handleClearTAC = async () => {
    //     if (contractWriter) {
    //         try {
    //             setLoading(true);
    //             const tx = await contractWriter.clearTAC();
    //             await tx.wait(); 
    //             console.log("TAC database cleared successfully");
    //             const updatedTAC = await contractReader.getTAC();
    //             setTAC_list(updatedTAC);
    //             setErrorMessage("");
    //         } catch (error) {
    //             console.error("Error clearing TAC database:", error);
    //             setErrorMessage("Error clearing TAC database in blockchain network.");
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    // };
    return (
        <div className='App'>
            <h2>HOST VIEW</h2>
            <HostDeploy/>
            <HostCandidate/>
            <HostTac/>
            <HostElection/>
            <h2>PUBLIC VIEW</h2>
            <Public/>
            <h2>VOTER VIEW</h2>
            <TACProvider>
                <div className="container">
                    <div className="tab-content">
                        {activeTab === 'tac-request' && <TACRequestTab />}
                    </div>
                </div>
            </TACProvider>
            <Voter/>
        </div>
    );
    // return (
    //     <div className="App">
    //         <div>
    //             <button onClick={deployContract}>Deploy Smart Contract</button>
    //             {deployedAddress && (
    //                 <div>
    //                 <p>Contract deployed to address:</p>
    //                 <p>{deployedAddress}</p>
    //                 </div>
    //             )}
    //         </div>
    //         <h1>Election DApp</h1>
    //         {contractReader && contractWriter ? (
    //             <div>
    //                 {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    //                 {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

    //                 <h2>Election Time Remaining</h2>
    //                 {electionTime !== null ? <p>{show_days} days {show_hours} hours {show_minutes} minutes {show_seconds} seconds</p> : <p>Loading...</p>}
                    
    //                 <h2>Election Status</h2>
    //                 {electionStatus !== null ? <p>{electionStatus}</p> : <p>Loading...</p>}
                    
    //                 <h2>Add Candidate</h2>
    //                 <input
    //                     type="text"
    //                     value={candidateName}
    //                     onChange={(e) => setCandidateName(e.target.value)}
    //                     placeholder="Candidate Name"
    //                 />
    //                 <input
    //                     type="text"
    //                     value={candidateId}
    //                     onChange={(e) => setCandidateId(e.target.value)}
    //                     placeholder="Candidate ID"
    //                 />
    //                 <button onClick={handleAddCandidate} disabled={loading || electionStatus === "Ongoing"}>Add Candidate</button>

    //                 <h2>Candidates List</h2>
    //                 <p>Host interface with remove button, everyone interface without</p>
    //                 {loading ? (
    //                     <p>Loading...</p>
    //                 ) : (
    //                     <table>
    //                         <thead>
    //                             <tr>
    //                                 <th>Index</th>
    //                                 <th>Name</th>
    //                                 <th>Vote Count</th>
    //                             </tr>
    //                         </thead>
    //                         <tbody>
    //                             {candidates.map((candidate, index) => (
    //                                 <tr key={candidate.id}>
    //                                     <td>{index}</td>
    //                                     <td>{candidate.name}</td>
    //                                     <td>{candidate.voteCount.toString()}</td>
    //                                     <td>
    //                                         <button onClick={() => handleRemoveCandidate(candidate.id)} disabled={loading || electionStatus === "Ongoing" }>Remove</button>
    //                                     </td>
    //                                 </tr>
    //                             ))}
    //                         </tbody>
    //                     </table>
    //                 )}

    //                 <h2>Start Election</h2>
    //                 <label>
    //                     Weeks:
    //                     <input type="number" value={weeks} onChange={(e) => setWeeks(e.target.value)} />
    //                 </label>
    //                 <br />
    //                 <label>
    //                     Days:
    //                     <input type="number" value={days} onChange={(e) => setDays(e.target.value)} />
    //                 </label>
    //                 <br />
    //                 <label>
    //                     Hours:
    //                     <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} />
    //                 </label>
    //                 <br />
    //                 <label>
    //                     Minutes:
    //                     <input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
    //                 </label>
    //                 <br />
    //                 <label>
    //                     Seconds:
    //                     <input type="number" value={seconds} onChange={(e) => setSeconds(e.target.value)} />
    //                 </label>
    //                 <br />
    //                 { electionStatus === "Ended" ? ( 
    //                     <button onClick={handleStartElection} disabled={loading}>Start Election</button>
    //                 ) : (
    //                     <button onClick={handleResetElection} disabled={loading}>Reset Election</button>
    //                 )}

    //                 <TACProvider>
    //                     <div className="container">
    //                         <div className="tab-content">
    //                             {activeTab === 'tac-request' && <TACRequestTab />}
    //                         </div>
    //                     </div>
    //                 </TACProvider>

    //                 <h2>TAC setup (Host)</h2>
                        // <div>
                        //     <button onClick={handleSetTAC} disabled={loading}>Setup TAC</button>
                        //     <input type="number" value={tac_host} onChange={(e) => setTAC_host(e.target.value)} />
                        // </div>
    //                 <h2>TAC verification (Voters)</h2>
    //                     <div>
    //                         <button onClick={handleVerifyTAC} disabled={loading}>Verify TAC</button>
    //                         <input type="number" value={tac_voter} onChange={(e) => setTAC_voter(e.target.value)} />
    //                         {electionTime !== null ? <p>{tacStatus}</p> : <p>Loading...</p>}
    //                     </div>

    //                 <h2>TAC List (Host)</h2>
    //                 <button onClick={() => handleClearTAC()} disabled={loading}>Clear TAC</button>
    //                 {loading ? (
    //                     <p>Loading...</p>
    //                 ) : (
                        // <table>
                        //     <thead>
                        //         <tr>
                        //             <th>List</th>
                        //         </tr>
                        //     </thead>
                        //     <tbody>
                        //         {tacList.map((tacList, index) => (
                        //             <tr key={index}>
                        //                 <td>{tacList.toString()}</td>
                        //                 <td>
                        //                     <button onClick={() => handleRemoveTAC(tacList.toString())} disabled={loading}>Remove</button>
                        //                 </td>
                        //             </tr>
                        //         ))}
                        //     </tbody>
                        // </table>
    //                 )}

    //                 <h2>Candidates List (Voter)</h2>
    //                 {electionStatus === "Ended" ? (
    //                     <p>Waiting for election to start...</p>
    //                 ) : (
    //                     <table>
    //                         <thead>
    //                             <tr>
    //                                 <th>Index</th>
    //                                 <th>Name</th>
    //                             </tr>
    //                         </thead>
    //                         <tbody>
    //                             {candidates.map((candidate, index) => (
    //                                 <tr key={candidate.id}>
    //                                     <td>{index}</td>
    //                                     <td>{candidate.name}</td>
    //                                     <td>
    //                                         <button onClick={() => handleVote((index+1).toString())} disabled={loading}>Vote</button>
    //                                     </td>
    //                                 </tr>
    //                             ))}
    //                         </tbody>
    //                     </table>
    //                 )}
    //             </div>
    //         ) : (
    //             <p>Loading contract...</p>
    //         )}
    //     </div>
    // );
}

export default App;