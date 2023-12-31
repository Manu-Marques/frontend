import {useState } from 'react';

export default function Data() {
    const [data, setData] = useState<any[]>([]);

    fetch('https://backend-90lv.onrender.com/lunes')
        .then(response => response.json())
        .then(data => setData(data));

    return (
        <div className='data__container'>
            {data.map(data => (
                <div className='data__card'>
                    <h2>{data.name}</h2>
                    <p>{data.description}</p>
                    <img src={`public/images${data.image}`} />
                </div>
            ))}
        </div>
    );
}