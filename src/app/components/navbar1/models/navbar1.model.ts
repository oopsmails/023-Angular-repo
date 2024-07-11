export class NavBarModel {
    linkText!: string;
    parentLink!: string;
    menu!: boolean;
    submenu!: { childtext: string; link: string; }[];
}
