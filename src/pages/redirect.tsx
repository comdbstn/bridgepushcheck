import { useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";

export function RedirectPage() {
    useEffect(() => {
        window.location.href = "https://bridgemarketing.xyz/service";
    }, []);

    return (
        <div className='min-h-screen w-full flex items-center justify-center bg-white'>
            <div className='text-center'>
                <Spinner className='mb-4' />
                <p className='text-gray-600'>잠시만 기다려주세요...</p>
            </div>
        </div>
    );
}
