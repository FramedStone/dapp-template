import { useState, useEffect } from 'react';
import { contract_writer, contract_reader } from '../initial_setup/load_contract';

function HostCandidate() {
    const [candidate_name, set_candidate_name] = useState(null);
    const [candidate_id, set_candidate_id] = useState(null);

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

    async function fetch_candidates() {
        try {
            const candidates_list = await contract_reader.getCandidates();
            set_candidate_list(candidates_list);
        } catch (error) {
            console.error("Error fetching candidates:", error);
        }
    }

    const add_candidate = async () => {
        try {
            const id = parseInt(candidate_id, 10);
            if (isNaN(id)) {
                console.log("Invalid candidate ID. Please enter a valid number.");
                return;
            }
            const tx = await contract_writer.addCandidate(candidate_name, id);
            await tx.wait(); 

            console.log("Candidate added successfully");

            fetch_candidates();
        } catch (error) {
            console.error("Error adding candidate:", error);
        }
    };

    const remove_candidate = async (id) => {
        try {
            const tx = await contract_writer.removeCandidate(id);
            await tx.wait(); 

            console.log("Candidate removed successfully");

            fetch_candidates();
        } catch (error) {
            console.error("Error removing candidate:", error);
        }
    };

    return(
        <div>
            <h2>Add Candidate</h2>
            <input
            type="text"
            value={candidate_name}
            onChange={(e) => set_candidate_name(e.target.value)}
            placeholder="Candidate Name"
            />
            <input
            type="text"
            value={candidate_id}
            onChange={(e) => set_candidate_id(e.target.value)}
            placeholder="Candidate ID"
            />
            <button onClick={add_candidate} disabled={localStorage.getItem('election_status') === "Ongoing"}>Add Candidate</button>

            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Vote Count</th>
                    </tr>
                </thead>
                <tbody>
                    {candidate_list.map((candidate, index) => (
                        <tr key={candidate.id}>
                            <td>{index}</td>
                            <td>{candidate.name}</td>
                            <td>{candidate.voteCount.toString()}</td>
                            <td>
                                <button onClick={() => remove_candidate(candidate.id)} disabled={localStorage.getItem('election_status') === "Ongoing" }>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default HostCandidate;