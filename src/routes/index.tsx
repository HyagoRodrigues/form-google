import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Test from '../page/Test/test'
import Success from '../page/Success/index'
import Dashboard from '../page/Dashboard/index'
const Rotas: React.FC = () => (
    <Routes>
        <Route  path="/" element={<Test />} />
        <Route path="/success" element={<Success />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        
    </Routes>
)

export default Rotas;