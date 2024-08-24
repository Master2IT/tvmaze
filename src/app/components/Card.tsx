import {Card, Divider, Tag} from 'antd';
import Image from "next/image";
import {Movie} from "@/app/types/movie";

const {Meta} = Card;

const MovieCard = ({movie}: { movie: Movie }) => {
    const {name, genres, image, premiered, rating, ended, summary, id} = movie;
    return (
        <Card
            hoverable
            cover={<Image width={500} height={500} className="w-full" alt={name} src={image.medium}/>}
        >
            <Meta title={
                <>
                    <div className="flex justify-between items-center">
                        <h1>{name}</h1>
                        <Tag>{rating.average || 0}</Tag>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {genres.map((genre, index) => <span className="font-normal text-gray-400 text-xs"
                                                            key={index}>{genre}</span>)}
                    </div>
                </>
            } description={
                <>
                    {
                        summary ? <div dangerouslySetInnerHTML={{__html: summary.slice(0, 50) + '...'}}></div> : '-'
                    }
                    {
                        premiered || ended ? <>
                            <Divider className="my-1"/>
                            <div className="flex flex-col gap-1 pt-3">
                                {premiered && <span className="text-gray-600 text-xs">Premiered: {premiered}</span>}
                                <span className="text-gray-600 text-xs">Ended: {ended || '-'}</span>
                            </div>
                        </> : null
                    }
                </>
            }/>
        </Card>
    )
}

export default MovieCard