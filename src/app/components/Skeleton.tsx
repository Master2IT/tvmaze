import {Avatar, List, Skeleton} from "antd";

const SkeletonLoading = () => {
    return (
        <>
            <List
                itemLayout="vertical"
                size="large"
                className="bg-white"
                dataSource={Array.from({length: 5}).map((_, index) => index)}
                renderItem={() => (
                    <List.Item>
                        <Skeleton loading={true} active avatar>
                            <List.Item.Meta
                                avatar={<Avatar src="" />}
                                title="" description=""/>
                        </Skeleton>
                    </List.Item>
                )}
            />
        </>
    )
}

export default SkeletonLoading