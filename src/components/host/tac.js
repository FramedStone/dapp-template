import { useState, useEffect } from 'react';
import { contract_reader, contract_writer } from '../initial_setup/load_contract';

function HostTac() {
    const [tac, set_tac_host] = useState([]);
    const [tac_list, set_tac_list] = useState([]);

    useEffect(() => {
        async function fetch_tac() {
            try {
                const tac_list = await contract_reader.getTAC();
                set_tac_list(tac_list);
            } catch (error) {
                console.error("Error fetching TAC from blockchain database", error);
            } 
        }
        fetch_tac();
    }, []);

    const set_tac = async () => {
        try {
            const tx = await contract_writer.setTAC([tac]);
            await tx.wait();
            console.log("TAC added into blockchain database.");

            const updated_tac_list = await contract_reader.getTAC();
            set_tac_list(updated_tac_list);
        } catch (error) {
            console.error("Error setting up TAC: ", error);
        }
    };

    const remove_tac = async (tac) => {
        try {
            const tx = await contract_writer.removeTAC(tac);
            await tx.wait(); 

            console.log("TAC removed successfully");

            const updated_tac_list = await contract_reader.getTAC();
            set_tac_list(updated_tac_list);
        } catch (error) {
            console.error("Error removing TAC:", error);
        }
    };

    const clear_tac = async () => {
        try {
            const tx = await contract_writer.clearTAC();
            await tx.wait(); 

            console.log("TAC database cleared successfully");

            const updated_tac_list = await contract_reader.getTAC();
            set_tac_list(updated_tac_list);
        } catch (error) {
            console.error("Error clearing TAC database:", error);
        }
    };

    return(
        <div>
            <div>
                <button onClick={set_tac}>Setup TAC</button>
                <input type="number" value={tac} onChange={(e) => set_tac_host(e.target.value)} />
            </div>
            <button onClick={() => clear_tac()}>Clear TAC</button>
            <table>
                <thead>
                    <tr>
                        <th>List</th>
                    </tr>
                </thead>
                <tbody>
                    {tac_list.map((tac_list, index) => (
                        <tr key={index}>
                            <td>{tac_list.toString()}</td>
                            <td>
                                <button onClick={() => remove_tac(tac_list.toString())}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default HostTac;