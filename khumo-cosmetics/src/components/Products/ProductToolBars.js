import PropTypes from 'prop-types';
import { IoChevronDownSharp } from 'react-icons/io5';

function ProductToolBars({
    totalProductNumber,
    startItemNumber,
    endItemNumber,
    tabState,
    productTab,
    gridTabItems,
}) {
    return (
        <div className="product-toolbar grid grid-cols-12 pb-[25px]">
            <div className="md:col-span-6 sm:col-span-8 col-span-12">
                <div className="left-side flex max-xs:flex-col items-center">
                    <div className="result-count lm:border-black lm:border-r inline-block leading-[12px] lm:pr-[17px]">
                        <p className="max-xs:mb-[10px]">
                            Showing {startItemNumber}-{endItemNumber} of{' '}
                            {totalProductNumber}
                        </p>
                    </div>
                    <ul className="sort-item sm:pl-[17px]">
                        <li className="relative group">
                            <span className="flex items-center cursor-pointer">
                                Sort by:
                                <span className="mx-[5px]">Default</span>
                                <IoChevronDownSharp />
                            </span>
                            <ul className="sort-subitems bg-white border border-[#dddddd] absolute top-[calc(100%+30px)] sm:left-0 max-xs:left-1/2 max-xs:-translate-x-1/2 w-[210px] p-[10px] transition-all invisible opacity-0 group-hover:top-full group-hover:visible group-hover:opacity-100 z-[9]">
                                <li>
                                    <button
                                        type="button"
                                        className="text-[#777777] text-[15px] leading-[24px] transition-all hover:text-[#222222] py-[5px] px-[10px] rounded-[4px]"
                                    >
                                        Default sorting
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="text-[#777777] text-[15px] leading-[24px] transition-all hover:text-[#222222] py-[5px] px-[10px] rounded-[4px]"
                                    >
                                        Sort by popularity
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="text-[#777777] text-[15px] leading-[24px] transition-all hover:text-[#222222] py-[5px] px-[10px] rounded-[4px]"
                                    >
                                        Sort by latest
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="text-[#777777] text-[15px] leading-[24px] transition-all hover:text-[#222222] py-[5px] px-[10px] rounded-[4px]"
                                    >
                                        Sort by price: low to high
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="text-[#777777] text-[15px] leading-[24px] transition-all hover:text-[#222222] py-[5px] px-[10px] rounded-[4px]"
                                    >
                                        Sort by price: high to low
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="md:col-span-6 sm:col-span-4 col-span-12">
                <div className="right-side flex items-center sm:justify-end justify-center pt-[25px] sm:pt-0">
                    <ul className="flex">
                        {gridTabItems[0]?.gridTabList?.map(
                            (singleGridTabList) => (
                                <li
                                    key={singleGridTabList.id}
                                    className={`${
                                        tabState ===
                                        singleGridTabList.tabStateNo
                                            ? `${singleGridTabList.gridColumns} active opacity-100`
                                            : `${singleGridTabList.gridColumns}`
                                    } item opacity-50 cursor-pointer transition-all hover:opacity-100 pr-[17px] last:px-0`}
                                    onClick={() =>
                                        productTab(singleGridTabList.tabStateNo)
                                    }
                                >
                                    <img
                                        src={singleGridTabList.gridColumnImg}
                                        alt={singleGridTabList.gridImgAlt}
                                    />
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

ProductToolBars.propTypes = {
    totalProductNumber: PropTypes.number.isRequired,
    startItemNumber: PropTypes.number.isRequired,
    endItemNumber: PropTypes.number.isRequired,
    tabState: PropTypes.number.isRequired,
    productTab: PropTypes.func.isRequired,
    gridTabItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProductToolBars;
