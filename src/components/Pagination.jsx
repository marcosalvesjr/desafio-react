import './Pagination.css'

const Pagination = ({ prevPage, setPageNumber }) => {
    const handleNext = () => {
        if (prevPage <= 41)
            setPageNumber(prevPage + 1);
        //console.log(prevPage)
    }
    const handlePrev = () => {
        if (prevPage > 1) {
            return setPageNumber(prevPage - 1)

        };
        //console.log(prevPage);
    }
    return (
        <div className='pagination-container'>
            <button className='btn-pagination' onClick={handlePrev}>Prev</button>
            <button className='btn-pagination' onClick={handleNext}>Next</button>
        </div>
    )
}

export default Pagination