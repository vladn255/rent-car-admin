import { FooterWrapper, Link, LinkWrapper, Copyright } from './styles'

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <LinkWrapper>
                <Link href="/#">Главная страница</Link>
                <Link href="/#">Ссылка</Link>
            </LinkWrapper>
            <Copyright>Copyright © 2020 Simbirsoft</Copyright>
        </FooterWrapper>
    )
}

export default Footer