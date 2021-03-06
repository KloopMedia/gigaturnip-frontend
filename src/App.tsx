import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import AuthProvider from "./context/authentication/AuthProvider";
import RequireAuth from "./pages/login/RequireAuth";
import {ROUTES} from "./utils/constants/Paths";
import Campaigns from "./pages/campaigns/Campaigns";
import Login from "./pages/login/Login";
import Layout from "./components/layout/Layout";
import Chains from "./pages/chains/Chains";
import Graph from "./pages/graph/Graph";
import StageBuilder from "./pages/form-builders/stage-builder/StageBuilder";
import LogicBuilder from "./pages/form-builders/logic-builder/LogicBuilder";


const App = () => (
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RequireAuth><Layout/></RequireAuth>}>
                    <Route path={"campaign"}>
                        <Route path=":campaignId">
                            <Route path="chain">
                                <Route path=":chainId">
                                    <Route path={"createstage/:stageId"} element={<StageBuilder/>}/>
                                    <Route path={"createlogic/:stageId"} element={<LogicBuilder/>}/>
                                    <Route index element={<Graph/>}/>
                                </Route>
                                <Route index element={<Chains/>}/>
                            </Route>
                        </Route>
                        {/*<Route path="new" element={<MockComponent/>}/>*/}
                        <Route index element={<Campaigns/>}/>
                    </Route>
                    <Route index element={<Campaigns/>}/>
                </Route>
                <Route path={ROUTES.login.path} element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </AuthProvider>
);

export default App;
