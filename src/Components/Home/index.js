import { useState } from "react";

const Home = () => {
    const [content, setContent] = useState("");
    const [audio, setAudio] = useState("");
    const [pic, setPic] = useState("");
    const [video, setVideo] = useState("");

    const sendData = async (e) => {
        e.preventDefault();

        try {
            let result = await fetch(
                'http://localhost:5001/register', {
                method: "post",
                body: JSON.stringify({ content, audio, pic, video }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log("hi")
            result = await result.json();
            console.warn(result);
            if (result) {
                alert("Data saved succesfully");
                setContent("");
                setPic("");
                setAudio("");
                setVideo("");
            }
        }
        catch (s) {
            console.log(s)
        }

    }
    return (<div className="main-container">
        <div className="app-container">
            <form id="addUserForm" className="form">
                <h3 className="textHead">Enter Blog Details</h3>
                <p className='left'>Blog Content</p>
                <textarea className="" size='70' onChange={e => setContent(e.target.value)} />

                <p className='left'>Audio File</p>
                <input type="file" className="input" onChange={e => setAudio(e.target.value)} />

                <p className='left'>Blog Logo</p>
                <input type="file" className="input" onChange={e => setPic(e.target.value)} />

                <p className='left'>Video File</p>
                <input type="file" className="input" accept="video/*" onChange={e => setVideo(e.target.value)} />

                <div className="button-container">
                    <button type='submit' className="button" onClick={sendData} >submit</button>
                </div>

            </form>

        </div>
    </div>)
}
export default Home;