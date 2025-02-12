interface HeaderMenuData {
    id: number,
    label: string;
    path?: string;
}

export const headerMenuItems: HeaderMenuData[] = [
    { id: 1, label: "Pricing", path: "/pricing" },
    { id: 2, label: "About", path: "/about" },
    { id: 3, label: "Contact", path: "/contact" },
];

interface FooterMenuData {
    id: number,
    label: string;
    path?: string;
}

export const footerMenuItems: FooterMenuData[] = [
    { id: 1, label: "Pricing", path: "/pricing" },
    { id: 2, label: "About", path: "/about" },
    { id: 3, label: "Contact", path: "/contact" },
];
