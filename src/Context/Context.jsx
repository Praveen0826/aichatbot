

import React, { createContext, useState } from 'react';
import run from '../Config/gemini.js';

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    const [error, setError] = useState("");
    // const delaypara = (index, nextword) => {

    // }


    const onSent = async (prompt) => {
        setResultData("");
        setError("");
        setLoading(true);
        setShowResult(true);

        setRecentPrompt(input);
        // setPrevPrompt(prev => [...prev, input])
        let response;
        if (prompt !== undefined) {
            response = await run(prompt);
            setRecentPrompt(prompt)
        }
        else {
            setPrevPrompt(prev => [...prev, input])
            setRecentPrompt(input)

            response = await run(input)
        }








        try {
            console.log("Sending prompt to API:", input); // Log the input prompt
            const response = await run(input);

            console.log("Received response from API:", response); // Log the response
            setResultData(response);



        } catch (err) {
            console.error("Error fetching data:", err); // Log the error
            setError("An error occurred while fetching the data");
        } finally {
            setLoading(false);
            setInput("");
        }
    };

    const newchat = () => {
        setLoading(false)
        setShowResult(false)
    }



    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        error,
        input,
        setInput,
        newchat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;

// import React, { createContext, useState } from 'react';
// import run from '../Config/gemini.js';

// export const Context = createContext();

// const ContextProvider = (props) => {
//     const [input, setInput] = useState("");
//     const [recentPrompt, setRecentPrompt] = useState("");
//     const [prevPrompt, setPrevPrompt] = useState([]);
//     const [showResult, setShowResult] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [resultData, setResultData] = useState("");
//     const [error, setError] = useState("");

//     const onSent = async () => {
//         setResultData("");
//         setError("");
//         setLoading(true);
//         setShowResult(true);
//         setRecentPrompt(input);

//         try {
//             console.log("Sending prompt to API:", input); // Log the input prompt
//             const response = await run(input);
//             console.log("Received response from API:", response); // Log the response

//             // Process response with custom formatting
//             let responseArray = response.split("**");
//             let newarray = "";

//             for (let i = 0; i < responseArray.length; i++) {
//                 if (i === 0 || i % 2 !== 1) {
//                     newarray += responseArray[i];
//                 } else {
//                     newarray += "<br />" + responseArray[i] + "<br />";
//                 }
//             }

//             setResultData(newarray);

//         } catch (err) {
//             console.error("Error fetching data:", err); // Log the error
//             setError("An error occurred while fetching the data");
//         } finally {
//             setLoading(false);
//             setInput("");
//         }
//     };

//     const contextValue = {
//         prevPrompt,
//         setPrevPrompt,
//         onSent,
//         recentPrompt,
//         setRecentPrompt,
//         showResult,
//         loading,
//         resultData,
//         error,
//         input,
//         setInput,
//     };

//     return (
//         <Context.Provider value={contextValue}>
//             {props.children}
//         </Context.Provider>
//     );
// };

// export default ContextProvider;


