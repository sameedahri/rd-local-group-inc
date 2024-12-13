"use client";
import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.css";
import 'datatables.net-responsive-dt/css/responsive.dataTables.css';
import "datatables.net";
import 'datatables.net-responsive';
import {useRef, useEffect} from "react";
import {useRouter} from "next/navigation";


interface RestaurantOwnersTableProps {
    // eslint-disable-next-line
    data: any[] | undefined,
    columns: {title: string, data: string}[]
}

const RestaurantOwnersTable: React.FC<RestaurantOwnersTableProps> = ({data, columns}) => {
    const router = useRouter();

    const tableRef = useRef<HTMLTableElement>(null);

    useEffect(() => {
        if(tableRef.current) {
            const table = $(tableRef.current).DataTable({
                data: data,
                columns: columns,
                columnDefs: [
                    {targets: "_all", className: "all-columns"},
                    {targets: 0, visible: false},
                    {targets: 1, className: "first-column"},
                    {targets: [1, 2, 3, 4], className: "prominent-column"},
                    {targets: [5, 6, 7], className: "sec-column"},
                    {targets: 8, className: "nested-column"}
                    // {
                    //     targets: 8,
                    //     orderable: false,
                    //     searchable: false,
                    //     render: () => {
                    //         return `<button class="proof-btn w-[100px] h-[45px] rounded-[22px] border border-[#EBC0B4] bg-[rgba(235,192,180,0.21)] text-[#AB877E] font-gilroyRegular text-[12px]">Upload Proof</button>`
                    //     }
                    // },
                ],
                scrollX: true,
                scrollY: "500px",
                destroy: true,
                searching: false,
                lengthChange: false
            });
            
            // cleanup
            return () => {
                table.destroy();
            }
        }
    }, [data, columns])

    useEffect(() => {
        document.querySelectorAll('.proof-btn')?.forEach(btn => {
            btn.addEventListener('click', function() {
                router.push('/admin/submit-proof');
            })
        });
    }, [router])

    return ( 
        <div className="dataTable-wrapper">
            <table ref={tableRef} className="dataTable-classes" style={{minWidth: '1500px'}}></table>
        </div>
    )
}

export default RestaurantOwnersTable