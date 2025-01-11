"use client"
import { XIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

const SearchFormReset = () => {
    const router = useRouter();
    
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;
        if (form) {
            form.reset();
            router.push('/'); // Navigate to home page
        }
    }
    
    return (
        <button 
            type='button' 
            onClick={reset} 
            className='search-btn text-white'
        >
            <XIcon className='size-5' />
        </button>
    )
}

export default SearchFormReset