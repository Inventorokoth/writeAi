// hook for the fetching from the openAi api

import { useState } from "react"

const useApiFetch = () => {

    const [error, setError] = useState();
    const [ApiResponse, setApiResponse] = useState();

    const ApiFetch = async ({ body }) => {

        try {
            const response = await fetch(ApiUrl, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
                },
                body: JSON.stringify(body)

            })

            const data = await response.json()
            setApiResponse(data.choices[0].text)
        } catch (err) {
            setError(err);
            console.log(error)//just for debuging, remove it afterwards
        }
    };
    return [ ApiResponse,ApiFetch]
}

export default useApiFetch;