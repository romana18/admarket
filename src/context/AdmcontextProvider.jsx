import React, { useEffect, useState } from 'react';
import Admcontext from './admcontext';
import { profilelist, userslist } from '../../lib/pocketbase';

function AdmcontextProvider({ children }) {
    const [prodname, setProdname] = useState("blank");
    const [prodprice, setProdprice] = useState("");
    const [prodslife, setProdslife] = useState("");
    const [dairyname, setDairyname] = useState("");
    const [FSSAI, setFSSAI] = useState("");
    const [prodquant, setProdquant] = useState("");
    const [prodlocation, setProdlocation] = useState("");
    const [prodcreated, setProdcreated] = useState("");
    const [specific, setSpecific] = useState(null);
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const [selectedLocation, setSelectedLocation] = useState("");

    useEffect(() => {
        try {
            profilelist().then(res => setPosts(res));
        } catch {
            console.log("error");
        }
    }, []);

    useEffect(() => {
        try {
            userslist().then(res => setUser(res));
        } catch {
            console.log("err");
        }
    }, []);

    return (
        <Admcontext.Provider value={{
            specific, setSpecific, posts, user, prodname, prodlocation, prodprice,
            prodslife, dairyname, setProdname, FSSAI, setProdprice, setProdslife, setDairyname,
            prodquant, setFSSAI, setProdquant, setProdlocation, prodcreated, setProdcreated,
            selectedLocation, setSelectedLocation
        }}>
            {children}
        </Admcontext.Provider>
    );
}

export default AdmcontextProvider;
