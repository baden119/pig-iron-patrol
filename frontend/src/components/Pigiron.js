import React, {useEffect, useState} from 'react';
import axios from 'axios';


function Pigiron() {

    const [pigs, setPigs] = useState(["pigs"]);

    useEffect(() => {
        refreshPigs();
        // eslint-disable-next-line
      }, []);



   const refreshPigs = async () => {
        try{
            const res = await axios.get('/api/pigiron/');
            setPigs(res.data);
        }catch(e) {
            console.error(e);
        }
    };
 

    return (
        <div className='container'>
            <h3>A strange quickening in the swamp mists:</h3>
            <h1>Confusion has it's cost</h1>

        <table className="table table-striped">
            <thead>
                <tr>
                <th>Name</th>
                <th>Reputation</th>
                </tr>
            </thead>
            <tbody>
                {pigs.map((pig) => (
                <tr key={pig.id}>
                    <td>{pig.name}</td>
                    <td>{pig.reputation}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default Pigiron