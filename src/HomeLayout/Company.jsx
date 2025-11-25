import React from 'react';
import { Link } from 'react-router';

const Company = ({company}) => {
    const {id,logo}=company;
    // console.log(company)
    return (
        <div className=''>
            <Link to={`/companyDetails/${id}`}><img className='w-[230px] h-[230px] border p-4 rounded-full' src={logo} alt="" /></Link>
        </div>
    );
};

export default Company;