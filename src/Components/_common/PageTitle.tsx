import React from 'react';
import { Helmet } from 'react-helmet-async';

type Props = {
    title: string;
};

const PageTitle: React.FC<Props> = ({ title }) => (
    <Helmet>
        <title>{title} • Instagram</title>
    </Helmet>
);
export default PageTitle;
