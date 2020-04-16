import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {

    const [data, setData] = useState({})
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        axios.get(`http://localhost:3000/data_wanderlink/${id}`)
            .then((response) => {
                setData(response.data)
                //console.log(response.data)

            })
    }, [data])
    return (
        <div>
            <h1>Ini Adalah Detailnya</h1>
            <h3></h3>
        </div>
    )
}
export default Detail;