import React from 'react';
import Company from './Company';
const Companies = ({data=[]}) => {
    // console.log(data)
    return (
        <div className='p-20 bg-gradient-to-b from-blue-50 via-white to-blue-100'>
            <h1 className='text-center text-slate-800 font-bold text-4xl mb-10'>Available Companies</h1>
            <div className='grid grid-cols-4 gap-6'>
            {
                data.map(company=>(
                    <Company key={company.id} company={company}></Company>
                ))
            }
            </div>
        </div>
    );
};

export default Companies;