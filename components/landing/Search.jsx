"use client";

import useDebounce from "@/app/hooks/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const doSearch = useDebounce((term) => {
        const params = new URLSearchParams(searchParams);

        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }

        replace(`${pathname}?${params.toString()}`);
    }, 500);

    function handleSearch(term) {
        doSearch(term);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                className="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
            />
        </div>
    );
}