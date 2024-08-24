import {Pagination, Table} from "antd";
import Image from "next/image";
import {Movie} from "@/app/types/movie";
import {useState} from "react";

const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'image',
        dataIndex: 'image',
        key: 'image',
        render: (image) => <Image width={100} height={100} alt="movie" src={image.medium || ""}/>
    },
    {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'genres',
        dataIndex: 'genres',
        key: 'genres',
        render: (genres) => genres.join(', ')
    },
    {
        title: 'premiered',
        dataIndex: 'premiered',
        key: 'premiered'
    },
    {
        title: 'ended',
        dataIndex: 'ended',
        key: 'ended'
    },
    {
        title: 'summary',
        dataIndex: 'summary',
        key: 'summary',
        render: (summary) => summary ?
            <div dangerouslySetInnerHTML={{__html: summary.slice(0, 50) + '...'}}></div> : '-'
    },
    {
        title: 'rating',
        dataIndex: 'rating',
        key: 'rating',
        render: (rating) => rating.average || 0
    },

];

const MovieTable = ({movies}: { movies: Movie[] }) => {
    const [page, setPage] = useState(1);
    return (
        <>
            <Table dataSource={movies} columns={columns} pagination={false} footer={() => (
                <div className="flex justify-end">
                    <Pagination defaultCurrent={page} total={movies.length}/>
                </div>
            )}/>
        </>
    )
}

export default MovieTable;