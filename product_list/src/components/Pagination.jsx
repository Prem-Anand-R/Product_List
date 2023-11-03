
import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.div`
 cursor: pointer;
 display:flex;
`;

const Pagination = ({ total, currentPage, setCurrentPage }) => {
    const totalpage = total / 20;
    return (
        
            <ul class="pagination justify-content-center mt-4">
                <PageNumber>
                    <li class="page-item " onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage <= 1}>
                        <a class="page-link">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link">{currentPage}</a></li>
                    <li class="page-item" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage >= totalpage}>
                        <a class="page-link " >Next</a>
                    </li>
                </PageNumber>

            </ul>

    );
};

export default Pagination;

