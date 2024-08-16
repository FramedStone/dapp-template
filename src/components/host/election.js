import { useState } from 'react';
import { contract_writer } from '../initial_setup/load_contract';

function HostElection() {
    const [weeks, set_weeks] = useState(null);
    const [days, set_days] = useState(null);
    const [hours, set_hours] = useState(null);
    const [minutes, set_minutes] = useState(null);
    const [seconds, set_seconds] = useState(null);

    const start_election = async () => {
        try {
            const tx = await contract_writer.startElection(
                parseInt(weeks) || 0,
                parseInt(days) || 0,
                parseInt(hours) || 0,
                parseInt(minutes) || 0,
                parseInt(seconds) || 0
            );
            await tx.wait();
        } catch (error) {
            console.error("Error starting election:", error);
        } 
    };

    const reset_election = async () => {
        try {
            const tx = await contract_writer.resetElection();
            await tx.wait(); 

            console.log("Election has been reset successfully.");
            localStorage.setItem('election_time', null)
            localStorage.setItem('election_status', "Ended");
        } catch (error) {
            console.error("Error resetting election:", error);
        }
    };

    return(
        <div>
            <h4>Start Election</h4>
            <label>
                Weeks:
                <input type="number" value={weeks} onChange={(e) => set_weeks(e.target.value)} />
            </label>
            <br />
            <label>
                Days:
                <input type="number" value={days} onChange={(e) => set_days(e.target.value)} />
            </label>
            <br />
            <label>
                Hours:
                <input type="number" value={hours} onChange={(e) => set_hours(e.target.value)} />
            </label>
            <br />
            <label>
                Minutes:
                <input type="number" value={minutes} onChange={(e) => set_minutes(e.target.value)} />
            </label>
            <br />
            <label>
                Seconds:
                <input type="number" value={seconds} onChange={(e) => set_seconds(e.target.value)} />
            </label>
            <br />
            { localStorage.getItem('election_status') === "Ended" ? ( 
                <button onClick={start_election}>Start Election</button>
            ) : (
                <button onClick={reset_election}>Reset Election</button>
            )}
        </div>
    );
}
export default HostElection;