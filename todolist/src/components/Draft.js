import React ,{useState,useEffect} from 'react'

function Draft () {
    const [text,setText] = useState(localStorage.getItem("draftMessage")||"");
    const [cleared,setCleared] = useState(false);
    useEffect(()=>{

        // const  getsDraftMessage = localStorage.getItem("draftMessage");
        // if(text==="") setCleared(true);
        // if(getDraftMessage!=="" && text==="" && !cleared) return;
        // localStorage.etItem("draftMessage",text);

        const id= setTimeout(()=>{
            if(text!==""){
                console.log("LocalStorage change");
                localStorage.setItem("drafetMessage",text);
            }else{
                setCleared(true);
            }
        },500);
        return ()=>{
            clearTimeout(id);
        };
    },[text]);
  return (
    <main>
        <h1>Save to draft</h1>
        <input type="text"
        value={text}
        placeholder='Draft message'
        onChange={(e)=>setText(e.target.value)}/>
    </main>
  )
}

export default Draft
//local storage ->which persist the data write ending the session
//session storage->erase the data, when we are ending the session
//IndexedDB->local document based data(local forage/local data base)asynchoronous
//Cookies->stores token,user behaviourm,secrets..it stores in key:value pair(lpu.com here lpu is domain and students.lpu.com here studets is subdomain)
//to use cookies safari uses maxAge and chrome uses expires(httpOnly,secure,sameSite)
//