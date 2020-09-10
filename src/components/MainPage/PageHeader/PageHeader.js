import React from 'react';
import {PageListHeader, PageHeaderElement, PageHeaderElementID} from "../../Styled Components/styled-components";


const PageHeader = () => {

    return (
            <PageListHeader>
                <PageHeaderElementID>id</PageHeaderElementID>
                <PageHeaderElement>pokemon</PageHeaderElement>
                <PageHeaderElement>nazwa</PageHeaderElement>
                <PageHeaderElement>min. lvl</PageHeaderElement>
                <PageHeaderElement>typ</PageHeaderElement>
                <PageHeaderElement>evolucja</PageHeaderElement>
            </PageListHeader>
    )
}

export {PageHeader};