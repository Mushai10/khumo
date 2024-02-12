import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import Breadcrumb from '../components/Breadcrumb';
import Faq from '../components/FAQ';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function FAQPage({ headerItems, faqItems, footerItems }) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="FAQ"
                item="Home"
                itemPath="/"
                activeItem="FAQ"
            />
            <Faq
                faqItems={faqItems}
                title="Frequently Question"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat sagittis"
            />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export async function getStaticProps() {
    const headerItems = await getAllItems('header');
    const faqItems = await getAllItems('faq');
    const footerItems = await getAllItems('footer');

    return {
        props: {
            headerItems,
            faqItems,
            footerItems,
        },
    };
}

FAQPage.propTypes = {
    headerItems: PropTypes.instanceOf(Array).isRequired,
    faqItems: PropTypes.instanceOf(Array).isRequired,
    footerItems: PropTypes.instanceOf(Array).isRequired,
};

export default FAQPage;
