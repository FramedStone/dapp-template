import { ethers } from 'ethers';
import dvs_artifact from '../../DVS/artifacts/contracts/DVS.sol/Voter.json';

function HostDeploy() {
    const deployContract = async () => {
        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();

            const contract = new ethers.ContractFactory(
                dvs_artifact.abi,
                dvs_artifact.bytecode, 
                signer
            );

            const contract_deploy = await contract.deploy();

            await contract_deploy.waitForDeployment();

            const address = contract_deploy.target;
            localStorage.setItem('deployed_address', address);
        
        console.log("Contract deployed to address:", address);
        } catch (error) {
            console.error("Error deploying contract:", error);
            }
    };

    return(
        <div>
            <button onClick={deployContract}>deploy contract</button>
        </div>
    );
}
export default HostDeploy;