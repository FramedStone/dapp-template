import { useEffect, useState } from 'react';
import { contract_reader } from '../initial_setup/load_contract';

function Public() {

    const [show_days, set_show_days] = useState(null);
    const [show_hours, set_show_hours] = useState(null);
    const [show_minutes, set_show_minutes] = useState(null);
    const [show_seconds, set_show_seconds] = useState(null);

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

        async function fetch_election_time() {
            try {
                const election_time = await contract_reader.getElection_time();
                localStorage.setItem('election_time', election_time.toString());
            } catch (error) {
                console.error("Error fetching election time:", error);
            }
        }

        async function fetch_election_status() {
            try {
                const election_status = await contract_reader.getElection_status();
                localStorage.setItem('election_status', election_status ? "Ongoing" : "Ended");
            } catch (error) {
                console.error("Error fetching election status:", error);
            }
        }

        fetch_election_status();
        fetch_election_time();
        fetch_candidates();
    }, []);

    // Update election time with local variable
    useEffect(() => {
        var electionTime_ = localStorage.getItem('election_time');

        const update_election_time = setInterval(() => {
            electionTime_--;
            if(electionTime_ >= 0) 
                {
                    var seconds = electionTime_;
                    var days = Math.floor(seconds / (24 * 3600));
                    seconds %= (24 * 3600);
                    var hours = Math.floor(seconds / 3600);
                    seconds %= 3600;
                    var minutes = Math.floor(seconds / 60);
                    seconds %= 60;

                    set_show_days(days);
                    set_show_hours(hours);
                    set_show_minutes(minutes);
                    set_show_seconds(seconds);
                }
        }, 1000);

        if(localStorage.getItem('election_time') === "0") localStorage.setItem('election_status', "Ended");
        else localStorage.setItem('election_status', "Ongoing");
        return () => clearInterval(update_election_time);
    }, []);

    return(
        <div>
            <h4>Election time</h4>
            {parseInt(localStorage.getItem('election_time')) != null ? <p>{show_days} days {show_hours} hours {show_minutes} minutes {show_seconds} seconds</p> : <p>Waiting for election to start</p>}
            <h4>Election status</h4>
            {localStorage.getItem('election_status') != null ? <p>{localStorage.getItem('election_status')}</p> : <p>Ended</p> }
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Vote Count</th>
                    </tr>
                </thead>
                <tbody>
                    {candidate_list.map((candidate) => (
                        <tr key={candidate.id}>
                            <td>{candidate.name}</td>
                            <td>{candidate.voteCount.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Public