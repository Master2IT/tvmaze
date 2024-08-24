import {useContext} from "react";
import {MovieContext} from "@/app/contexts/MovieContext";
import {Form, Input, Segmented} from "antd";
import {AppstoreOutlined, BarsOutlined} from "@ant-design/icons";

const SearchMovie = () => {
    const {constraints, setConstraints} = useContext(MovieContext)!;

    return (
        <Form className="flex gap-2 items-center">
            <Segmented
                value={constraints.typeList}
                onChange={ex => setConstraints({...constraints, typeList: ex})}
                options={[
                    {value: 'list', icon: <BarsOutlined/>},
                    {value: 'card', icon: <AppstoreOutlined/>}
                ]}
            />
            <Input.Search
                autoFocus
                onSearch={(searchText) => {
                    setConstraints((prev) => ({...prev, search: searchText}));
                }} size="large" placeholder="Search Series"/>
        </Form>
    )
}

export default SearchMovie;