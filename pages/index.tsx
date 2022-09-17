import React from "react";
import { FC } from "react";

import Layout from "@layout/Layout";
import Sample from "@pages/sample";
import Link from "next/link";

const App: FC = () => {
    return (
        <Layout>
            <Link href="/sample">샘플바로가기</Link><br/>
            <Link href="/user/login">로그인 바로가기</Link>
        </Layout>
    )
}

export default App;