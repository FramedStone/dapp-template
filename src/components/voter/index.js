import { useState, useEffect } from "react";
import { contract_reader, contract_writer } from "../initial_setup/load_contract";

function Voter() {
    const [tac_status, set_tac_status] = useState(null);
    const [tac, set_tac] = useState(null);
    const [candidate_list, set_candidate_list] = useState([]);

    useEffect(() => {
        async function fetch_candidates() {
            try {
                const candidates_list = await contract_reader.getCandidates();
                set_candidate_list(candidates_list);
            } catch (error) {
                console.error("Error fetching candidates:", error);
            }
        }
        fetch_candidates();
    }, []);

    const verify_tac = async () => {
        try {
            const tx = await contract_writer.updateTAC(tac);
            await tx.wait();

            const tac_status = await contract_reader.verifyTAC();
            console.log("TAC verified.");

            set_tac_status(tac_status ? "TAC verified!" : "Invalid TAC!");
        } catch (error) {
            console.error("Invalid TAC", error);
        }
    };

    const vote = async (index) => {
        try {
            const tx = await contract_writer.vote(index);
            await tx.wait();

            console.log("voted successfully");
        } catch (error) {
            console.error("Error voting: ", error);
        }
    };

    return(
        <div>
            <div>
                <button onClick={verify_tac}>Verify TAC</button>
                <input type="number" value={tac} onChange={(e) => set_tac(e.target.value)} />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {candidate_list.map((candidate, index) => (
                        <tr key={candidate.id}>
                            <td>{index}</td>
                            <td>{candidate.name}</td>
                            <td>
                                <button onClick={() => vote((index).toString())}>Vote</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Voter;