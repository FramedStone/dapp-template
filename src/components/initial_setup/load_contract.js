import { ethers } from 'ethers';
import dvs_artifact from '../../DVS/artifacts/contracts/DVS.sol/Voter.json';

function LoadContract() {}
export default LoadContract;

export const contract_reader = new ethers.Contract(localStorage.getItem('deployed_address'), dvs_artifact.abi, new ethers.BrowserProvider(window.ethereum));
export const contract_writer = new ethers.Contract(localStorage.getItem('deployed_address'), dvs_artifact.abi, await new ethers.BrowserProvider(window.ethereum).getSigner());