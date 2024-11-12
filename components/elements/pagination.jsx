import React from 'react';
import ReactPaginate from 'react-paginate';

import {ArrowRight,ArrowLeft} from '../elements/icon';

const Pagination = ({pageCount,handlePaginate,currentPage}) => {
    return(
        <ReactPaginate
            forcePage={currentPage}
            previousLabel={<ArrowLeft />}
            nextLabel={<ArrowRight />}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePaginate}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}/>  
    )
}

export default Pagination