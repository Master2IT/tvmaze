'use client';

import {Layout} from "antd";
import {Movie} from "@/app/types/movie";
import {MovieContext} from "@/app/contexts/MovieContext";
import {useState} from "react";
import SearchMovie from "@/app/components/Movies/SearchMovie";

const {Header, Content} = Layout

export default function MovieLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    const [constraints, setConstraints] = useState<{
        search: string;
        typeList: 'card' | 'list';
    }>({
        search: '',
        typeList: 'card'
    });

    return (
        <MovieContext.Provider value={{constraints, setConstraints}}>
            <Layout className="h-screen">
                <Header className="pt-3">
                    <SearchMovie/>
                </Header>
                <Content className="px-10 py-5">
                    {children}
                </Content>
            </Layout>
        </MovieContext.Provider>
    );
}
