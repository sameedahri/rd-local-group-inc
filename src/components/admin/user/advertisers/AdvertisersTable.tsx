"use client";
import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.css";
import 'datatables.net-responsive-dt/css/responsive.dataTables.css';
import "datatables.net";
import 'datatables.net-responsive';
import {useRef, useEffect} from "react";
import {useRouter} from "next/navigation";


interface AdvertisersTableProps {
    // eslint-disable-next-line
    data: any[] | undefined,
    columns: {title: string, data: string}[]
}

const AdvertisersTable: React.FC<AdvertisersTableProps> = ({data, columns}) => {
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
                    {targets: [1, 2, 3, 4, 5], className: "prominent-column"},
                    {targets: [6, 7, 8, 9, 10, 11], className: "sec-column"},
                    {targets: [12, 13, 14], className: "nested-column"}
                ],
                scrollX: true,
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
            <table ref={tableRef} className="dataTable-classes" style={{minWidth: '2000px'}}></table>
        </div>
    )
}

export default AdvertisersTable