import { Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

interface BreadcrumbItem {
    label: string;
    path?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

const BreadcrumbComponent: React.FC<BreadcrumbProps> = ({ items }) => {
    const history = useHistory()

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index: number, href: string) => {
        setActiveIndex(index);
        history.push(href)
    };



    return (
        <Breadcrumbs separator="›">
            {items.map((item: any, index) =>
                index === items.length - 1
                    ? <Typography
                        sx={{
                            color: "rgb(17, 24, 28)",
                            lineHeight: "1.35714",
                            fontSize: '14px',
                            fontWeight: 500,
                            display: 'inline-block',
                        }}
                        key={index}>{item.label}</Typography>
                    : (
                        <Link
                            key={index}
                            color={index === activeIndex ? 'primary' : 'inherit'}
                            onClick={() => handleClick(index, item.path)}
                            underline="none"
                            sx={{
                                color: "rgb(104, 112, 118)",
                                lineHeight: "1.35714",
                                fontSize: '14px',
                                fontWeight: 500,
                                display: 'inline-block',
                                cursor: 'pointer'
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
        </Breadcrumbs>
    );
};

export default BreadcrumbComponent;