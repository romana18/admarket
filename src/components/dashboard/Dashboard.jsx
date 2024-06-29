import React, { useState, useEffect } from 'react';
import { isUserValid,profilelist } from '../../../lib/pocket';
import LogIn from '../Forms/LogIn';
import { useNavigate } from 'react-router-dom';
import Cards from '../cards/Cards';
import { Pagination } from '@nextui-org/react';


function Dashboard() {
    // const history = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const itemsPerPage = 8;


    useEffect(() => {
        profilelist().then((res) => {
            setTotalItems(res.length);
        }).catch((err) => console.log(err));
    }, []);

    if (!isUserValid) {
        return <LogIn />;
    }

    return (
        <>
            <div className="mt-20 mb-20 md:m-0">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl leading-9 tracking-tight text-gray-900">
                        Dashboard 
                    </h2>
                </div>
                <Cards currentPage={currentPage} itemsPerPage={itemsPerPage} />
                <div className="flex justify-center mt-4 md:mb-10">
                    <Pagination
                        total={Math.ceil(totalItems / itemsPerPage)}
                        initialPage={currentPage}
                        onChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </div>
        </>
    );
}

export default Dashboard;
