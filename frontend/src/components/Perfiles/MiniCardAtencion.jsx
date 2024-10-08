import { Card, CardHeader, Divider } from "@nextui-org/react"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MiniCardAtencion = () => {
    const { id } = useParams();
    const [medicamentos, setMedicamentos] = useState([]);
    const [enfermedades, setEnfermedades] = useState([]);
    const [alertas, setAlertas] = useState([]);

    useEffect(() => {
        getAnamnesis();
    }, [id]);

    const getAnamnesis = () => {
        // Verificar si todos los campos están vacíos
    axios.get(`http://localhost:3001/pacientes/${id}/ficha/anamnesis/existe-anamnesis`)
        .then(res => {
        console.log("Respuesta de existe-anamnesis:", res.data);
        if (res.data.existenDatos) { // Si los datos ya existen, actualiza
            axios.get(`http://localhost:3001/pacientes/${id}/ficha/anamnesis`)
            .then(res => {
                console.log("Respuesta de anamnesis:", res.data);
                if (res.data.length > 0) {
                const anamnesisData = res.data[0];
                
                // Parsear las cadenas JSON si es necesario
                const parseJSON = (value) => {
                    try {
                    return JSON.parse(value) || [];
                    } catch {
                    return [];
                    }
                };
                
                setMedicamentos(parseJSON(anamnesisData.medicamentos));
                setEnfermedades(parseJSON(anamnesisData.enfermedades));
                setAlertas(parseJSON(anamnesisData.alertas_medicas));
                }
            })
            .catch(err => console.log("Error fetching data:", err));
        } else { // Si los datos no existen, mensaje
            console.log("Todos los campos están vacíos, no se realizará la petición.");
            return;
        }
        })
        .catch(err => console.log("Error verifying data:", err));
    };

    return (
        <div className="max-w-[900px] grid grid-cols-1 sm:grid-cols-3 gap-4 px-3">
            <Card className="h-[150px] w-[200px]">
                <CardHeader className="flex flex-col items-start p-4 w-full">
                    <p className="text-base text-black/60 uppercase font-bold">Alertas médicas</p>
                    <Divider />
                    <div className="text-black font-medium text-large mt-2">
                        {alertas.length > 0 ? (
                            <ul className="list-disc pl-1">
                                {alertas.map((alerta, index) => (
                                    <li key={index} className="mb-1">
                                        <span className="inline-block w-4">-</span>
                                        {alerta}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            'Ninguna'
                        )}
                    </div>
                </CardHeader>
            </Card>
            <Card className="h-[150px] w-[200px]">
                <CardHeader className="flex flex-col items-start p-4 w-full">
                    <p className="text-base text-black/60 uppercase font-bold">Enfermedades</p>
                    <Divider />
                    <div className="text-black font-medium text-large mt-2">
                        {enfermedades.length > 0 ? (
                            <ul className="list-disc pl-1">
                                {enfermedades.map((enfermedad, index) => (
                                    <li key={index} className="mb-1">
                                        <span className="inline-block w-4">-</span>
                                        {enfermedad}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            'No refiere'
                        )}
                    </div>
                </CardHeader>
            </Card>
            <Card className="h-[150px] w-[200px]"> {/* col-span-12 sm:col-span-3 h-[150px] w-[200px] */}
                <CardHeader className="flex flex-col items-start p-4 w-full">
                    <p className="text-base text-black/60 uppercase font-bold">Medicamentos</p>
                    <Divider />
                    <div className="text-black font-medium text-large mt-2">
                        {medicamentos.length > 0 ? (
                            <ul className="pl-1">
                                {medicamentos.map((medicamento, index) => (
                                    <li key={index} className="mb-1">
                                        <span className="inline-block w-4">-</span>
                                        {medicamento}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            'Ninguno'
                        )}
                    </div>
                </CardHeader>
            </Card>
        </div>
    )
}

export default MiniCardAtencion
