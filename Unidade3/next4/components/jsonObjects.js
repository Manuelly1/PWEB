import { useEffect, useState } from "react";
import axios from "axios";

export default function JsonObjects () {
  const [jsonObjects, setJsonObjects] = useState(null);

    useEffect(() => {
        const fetchJsonObjects = async () => {
            try {
                const response = await axios.get('https://extreme-ip-lookup.com/json');
                setJsonObjects(response.data);
            } catch (error) {
                console.error('Error fetching IP information:', error);
            }
        };

    fetchJsonObjects();
    }, []);

    return (
        <div>
            {jsonObjects && (
                <div>
                <p>IP: {jsonObjects.query}</p>
                <p>País: {jsonObjects.country}</p>
                <p>Cidade: {jsonObjects.city}</p>
                <p>Continente: {jsonObjects.continent}</p>
                <p>Latitude: {jsonObjects.lat}</p>
                <p>Longitude: {jsonObjects.lon}</p>
                </div>
            )}
        </div>
      );      
};

