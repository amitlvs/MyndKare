import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes";
import Layout from "../layouts";

function Wrapper() {
    return (
        <>
            <BrowserRouter basename="/MyndKare">
                <Routes>
                    {
                        routes.map(({ path, Component }) => (
                            <Route
                                key={path}
                                path={path}
                                element={
                                    <React.Suspense fallback>
                                        <Layout>
                                            <Component />
                                        </Layout>
                                    </React.Suspense>
                                }
                            />
                        ))
                    }
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Wrapper;